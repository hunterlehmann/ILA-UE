#!/usr/bin/env python3
"""Convert ILA LaTeX exercise collections to PreTeXt fragments.

This is intentionally separate from mbx_to_ptx.py, but incorporates adapted
balanced-brace, matrix (amat/mat/vec), and syseq conversion logic.

Typical usage:
  python latex_exercises_to_pretext.py exercises.tex
  python latex_exercises_to_pretext.py exercises.tex -o exercises.ptx
  python latex_exercises_to_pretext.py latex-dir -r -d ptx-exercises
  python latex_exercises_to_pretext.py exercises.tex --dry-run

The converter reports REVIEW items for ambiguous subproblem/solution pairing,
unrecognized display environments, and accessibility descriptions that must be
written by a human.
"""
from __future__ import annotations

import argparse
import html
import re
import shutil
import sys
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path

SOURCE_EXTENSIONS = {".tex", ".ltx"}
BLOCK_ENVS = {"problems", "solution", "subproblems", "align", "align*", "equation", "equation*", "gather", "gather*", "multline", "multline*", "displaymath", "center"}

@dataclass
class Report:
    counts: dict[str, int] = field(default_factory=dict)
    warnings: list[str] = field(default_factory=list)
    def add(self, key: str, n: int = 1) -> None:
        self.counts[key] = self.counts.get(key, 0) + n
    def warn(self, message: str) -> None:
        self.warnings.append(message)

# ---------- balanced parsing ----------
def matching_brace(text: str, open_pos: int) -> int:
    depth = 0
    i = open_pos
    while i < len(text):
        if text[i] == "\\":
            i += 2
            continue
        if text[i] == "{": depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0: return i
        i += 1
    return -1

def macro_calls(text: str, name: str, optional: bool = True):
    cmd = "\\" + name
    i = 0
    while True:
        s = text.find(cmd, i)
        if s < 0: return
        j = s + len(cmd)
        if j < len(text) and text[j].isalpha():
            i = s + 1; continue
        while j < len(text) and text[j].isspace(): j += 1
        opt = None
        if optional and j < len(text) and text[j] == "[":
            k = text.find("]", j + 1)
            if k < 0:
                i = s + 1; continue
            opt = text[j + 1:k].strip(); j = k + 1
            while j < len(text) and text[j].isspace(): j += 1
        if j >= len(text) or text[j] != "{":
            i = s + 1; continue
        e = matching_brace(text, j)
        if e < 0:
            i = s + 1; continue
        yield s, e + 1, text[j + 1:e], opt
        i = e + 1

def find_environment(text: str, env: str, start: int = 0):
    begin_re = re.compile(r"\\begin\s*\{" + re.escape(env) + r"\}")
    token_re = re.compile(r"\\(begin|end)\s*\{" + re.escape(env) + r"\}")
    m = begin_re.search(text, start)
    if not m: return None
    depth = 0
    for t in token_re.finditer(text, m.start()):
        depth += 1 if t.group(1) == "begin" else -1
        if depth == 0:
            return m.start(), t.end(), m.end(), t.start()
    return None

def replace_environments(text: str, env: str, fn):
    out = []
    pos = 0
    while True:
        span = find_environment(text, env, pos)
        if not span:
            out.append(text[pos:]); break
        s, e, bs, be = span
        out.append(text[pos:s]); out.append(fn(text[bs:be])); pos = e
    return "".join(out)

def split_commands(text: str, command: str) -> tuple[str, list[str]]:
    """Return preamble and bodies introduced by a top-level command."""
    pat = re.compile(r"\\" + re.escape(command) + r"(?![A-Za-z])(?:\s*\[[^\]]*\])?")
    starts = []
    depth = 0; i = 0
    while i < len(text):
        if text[i] == "%":
            nl = text.find("\n", i); i = len(text) if nl < 0 else nl + 1; continue
        if text[i] == "{": depth += 1; i += 1; continue
        if text[i] == "}": depth = max(0, depth - 1); i += 1; continue
        if depth == 0:
            m = pat.match(text, i)
            if m: starts.append((m.start(), m.end())); i = m.end(); continue
        i += 2 if text[i] == "\\" else 1
    if not starts: return text, []
    pre = text[:starts[0][0]]
    bodies = [text[e:(starts[k + 1][0] if k + 1 < len(starts) else len(text))] for k, (_, e) in enumerate(starts)]
    return pre, bodies

# ---------- math macro conversions adapted from mbx_to_ptx.py ----------
def split_semicolons(s: str) -> list[str]:
    rows=[]; buf=[]; depth=0; i=0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s):
            buf.extend(s[i:i+2]); i += 2; continue
        if s[i] == "{": depth += 1
        elif s[i] == "}": depth -= 1
        if s[i] == ";" and depth == 0:
            if "".join(buf).strip(): rows.append("".join(buf).strip())
            buf=[]
        else: buf.append(s[i])
        i += 1
    if "".join(buf).strip(): rows.append("".join(buf).strip())
    return rows

def split_entries(row: str) -> list[str]:
    vals=[]; buf=[]; depth=0; i=0
    while i < len(row):
        c=row[i]
        if c == "\\":
            buf.append(c); i += 1
            while i < len(row) and (row[i].isalpha() or row[i] == "@"): buf.append(row[i]); i += 1
            continue
        if c == "{": depth += 1
        elif c == "}": depth -= 1
        if depth == 0 and (c.isspace() or c == ","):
            token="".join(buf).strip()
            if token: vals.append(token)
            buf=[]
        else: buf.append(c)
        i += 1
    token="".join(buf).strip()
    if token: vals.append(token)
    return vals

def map_macro(text: str, name: str, converter) -> tuple[str, int]:
    calls=list(macro_calls(text, name))
    if not calls: return text, 0
    out=[]; pos=0
    for s,e,body,opt in calls:
        out += [text[pos:s], converter(body,opt)]; pos=e
    out.append(text[pos:])
    return "".join(out), len(calls)

def convert_vec(body: str, _opt=None) -> str:
    entries=split_entries(body)
    return r"\begin{pmatrix}" + " \\\\ ".join(entries) + r"\end{pmatrix}"

def convert_mat(body: str, opt=None) -> str:
    rows=[split_entries(r) for r in split_semicolons(body)]
    joined=" \\\\ ".join(r" \amp ".join(r) for r in rows)
    if opt and opt[:1] in "lc":
        n=max((len(r) for r in rows), default=1)
        return rf"\left(\begin{{array}}{{{opt[0]*n}}}{joined}\end{{array}}\right)"
    return rf"\begin{{pmatrix}}{joined}\end{{pmatrix}}"

def convert_amat(body: str, opt=None) -> str:
    rows=[split_entries(r) for r in split_semicolons(body)]
    n=max((len(r) for r in rows), default=2); letter=opt[0] if opt and opt[0] in "lcr" else "r"
    spec=letter*max(1,n-1)+"|"+letter
    joined=" \\\\ ".join(r" \amp ".join(r) for r in rows)
    return rf"\left(\begin{{array}}{{{spec}}}{joined}\end{{array}}\right)"

def convert_syseq(body: str, _opt=None) -> str:
    rows=split_semicolons(body)
    converted=[]
    for row in rows:
        row=row.replace(r"\+", r" \amp {}+{} \amp ").replace(r"\.", "{}")
        # Align the first ordinary equals sign.
        row=re.sub(r"(?<![<>=!])=(?!=)", r" \\amp {}={} \\amp ", row, count=1)
        converted.append(row)
    pairs=max(2, max((r.count(r"\amp") for r in converted), default=2)//2+1)
    return rf"\left\{{\begin{{alignedat}}{{{pairs}}}" + " \\\\ ".join(converted) + r"\end{alignedat}\right."

def convert_special_math_macros(text: str, report: Report) -> str:
    for name, fn in (("vec",convert_vec),("amat",convert_amat),("mat",convert_mat),("syseq",convert_syseq)):
        text,n=map_macro(text,name,fn)
        if n: report.add(name,n)
    return text

# ---------- LaTeX -> PreTeXt inline/block conversion ----------
def xml_text(s: str) -> str:
    # Preserve already generated PreTeXt tags and TeX commands; escape raw XML metacharacters.
    s = s.replace("&", "&amp;")
    s = re.sub(r"&(amp|lt|gt|quot|apos);", r"&\1;", s)
    return s.replace("<", "&lt;").replace(">", "&gt;")

def convert_href(text: str, report: Report) -> str:
    calls=list(macro_calls(text,"href"))
    if not calls: return text
    out=[]; pos=0
    for s,e,url,_ in calls:
        j=e
        while j < len(text) and text[j].isspace(): j += 1
        if j < len(text) and text[j] == "{":
            k=matching_brace(text,j)
            if k >= 0:
                label=text[j+1:k]
                out += [text[pos:s], f'<url href="{html.escape(url, quote=True)}">{label}</url>']
                pos=k+1; report.add("href"); continue
        out += [text[pos:s], f'<url href="{html.escape(url, quote=True)}">{html.escape(url)}</url>']
        pos=e; report.add("href")
    out.append(text[pos:]); return "".join(out)

def convert_graphics(text: str, report: Report) -> str:
    pat=re.compile(r"\\includegraphics\s*(?:\[([^\]]*)\])?\s*\{([^}]+)\}")
    def repl(m):
        report.add("image")
        source=m.group(2).strip()
        if not source.startswith("images/"): source="images/"+source
        width=""
        if m.group(1):
            wm=re.search(r"width\s*=\s*([0-9.]+)\\(?:textwidth|linewidth)",m.group(1))
            if wm: width=f' width="{float(wm.group(1))*100:g}%"'
        report.warn(f"Fill accessibility descriptions for image {source}")
        return (f'<image source="{html.escape(source, quote=True)}"{width}>\n'
                '  <shortdescription><!-- FILL: concise image description --></shortdescription>\n'
                '  <description><p><!-- FILL: complete image description --></p></description>\n'
                '</image>')
    return pat.sub(repl,text)

def split_math_rows(body: str) -> list[str]:
    rows=[]; buf=[]; depth=0; i=0
    while i < len(body):
        if body.startswith(r"\\",i) and depth == 0:
            rows.append("".join(buf).strip()); buf=[]; i += 2
            # discard optional spacing after \\ such as [4pt]
            if i < len(body) and body[i] == "[":
                k=body.find("]",i+1)
                if k >= 0: i=k+1
            continue
        c=body[i]
        if c == "{": depth += 1
        elif c == "}": depth -= 1
        buf.append(c); i += 1
    if "".join(buf).strip(): rows.append("".join(buf).strip())
    return rows

def math_body(s: str) -> str:
    return s.replace("&", r"\amp ").strip()

def convert_display_math(text: str, report: Report) -> str:
    text,n=re.subn(r"\\\[([\s\S]*?)\\\]",lambda m:f'<md><mrow>{math_body(m.group(1))}</mrow></md>',text)
    if n: report.add("display-math",n)
    for env in ("align*","align","gather*","gather","multline*","multline"):
        def repl(body, env=env):
            rows=split_math_rows(body); report.add(env)
            numbered="" if env.endswith("*") else ' number="yes"'
            return '<md'+numbered+'>\n' + "\n".join(f'  <mrow>{math_body(r)}</mrow>' for r in rows) + '\n</md>'
        text=replace_environments(text,env,repl)
    for env in ("equation*","displaymath"):
        text=replace_environments(text,env,lambda b:'<md><mrow>'+math_body(b)+'</mrow></md>')
    text=replace_environments(text,"equation",lambda b:'<md number="yes"><mrow>'+math_body(b)+'</mrow></md>')
    return text

# Trailing sentence punctuation at the end of the LAST <mrow> of an <md>.
_MD_TRAILING_PUNCT_RE = re.compile(
    r'(?:\s|\\[,;:!]|\\q?quad(?![A-Za-z])|~)*(?<!\\)([.,;:])\s*(</mrow>\s*</md>)')

def move_md_punctuation(text: str, report: Report) -> str:
    """Move closing punctuation from inside </md> to directly after it."""
    text, n = _MD_TRAILING_PUNCT_RE.subn(r'\2\1', text)
    if n: report.add("md-punctuation-moved", n)
    return text

# \newline handling: two or more in a row = paragraph break; one = removed.
_NEWLINE_CMD = r'\\newline(?![A-Za-z])'
_NEWLINE_PAR_RE    = re.compile(r'[ \t]*(?:' + _NEWLINE_CMD + r'\s*){2,}')
_NEWLINE_SINGLE_RE = re.compile(r'[ \t]*' + _NEWLINE_CMD + r'[ \t]*')

def convert_newlines(text: str, report: Report) -> str:
    text, n2 = _NEWLINE_PAR_RE.subn("\n\n", text)
    text, n1 = _NEWLINE_SINGLE_RE.subn("\n", text)
    if n2: report.add("newline-paragraph-break", n2)
    if n1: report.add("newline-removed", n1)
    return text

def convert_url_macro(text: str, report: Report) -> str:
    r"""\url{X} -> <url href="X">X</url> (so colour wrappers can be stripped)."""
    calls = list(macro_calls(text, "url", optional=False))
    if not calls: return text
    out=[]; pos=0
    for s_, e_, url, _ in calls:
        u = url.strip()
        out += [text[pos:s_], f'<url href="{html.escape(u, quote=True)}">{html.escape(u)}</url>']
        pos = e_
    out.append(text[pos:])
    report.add("url", len(calls))
    return "".join(out)

_URL_EL = r'<url\b[^>]*>[\s\S]*?</url>'
_COLOR_GROUP_URL_RE = re.compile(r'\{\s*\\color\s*\{[^}]*\}\s*(' + _URL_EL + r')\s*\}')
_TEXTCOLOR_URL_RE   = re.compile(r'\\textcolor\s*\{[^}]*\}\s*\{\s*(' + _URL_EL + r')\s*\}')
# \color{c} followed (possibly through opening braces) by a <url>
_BARE_COLOR_URL_RE  = re.compile(r'\\color\s*\{[^}]*\}\s*(?=(?:\{\s*)*<url\b)')
_BRACED_URL_RE      = re.compile(r'(?<![A-Za-z\]])\{\s*(' + _URL_EL + r')\s*\}')
_URL_PARTS_RE       = re.compile(r'(<url\b[^>]*>)([\s\S]*?)(</url>)')

def strip_url_colors(text: str, report: Report) -> str:
    r"""Remove \color / \textcolor wrapped around (or inside) a <url>."""
    n = 0
    # Peel wrappers from the inside out until nothing changes, so nested forms
    # such as {\color{blue}{<url>}} or {{\color{c}\textcolor{c}{<url>}}}
    # are fully unwrapped.
    while True:
        before = text
        for pat in (_COLOR_GROUP_URL_RE, _TEXTCOLOR_URL_RE):
            text, k = pat.subn(r'\1', text); n += k
        text, k = _BARE_COLOR_URL_RE.subn('', text); n += k
        # A brace group holding only a <url> is redundant.  Braces that are
        # a macro argument (\textbf{<url>}, \footnote[..]{<url>}) are kept.
        text = _BRACED_URL_RE.sub(r'\1', text)
        if text == before: break
    def _label(m: re.Match) -> str:
        nonlocal n
        label = m.group(2)
        new = label
        # \textcolor{c}{X} -> X
        while True:
            tm = re.search(r'\\textcolor\s*\{[^}]*\}\s*\{', new)
            if not tm: break
            close = matching_brace(new, tm.end() - 1)
            if close < 0: break
            new = new[:tm.start()] + new[tm.end():close] + new[close + 1:]
        new = re.sub(r'\\color\s*\{[^}]*\}\s*', '', new)
        st = new.strip()
        if st.startswith('{') and matching_brace(st, 0) == len(st) - 1:
            new = st[1:-1].strip()
        if new != label: n += 1
        return m.group(1) + new + m.group(3)
    text = _URL_PARTS_RE.sub(_label, text)
    if n: report.add("url-color-removed", n)
    return text

# ``...'' and ``..." -> <q>...</q>.  Math and XML tags (attribute values may
# contain ") are masked first; a quote never crosses a paragraph break.
_QUOTE_MASK_RE = re.compile(r'<m\b[^>]*>[\s\S]*?</m>|<md\b[^>]*>[\s\S]*?</md>|<[^>]+>')
_QUOTE_RE      = re.compile(r"``((?:(?!\n[ \t]*\n)[\s\S])*?)(?:''|\")")

def convert_quotes(text: str, report: Report) -> str:
    if "``" not in text: return text
    saved: list[str] = []
    def _mask(m: re.Match) -> str:
        saved.append(m.group(0)); return f"\x01{len(saved) - 1}\x01"
    masked = _QUOTE_MASK_RE.sub(_mask, text)
    masked, n = _QUOTE_RE.subn(lambda m: f"<q>{m.group(1).strip()}</q>", masked)
    if "``" in masked: report.warn("Unmatched `` quotation left unconverted")
    if n: report.add("quote", n)
    return re.sub(r'\x01(\d+)\x01', lambda m: saved[int(m.group(1))], masked)

def convert_inline_math(text: str, report: Report) -> str:
    out=[]; i=0; n=0
    while i < len(text):
        if text[i] == "\\" and i+1 < len(text): out.append(text[i:i+2]); i+=2; continue
        if text[i] != "$": out.append(text[i]); i+=1; continue
        if i+1 < len(text) and text[i+1] == "$": out.append("$$"); i+=2; continue
        j=i+1; buf=[]
        while j < len(text):
            if text[j] == "\\" and j+1 < len(text): buf.extend(text[j:j+2]); j+=2; continue
            if text[j] == "$": break
            buf.append(text[j]); j+=1
        if j >= len(text): out.append("$"); i+=1; continue
        out.append("<m>"+"".join(buf).strip()+"</m>"); n+=1; i=j+1
    if n: report.add("inline-math",n)
    return "".join(out)

def convert_content(text: str, report: Report) -> str:
    text=convert_newlines(text,report)
    text=convert_special_math_macros(text,report)
    text=convert_href(text,report)
    text=convert_url_macro(text,report)
    text=strip_url_colors(text,report)
    text=convert_graphics(text,report)
    text=replace_environments(text,"center",lambda b:b.strip())
    text=convert_display_math(text,report)
    text=move_md_punctuation(text,report)
    text=convert_inline_math(text,report)
    text=convert_quotes(text,report)
    text=re.sub(r"\\(?:noindent|medskip|smallskip|bigskip)\b", "", text)
    text=re.sub(r"[ \t]+\n", "\n", text)
    return text.strip()

# ---------- exercise structure ----------
def extract_solution_blocks(text: str) -> tuple[str,list[str]]:
    sols=[]; out=[]; pos=0
    while True:
        span=find_environment(text,"solution",pos)
        if not span: out.append(text[pos:]); break
        s,e,bs,be=span; out.append(text[pos:s]); sols.append(text[bs:be]); pos=e
    return "".join(out),sols

_MD_BLOCK_RE    = re.compile(r'<md\b[^>]*>[\s\S]*?</md>')
_IMAGE_BLOCK_RE = re.compile(r'<image\b[^>]*>[\s\S]*?</image>')
_PLACEHOLDER_RE = re.compile(r'\x00(MD|IMG)(\d+)\x00')
# An explicit LaTeX paragraph break: a blank line or a \par command.
_PAR_BREAK_RE   = re.compile(r'\n[ \t]*\n\s*|\\par(?![A-Za-z])\s*')

def _format_paragraph(para: str, mds: list[str]) -> str:
    """Build one <p>, restoring any <md> blocks it contains inline."""
    if "\x00MD" not in para:
        return f"<p>{para}</p>"
    lines: list[str] = []
    pos = 0
    for m in _PLACEHOLDER_RE.finditer(para):
        prose = para[pos:m.start()].strip()
        if prose: lines.append(prose)
        md = mds[int(m.group(2))]
        pos = m.end()
        # Punctuation moved out of the <md> stays glued to </md>
        pm = re.match(r'\s*([.,;:]+)', para[pos:])
        if pm:
            md += pm.group(1)
            pos += pm.end()
        lines.append(md)
    tail = para[pos:].strip()
    if tail: lines.append(tail)
    return "<p>\n" + indent("\n".join(lines), 2) + "\n</p>"

def blockify(text: str) -> str:
    r"""Wrap prose in <p> elements.

    * <md> display math stays INSIDE the paragraph of the surrounding prose;
      only an explicit LaTeX paragraph break (blank line, \par, or
      \newline\newline) starts a new <p>.  A display with a break on both
      sides gets its own <p>, since PreTeXt requires <md> to live in a <p>.
    * <image> is block-level in PreTeXt, so it closes the current paragraph.
    """
    text = text.strip()
    if not text: return ""
    mds: list[str] = []; imgs: list[str] = []
    def _stash(store: list[str], kind: str):
        def _r(m: re.Match) -> str:
            store.append(m.group(0))
            return f"\x00{kind}{len(store) - 1}\x00"
        return _r
    text = _MD_BLOCK_RE.sub(_stash(mds, "MD"), text)
    text = _IMAGE_BLOCK_RE.sub(_stash(imgs, "IMG"), text)
    out: list[str] = []
    for para in _PAR_BREAK_RE.split(text):
        pos = 0
        pieces: list[tuple[str, str]] = []
        for m in re.finditer(r'\x00IMG(\d+)\x00', para):
            pieces.append(("p", para[pos:m.start()]))
            pieces.append(("img", imgs[int(m.group(1))]))
            pos = m.end()
        pieces.append(("p", para[pos:]))
        for kind, chunk in pieces:
            if kind == "img":
                out.append(chunk)
            elif chunk.strip():
                out.append(_format_paragraph(chunk.strip(), mds))
    return "\n".join(out)

def task_xml(statement: str, solution: str|None, report: Report) -> str:
    result="<task>\n  <statement>\n"+indent(blockify(convert_content(statement,report)),4)+"\n  </statement>"
    if solution is not None:
        result+="\n  <solution>\n"+indent(blockify(convert_content(solution,report)),4)+"\n  </solution>"
    return result+"\n</task>"

def convert_subproblems(body: str, exercise_solutions: list[str], report: Report) -> tuple[str,list[str]]:
    _pre,tasks=split_commands(body,"subproblem")
    if not tasks:
        report.warn("A subproblems environment had no \\subproblem commands")
        return convert_content(body,report),exercise_solutions
    statements=[]; embedded=[]
    for t in tasks:
        clean,sols=extract_solution_blocks(t); statements.append(clean); embedded.append(sols[0] if sols else None)
        if len(sols)>1: report.warn("A subproblem had multiple solution environments; only the first was attached")
    parallel=[]; remaining=[]
    for sol in exercise_solutions:
        _p,parts=split_commands(sol,"subproblem")
        if parts and not parallel: parallel=parts
        else: remaining.append(sol)
    if parallel:
        if len(parallel)!=len(statements): report.warn(f"Subproblem/solution count mismatch: {len(statements)} tasks, {len(parallel)} parallel solutions")
        for i,s in enumerate(parallel[:len(embedded)]):
            if embedded[i] is None: embedded[i]=s
    return "\n".join(task_xml(st,embedded[i],report) for i,st in enumerate(statements)),remaining

def convert_exercise(body: str, report: Report) -> str:
    statement,solutions=extract_solution_blocks(body)
    sub=find_environment(statement,"subproblems")
    if sub:
        s,e,bs,be=sub
        before=statement[:s].strip(); after=statement[e:].strip()
        tasks,solutions=convert_subproblems(statement[bs:be],solutions,report)
        intro=convert_content("\n".join(x for x in (before,after) if x),report)
        result="<exercise>"
        if intro:
            result+="\n  <introduction>\n"+indent(blockify(intro),4)+"\n  </introduction>"
        result+="\n"+indent(tasks,2)
        for sol in solutions:
            report.warn("An exercise-level solution remained after task pairing and was preserved after the tasks")
            result+="\n  <solution>\n"+indent(blockify(convert_content(sol,report)),4)+"\n  </solution>"
        result+="\n</exercise>"
    else:
        statement_xml=blockify(convert_content(statement,report))
        result="<exercise>\n  <statement>\n"+indent(statement_xml,4)+"\n  </statement>"
        for sol in solutions:
            result+="\n  <solution>\n"+indent(blockify(convert_content(sol,report)),4)+"\n  </solution>"
        result+="\n</exercise>"
    report.add("exercise")
    return result

def indent(text: str,n: int) -> str:
    pad=" "*n
    return "\n".join(pad+line if line else line for line in text.splitlines())

def convert_problems(body: str, report: Report) -> str:
    pre,problems=split_commands(body,"problem")
    content=[]
    if pre.strip():
        report.warn("Content before the first \\problem was preserved as an <introduction>")
        content.append("<introduction>\n"+indent(blockify(convert_content(pre,report)),2)+"\n</introduction>")
    content.extend(convert_exercise(p,report) for p in problems)
    report.add("problems-environment")
    return "<exercises>\n"+indent("\n".join(content),2)+"\n</exercises>"

def convert_text(source: str) -> tuple[str,Report]:
    report=Report()
    source=re.sub(r"(?m)(?<!\\)%.*$", "", source)
    result=replace_environments(source,"problems",lambda b:convert_problems(b,report))
    # Convert any math/links/images outside problems too, useful for subsection lead-ins.
    result=convert_content(result,report)
    return result.strip()+"\n",report

# ---------- files / CLI ----------
def output_path(src: Path, root: Path|None, out_dir: Path|None) -> Path:
    if out_dir:
        rel=src.relative_to(root) if root and root.is_dir() else Path(src.name)
        return (out_dir/rel).with_suffix(".ptx")
    return src.with_suffix(".ptx")

def process(src: Path,dst: Path,dry: bool,backup: bool,in_place: bool) -> Report:
    text=src.read_text(encoding="utf-8")
    converted,report=convert_text(text)
    if not dry:
        target=src if in_place else dst
        if in_place and backup: shutil.copy2(src,src.with_suffix(src.suffix+".bak"))
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_text(converted,encoding="utf-8")
    return report

def main(argv=None) -> int:
    p=argparse.ArgumentParser(description="Convert ILA LaTeX exercises to PreTeXt.")
    p.add_argument("input",type=Path); p.add_argument("-o","--output",type=Path)
    p.add_argument("-d","--output-dir",type=Path); p.add_argument("-r","--recursive",action="store_true")
    p.add_argument("--dry-run",action="store_true"); p.add_argument("--in-place",action="store_true")
    p.add_argument("--backup",action="store_true")
    a=p.parse_args(argv); src=a.input.resolve()
    if not src.exists(): p.error(f"not found: {src}")
    if sum(bool(x) for x in (a.output,a.output_dir,a.in_place))>1: p.error("choose only one of --output, --output-dir, --in-place")
    if src.is_dir() and not a.recursive: p.error("directory input requires --recursive")
    files=sorted(x for x in (src.rglob("*") if src.is_dir() else [src]) if x.is_file() and x.suffix.lower() in SOURCE_EXTENSIONS)
    if a.output and len(files)!=1: p.error("--output is only valid for one input file")
    # Log file location: the output directory for this run.
    if a.output_dir:   log_dir=a.output_dir.resolve()
    elif a.output:     log_dir=a.output.resolve().parent
    else:              log_dir=src if src.is_dir() else src.parent   # in-place / default (.ptx beside source)
    log_path=log_dir/"log.txt"
    lines: list[str]=[]
    def log(msg: str="") -> None:
        print(msg); lines.append(msg)
    log(f"latex_exercises_to_pretext run {datetime.now().isoformat(timespec='seconds')}")
    log(f"input: {src}")
    if a.dry_run: log("mode: dry run (no .ptx files written)")
    log()
    n_review=0
    for f in files:
        dst=a.output.resolve() if a.output else output_path(f,src,a.output_dir.resolve() if a.output_dir else None)
        report=process(f,dst,a.dry_run,a.backup,a.in_place)
        log(f"{'[DRY RUN] ' if a.dry_run else ''}{f}")
        for k,v in sorted(report.counts.items()): log(f"  {k}: {v}")
        for w in report.warnings: log(f"  REVIEW: {w}")
        n_review+=len(report.warnings)
        if not a.dry_run: log(f"  -> {f if a.in_place else dst}")
    log()
    log(f"{len(files)} file(s) processed, {n_review} REVIEW item(s).")
    log_dir.mkdir(parents=True,exist_ok=True)
    log_path.write_text("\n".join(lines)+"\n",encoding="utf-8")
    print(f"Log written to {log_path}")
    return 0

if __name__ == "__main__": raise SystemExit(main())
