var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Contributors to this textbook",
  "body": " Contributors to this textbook   Dan Margalit Department of Mathematics Vanderbilt University dan.margalit@vanderbilt.edu  Joseph Rabinoff Department of Mathematics Duke University jdr@math.duke.edu  Larry Rolen Department of Mathematics Vanderbilt University larry.rolen@vanderbilt.edu  Hunter Lehmann Department of Mathematics Georgia Institute of Technology hlehmann3@gatech.edu   Rabinoff contributed all of the figures, the demos, and the technical aspects of the project, as detailed below. Hunter Lehmann worked to update the project to the latest version of PreTeXt and add accessibility features throughout the text.  The textbook is written in XML and compiled using a variant of Robert Beezer's MathBook XML , as heavily modified by Rabinoff.  The mathematical content of the textbook is written in LaTeX, then converted to HTML-friendly SVG format using a collection of scripts called PreTeX: this was coded by Rabinoff and depends heavily on Inkscape for pdf decoding and FontForge for font embedding. The figures are written in PGF\/TikZ and processed with PreTeX as well.  The demonstrations are written in JavaScript+WebGL using Steven Wittens' brilliant framework called MathBox .  All source code can be found on GitHub . It may be freely copied, modified, and redistributed, as detailed in the appendix entitled GNU Free Documentation License.   Larry Rolen wrote many of the exercises.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Variants of this textbook",
  "body": " Variants of this textbook  There are several variants of this textbook available.  The master version is the default version of the book.  The version for math 1553 is fine-tuned to contain only the material covered in Math 1553 at Georgia Tech.  The section numbering is consistent across versions. This explains why Section 6.3 does not exist in the Math 1553 version, for example.  You are currently viewing the master version .  "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "History of the Updated Edition",
  "body": " History of the Updated Edition     The Georgia Tech\/Duke edition, entitled Interactive Linear Algebra was published in 2019, by Dan Margalit and Joseph Rabinoff, with contributions from Larry Rolen.    This updated edition, entitled Interactive Linear Algebra: Updated Edition , was published in 2026, with updates and modifications by Chris Jankowski and Hunter Lehmann.     Hunter Lehmann updated the technical aspects of the project from the original customized MathBookXML by Rabinoff to modern PreTeXt and improved digital accessibility of the text.    Chris Jankowski contributed exercises for student practice.        "
},
{
  "id": "overview",
  "level": "1",
  "url": "overview.html",
  "type": "Preface",
  "number": "",
  "title": "Overview",
  "body": " Overview   The Subject of This Textbook  Before starting with the content of the text, we first ask the basic question: what is linear algebra?  Linear: having to do with lines, planes, etc.  Algebra: solving equations involving unknowns.  The name of the textbook highlights an important theme: the synthesis between algebra and geometry. It will be very important to us to understand systems of linear equations both algebraically (writing equations for their solutions) and geometrically (drawing pictures and visualizing).   The term algebra was coined by the th century mathematician Abu Ja far Muhammad ibn Musa al-Khwarizmi. It comes from the Arabic word al-jebr , meaning reunion of broken parts.   At the simplest level, solving a system of linear equations is not very hard. You probably learned in high school how to solve a system like However, in real life one usually has to be more clever.  Engineers need to solve many, many equations in many, many variables. Here is a tiny example:   Often it is enough to know some information about the set of solutions, without having to solve the equations in the first place. For instance, does there exist a solution? What does the solution set look like geometrically? Is there still a solution if we change the to a ?  Sometimes the coefficients also contain parameters, like the eigenvalue equation    In data modeling, a system of equations generally does not actually have a solution. In that case, what is the best approximate solution?    Accordingly, this text is organized into three main sections.   Solve the matrix equation (chapters 2 4).  Solve systems of linear equations using matrices, row reduction, and inverses.  Analyze systems of linear equations geometrically using the geometry of solution sets and linear transformations.      Solve the matrix equation (chapters 5 6).  Solve eigenvalue problems using the characteristic polynomial.  Understand the geometry of matrices using similarity, eigenvalues, diagonalization, and complex numbers.      Approximately solve the matrix equation (chapter 7).  Find best-fit solutions to systems of linear equations that have no actual solution using least-squares approximations.  Study the geometry of closest vectors and orthogonal projections.       This text is roughly half computational and half conceptual in nature. The main goal is to present a library of linear algebra tools, and more importantly, to teach a conceptual framework for understanding which tools should be applied in a given context.   If Matlab can find the answer faster than you can, then your question is just an algorithm: this is not real problem solving.   The subtle part of the subject lies in understanding what computation to ask the computer to do for you  it is far less important to know how to perform computations that a computer can do better than you anyway.    Uses of Linear Algebra in Engineering  The vast majority of undergraduates at Georgia Tech have to take a course in linear algebra. There is a reason for this:   Most engineering problems, no matter how complicated, can be reduced to linear algebra:    Here we present some sample problems in science and engineering that require linear algebra to solve.   Civil Engineering  The following diagram represents traffic flow around the town square. The streets are all one way, and the numbers and arrows indicate the number of cars per hour flowing along each street, as measured by sensors underneath the roads.   Directed traffic flows into, out of, and around a square formed by four intersections.   Four intersections form the corners of a square. Internal one-way streets carry unknown hourly flows: across the top from left to right, down the right side, across the bottom from right to left, and up the left side. At the upper-left intersection, 120 cars per hour enter from the left and 250 leave upward. At the upper-right intersection, 120 enter from above and 70 leave to the right. At the lower-right intersection, 530 enter from the right and 390 leave downward. At the lower-left intersection, 115 enter from below and 175 leave to the left.     There are no sensors underneath some of the streets, so we do not know how much traffic is flowing around the square itself. What are the values of ? Since the number of cars entering each intersection has to equal the number of cars leaving that intersection, we obtain a system of linear equations:     Chemical Engineering  A certain chemical reaction (burning) takes ethane and oxygen, and produces carbon dioxide and water: What ratio of the molecules is needed to sustain the reaction? The following three equations come from the fact that the number of atoms of carbon, hydrogen, and oxygen on the left side has to equal the number of atoms on the right, respectively: .    Biology  In a population of rabbits,   half of the newborn rabbits survive their first year;    of those, half survive their second year;    the maximum life span is three years;    rabbits produce 0, 6, 8 baby rabbits in their first, second, and third years, respectively.   If you know the rabbit population in 2016 (in terms of the number of first, second, and third year rabbits), then what is the population in 2017? The rules for reproduction lead to the following system of equations, where represent the number of newborn, first-year, and second-year rabbits, respectively: A common question is: what is the asymptotic behavior of this system? What will the rabbit population look like in 100 years? This turns out to be an eigenvalue problem.   Left: the population of rabbits in a given year. Right: the proportions of rabbits in that year. Choose any values you like for the starting population, and click Advance 1 year several times. What do you notice about the long-term behavior of the ratios? This phenomenon turns out to be due to eigenvectors.      Astronomy  An asteroid has been observed at the following locations: Its orbit around the sun is elliptical; it is described by an equation of the form What is the most likely orbit of the asteroid, given that there was some significant error in measuring its position? Substituting the data points into the above equation yields the system There is no actual solution to this system due to measurement error, but here is the best-fitting ellipse:  Six measured asteroid positions and a red best-fit ellipse on a coordinate grid.   A coordinate grid from to and to shows the measured points , , , , , and . A tilted red ellipse is fitted to the six points. Its displayed equation is .        Computer Science  Each web page has some measure of importance, which it shares via outgoing links to other pages. This leads to zillions of equations in zillions of variables. Larry Page and Sergei Brin realized that this is a linear algebra problem at its core, and used the assemblage to found Google. We will discuss this example in detail in .     How to Use This Textbook  There are a number of different categories of ideas that are contained in most sections. They are listed at the top of the section, under Objectives , for easy review. We classify them as follows.   Recipes: these are algorithms that are generally straightforward (if sometimes tedious), and are usually done by computer in real life. They are nonetheless important to learn and to practice.   Vocabulary words: forming a conceptual understanding of the subject of linear algebra means being able to communicate much more precisely than in ordinary speech. The vocabulary words have precise definitions, which must be learned and used correctly.   Essential vocabulary words: these vocabulary words are essential in that they form the essence of the subject of linear algebra. For instance, if you do not know the definition of an eigenvector, then by definition you cannot claim to understand linear algebra.   Theorems: these describe in a precise way how the objects of interest relate to each other. Knowing which recipe to use in a given situation generally means recognizing which vocabulary words to use to describe the situation, and understanding which theorems apply to that problem.   Pictures: visualizing the geometry underlying the algebra means interpreting and drawing pictures of the objects involved. The pictures are meant to be a core part of the material in the text: they are not just a pretty add-on.    This textbook is exclusively targeted at Math 1553 at Georgia Tech. As such, it contains exactly the material that is taught in that class; no more, and no less: students in Math 1553 are responsible for understanding all visible content. In the online version some extra material (most examples and proofs, for instance) is hidden, in that one needs to click on a link to reveal it, like this:   Hidden Content  Hidden content is meant to enrich your understanding of the topic, but is not an official part of Math 1553. That said, the text will be very hard to follow without understanding the examples, and studying the proofs is an excellent way to learn the conceptual part of the material. (Not applicable to the PDF version.)   Finally, we remark that there are over 140 interactive demos contained in the text, which were created to illustrate the geometry of the topic. Click the view in a new window link, and play around with them! You will need a modern browser. Internet Explorer is not a modern browser; try Safari, Chrome , or Firefox . Here is a demo from :   A demo showing the fitting of a quadratic to a set of data points in the plane.      Feedback  Every page of the online version has a link on the bottom for providing feedback. This will take you to the GitHub Issues page for this book.   "
},
{
  "id": "overview-2-3",
  "level": "2",
  "url": "overview.html#overview-2-3",
  "type": "Remark",
  "number": "0.1",
  "title": "",
  "body": " The term algebra was coined by the th century mathematician Abu Ja far Muhammad ibn Musa al-Khwarizmi. It comes from the Arabic word al-jebr , meaning reunion of broken parts.  "
},
{
  "id": "overview-3-5",
  "level": "2",
  "url": "overview.html#overview-3-5",
  "type": "Example",
  "number": "0.2",
  "title": "Civil Engineering.",
  "body": " Civil Engineering  The following diagram represents traffic flow around the town square. The streets are all one way, and the numbers and arrows indicate the number of cars per hour flowing along each street, as measured by sensors underneath the roads.   Directed traffic flows into, out of, and around a square formed by four intersections.   Four intersections form the corners of a square. Internal one-way streets carry unknown hourly flows: across the top from left to right, down the right side, across the bottom from right to left, and up the left side. At the upper-left intersection, 120 cars per hour enter from the left and 250 leave upward. At the upper-right intersection, 120 enter from above and 70 leave to the right. At the lower-right intersection, 530 enter from the right and 390 leave downward. At the lower-left intersection, 115 enter from below and 175 leave to the left.     There are no sensors underneath some of the streets, so we do not know how much traffic is flowing around the square itself. What are the values of ? Since the number of cars entering each intersection has to equal the number of cars leaving that intersection, we obtain a system of linear equations:   "
},
{
  "id": "overview-3-6",
  "level": "2",
  "url": "overview.html#overview-3-6",
  "type": "Example",
  "number": "0.3",
  "title": "Chemical Engineering.",
  "body": " Chemical Engineering  A certain chemical reaction (burning) takes ethane and oxygen, and produces carbon dioxide and water: What ratio of the molecules is needed to sustain the reaction? The following three equations come from the fact that the number of atoms of carbon, hydrogen, and oxygen on the left side has to equal the number of atoms on the right, respectively: .  "
},
{
  "id": "overview-3-7",
  "level": "2",
  "url": "overview.html#overview-3-7",
  "type": "Example",
  "number": "0.4",
  "title": "Biology.",
  "body": " Biology  In a population of rabbits,   half of the newborn rabbits survive their first year;    of those, half survive their second year;    the maximum life span is three years;    rabbits produce 0, 6, 8 baby rabbits in their first, second, and third years, respectively.   If you know the rabbit population in 2016 (in terms of the number of first, second, and third year rabbits), then what is the population in 2017? The rules for reproduction lead to the following system of equations, where represent the number of newborn, first-year, and second-year rabbits, respectively: A common question is: what is the asymptotic behavior of this system? What will the rabbit population look like in 100 years? This turns out to be an eigenvalue problem.   Left: the population of rabbits in a given year. Right: the proportions of rabbits in that year. Choose any values you like for the starting population, and click Advance 1 year several times. What do you notice about the long-term behavior of the ratios? This phenomenon turns out to be due to eigenvectors.    "
},
{
  "id": "overview-3-8",
  "level": "2",
  "url": "overview.html#overview-3-8",
  "type": "Example",
  "number": "0.6",
  "title": "Astronomy.",
  "body": " Astronomy  An asteroid has been observed at the following locations: Its orbit around the sun is elliptical; it is described by an equation of the form What is the most likely orbit of the asteroid, given that there was some significant error in measuring its position? Substituting the data points into the above equation yields the system There is no actual solution to this system due to measurement error, but here is the best-fitting ellipse:  Six measured asteroid positions and a red best-fit ellipse on a coordinate grid.   A coordinate grid from to and to shows the measured points , , , , , and . A tilted red ellipse is fitted to the six points. Its displayed equation is .      "
},
{
  "id": "overview-3-9",
  "level": "2",
  "url": "overview.html#overview-3-9",
  "type": "Example",
  "number": "0.7",
  "title": "Computer Science.",
  "body": " Computer Science  Each web page has some measure of importance, which it shares via outgoing links to other pages. This leads to zillions of equations in zillions of variables. Larry Page and Sergei Brin realized that this is a linear algebra problem at its core, and used the assemblage to found Google. We will discuss this example in detail in .  "
},
{
  "id": "overview-4-4",
  "level": "2",
  "url": "overview.html#overview-4-4",
  "type": "Example",
  "number": "0.8",
  "title": "Hidden Content.",
  "body": " Hidden Content  Hidden content is meant to enrich your understanding of the topic, but is not an official part of Math 1553. That said, the text will be very hard to follow without understanding the examples, and studying the proofs is an excellent way to learn the conceptual part of the material. (Not applicable to the PDF version.)  "
},
{
  "id": "overview-4-6",
  "level": "2",
  "url": "overview.html#overview-4-6",
  "type": "Figure",
  "number": "0.9",
  "title": "",
  "body": " A demo showing the fitting of a quadratic to a set of data points in the plane.   "
},
{
  "id": "sec-systems-of-eqns",
  "level": "1",
  "url": "sec-systems-of-eqns.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations    Understand the definition of , and what it means to use to label points on a geometric object.  Pictures: solutions of systems of linear equations, parameterized solution sets.  Vocabulary words:  consistent , inconsistent , solution set .     During the first half of this textbook, we will be primarily concerned with understanding the solutions of systems of linear equations.   Linear equation definition of   An equation in the unknowns is called linear if both sides of the equation are a sum of (constant) multiples of , plus an optional constant.    For instance, are linear equations, but are not.  We will usually move the unknowns to the left side of the equation, and move the constants to the right.  A system of linear equations is a collection of several linear equations, like  Linear equation system of System of linear equations  System of linear equations definition of    Solution sets     A solution of a system of equations is a list of numbers that make all of the equations true simultaneously.  The solution set of a system of equations is the collection of all solutions.  Solving the system means finding all solutions with formulas involving some number of parameters.   System of linear equations solution of  Solution System of linear equations  Solution set definition of     A system of linear equations need not have a solution. For example, there do not exist numbers and making the following two equations true simultaneously: In this case, the solution set is empty . As this is a rather important property of a system of equations, it has its own name.   System of linear equations inconsistent  System of linear equations consistent  Consistent System of linear equations  Inconsistent System of linear equations   A system of equations is called inconsistent if it has no solutions. It is called consistent otherwise.    A solution of a system of equations in variables is a list of numbers. For example, is a solution of . As we will be studying solutions of systems of equations throughout this text, now is a good time to fix our notions regarding lists of numbers.    Line, Plane, Space, Etc.   The number zero  The real numbers  Real numbers We use to denote the set of all real numbers, i.e., the number line. This contains numbers like    Real -space  Real -space point of    Real -space    Let be a positive whole number. We define An -tuple of real numbers is called a point of .    In other words, is just the set of all (ordered) lists of real numbers. We will draw pictures of in a moment, but keep in mind that this is the definition . For example, and are points of .   The number line  Real numbers  Line number line  When , we just get back: . Geometrically, this is the number line.   The number line marked with integers from -3 to 3      The Euclidean plane  Plane -plane  When , we can think of as the -plane. We can do so because every point on the plane can be represented by an ordered pair of real numbers, namely, its - and -coordinates.  The Euclidean plane with two marked points   The Euclidean plane with drawn horizontal and vertical axes and two marked points at and .     3-Space  Space  When , we can think of as the space we (appear to) live in. We can do so because every point in space can be represented by an ordered triple of real numbers, namely, its -, -, and -coordinates.  3-space with two marked points  3-space with , and axes drawn along with a grid in the -plane and two marked points at and .     Points in 3-Space   A point in 3-space, and its coordinates.     So what is ? or ? or ? These are harder to visualize, so you have to go back to the definition: is the set of all ordered -tuples of real numbers .  They are still geometric spaces, in the sense that our intuition for and often extends to .  We will make definitions and state theorems that apply to any , but we will only draw pictures for and .  The power of using these spaces is the ability to label various objects of interest, such as geometric objects and solutions of systems of equations, by the points of .   Color Space  Space color space  Color space  All colors you can see can be described by three quantities: the amount of red, green, and blue light in that color. (Humans are trichromatic .) Therefore, we can use the points of to label all colors: for instance, the point labels the color with red, green, and blue intensity.  Gradient of colors on a cube, with red, green, and blue axes labeled    Traffic Flow  In the , we could have used to label the amount of traffic passing through four streets. In other words, if there are cars per hour passing through roads , respectively, then this can be recorded by the point in . This is useful from a psychological standpoint: instead of having four numbers, we are now dealing with just one piece of data.  Directed traffic flows into, out of, and around a square formed by four intersections.    QR Codes  QR codes  A QR code is a method of storing data in a grid of black and white squares in a way that computers can easily read. A typical QR code is a grid. Reading each line left-to-right and reading the lines top-to-bottom (like you read a book) we can think of such a QR code as a sequence of digits, each digit being 1 (for white) or 0 (for black). In such a way, the entire QR code can be regarded as a point in . As in the previous , it is very useful from a psychological perspective to view a QR code as a single piece of data in this way.   The QR code for this textbook is a array of black\/white squares.   QR code that links to the textbook homepage     In the above examples, it was useful from a psychological perspective to replace a list of four numbers (representing traffic flow) or of 841 numbers (representing a QR code) by a single piece of data: a point in some . This is a powerful concept; starting in , we will almost exclusively record solutions of systems of linear equations in this way.    Pictures of Solution Sets  Solution set picture of  Before discussing how to solve a system of linear equations below, it is helpful to see some pictures of what these solution sets look like geometrically.   One Equation in Two Variables  Consider the linear equation . We can rewrite this as , which defines a line in the plane: the slope is , and the -intercept is .   Line in the plane with slope negative 1 and interecept 1      Lines  Line geometric definition of   For our purposes, a line is a ray that is straight and infinite in both directions.     One Equation in Three Variables  Consider the linear equation . This is the implicit equation for a plane in space.   Plane in 3-space      Planes  Plane geometric definition of   A plane is a flat sheet that is infinite in all directions.     The equation defines a -plane in -space, and more generally, a single linear equation in variables defines an -plane in -space. We will make these statements precise in .    Two Equations in Two Variables  Now consider the system of two linear equations Each equation individually defines a line in the plane, pictured below.   Two lines in the plane intersecting at a point    A solution to the system of both equations is a pair of numbers that makes both equations true at once. In other words, it as a point that lies on both lines simultaneously. We can see in the picture above that there is only one point where the lines intersect: therefore, this system has exactly one solution. (This solution is , as the reader can verify.)  Usually, two lines in the plane will intersect in one point, but of course this is not always the case. Consider now the system of equations These define parallel lines in the plane.   Two parallel lines in the plane    The fact that that the lines do not intersect means that the system of equations has no solution. Of course, this is easy to see algebraically: if , then it is cannot also be the case that .  There is one more possibility. Consider the system of equations The second equation is a multiple of the first, so these equations define the same line in the plane.   Two lines in the plane that are equal    In this case, there are infinitely many solutions of the system of equations.    Two Equations in Three Variables  Consider the system of two linear equations Each equation individually defines a plane in space. The solutions of the system of both equations are the points that lie on both planes. We can see in the picture below that the planes intersect in a line. In particular, this system has infinitely many solutions.   The planes defined by the equations and intersect in the red line, which is the solution set of the system of both equations.      In general, the solutions of a system of equations in variables is the intersection of -planes in -space. This is always some kind of linear space, as we will discuss in .     Parametric Description of Solution Sets  Implicit equation  Parametric form  According to , solving a system of equations means writing down all solutions in terms of some number of parameters. We will give a systematic way of doing so in ; for now we give parametric descriptions in the examples of the previous .   Lines  Line parametric form of  Consider the linear equation of . In this context, we call an implicit equation of the line. We can write the same line in parametric form as follows: This means that every point on the line has the form for some real number . In this case, we call a parameter , as it parameterizes the points on the line.             Now consider the system of two linear equations of . These collectively form the implicit equations for a line in . (At least two equations are needed to define a line in space.) This line also has a parametric form with one parameter  :    The planes defined by the equations and intersect in the yellow line, which is parameterized by .    Note that in each case, the parameter allows us to use to label the points on the line. However, neither line is the same as the number line : indeed, every point on the first line has two coordinates, like the point , and every point on the second line has three coordinates, like .    Planes  Plane parametric form of  Consider the linear equation of . This is an implicit equation of a plane in space. This plane has an equation in parametric form : we can write every point on the plane as In this case, we need two parameters  and to describe all points on the plane.   The plane in defined by the equation . This plane is parameterized by two numbers .    Note that the parameters allow us to use to label the points on the plane. However, this plane is not the same as the plane : indeed, every point on this plane has three coordinates, like the point .   When there is a unique solution, as in , it is not necessary to use parameters to describe the solution set.      Is the following equation linear in the variables , , and ? Justify your answer. .    Linear. Can be written as .      Is the following equation linear in the variables , , and ? Justify your answer. .    Not linear, due to the term.      Is the following equation linear in the variables , , and ? Justify your answer. .    Linear. Here, and are real number coefficients of the and terms, respectively.      Is the following equation linear in the variables , , and ? Justify your answer. .    Not linear, due to variables being within exponents.      Is there a consistent system of three linear equations in two variables and ? If your answer is yes, write such a system and draw a corresponding picture using to label points in . If your answer is no, explain why no such system exists.    Yes, for example we could visualize three different lines in the -plane that have exactly one point in common. If we want to be that point, we could write equations for three different lines that contain .   .          In each case, determine whether the point is in the plane in given by . We follow the usual convention of using to label points in .        No: , not .         No: is not even a point in .         Yes: .         Yes: .         No: , not . \\end{subproblems}       Is there an inconsistent system of two linear equations in three variables , , and ? If your answer is yes, write such a system and draw a corresponding picture using to label points in . If your answer is no, explain why no such system exists.    Yes, for example  . For this system to be consistent, we would need , so the system is inconsistent.      Consider the system of linear equations in , , and given by  . Describe its solution set geometrically, where we use to label points in .    The solution set is a line. It is the intersection of the horizontal plane with the vertical plane where .  We could parametrize the points on this line by where is real.      Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is the -plane.    The -plane in space is given by the single linear equation , or in longhand: .      Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is a line.    The -axis in space the set of all points in space where and , so our system is simply  .      Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is the point .    The system of equations must only be satisfied when , , and . One way to do this is simply to make the three equations , , and . In long form,   .      The following is a kind of common brain teaser that many people answer incorrectly. We will use linear algebra to solve it now.  A rare baseball card and a coffee mug cost together. The baseball card costs more than the mug. How much does the baseball card cost?    Let be the cost of the baseball card and be the cost of the mug. We have been told that and . Now that we have written down this system of two linear equations in two variables, it is a standard high school algebra problem. This gives so and thus . Therefore, the baseball card costs .      Suppose is a polynomial of the form whose graph passes through the points , , and . Write a system of linear equations that we could solve to find , , and .    We use the facts , , and :   . This gives us the linear system of equations:   .      This brain teaser comes from a memorial article for the mathematician Paul Salley in the Notices of the American Mathematical Society, Volume 65, Number 5. The article is accessible at this link . This type of so-called Jim and John Problem has many variations that sound like tricky brain teasers but can be solved by writing systems of equations and using linear algebra. We give a slight variation here:  Alice and Bob have the same birthday. Alice is 24 years old, which is twice as old as Bob was at the time when Alice was as old as Bob is now. How old is Bob now?    While Alice and Bob are alive, the difference between their ages is some constant no matter what year we are in: . We're told that alice is 24, so . Also, from the information we are given, Bob was 12 when Alice was the same age that Bob is now. . We have a system of two equations:  . Subtracting the first equation from the second, we get , therefore Bob is now years old and ( means Alice is years older than Bob, which agrees with the fact that Alice is 24).      Consider a QR code given by an array below, where each spot can either have a 0 (for black) or 1 (for white).      Each QR code is an element in some . What is ?    There are spots where we can put a or a , so .      How many QR codes are there?    We have two choices for each entry in each QR code, with possibilities ranging from all zeros to all ones. This gives us such QR codes. \\end{subproblems}      "
},
{
  "id": "sec-systems-of-eqns-2",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Understand the definition of , and what it means to use to label points on a geometric object.  Pictures: solutions of systems of linear equations, parameterized solution sets.  Vocabulary words:  consistent , inconsistent , solution set .   "
},
{
  "id": "sec-systems-of-eqns-3-2",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-3-2",
  "type": "Definition",
  "number": "1.2",
  "title": "",
  "body": " Linear equation definition of   An equation in the unknowns is called linear if both sides of the equation are a sum of (constant) multiples of , plus an optional constant.   "
},
{
  "id": "sec-systems-of-eqns-3-5",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system "
},
{
  "id": "systems-eqns-soln-sets",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-soln-sets",
  "type": "Definition",
  "number": "1.3",
  "title": "Solution sets.",
  "body": " Solution sets     A solution of a system of equations is a list of numbers that make all of the equations true simultaneously.  The solution set of a system of equations is the collection of all solutions.  Solving the system means finding all solutions with formulas involving some number of parameters.   System of linear equations solution of  Solution System of linear equations  Solution set definition of    "
},
{
  "id": "sec-systems-of-eqns-3-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-3-8",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": " System of linear equations inconsistent  System of linear equations consistent  Consistent System of linear equations  Inconsistent System of linear equations   A system of equations is called inconsistent if it has no solutions. It is called consistent otherwise.   "
},
{
  "id": "subsec-Rn-3",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-3",
  "type": "Definition",
  "number": "1.5",
  "title": "",
  "body": " Real -space  Real -space point of    Real -space    Let be a positive whole number. We define An -tuple of real numbers is called a point of .   "
},
{
  "id": "subsec-Rn-5",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-5",
  "type": "Example",
  "number": "1.6",
  "title": "The number line.",
  "body": " The number line  Real numbers  Line number line  When , we just get back: . Geometrically, this is the number line.   The number line marked with integers from -3 to 3    "
},
{
  "id": "subsec-Rn-6",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-6",
  "type": "Example",
  "number": "1.7",
  "title": "The Euclidean plane.",
  "body": " The Euclidean plane  Plane -plane  When , we can think of as the -plane. We can do so because every point on the plane can be represented by an ordered pair of real numbers, namely, its - and -coordinates.  The Euclidean plane with two marked points   The Euclidean plane with drawn horizontal and vertical axes and two marked points at and .   "
},
{
  "id": "subsec-Rn-7",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-7",
  "type": "Example",
  "number": "1.8",
  "title": "3-Space.",
  "body": " 3-Space  Space  When , we can think of as the space we (appear to) live in. We can do so because every point in space can be represented by an ordered triple of real numbers, namely, its -, -, and -coordinates.  3-space with two marked points  3-space with , and axes drawn along with a grid in the -plane and two marked points at and .   "
},
{
  "id": "subsec-Rn-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-8",
  "type": "Interactive",
  "number": "1.9",
  "title": "Points in 3-Space.",
  "body": " Points in 3-Space   A point in 3-space, and its coordinates.    "
},
{
  "id": "subsec-Rn-13",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-13",
  "type": "Example",
  "number": "1.11",
  "title": "Color Space.",
  "body": " Color Space  Space color space  Color space  All colors you can see can be described by three quantities: the amount of red, green, and blue light in that color. (Humans are trichromatic .) Therefore, we can use the points of to label all colors: for instance, the point labels the color with red, green, and blue intensity.  Gradient of colors on a cube, with red, green, and blue axes labeled  "
},
{
  "id": "systems-eqns-R4",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-R4",
  "type": "Example",
  "number": "1.12",
  "title": "Traffic Flow.",
  "body": " Traffic Flow  In the , we could have used to label the amount of traffic passing through four streets. In other words, if there are cars per hour passing through roads , respectively, then this can be recorded by the point in . This is useful from a psychological standpoint: instead of having four numbers, we are now dealing with just one piece of data.  Directed traffic flows into, out of, and around a square formed by four intersections.  "
},
{
  "id": "subsec-Rn-15",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-15",
  "type": "Example",
  "number": "1.13",
  "title": "QR Codes.",
  "body": " QR Codes  QR codes  A QR code is a method of storing data in a grid of black and white squares in a way that computers can easily read. A typical QR code is a grid. Reading each line left-to-right and reading the lines top-to-bottom (like you read a book) we can think of such a QR code as a sequence of digits, each digit being 1 (for white) or 0 (for black). In such a way, the entire QR code can be regarded as a point in . As in the previous , it is very useful from a psychological perspective to view a QR code as a single piece of data in this way.   The QR code for this textbook is a array of black\/white squares.   QR code that links to the textbook homepage    "
},
{
  "id": "systems-eqns-picture-line",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-picture-line",
  "type": "Example",
  "number": "1.15",
  "title": "One Equation in Two Variables.",
  "body": " One Equation in Two Variables  Consider the linear equation . We can rewrite this as , which defines a line in the plane: the slope is , and the -intercept is .   Line in the plane with slope negative 1 and interecept 1    "
},
{
  "id": "defn-lines",
  "level": "2",
  "url": "sec-systems-of-eqns.html#defn-lines",
  "type": "Definition",
  "number": "1.16",
  "title": "Lines.",
  "body": " Lines  Line geometric definition of   For our purposes, a line is a ray that is straight and infinite in both directions.   "
},
{
  "id": "systems-eqns-picture-plane",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-picture-plane",
  "type": "Example",
  "number": "1.17",
  "title": "One Equation in Three Variables.",
  "body": " One Equation in Three Variables  Consider the linear equation . This is the implicit equation for a plane in space.   Plane in 3-space    "
},
{
  "id": "subsec-systems-eqns-pictures-7",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-systems-eqns-pictures-7",
  "type": "Definition",
  "number": "1.18",
  "title": "Planes.",
  "body": " Planes  Plane geometric definition of   A plane is a flat sheet that is infinite in all directions.   "
},
{
  "id": "subsec-systems-eqns-pictures-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-systems-eqns-pictures-8",
  "type": "Remark",
  "number": "1.19",
  "title": "",
  "body": " The equation defines a -plane in -space, and more generally, a single linear equation in variables defines an -plane in -space. We will make these statements precise in .  "
},
{
  "id": "systems-eqns-picture-2lines",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-picture-2lines",
  "type": "Example",
  "number": "1.20",
  "title": "Two Equations in Two Variables.",
  "body": " Two Equations in Two Variables  Now consider the system of two linear equations Each equation individually defines a line in the plane, pictured below.   Two lines in the plane intersecting at a point    A solution to the system of both equations is a pair of numbers that makes both equations true at once. In other words, it as a point that lies on both lines simultaneously. We can see in the picture above that there is only one point where the lines intersect: therefore, this system has exactly one solution. (This solution is , as the reader can verify.)  Usually, two lines in the plane will intersect in one point, but of course this is not always the case. Consider now the system of equations These define parallel lines in the plane.   Two parallel lines in the plane    The fact that that the lines do not intersect means that the system of equations has no solution. Of course, this is easy to see algebraically: if , then it is cannot also be the case that .  There is one more possibility. Consider the system of equations The second equation is a multiple of the first, so these equations define the same line in the plane.   Two lines in the plane that are equal    In this case, there are infinitely many solutions of the system of equations.  "
},
{
  "id": "systems-eqns-two-planes",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-two-planes",
  "type": "Example",
  "number": "1.21",
  "title": "Two Equations in Three Variables.",
  "body": " Two Equations in Three Variables  Consider the system of two linear equations Each equation individually defines a plane in space. The solutions of the system of both equations are the points that lie on both planes. We can see in the picture below that the planes intersect in a line. In particular, this system has infinitely many solutions.   The planes defined by the equations and intersect in the red line, which is the solution set of the system of both equations.    "
},
{
  "id": "subsec-systems-eqns-pictures-11",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-systems-eqns-pictures-11",
  "type": "Remark",
  "number": "1.23",
  "title": "",
  "body": " In general, the solutions of a system of equations in variables is the intersection of -planes in -space. This is always some kind of linear space, as we will discuss in .  "
},
{
  "id": "subsec-parametric-description-5",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-parametric-description-5",
  "type": "Example",
  "number": "1.24",
  "title": "Lines.",
  "body": " Lines  Line parametric form of  Consider the linear equation of . In this context, we call an implicit equation of the line. We can write the same line in parametric form as follows: This means that every point on the line has the form for some real number . In this case, we call a parameter , as it parameterizes the points on the line.             Now consider the system of two linear equations of . These collectively form the implicit equations for a line in . (At least two equations are needed to define a line in space.) This line also has a parametric form with one parameter  :    The planes defined by the equations and intersect in the yellow line, which is parameterized by .    Note that in each case, the parameter allows us to use to label the points on the line. However, neither line is the same as the number line : indeed, every point on the first line has two coordinates, like the point , and every point on the second line has three coordinates, like .  "
},
{
  "id": "subsec-parametric-description-6",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-parametric-description-6",
  "type": "Example",
  "number": "1.26",
  "title": "Planes.",
  "body": " Planes  Plane parametric form of  Consider the linear equation of . This is an implicit equation of a plane in space. This plane has an equation in parametric form : we can write every point on the plane as In this case, we need two parameters  and to describe all points on the plane.   The plane in defined by the equation . This plane is parameterized by two numbers .    Note that the parameters allow us to use to label the points on the plane. However, this plane is not the same as the plane : indeed, every point on this plane has three coordinates, like the point .  "
},
{
  "id": "sec-systems-of-eqns-7-1",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-1",
  "type": "Exercise",
  "number": "1.1.4.1",
  "title": "",
  "body": "  Is the following equation linear in the variables , , and ? Justify your answer. .    Linear. Can be written as .   "
},
{
  "id": "sec-systems-of-eqns-7-2",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-2",
  "type": "Exercise",
  "number": "1.1.4.2",
  "title": "",
  "body": "  Is the following equation linear in the variables , , and ? Justify your answer. .    Not linear, due to the term.   "
},
{
  "id": "sec-systems-of-eqns-7-3",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-3",
  "type": "Exercise",
  "number": "1.1.4.3",
  "title": "",
  "body": "  Is the following equation linear in the variables , , and ? Justify your answer. .    Linear. Here, and are real number coefficients of the and terms, respectively.   "
},
{
  "id": "sec-systems-of-eqns-7-4",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-4",
  "type": "Exercise",
  "number": "1.1.4.4",
  "title": "",
  "body": "  Is the following equation linear in the variables , , and ? Justify your answer. .    Not linear, due to variables being within exponents.   "
},
{
  "id": "sec-systems-of-eqns-7-5",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-5",
  "type": "Exercise",
  "number": "1.1.4.5",
  "title": "",
  "body": "  Is there a consistent system of three linear equations in two variables and ? If your answer is yes, write such a system and draw a corresponding picture using to label points in . If your answer is no, explain why no such system exists.    Yes, for example we could visualize three different lines in the -plane that have exactly one point in common. If we want to be that point, we could write equations for three different lines that contain .   .       "
},
{
  "id": "sec-systems-of-eqns-7-6",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-6",
  "type": "Exercise",
  "number": "1.1.4.6",
  "title": "",
  "body": "  In each case, determine whether the point is in the plane in given by . We follow the usual convention of using to label points in .        No: , not .         No: is not even a point in .         Yes: .         Yes: .         No: , not . \\end{subproblems}    "
},
{
  "id": "sec-systems-of-eqns-7-7",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-7",
  "type": "Exercise",
  "number": "1.1.4.7",
  "title": "",
  "body": "  Is there an inconsistent system of two linear equations in three variables , , and ? If your answer is yes, write such a system and draw a corresponding picture using to label points in . If your answer is no, explain why no such system exists.    Yes, for example  . For this system to be consistent, we would need , so the system is inconsistent.   "
},
{
  "id": "sec-systems-of-eqns-7-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-8",
  "type": "Exercise",
  "number": "1.1.4.8",
  "title": "",
  "body": "  Consider the system of linear equations in , , and given by  . Describe its solution set geometrically, where we use to label points in .    The solution set is a line. It is the intersection of the horizontal plane with the vertical plane where .  We could parametrize the points on this line by where is real.   "
},
{
  "id": "sec-systems-of-eqns-7-9",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-9",
  "type": "Exercise",
  "number": "1.1.4.9",
  "title": "",
  "body": "  Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is the -plane.    The -plane in space is given by the single linear equation , or in longhand: .   "
},
{
  "id": "sec-systems-of-eqns-7-10",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-10",
  "type": "Exercise",
  "number": "1.1.4.10",
  "title": "",
  "body": "  Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is a line.    The -axis in space the set of all points in space where and , so our system is simply  .   "
},
{
  "id": "sec-systems-of-eqns-7-11",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-11",
  "type": "Exercise",
  "number": "1.1.4.11",
  "title": "",
  "body": "  Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is the point .    The system of equations must only be satisfied when , , and . One way to do this is simply to make the three equations , , and . In long form,   .   "
},
{
  "id": "sec-systems-of-eqns-7-12",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-12",
  "type": "Exercise",
  "number": "1.1.4.12",
  "title": "",
  "body": "  The following is a kind of common brain teaser that many people answer incorrectly. We will use linear algebra to solve it now.  A rare baseball card and a coffee mug cost together. The baseball card costs more than the mug. How much does the baseball card cost?    Let be the cost of the baseball card and be the cost of the mug. We have been told that and . Now that we have written down this system of two linear equations in two variables, it is a standard high school algebra problem. This gives so and thus . Therefore, the baseball card costs .   "
},
{
  "id": "sec-systems-of-eqns-7-13",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-13",
  "type": "Exercise",
  "number": "1.1.4.13",
  "title": "",
  "body": "  Suppose is a polynomial of the form whose graph passes through the points , , and . Write a system of linear equations that we could solve to find , , and .    We use the facts , , and :   . This gives us the linear system of equations:   .   "
},
{
  "id": "sec-systems-of-eqns-7-14",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-14",
  "type": "Exercise",
  "number": "1.1.4.14",
  "title": "",
  "body": "  This brain teaser comes from a memorial article for the mathematician Paul Salley in the Notices of the American Mathematical Society, Volume 65, Number 5. The article is accessible at this link . This type of so-called Jim and John Problem has many variations that sound like tricky brain teasers but can be solved by writing systems of equations and using linear algebra. We give a slight variation here:  Alice and Bob have the same birthday. Alice is 24 years old, which is twice as old as Bob was at the time when Alice was as old as Bob is now. How old is Bob now?    While Alice and Bob are alive, the difference between their ages is some constant no matter what year we are in: . We're told that alice is 24, so . Also, from the information we are given, Bob was 12 when Alice was the same age that Bob is now. . We have a system of two equations:  . Subtracting the first equation from the second, we get , therefore Bob is now years old and ( means Alice is years older than Bob, which agrees with the fact that Alice is 24).   "
},
{
  "id": "sec-systems-of-eqns-7-15",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-7-15",
  "type": "Exercise",
  "number": "1.1.4.15",
  "title": "",
  "body": "  Consider a QR code given by an array below, where each spot can either have a 0 (for black) or 1 (for white).      Each QR code is an element in some . What is ?    There are spots where we can put a or a , so .      How many QR codes are there?    We have two choices for each entry in each QR code, with possibilities ranging from all zeros to all ones. This gives us such QR codes. \\end{subproblems}    "
},
{
  "id": "sec-row-reduction",
  "level": "1",
  "url": "sec-row-reduction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction",
  "body": " Row Reduction    Learn to replace a system of linear equations by an augmented matrix.  Learn how the elimination method corresponds to performing row operations on an augmented matrix.  Understand when a matrix is in (reduced) row echelon form.  Learn which row reduced matrices come from inconsistent linear systems.  Recipe: the row reduction algorithm.  Vocabulary words:  row operation , row equivalence , matrix , augmented matrix , pivot , (reduced) row echelon form .     In this section, we will present an algorithm for solving a system of linear equations.    The Elimination Method  Elimination method  We will solve systems of linear equations algebraically using the elimination method. In other words, we will combine the equations in various ways to try to eliminate as many variables as possible from each equation. There are three valid operations we can perform on our system of equations:  Scaling: we can multiply both sides of an equation by a nonzero number.   Replacement: we can add a multiple of one equation to another, replacing the second equation with the result.   Swap: we can swap two equations.       Solve using the elimination method.    At this point we ve eliminated both and from the third equation, and we can solve to get . Substituting for in the second equation gives , or . Substituting for and in the first equation gives , or . Thus the only solution is .  We can check that our solution is correct by substituting into the original equation:     Augmented Matrices and Row Operations  Solving equations by elimination requires writing the variables and the equals sign over and over again, merely as placeholders: all that is changing in the equations is the coefficient numbers . We can make our life easier by extracting only the numbers, and putting them in a box: Augmented matrix Matrix   Matrix definition of  Matrix augmented This is called an augmented matrix . The word augmented refers to the vertical line, which we draw to remind ourselves where the equals sign belongs; a matrix is a grid of numbers without the vertical line. In this notation, our three valid ways of manipulating our equations become row operations : Row operations   Scaling: multiply all entries in a row by a nonzero number. Row operations scaling  Here the notation simply means the first row , and likewise for etc. Row of a matrix   Replacement: add a multiple of one row to another, replacing the second row with the result. Row operations replacement  Row replacement Row operations, replacement    Swap: interchange two rows. Row operations swap       When we wrote our row operations above we used expressions like . Of course this does not mean that the second row is equal to the second row minus twice the first row. Instead it means that we are replacing the second row with the second row minus twice the first row. This kind of syntax is used frequently in computer programming when we want to change the value of a variable.     Solve using row operations.    We start by forming an augmented matrix: Eliminating a variable from an equation means producing a zero to the left of the line in an augmented matrix. First we produce zeros in the first column (i.e. we eliminate ) by subtracting multiples of the first row. This was made much easier by the fact that the top-left entry is equal to , so we can simply multiply the first row by the number below and subtract. In order to eliminate in the same way, we would like to produce a in the second column. We could divide the second row by , but this would produce fractions; instead, let s divide the third by . We swapped the second and third row just to keep things orderly. Now we translate this augmented matrix back into a system of equations: Hence ; back-substituting as in gives .    The process of doing row operations to a matrix does not change the solution set of the corresponding linear equations!  Indeed, the whole point of doing these operations is to solve the equations using the elimination method.   Row equivalence   Two matrices are called row equivalent if one can be obtained from the other by doing some number of row operations.    So the linear equations of row-equivalent matrices have the same solution set .   An Inconsistent System   Solve the following system of equations using row operations:     First we put our system of equations into an augmented matrix. We clear the entries below the top-left using row replacement. Now we clear the second entry from the last row. This translates back into the system of equations Our original system has the same solution set as this system. But this system has no solutions: there are no values of making the third equation true! We conclude that our original equation was inconsistent.       Echelon Forms  In the previous we saw how to translate a system of linear equations into an augmented matrix. We want to find an algorithm for solving such an augmented matrix. First we must decide what it means for an augmented matrix to be solved .   Row echelon form   A matrix is in row echelon form if:  All zero rows are at the bottom.  The first nonzero entry of a row is to the right of the first nonzero entry of the row above.  Below the first nonzero entry of a row, all entries are zero.      Here is a picture of a matrix in row echelon form:    Pivot   A pivot is the first nonzero entry of a row of a matrix in row echelon form.    A matrix in row-echelon form is generally easy to solve using back-substitution. For example, We immediately see that , which implies and See .   Reduced row echelon form   A matrix is in reduced row echelon form if it is in row echelon form, and in addition:  Each pivot is equal to 1.  Each pivot is the only nonzero entry in its column.      Here is a picture of a matrix in reduced row echelon form:   A matrix in reduced row echelon form is in some sense completely solved. For example,    The following matrices are in reduced row echelon form: The following matrices are in row echelon form but not reduced row echelon form: The following matrices are not in echelon form:     When deciding if an augmented matrix is in (reduced) row echelon form, there is nothing special about the augmented column(s). Just ignore the vertical line.   If an augmented matrix is in reduced row echelon form, the corresponding linear system is viewed as solved . We will see below why this is the case, and we will show that any matrix can be put into reduced row echelon form using only row operations.   Why the word pivot ?  Consider the following system of equations: We can visualize this system as a pair of lines in (red and blue, respectively, in the picture below) that intersect at the point . If we subtract the first equation from the second, we obtain the equation , or . This results in the system of equations: In terms of row operations on matrices, we can write this as:              What has happened geometrically is that the original blue line has been replaced with the new blue line . We can think of the blue line as rotating, or pivoting, around the solution . We used the pivot position in the matrix in order to make the blue line pivot like this. This is one possible explanation for the terminology pivot .     The Row Reduction Algorithm    Every matrix is row equivalent to one and only one matrix in reduced row echelon form.    We will give an algorithm, called row reduction or Gaussian elimination , which demonstrates that every matrix is row equivalent to at least one matrix in reduced row echelon form.   The uniqueness statement is interesting it means that, no matter how you row reduce, you always get the same matrix in reduced row echelon form.   This assumes, of course, that you only do the three legal row operations, and you don t make any arithmetic errors.  We will not prove uniqueness, but maybe you can!   Row Reduction  Row reduction algorithm  Gaussian elimination Row reduction     Step 1a: Swap the 1st row with a lower one so a leftmost nonzero entry is in the 1st row (if necessary).  Step 1b: Scale the 1st row so that its first nonzero entry is equal to 1.  Step 1c: Use row replacement so all entries below this 1 are 0.  Step 2a: Swap the 2nd row with a lower one so that the leftmost nonzero entry is in the 2nd row.  Step 2b: Scale the 2nd row so that its first nonzero entry is equal to 1.  Step 2c: Use row replacement so all entries below this 1 are 0.  Step 3a: Swap the 3rd row with a lower one so that the leftmost nonzero entry is in the 3rd row.  etc.  Last Step: Use row replacement to clear all entries above the pivots, starting with the last pivot.        Row reduce this matrix:                The reduced row echelon form of the matrix is The reduced row echelon form of the matrix tells us that the only solution is    Animated slideshow of the row reduction in this example.      Here is the row reduction algorithm, summarized in pictures. Row reduction picture of              It will be very important to know where are the pivots of a matrix after row reducing; this is the reason for the following piece of terminology.   Pivots  Pivot position   A pivot position of a matrix is an entry that is a pivot of a row echelon form of that matrix.  A pivot column of a matrix is a column that contains a pivot position.     Pivot Positions   Find the pivot positions and pivot columns of this matrix     We saw in that a row echelon form of the matrix is The pivot positions of are the entries that become pivots in a row echelon form; they are marked in color below: The first, second, and third columns are pivot columns.     An Inconsistent System   Solve the linear system using row reduction.     This row reduced matrix corresponds to the inconsistent system     In the above example, we saw how to recognize the reduced row echelon form of an inconsistent system.   The Row Echelon Form of an Inconsistent System  System of linear equations inconsistent RREF criterion  An augmented matrix corresponds to an inconsistent system of equations if and only if the last column (i.e., the augmented column) is a pivot column .   In other words, the row reduced matrix of an inconsistent system looks like this:   We have discussed two classes of matrices so far:  When the reduced row echelon form of a matrix has a pivot in every non-augmented column, then it corresponds to a system with a unique solution:   When the reduced row echelon form of a matrix has a pivot in the last (augmented) column, then it corresponds to a system with a no solutions:   What happens when one of the non-augmented columns lacks a pivot? This is the subject of .   A System with Many Solutions   Solve the linear system using row reduction.     This row reduced matrix corresponds to the linear system In what sense is the system solved? We will see in .     "
},
{
  "id": "sec-row-reduction-2",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Learn to replace a system of linear equations by an augmented matrix.  Learn how the elimination method corresponds to performing row operations on an augmented matrix.  Understand when a matrix is in (reduced) row echelon form.  Learn which row reduced matrices come from inconsistent linear systems.  Recipe: the row reduction algorithm.  Vocabulary words:  row operation , row equivalence , matrix , augmented matrix , pivot , (reduced) row echelon form .   "
},
{
  "id": "subsec-row-reduction-elimination-3",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elimination "
},
{
  "id": "systems-eqns-example1",
  "level": "2",
  "url": "sec-row-reduction.html#systems-eqns-example1",
  "type": "Example",
  "number": "1.28",
  "title": "",
  "body": "  Solve using the elimination method.    At this point we ve eliminated both and from the third equation, and we can solve to get . Substituting for in the second equation gives , or . Substituting for and in the first equation gives , or . Thus the only solution is .  We can check that our solution is correct by substituting into the original equation:    "
},
{
  "id": "subsec-row-reduction-elimination-5-2",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix matrix row operations "
},
{
  "id": "subsec-row-reduction-elimination-5-3",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-5-3",
  "type": "Remark",
  "number": "1.29",
  "title": "",
  "body": " When we wrote our row operations above we used expressions like . Of course this does not mean that the second row is equal to the second row minus twice the first row. Instead it means that we are replacing the second row with the second row minus twice the first row. This kind of syntax is used frequently in computer programming when we want to change the value of a variable.  "
},
{
  "id": "systems-eqns-example1b",
  "level": "2",
  "url": "sec-row-reduction.html#systems-eqns-example1b",
  "type": "Example",
  "number": "1.30",
  "title": "",
  "body": "  Solve using row operations.    We start by forming an augmented matrix: Eliminating a variable from an equation means producing a zero to the left of the line in an augmented matrix. First we produce zeros in the first column (i.e. we eliminate ) by subtracting multiples of the first row. This was made much easier by the fact that the top-left entry is equal to , so we can simply multiply the first row by the number below and subtract. In order to eliminate in the same way, we would like to produce a in the second column. We could divide the second row by , but this would produce fractions; instead, let s divide the third by . We swapped the second and third row just to keep things orderly. Now we translate this augmented matrix back into a system of equations: Hence ; back-substituting as in gives .   "
},
{
  "id": "subsec-row-reduction-elimination-5-7",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-5-7",
  "type": "Definition",
  "number": "1.31",
  "title": "",
  "body": " Row equivalence   Two matrices are called row equivalent if one can be obtained from the other by doing some number of row operations.   "
},
{
  "id": "subsec-row-reduction-elimination-5-9",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-5-9",
  "type": "Example",
  "number": "1.32",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System   Solve the following system of equations using row operations:     First we put our system of equations into an augmented matrix. We clear the entries below the top-left using row replacement. Now we clear the second entry from the last row. This translates back into the system of equations Our original system has the same solution set as this system. But this system has no solutions: there are no values of making the third equation true! We conclude that our original equation was inconsistent.   "
},
{
  "id": "subsec-row-reduction-echelon-forms-3",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-3",
  "type": "Definition",
  "number": "1.33",
  "title": "",
  "body": " Row echelon form   A matrix is in row echelon form if:  All zero rows are at the bottom.  The first nonzero entry of a row is to the right of the first nonzero entry of the row above.  Below the first nonzero entry of a row, all entries are zero.     "
},
{
  "id": "subsec-row-reduction-echelon-forms-5",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-5",
  "type": "Definition",
  "number": "1.34",
  "title": "",
  "body": " Pivot   A pivot is the first nonzero entry of a row of a matrix in row echelon form.   "
},
{
  "id": "subsec-row-reduction-echelon-forms-7",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-7",
  "type": "Definition",
  "number": "1.35",
  "title": "",
  "body": " Reduced row echelon form   A matrix is in reduced row echelon form if it is in row echelon form, and in addition:  Each pivot is equal to 1.  Each pivot is the only nonzero entry in its column.     "
},
{
  "id": "subsec-row-reduction-echelon-forms-10",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-10",
  "type": "Example",
  "number": "1.36",
  "title": "",
  "body": " The following matrices are in reduced row echelon form: The following matrices are in row echelon form but not reduced row echelon form: The following matrices are not in echelon form:   "
},
{
  "id": "subsec-row-reduction-echelon-forms-13",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-13",
  "type": "Remark",
  "number": "1.37",
  "title": "Why the word “pivot”?",
  "body": " Why the word pivot ?  Consider the following system of equations: We can visualize this system as a pair of lines in (red and blue, respectively, in the picture below) that intersect at the point . If we subtract the first equation from the second, we obtain the equation , or . This results in the system of equations: In terms of row operations on matrices, we can write this as:              What has happened geometrically is that the original blue line has been replaced with the new blue line . We can think of the blue line as rotating, or pivoting, around the solution . We used the pivot position in the matrix in order to make the blue line pivot like this. This is one possible explanation for the terminology pivot .  "
},
{
  "id": "row-reduction-works",
  "level": "2",
  "url": "sec-row-reduction.html#row-reduction-works",
  "type": "Theorem",
  "number": "1.38",
  "title": "",
  "body": "  Every matrix is row equivalent to one and only one matrix in reduced row echelon form.   "
},
{
  "id": "sec-row-reduction-6-3",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row reduction Gaussian elimination "
},
{
  "id": "algo-row-reduction",
  "level": "2",
  "url": "sec-row-reduction.html#algo-row-reduction",
  "type": "Recipe",
  "number": "1.39",
  "title": "Row Reduction.",
  "body": " Row Reduction  Row reduction algorithm  Gaussian elimination Row reduction     Step 1a: Swap the 1st row with a lower one so a leftmost nonzero entry is in the 1st row (if necessary).  Step 1b: Scale the 1st row so that its first nonzero entry is equal to 1.  Step 1c: Use row replacement so all entries below this 1 are 0.  Step 2a: Swap the 2nd row with a lower one so that the leftmost nonzero entry is in the 2nd row.  Step 2b: Scale the 2nd row so that its first nonzero entry is equal to 1.  Step 2c: Use row replacement so all entries below this 1 are 0.  Step 3a: Swap the 3rd row with a lower one so that the leftmost nonzero entry is in the 3rd row.  etc.  Last Step: Use row replacement to clear all entries above the pivots, starting with the last pivot.     "
},
{
  "id": "row-reduction-eg1",
  "level": "2",
  "url": "sec-row-reduction.html#row-reduction-eg1",
  "type": "Example",
  "number": "1.40",
  "title": "",
  "body": "  Row reduce this matrix:                The reduced row echelon form of the matrix is The reduced row echelon form of the matrix tells us that the only solution is    Animated slideshow of the row reduction in this example.     "
},
{
  "id": "defn-pivot-pos",
  "level": "2",
  "url": "sec-row-reduction.html#defn-pivot-pos",
  "type": "Definition",
  "number": "1.42",
  "title": "Pivots.",
  "body": " Pivots  Pivot position   A pivot position of a matrix is an entry that is a pivot of a row echelon form of that matrix.  A pivot column of a matrix is a column that contains a pivot position.   "
},
{
  "id": "pivot-pos-eg",
  "level": "2",
  "url": "sec-row-reduction.html#pivot-pos-eg",
  "type": "Example",
  "number": "1.43",
  "title": "Pivot Positions.",
  "body": " Pivot Positions   Find the pivot positions and pivot columns of this matrix     We saw in that a row echelon form of the matrix is The pivot positions of are the entries that become pivots in a row echelon form; they are marked in color below: The first, second, and third columns are pivot columns.   "
},
{
  "id": "row-reduction-eg-inconsistent",
  "level": "2",
  "url": "sec-row-reduction.html#row-reduction-eg-inconsistent",
  "type": "Example",
  "number": "1.44",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System   Solve the linear system using row reduction.     This row reduced matrix corresponds to the inconsistent system    "
},
{
  "id": "sec-row-reduction-6-16",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-6-16",
  "type": "Theorem",
  "number": "1.45",
  "title": "The Row Echelon Form of an Inconsistent System.",
  "body": " The Row Echelon Form of an Inconsistent System  System of linear equations inconsistent RREF criterion  An augmented matrix corresponds to an inconsistent system of equations if and only if the last column (i.e., the augmented column) is a pivot column .  "
},
{
  "id": "sec-row-reduction-6-19",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-6-19",
  "type": "Example",
  "number": "1.46",
  "title": "A System with Many Solutions.",
  "body": " A System with Many Solutions   Solve the linear system using row reduction.     This row reduced matrix corresponds to the linear system In what sense is the system solved? We will see in .   "
},
{
  "id": "sec-parametric-form",
  "level": "1",
  "url": "sec-parametric-form.html",
  "type": "Section",
  "number": "1.3",
  "title": "Parametric Form",
  "body": " Parametric Form    Learn to express the solution set of a system of linear equations in parametric form.  Understand the three possibilities for the number of solutions of a system of linear equations.  Recipe: parametric form.  Vocabulary word:  free variable .     Free Variables  There is one possibility for the row reduced form of a matrix that we did not see in .   A System with a Free Variable  Consider the linear system We solve it using row reduction: This row reduced matrix corresponds to the linear system In what sense is the system solved? We rewrite as For any value of , there is exactly one value of and that make the equations true. But we are free to choose any value of .  We have found all solutions: it is the set of all values , where This is called the parametric form for the solution to the linear system. The variable is called a free variable .   The solution set (the yellow line) of the linear system in . There is a unique solution for every value of .      Given the parametric form for the solution to a linear system, we can obtain specific solutions by replacing the free variables with any specific real numbers. For instance, setting in the last example gives the solution , and setting gives the solution .    Free variable   Consider a consistent system of equations in the variables . Let be a row echelon form of the augmented matrix for this system.  We say that is a free variable if its corresponding column in is not a pivot column .    In the above , the variable was free because the reduced row echelon form matrix was In the matrix the free variables are and . (The augmented column is not free because it does not correspond to a variable.)   Parametric form  Parametric form  System of linear equations parametric form of Parametric form  The parametric form of the solution set of a consistent system of linear equations is obtained as follows.  Write the system as an augmented matrix.  Row reduce to reduced row echelon form.  Write the corresponding (solved) system of linear equations.  Move all free variables to the right hand side of the equations.     Moving the free variables to the right hand side of the equations amounts to solving for the non-free variables (the ones that come pivot columns) in terms of the free variables. One can think of the free variables as being independent variables, and the non-free variables being dependent .   Implicit Versus Parameterized Equations  Implicit equation  Parameterized equation  The solution set of the system of linear equations is a line in , as we saw in . These equations are called the implicit equations for the line: the line is defined implicitly as the simultaneous solutions to those two equations.  The parametric form can be written as follows: This called a parameterized equation for the same line. It is an expression that produces all points of the line in terms of one parameter, .  One should think of a system of equations as being an implicit equation for its solution set, and of the parametric form as being the parameterized equation for the same set. The parameteric form is much more explicit: it gives a concrete recipe for producing all solutions.    You can choose any value for the free variables in a (consistent) linear system.  Free variables come from the columns without pivots in a matrix in row echelon form.    Suppose that the reduced row echelon form of the matrix for a linear system in four variables is The free variables are and : they are the ones whose columns are not pivot columns.  This translates into the system of equations What happened to ? It is a free variable, but no other variable depends on it. The general solution to the system is for any values of and . For instance, is a solution (with ), and is a solution (with ).    A Parameterized Plane  The system of one linear equation comes from the matrix which is already in reduced row echelon form. The free variables are and . The parametric form for the general solution is for any values of and . This is the parametric equation for a plane in .   A plane described by two parameters and . Any point on the plane is obtained by substituting suitable values for and .       Number of Solutions  System of linear equations number of solutions of  Solution set size of  There are three possibilities for the reduced row echelon form of the augmented matrix of a linear system.  The last column is a pivot column. In this case, the system is inconsistent . There are zero solutions, i.e., the solution set is empty. For example, the matrix comes from a linear system with no solutions.  Every column except the last column is a pivot column. In this case, the system has a unique solution. For example, the matrix tells us that the unique solution is .  The last column is not a pivot column, and some other column is not a pivot column either. In this case, the system has infinitely many solutions, corresponding to the infinitely many possible values of the free variable(s). For example, in the system corresponding to the matrix any values for and yield a solution to the system of equations.     "
},
{
  "id": "sec-parametric-form-2",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  Learn to express the solution set of a system of linear equations in parametric form.  Understand the three possibilities for the number of solutions of a system of linear equations.  Recipe: parametric form.  Vocabulary word:  free variable .   "
},
{
  "id": "row-reduction-eg-free",
  "level": "2",
  "url": "sec-parametric-form.html#row-reduction-eg-free",
  "type": "Example",
  "number": "1.47",
  "title": "A System with a Free Variable.",
  "body": " A System with a Free Variable  Consider the linear system We solve it using row reduction: This row reduced matrix corresponds to the linear system In what sense is the system solved? We rewrite as For any value of , there is exactly one value of and that make the equations true. But we are free to choose any value of .  We have found all solutions: it is the set of all values , where This is called the parametric form for the solution to the linear system. The variable is called a free variable .   The solution set (the yellow line) of the linear system in . There is a unique solution for every value of .    "
},
{
  "id": "subsec-free-variables-5",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-5",
  "type": "Definition",
  "number": "1.49",
  "title": "",
  "body": " Free variable   Consider a consistent system of equations in the variables . Let be a row echelon form of the augmented matrix for this system.  We say that is a free variable if its corresponding column in is not a pivot column .   "
},
{
  "id": "subsec-free-variables-7",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-7",
  "type": "Recipe",
  "number": "1.50",
  "title": "Parametric form.",
  "body": " Parametric form  Parametric form  System of linear equations parametric form of Parametric form  The parametric form of the solution set of a consistent system of linear equations is obtained as follows.  Write the system as an augmented matrix.  Row reduce to reduced row echelon form.  Write the corresponding (solved) system of linear equations.  Move all free variables to the right hand side of the equations.    "
},
{
  "id": "subsec-free-variables-9",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-9",
  "type": "Note",
  "number": "1.51",
  "title": "Implicit Versus Parameterized Equations.",
  "body": " Implicit Versus Parameterized Equations  Implicit equation  Parameterized equation  The solution set of the system of linear equations is a line in , as we saw in . These equations are called the implicit equations for the line: the line is defined implicitly as the simultaneous solutions to those two equations.  The parametric form can be written as follows: This called a parameterized equation for the same line. It is an expression that produces all points of the line in terms of one parameter, .  One should think of a system of equations as being an implicit equation for its solution set, and of the parametric form as being the parameterized equation for the same set. The parameteric form is much more explicit: it gives a concrete recipe for producing all solutions.  "
},
{
  "id": "subsec-free-variables-11",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-11",
  "type": "Example",
  "number": "1.52",
  "title": "",
  "body": " Suppose that the reduced row echelon form of the matrix for a linear system in four variables is The free variables are and : they are the ones whose columns are not pivot columns.  This translates into the system of equations What happened to ? It is a free variable, but no other variable depends on it. The general solution to the system is for any values of and . For instance, is a solution (with ), and is a solution (with ).  "
},
{
  "id": "subsec-free-variables-12",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-12",
  "type": "Example",
  "number": "1.53",
  "title": "A Parameterized Plane.",
  "body": " A Parameterized Plane  The system of one linear equation comes from the matrix which is already in reduced row echelon form. The free variables are and . The parametric form for the general solution is for any values of and . This is the parametric equation for a plane in .   A plane described by two parameters and . Any point on the plane is obtained by substituting suitable values for and .    "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors",
  "body": " Vectors    Learn how to add and scale vectors in , both algebraically and geometrically.  Understand linear combinations geometrically.  Pictures: vector addition, vector subtraction, linear combinations.  Vocabulary words:  vector , linear combination .     Vectors in  We have been drawing points in as dots in the line, plane, space, etc. We can also draw them as arrows . Since we have two geometric interpretations in mind, we now discuss the relationship between the two points of view.   Points and Vectors  Point  Vector definition of   Again, a point in is drawn as a dot.             A vector is a point in , drawn as an arrow.               The difference is purely psychological: points and vectors are both just lists of numbers .   A vector in , by coordinates   A vector in , and its coordinates. Drag the arrow head and tail.     When we think of a point in as a vector, we will usually write it vertically, like a matrix with one column: . We will also write for the zero vector. A vector  The zero vector   Why make the distinction between points and vectors? A vector need not start at the origin: it can be located anywhere ! In other words, an arrow is determined by its length and its direction, not by its location. For instance, these arrows all represent the vector .              Unless otherwise specified, we will assume that all vectors start at the origin.   Vectors makes sense in the real world: many physical quantities, such as velocity, are represented as vectors. But it makes more sense to think of the velocity of a car as being located at the car.   Some authors use boldface letters to represent vectors, as in , or use arrows, as in . As it is usually clear from context if a letter represents a vector, we do not decorate vectors in this way.    Another way to think about a vector is as a difference between two points, or the arrow from one point to another. For instance, is the arrow from to .               Vector Algebra and Geometry  Here we learn how to add vectors together and how to multiply vectors by numbers, both algebraically and geometrically.   Vector addition and scalar multiplication    We can add two vectors together: . Vector addition   We can multiply, or scale , a vector by a real number : Vector scalar multiplication  . We call a scalar to distinguish it from a vector. If is a vector and is a scalar, then is called a scalar multiple of .  Addition and scalar multiplication work in the same way for vectors of length .     .    The Parallelogram Law for Vector Addition  Geometrically, the sum of two vectors is obtained as follows: place the tail of at the head of . Then is the vector whose tail is the tail of and whose head is the head of . Doing this both ways creates a parallelogram. For example, . Vector addition parallelogram law   Why? The width of is the sum of the widths, and likewise with the heights.              The parallelogram law for vector addition   The parallelogram law for vector addition. Click and drag the heads of and .       Vector Subtraction  Vector subtraction picture of  Geometrically, the difference of two vectors is obtained as follows: place the tail of and at the same point. Then is the vector from the head of to the head of . For example, .  Why? If you add to , you get .              Vector subtraction   Vector subtraction. Click and drag the heads of and .       Scalar Multiplication  A scalar multiple of a vector has the same (or opposite) direction, but a different length. For instance, is the vector in the direction of but twice as long, and is the vector in the opposite direction of , but half as long. Note that the set of all scalar multiples of a (nonzero) vector is a line . Vector scalar multiplication picture of               Scalar multiplication   Scalar multiplication. Drag the slider to change the scalar.        Linear Combinations  We can add and scale vectors in the same equation.   Linear combination definition of  Vector linear combination of Linear combination   Let be scalars, and let be vectors in . The vector in  is called a linear combination of the vectors , with weights or coefficients  .    Geometrically, a linear combination is obtained by stretching \/ shrinking the vectors according to the coefficients, then adding them together using the parallelogram law.   Let and . Here are some linear combinations of and , drawn as points.              Linear combination two vectors, picture of The locations of these points are found using the parallelogram law for vector addition. Any vector on the plane is a linear combination of and , with suitable coefficients.    Linear combinations of two vectors in : move the sliders to change the coefficients of and . Note that any vector on the plane can be obtained as a linear combination of with suitable coefficients.     Linear combinations of three vectors   Linear combinations of three vectors: move the sliders to change the coefficients of . Note how the parallelogram law for addition of three vectors is more of a parallepiped law .      Linear Combinations of a Single Vector  Linear combination single vector, picture of  A linear combination of a single vector is just a scalar multiple of . So some examples include The set of all linear combinations is the line through . (Unless , in which case any scalar multiple of is again .)               Linear Combinations of Collinear Vectors  Linear combination collinear vectors, picture of  The set of all linear combinations of the vectors is the line containing both vectors.             The difference between this and the previous is that both vectors lie on the same line. Hence any scalar multiples of lie on that line, as does their sum.    Linear combinations of two collinear vectors   Linear combinations of two collinear vectors in . Move the sliders to change the coefficients of . Note that there is no way to escape the line.      "
},
{
  "id": "sec-vectors-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  Learn how to add and scale vectors in , both algebraically and geometrically.  Understand linear combinations geometrically.  Pictures: vector addition, vector subtraction, linear combinations.  Vocabulary words:  vector , linear combination .   "
},
{
  "id": "subsec-vectors-in-rn-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-vectors-in-rn-3",
  "type": "Definition",
  "number": "2.2",
  "title": "Points and Vectors.",
  "body": " Points and Vectors  Point  Vector definition of   Again, a point in is drawn as a dot.             A vector is a point in , drawn as an arrow.              "
},
{
  "id": "subsec-vectors-in-rn-5",
  "level": "2",
  "url": "sec-vectors.html#subsec-vectors-in-rn-5",
  "type": "Interactive",
  "number": "2.3",
  "title": "A vector in <span class=\"process-math\">\\(\\R^3\\text{,}\\)<\/span> by coordinates.",
  "body": " A vector in , by coordinates   A vector in , and its coordinates. Drag the arrow head and tail.    "
},
{
  "id": "subsec-vectors-in-rn-11",
  "level": "2",
  "url": "sec-vectors.html#subsec-vectors-in-rn-11",
  "type": "Remark",
  "number": "2.5",
  "title": "",
  "body": " Some authors use boldface letters to represent vectors, as in , or use arrows, as in . As it is usually clear from context if a letter represents a vector, we do not decorate vectors in this way.  "
},
{
  "id": "vectors-diff-pts",
  "level": "2",
  "url": "sec-vectors.html#vectors-diff-pts",
  "type": "Note",
  "number": "2.6",
  "title": "",
  "body": " Another way to think about a vector is as a difference between two points, or the arrow from one point to another. For instance, is the arrow from to .            "
},
{
  "id": "subsec-vector-algebra-and-geometry-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-3",
  "type": "Definition",
  "number": "2.7",
  "title": "Vector addition and scalar multiplication.",
  "body": " Vector addition and scalar multiplication    We can add two vectors together: . Vector addition   We can multiply, or scale , a vector by a real number : Vector scalar multiplication  . We call a scalar to distinguish it from a vector. If is a vector and is a scalar, then is called a scalar multiple of .  Addition and scalar multiplication work in the same way for vectors of length .   "
},
{
  "id": "subsec-vector-algebra-and-geometry-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-4",
  "type": "Example",
  "number": "2.8",
  "title": "",
  "body": " .  "
},
{
  "id": "subsec-vector-algebra-and-geometry-5-5",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-5-5",
  "type": "Interactive",
  "number": "2.9",
  "title": "The parallelogram law for vector addition.",
  "body": " The parallelogram law for vector addition   The parallelogram law for vector addition. Click and drag the heads of and .    "
},
{
  "id": "subsec-vector-algebra-and-geometry-6-6",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-6-6",
  "type": "Interactive",
  "number": "2.11",
  "title": "Vector subtraction.",
  "body": " Vector subtraction   Vector subtraction. Click and drag the heads of and .    "
},
{
  "id": "subsec-vector-algebra-and-geometry-7-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-7-4",
  "type": "Interactive",
  "number": "2.13",
  "title": "Scalar multiplication.",
  "body": " Scalar multiplication   Scalar multiplication. Drag the slider to change the scalar.    "
},
{
  "id": "subsec-linear-combinations-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-3",
  "type": "Definition",
  "number": "2.15",
  "title": "",
  "body": " Linear combination definition of  Vector linear combination of Linear combination   Let be scalars, and let be vectors in . The vector in  is called a linear combination of the vectors , with weights or coefficients  .   "
},
{
  "id": "vectors-eg-lincombo-plane",
  "level": "2",
  "url": "sec-vectors.html#vectors-eg-lincombo-plane",
  "type": "Example",
  "number": "2.16",
  "title": "",
  "body": " Let and . Here are some linear combinations of and , drawn as points.              Linear combination two vectors, picture of The locations of these points are found using the parallelogram law for vector addition. Any vector on the plane is a linear combination of and , with suitable coefficients.  "
},
{
  "id": "subsec-linear-combinations-6",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-6",
  "type": "Figure",
  "number": "2.17",
  "title": "",
  "body": " Linear combinations of two vectors in : move the sliders to change the coefficients of and . Note that any vector on the plane can be obtained as a linear combination of with suitable coefficients.   "
},
{
  "id": "subsec-linear-combinations-7",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-7",
  "type": "Interactive",
  "number": "2.18",
  "title": "Linear combinations of three vectors.",
  "body": " Linear combinations of three vectors   Linear combinations of three vectors: move the sliders to change the coefficients of . Note how the parallelogram law for addition of three vectors is more of a parallepiped law .    "
},
{
  "id": "subsec-linear-combinations-8",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-8",
  "type": "Example",
  "number": "2.20",
  "title": "Linear Combinations of a Single Vector.",
  "body": " Linear Combinations of a Single Vector  Linear combination single vector, picture of  A linear combination of a single vector is just a scalar multiple of . So some examples include The set of all linear combinations is the line through . (Unless , in which case any scalar multiple of is again .)             "
},
{
  "id": "subsec-linear-combinations-9",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-9",
  "type": "Example",
  "number": "2.21",
  "title": "Linear Combinations of Collinear Vectors.",
  "body": " Linear Combinations of Collinear Vectors  Linear combination collinear vectors, picture of  The set of all linear combinations of the vectors is the line containing both vectors.             The difference between this and the previous is that both vectors lie on the same line. Hence any scalar multiples of lie on that line, as does their sum.  "
},
{
  "id": "subsec-linear-combinations-10",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-10",
  "type": "Interactive",
  "number": "2.22",
  "title": "Linear combinations of two collinear vectors.",
  "body": " Linear combinations of two collinear vectors   Linear combinations of two collinear vectors in . Move the sliders to change the coefficients of . Note that there is no way to escape the line.    "
},
{
  "id": "sec-spans",
  "level": "1",
  "url": "sec-spans.html",
  "type": "Section",
  "number": "2.2",
  "title": "Vector Equations and Spans",
  "body": " Vector Equations and Spans    Understand the equivalence between a system of linear equations and a vector equation.  Learn the definition of , and how to draw pictures of spans.  Recipe: solve a vector equation using augmented matrices \/ decide if a vector is in a span.  Pictures: an inconsistent system of equations, a consistent system of equations, spans in and .  Vocabulary word:  vector equation .  Essential vocabulary word:  span .     Vector Equations   Vector equation equivalence with system of equations An equation involving vectors with coordinates is the same as equations involving only numbers. For example, the equation simplifies to . For two vectors to be equal, all of their coordinates must be equal, so this is just the system of linear equations    Vector equation definition of   A vector equation is an equation involving a linear combination of vectors with possibly unknown coefficients.     Asking whether or not a vector equation has a solution is the same as asking if a given vector is a linear combination of some other given vectors.   For example the vector equation above is asking if the vector is a linear combination of the vectors and .  The thing we really care about is solving systems of linear equations, not solving vector equations. The whole point of vector equations is that they give us a different, and more geometric, way of viewing systems of linear equations.   A Picture of a Consistent System  Vector equation consistent System of linear equations, consistent  Vector equation inconsistent System of linear equations, inconsistent  System of linear equations consistent picture of  Below we will show that the above system of equations is consistent. Equivalently, this means that the above vector equation has a solution. In other words, there is a linear combination of and that equals . We can visualize the last statement geometrically. Therefore, the following gives a picture of a consistent system of equations . Compare with below, which shows a picture of an inconsistent system.    A picture of the above vector equation. Try to solve the equation geometrically by moving the sliders.    In order to actually solve the vector equation , one has to solve the system of linear equations This means forming the augmented matrix and row reducing. Note that the columns of the augmented matrix are the vectors from the original vector equation , so it is not actually necessary to write the system of equations: one can go directly from the vector equation to the augmented matrix by smooshing the vectors together . In the following we carry out the row reduction and find the solution.    Is a linear combination of and ?    As discussed above, this question boils down to a row reduction: . From this we see that the equation is consistent, and the solution is and . We conclude that is indeed a linear combination of and , with coefficients and : .     Solving a vector equation  Vector equation solving  In general, the vector equation where are vectors in and are unknown scalars, has the same solution set as the linear system with augmented matrix whose columns are the s and the s.   Now we have three equivalent ways of thinking about a linear system:  As a system of equations:   As an augmented matrix:   As a vector equation ( ):   The third is geometric in nature: it lends itself to drawing pictures.    Spans  It will be important to know what are all linear combinations of a set of vectors in . In other words, we would like to understand the set of all vectors in such that the vector equation (in the unknowns ) has a solution (i.e. is consistent).   Span definition of     Essential definition   Let be vectors in . The span of is the collection of all linear combinations of , and is denoted . In symbols: Span of vectors  We also say that is the subset spanned by or generated by the vectors .     The above is the first of several essential definitions that we will see in this textbook. They are essential in that they form the essence of the subject of linear algebra: learning linear algebra means (in part) learning these definitions. All of the definitions are important, but it is essential that you learn and understand the definitions marked as such.   Set Builder Notation  Set builder notation  Subset set builder notation  The notation Set builder notation  reads as: the set of all things of the form such that are in . The vertical line is such that ; everything to the left of it is the set of all things of this form , and everything to the right is the condition that those things must satisfy to be in the set. Specifying a set in this way is called set builder notation .  All mathematical notation is only shorthand: any sequence of symbols must translate into a usual sentence.    Three characterizations of consistency  System of linear equations consistent span criterion  Now we have three equivalent ways of making the same statement:  A vector is in the span of .  The vector equation has a solution.  The linear system with augmented matrix is consistent.     Equivalent means that, for any given list of vectors , either all three statements are true, or all three statements are false.   This is a picture of an inconsistent linear system: the vector on the right-hand side of the equation is not in the span of . Convince yourself of this by trying to solve the equation by moving the sliders, and by row reduction. Compare .  System of linear equations inconsistent picture of     Pictures of Spans  Span pictures of  Drawing a picture of is the same as drawing a picture of all linear combinations of .   Pictures of spans in .               Pictures of spans in . The span of two noncollinear vectors is the plane containing the origin and the heads of the vectors. Note that three coplanar (but not collinear) vectors span a plane and not a 3-space, just as two collinear vectors span a line and not a plane.               Span of two vectors in   Interactive picture of a span of two vectors in . Check Show x.v + y.w and move the sliders to see how every point in the violet region is in fact a linear combination of the two vectors.      Span of two vectors in   Interactive picture of a span of two vectors in . Check Show x.v + y.w and move the sliders to see how every point in the violet region is in fact a linear combination of the two vectors.      Span of three vectors in   Interactive picture of a span of three vectors in . Check Show x.v + y.w + z.u and move the sliders to see how every point in the violet region is in fact a linear combination of the three vectors.       "
},
{
  "id": "sec-spans-2",
  "level": "2",
  "url": "sec-spans.html#sec-spans-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  Understand the equivalence between a system of linear equations and a vector equation.  Learn the definition of , and how to draw pictures of spans.  Recipe: solve a vector equation using augmented matrices \/ decide if a vector is in a span.  Pictures: an inconsistent system of equations, a consistent system of equations, spans in and .  Vocabulary word:  vector equation .  Essential vocabulary word:  span .   "
},
{
  "id": "subsec-vector-equations-3",
  "level": "2",
  "url": "sec-spans.html#subsec-vector-equations-3",
  "type": "Definition",
  "number": "2.24",
  "title": "",
  "body": " Vector equation definition of   A vector equation is an equation involving a linear combination of vectors with possibly unknown coefficients.   "
},
{
  "id": "subsec-vector-equations-7",
  "level": "2",
  "url": "sec-spans.html#subsec-vector-equations-7",
  "type": "Note",
  "number": "2.25",
  "title": "A Picture of a Consistent System.",
  "body": " A Picture of a Consistent System  Vector equation consistent System of linear equations, consistent  Vector equation inconsistent System of linear equations, inconsistent  System of linear equations consistent picture of  Below we will show that the above system of equations is consistent. Equivalently, this means that the above vector equation has a solution. In other words, there is a linear combination of and that equals . We can visualize the last statement geometrically. Therefore, the following gives a picture of a consistent system of equations . Compare with below, which shows a picture of an inconsistent system.  "
},
{
  "id": "vectors-figure-consistent",
  "level": "2",
  "url": "sec-spans.html#vectors-figure-consistent",
  "type": "Figure",
  "number": "2.26",
  "title": "",
  "body": " A picture of the above vector equation. Try to solve the equation geometrically by moving the sliders.   "
},
{
  "id": "vectors-example-consistent",
  "level": "2",
  "url": "sec-spans.html#vectors-example-consistent",
  "type": "Example",
  "number": "2.27",
  "title": "",
  "body": "  Is a linear combination of and ?    As discussed above, this question boils down to a row reduction: . From this we see that the equation is consistent, and the solution is and . We conclude that is indeed a linear combination of and , with coefficients and : .   "
},
{
  "id": "subsec-vector-equations-11",
  "level": "2",
  "url": "sec-spans.html#subsec-vector-equations-11",
  "type": "Recipe",
  "number": "2.28",
  "title": "Solving a vector equation.",
  "body": " Solving a vector equation  Vector equation solving  In general, the vector equation where are vectors in and are unknown scalars, has the same solution set as the linear system with augmented matrix whose columns are the s and the s.  "
},
{
  "id": "vectors-defn-span",
  "level": "2",
  "url": "sec-spans.html#vectors-defn-span",
  "type": "Definition",
  "number": "2.29",
  "title": "",
  "body": " Span definition of     Essential definition   Let be vectors in . The span of is the collection of all linear combinations of , and is denoted . In symbols: Span of vectors  We also say that is the subset spanned by or generated by the vectors .    "
},
{
  "id": "set-builder-notation",
  "level": "2",
  "url": "sec-spans.html#set-builder-notation",
  "type": "Note",
  "number": "2.30",
  "title": "Set Builder Notation.",
  "body": " Set Builder Notation  Set builder notation  Subset set builder notation  The notation Set builder notation  reads as: the set of all things of the form such that are in . The vertical line is such that ; everything to the left of it is the set of all things of this form , and everything to the right is the condition that those things must satisfy to be in the set. Specifying a set in this way is called set builder notation .  All mathematical notation is only shorthand: any sequence of symbols must translate into a usual sentence.  "
},
{
  "id": "subsec-spans-6",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-6",
  "type": "Note",
  "number": "2.31",
  "title": "Three characterizations of consistency.",
  "body": " Three characterizations of consistency  System of linear equations consistent span criterion  Now we have three equivalent ways of making the same statement:  A vector is in the span of .  The vector equation has a solution.  The linear system with augmented matrix is consistent.    "
},
{
  "id": "subsec-spans-7",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Equivalent "
},
{
  "id": "vectors-fig-inconsistent",
  "level": "2",
  "url": "sec-spans.html#vectors-fig-inconsistent",
  "type": "Figure",
  "number": "2.32",
  "title": "",
  "body": " This is a picture of an inconsistent linear system: the vector on the right-hand side of the equation is not in the span of . Convince yourself of this by trying to solve the equation by moving the sliders, and by row reduction. Compare .  System of linear equations inconsistent picture of   "
},
{
  "id": "subsec-spans-9-4",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-4",
  "type": "Figure",
  "number": "2.33",
  "title": "",
  "body": " Pictures of spans in .             "
},
{
  "id": "subsec-spans-9-5",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-5",
  "type": "Figure",
  "number": "2.34",
  "title": "",
  "body": " Pictures of spans in . The span of two noncollinear vectors is the plane containing the origin and the heads of the vectors. Note that three coplanar (but not collinear) vectors span a plane and not a 3-space, just as two collinear vectors span a line and not a plane.             "
},
{
  "id": "subsec-spans-9-6",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-6",
  "type": "Interactive",
  "number": "2.35",
  "title": "Span of two vectors in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Span of two vectors in   Interactive picture of a span of two vectors in . Check Show x.v + y.w and move the sliders to see how every point in the violet region is in fact a linear combination of the two vectors.    "
},
{
  "id": "subsec-spans-9-7",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-7",
  "type": "Interactive",
  "number": "2.37",
  "title": "Span of two vectors in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Span of two vectors in   Interactive picture of a span of two vectors in . Check Show x.v + y.w and move the sliders to see how every point in the violet region is in fact a linear combination of the two vectors.    "
},
{
  "id": "subsec-spans-9-8",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-8",
  "type": "Interactive",
  "number": "2.39",
  "title": "Span of three vectors in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Span of three vectors in   Interactive picture of a span of three vectors in . Check Show x.v + y.w + z.u and move the sliders to see how every point in the violet region is in fact a linear combination of the three vectors.    "
},
{
  "id": "chap-matrices",
  "level": "1",
  "url": "chap-matrices.html",
  "type": "Chapter",
  "number": "3",
  "title": "Linear Transformations and Matrix Algebra",
  "body": " Linear Transformations and Matrix Algebra    Learn about linear transformations and their relationship to matrices.   In practice, one is often lead to ask questions about the geometry of a transformation : a function that takes an input and produces an output. This kind of question can be answered by linear algebra if the transformation can be expressed by a matrix.   Suppose you are building a robot arm with three joints that can move its hand around a plane, as in the following picture.         Define a transformation as follows: is the position of the hand when the joints are rotated by angles , respectively. The output of tells you where the hand will be on the plane when the joints are set at the given input angles.  Unfortunately, this kind of function does not come from a matrix, so one cannot use linear algebra to answer questions about this function. In fact, these functions are rather complicated; their study is the subject of inverse kinematics .   In this chapter, we will be concerned with the relationship between matrices and transformations. In , we will consider the equation as a function with independent variable and dependent variable , and we draw pictures accordingly. We spend some time studying transformations in the abstract, and asking questions about a transformation, like whether it is one-to-one and\/or onto ( ). In we will answer the question: when exactly can a transformation be expressed by a matrix? We then present matrix multiplication as a special case of composition of transformations ( ). This leads to the study of matrix algebra : that is, to what extent one can do arithmetic with matrices in the place of numbers. With this in place, we learn to solve matrix equations by dividing by a matrix in .    "
},
{
  "id": "chap-matrices-2-1",
  "level": "2",
  "url": "chap-matrices.html#chap-matrices-2-1",
  "type": "Primary Goal",
  "number": "3.1",
  "title": "",
  "body": " Learn about linear transformations and their relationship to matrices.  "
},
{
  "id": "chap-matrices-2-3",
  "level": "2",
  "url": "chap-matrices.html#chap-matrices-2-3",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " Suppose you are building a robot arm with three joints that can move its hand around a plane, as in the following picture.         Define a transformation as follows: is the position of the hand when the joints are rotated by angles , respectively. The output of tells you where the hand will be on the plane when the joints are set at the given input angles.  Unfortunately, this kind of function does not come from a matrix, so one cannot use linear algebra to answer questions about this function. In fact, these functions are rather complicated; their study is the subject of inverse kinematics .  "
},
{
  "id": "chap-determinant",
  "level": "1",
  "url": "chap-determinant.html",
  "type": "Chapter",
  "number": "4",
  "title": "Determinants",
  "body": " Determinants   We begin by recalling the overall structure of this book:  Solve the matrix equation .  Solve the matrix equation , where is a number.  Approximately solve the matrix equation .  At this point we have said all that we will say about the first part. This chapter belongs to the second.   Learn about determinants: their computation and their properties.   The determinant of a square matrix is a number . This incredible quantity is one of the most important invariants of a matrix; as such, it forms the basis of most advanced computations involving matrices.  In , we will define the determinant in terms of its behavior with respect to row operations. The determinant satisfies many wonderful properties: for instance, if and only if is invertible. We will discuss some of these properties in as well. In , we will give a recursive formula for the determinant of a matrix. This formula is very useful, for instance, when taking the determinant of a matrix with unknown entries; this will be important in . Finally, in , we will relate determinants to volumes. This gives a geometric interpretation for determinants, and explains why the determinant is defined the way it is. This interpretation of determinants is a crucial ingredient in the change-of-variables formula in multivariable calculus.    "
},
{
  "id": "chap-determinant-2-2",
  "level": "2",
  "url": "chap-determinant.html#chap-determinant-2-2",
  "type": "Primary Goal",
  "number": "4.1",
  "title": "",
  "body": " Learn about determinants: their computation and their properties.  "
},
{
  "id": "chap-eigenvalues",
  "level": "1",
  "url": "chap-eigenvalues.html",
  "type": "Chapter",
  "number": "5",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors    Solve the matrix equation    This chapter constitutes the core of any first course on linear algebra: eigenvalues and eigenvectors play a crucial role in most real-world applications of the subject.   In a population of rabbits,  half of the newborn rabbits survive their first year;  of those, half survive their second year;  the maximum life span is three years;  rabbits produce 0, 6, 8 baby rabbits in their first, second, and third years, respectively.  What is the asymptotic behavior of this system? What will the rabbit population look like in 100 years?   Left: the population of rabbits in a given year. Right: the proportions of rabbits in that year. Choose any values you like for the starting population, and click Advance 1 year several times. What do you notice about the long-term behavior of the ratios? This phenomenon turns out to be due to eigenvectors.     In , we will define eigenvalues and eigenvectors, and show how to compute the latter; in we will learn to compute the former. In we introduce the notion of similar matrices, and demonstrate that similar matrices do indeed behave similarly. In we study matrices that are similar to diagonal matrices and in we study matrices that are similar to rotation-scaling matrices, thus gaining a solid geometric understanding of large classes of matrices. Finally, we spend presenting a common kind of application of eigenvalues and eigenvectors to real-world problems, including searching the Internet using Google s PageRank algorithm.    "
},
{
  "id": "chap-eigenvalues-2-1",
  "level": "2",
  "url": "chap-eigenvalues.html#chap-eigenvalues-2-1",
  "type": "Primary Goal",
  "number": "5.1",
  "title": "",
  "body": " Solve the matrix equation   "
},
{
  "id": "chap-eigenvalues-2-3",
  "level": "2",
  "url": "chap-eigenvalues.html#chap-eigenvalues-2-3",
  "type": "Example",
  "number": "5.2",
  "title": "",
  "body": " In a population of rabbits,  half of the newborn rabbits survive their first year;  of those, half survive their second year;  the maximum life span is three years;  rabbits produce 0, 6, 8 baby rabbits in their first, second, and third years, respectively.  What is the asymptotic behavior of this system? What will the rabbit population look like in 100 years?   Left: the population of rabbits in a given year. Right: the proportions of rabbits in that year. Choose any values you like for the starting population, and click Advance 1 year several times. What do you notice about the long-term behavior of the ratios? This phenomenon turns out to be due to eigenvectors.    "
},
{
  "id": "chap-orthogonality",
  "level": "1",
  "url": "chap-orthogonality.html",
  "type": "Chapter",
  "number": "6",
  "title": "Orthogonality",
  "body": " Orthogonality   Let us recall one last time the structure of this book:  Solve the matrix equation .  Solve the matrix equation , where is a number.  Approximately solve the matrix equation .  We have now come to the third part.   Approximately solve the matrix equation    Finding approximate solutions of equations generally requires computing the closest vector on a subspace to a given vector. This becomes an orthogonality problem: one needs to know which vectors are perpendicular to the subspace.             First we will define orthogonality and learn to find orthogonal complements of subspaces in and . The core of this chapter is , in which we discuss the orthogonal projection of a vector onto a subspace; this is a method of calculating the closest vector on a subspace to a given vector. These calculations become easier in the presence of an orthogonal set, as we will see in . In we will present the least-squares method of approximately solving systems of equations, and we will give applications to data modeling.   In data modeling, one often asks: what line is my data supposed to lie on? This can be solved using a simple application of the least-squares method.               Gauss invented the method of least squares to find a best-fit ellipse: he correctly predicted the (elliptical) orbit of the asteroid Ceres as it passed behind the sun in 1801.                "
},
{
  "id": "chap-orthogonality-2-2",
  "level": "2",
  "url": "chap-orthogonality.html#chap-orthogonality-2-2",
  "type": "Primary Goal",
  "number": "6.1",
  "title": "",
  "body": " Approximately solve the matrix equation   "
},
{
  "id": "chap-orthogonality-2-6",
  "level": "2",
  "url": "chap-orthogonality.html#chap-orthogonality-2-6",
  "type": "Example",
  "number": "6.2",
  "title": "",
  "body": " In data modeling, one often asks: what line is my data supposed to lie on? This can be solved using a simple application of the least-squares method.             "
},
{
  "id": "chap-orthogonality-2-7",
  "level": "2",
  "url": "chap-orthogonality.html#chap-orthogonality-2-7",
  "type": "Example",
  "number": "6.3",
  "title": "",
  "body": " Gauss invented the method of least squares to find a best-fit ellipse: he correctly predicted the (elliptical) orbit of the asteroid Ceres as it passed behind the sun in 1801.             "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  The following table defines the notation used in this book. Page numbers or references refer to the first appearance of each symbol.   "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "B",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document s overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work s title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document s license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:    Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document s license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version s license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation s users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document s Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy s public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
