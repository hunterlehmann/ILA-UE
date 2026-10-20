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
  "body": " Contributors to this textbook   Dan Margalit Department of Mathematics Vanderbilt University dan.margalit@vanderbilt.edu  Joseph Rabinoff Department of Mathematics Duke University jdr@math.duke.edu  Larry Rolen Department of Mathematics Vanderbilt University larry.rolen@vanderbilt.edu  Hunter Lehmann Department of Mathematics Georgia Institute of Technology hlehmann3@gatech.edu  Chris Jankowski Department of Mathematics Georgia Institute of Technology cjankowski3@gatech.edu   Rabinoff contributed all of the original figures, demos, and technical aspects of the project, as detailed below. Hunter Lehmann worked to update the project to the latest version of PreTeXt and add accessibility features throughout the text.  The textbook was originally written in XML and compiled using a variant of Robert Beezer's MathBook XML , as heavily modified by Rabinoff.  The mathematical content of the textbook was written in LaTeX, then converted to HTML-friendly SVG format using a collection of scripts called PreTeX: this was coded by Rabinoff and depends heavily on Inkscape for pdf decoding and FontForge for font embedding. The figures are written in PGF\/TikZ and processed with PreTeX as well.  The demonstrations were written in JavaScript+WebGL using Steven Wittens' brilliant framework called MathBox .  All source code can be found on GitHub . It may be freely copied, modified, and redistributed, as detailed in the appendix entitled GNU Free Documentation License.   Larry Rolen wrote many of the exercises.  "
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
  "number": "0.0.1",
  "title": "",
  "body": " The term algebra was coined by the th century mathematician Abu Ja far Muhammad ibn Musa al-Khwarizmi. It comes from the Arabic word al-jebr , meaning reunion of broken parts.  "
},
{
  "id": "overview-3-5",
  "level": "2",
  "url": "overview.html#overview-3-5",
  "type": "Example",
  "number": "0.0.2",
  "title": "Civil Engineering.",
  "body": " Civil Engineering  The following diagram represents traffic flow around the town square. The streets are all one way, and the numbers and arrows indicate the number of cars per hour flowing along each street, as measured by sensors underneath the roads.   Directed traffic flows into, out of, and around a square formed by four intersections.   Four intersections form the corners of a square. Internal one-way streets carry unknown hourly flows: across the top from left to right, down the right side, across the bottom from right to left, and up the left side. At the upper-left intersection, 120 cars per hour enter from the left and 250 leave upward. At the upper-right intersection, 120 enter from above and 70 leave to the right. At the lower-right intersection, 530 enter from the right and 390 leave downward. At the lower-left intersection, 115 enter from below and 175 leave to the left.     There are no sensors underneath some of the streets, so we do not know how much traffic is flowing around the square itself. What are the values of ? Since the number of cars entering each intersection has to equal the number of cars leaving that intersection, we obtain a system of linear equations:   "
},
{
  "id": "overview-3-6",
  "level": "2",
  "url": "overview.html#overview-3-6",
  "type": "Example",
  "number": "0.0.3",
  "title": "Chemical Engineering.",
  "body": " Chemical Engineering  A certain chemical reaction (burning) takes ethane and oxygen, and produces carbon dioxide and water: What ratio of the molecules is needed to sustain the reaction? The following three equations come from the fact that the number of atoms of carbon, hydrogen, and oxygen on the left side has to equal the number of atoms on the right, respectively: .  "
},
{
  "id": "overview-3-7",
  "level": "2",
  "url": "overview.html#overview-3-7",
  "type": "Example",
  "number": "0.0.4",
  "title": "Biology.",
  "body": " Biology  In a population of rabbits,   half of the newborn rabbits survive their first year;    of those, half survive their second year;    the maximum life span is three years;    rabbits produce 0, 6, 8 baby rabbits in their first, second, and third years, respectively.   If you know the rabbit population in 2016 (in terms of the number of first, second, and third year rabbits), then what is the population in 2017? The rules for reproduction lead to the following system of equations, where represent the number of newborn, first-year, and second-year rabbits, respectively: A common question is: what is the asymptotic behavior of this system? What will the rabbit population look like in 100 years? This turns out to be an eigenvalue problem.   Left: the population of rabbits in a given year. Right: the proportions of rabbits in that year. Choose any values you like for the starting population, and click Advance 1 year several times. What do you notice about the long-term behavior of the ratios? This phenomenon turns out to be due to eigenvectors.    "
},
{
  "id": "overview-3-8",
  "level": "2",
  "url": "overview.html#overview-3-8",
  "type": "Example",
  "number": "0.0.6",
  "title": "Astronomy.",
  "body": " Astronomy  An asteroid has been observed at the following locations: Its orbit around the sun is elliptical; it is described by an equation of the form What is the most likely orbit of the asteroid, given that there was some significant error in measuring its position? Substituting the data points into the above equation yields the system There is no actual solution to this system due to measurement error, but here is the best-fitting ellipse:  Six measured asteroid positions and a red best-fit ellipse on a coordinate grid.   A coordinate grid from to and to shows the measured points , , , , , and . A tilted red ellipse is fitted to the six points. Its displayed equation is .      "
},
{
  "id": "overview-3-9",
  "level": "2",
  "url": "overview.html#overview-3-9",
  "type": "Example",
  "number": "0.0.7",
  "title": "Computer Science.",
  "body": " Computer Science  Each web page has some measure of importance, which it shares via outgoing links to other pages. This leads to zillions of equations in zillions of variables. Larry Page and Sergei Brin realized that this is a linear algebra problem at its core, and used the assemblage to found Google. We will discuss this example in detail in .  "
},
{
  "id": "overview-4-4",
  "level": "2",
  "url": "overview.html#overview-4-4",
  "type": "Example",
  "number": "0.0.8",
  "title": "Hidden Content.",
  "body": " Hidden Content  Hidden content is meant to enrich your understanding of the topic, but is not an official part of Math 1553. That said, the text will be very hard to follow without understanding the examples, and studying the proofs is an excellent way to learn the conceptual part of the material. (Not applicable to the PDF version.)  "
},
{
  "id": "overview-4-6",
  "level": "2",
  "url": "overview.html#overview-4-6",
  "type": "Figure",
  "number": "0.0.9",
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
  "body": " Systems of Linear Equations    Understand the definition of , and what it means to use to label points on a geometric object.  Pictures: solutions of systems of linear equations, parameterized solution sets.  Vocabulary words:  consistent , inconsistent , solution set .     During the first half of this textbook, we will be primarily concerned with understanding the solutions of systems of linear equations.   Linear equation definition of   An equation in the unknowns is called linear if both sides of the equation are a sum of (constant) multiples of , plus an optional constant.    For instance, are linear equations, but are not.  We will usually move the unknowns to the left side of the equation, and move the constants to the right.  A system of linear equations is a collection of several linear equations, like  Linear equation system of System of linear equations  System of linear equations definition of    Solution sets     A solution of a system of equations is a list of numbers that make all of the equations true simultaneously.  The solution set of a system of equations is the collection of all solutions.  Solving the system means finding all solutions with formulas involving some number of parameters.   System of linear equations solution of  Solution System of linear equations  Solution set definition of     A system of linear equations need not have a solution. For example, there do not exist numbers and making the following two equations true simultaneously: In this case, the solution set is empty . As this is a rather important property of a system of equations, it has its own name.   System of linear equations inconsistent  System of linear equations consistent  Consistent System of linear equations  Inconsistent System of linear equations   A system of equations is called inconsistent if it has no solutions. It is called consistent otherwise.    A solution of a system of equations in variables is a list of numbers. For example, is a solution of . As we will be studying solutions of systems of equations throughout this text, now is a good time to fix our notions regarding lists of numbers.    Line, Plane, Space, Etc.   The number zero  The real numbers  Real numbers We use to denote the set of all real numbers, i.e., the number line. This contains numbers like    Real -space  Real -space point of    Real -space    Let be a positive whole number. We define An -tuple of real numbers is called a point of .    In other words, is just the set of all (ordered) lists of real numbers. We will draw pictures of in a moment, but keep in mind that this is the definition . For example, and are points of .   The number line  Real numbers  Line number line  When , we just get back: . Geometrically, this is the number line.   The number line marked with integers from -3 to 3      The Euclidean plane  Plane -plane  When , we can think of as the -plane. We can do so because every point on the plane can be represented by an ordered pair of real numbers, namely, its - and -coordinates.  The Euclidean plane with two marked points   The Euclidean plane with drawn horizontal and vertical axes and two marked points at and .     3-Space  Space  When , we can think of as the space we (appear to) live in. We can do so because every point in space can be represented by an ordered triple of real numbers, namely, its -, -, and -coordinates.  3-space with two marked points  3-space with , and axes drawn along with a grid in the -plane and two marked points at and .     Points in 3-Space   A point in 3-space, and its coordinates.     So what is ? or ? or ? These are harder to visualize, so you have to go back to the definition: is the set of all ordered -tuples of real numbers .  They are still geometric spaces, in the sense that our intuition for and often extends to .  We will make definitions and state theorems that apply to any , but we will only draw pictures for and .  The power of using these spaces is the ability to label various objects of interest, such as geometric objects and solutions of systems of equations, by the points of .   Color Space  Space color space  Color space  All colors you can see can be described by three quantities: the amount of red, green, and blue light in that color. (Humans are trichromatic .) Therefore, we can use the points of to label all colors: for instance, the point labels the color with red, green, and blue intensity.  Gradient of colors on a cube, with red, green, and blue axes labeled    Traffic Flow  In the , we could have used to label the amount of traffic passing through four streets. In other words, if there are cars per hour passing through roads , respectively, then this can be recorded by the point in . This is useful from a psychological standpoint: instead of having four numbers, we are now dealing with just one piece of data.  Directed traffic flows into, out of, and around a square formed by four intersections.    QR Codes  QR codes  A QR code is a method of storing data in a grid of black and white squares in a way that computers can easily read. A typical QR code is a grid. Reading each line left-to-right and reading the lines top-to-bottom (like you read a book) we can think of such a QR code as a sequence of digits, each digit being 1 (for white) or 0 (for black). In such a way, the entire QR code can be regarded as a point in . As in the previous , it is very useful from a psychological perspective to view a QR code as a single piece of data in this way.   The QR code for this textbook is a array of black\/white squares.   QR code that links to the textbook homepage     In the above examples, it was useful from a psychological perspective to replace a list of four numbers (representing traffic flow) or of 841 numbers (representing a QR code) by a single piece of data: a point in some . This is a powerful concept; starting in , we will almost exclusively record solutions of systems of linear equations in this way.    Pictures of Solution Sets  Solution set picture of  Before discussing how to solve a system of linear equations below, it is helpful to see some pictures of what these solution sets look like geometrically.   One Equation in Two Variables  Consider the linear equation . We can rewrite this as , which defines a line in the plane: the slope is , and the -intercept is .   Line in the plane with slope negative 1 and interecept 1      Lines  Line geometric definition of   For our purposes, a line is a ray that is straight and infinite in both directions.     One Equation in Three Variables  Consider the linear equation . This is the implicit equation for a plane in space.   Plane in 3-space      Planes  Plane geometric definition of   A plane is a flat sheet that is infinite in all directions.     The equation defines a -plane in -space, and more generally, a single linear equation in variables defines an -plane in -space. We will make these statements precise in .    Two Equations in Two Variables  Now consider the system of two linear equations Each equation individually defines a line in the plane, pictured below.   Two lines in the plane intersecting at a point    A solution to the system of both equations is a pair of numbers that makes both equations true at once. In other words, it as a point that lies on both lines simultaneously. We can see in the picture above that there is only one point where the lines intersect: therefore, this system has exactly one solution. (This solution is , as the reader can verify.)  Usually, two lines in the plane will intersect in one point, but of course this is not always the case. Consider now the system of equations These define parallel lines in the plane.   Two parallel lines in the plane    The fact that that the lines do not intersect means that the system of equations has no solution. Of course, this is easy to see algebraically: if , then it is cannot also be the case that .  There is one more possibility. Consider the system of equations The second equation is a multiple of the first, so these equations define the same line in the plane.   Two lines in the plane that are equal    In this case, there are infinitely many solutions of the system of equations.    Two Equations in Three Variables  Consider the system of two linear equations Each equation individually defines a plane in space. The solutions of the system of both equations are the points that lie on both planes. We can see in the picture below that the planes intersect in a line. In particular, this system has infinitely many solutions.   The planes defined by the equations and intersect in the red line, which is the solution set of the system of both equations.      In general, the solutions of a system of equations in variables is the intersection of -planes in -space. This is always some kind of linear space, as we will discuss in .     Parametric Description of Solution Sets  Implicit equation  Parametric form  According to , solving a system of equations means writing down all solutions in terms of some number of parameters. We will give a systematic way of doing so in ; for now we give parametric descriptions in the examples of the previous .   Lines  Line parametric form of  Consider the linear equation of . In this context, we call an implicit equation of the line. We can write the same line in parametric form as follows: This means that every point on the line has the form for some real number . In this case, we call a parameter , as it parameterizes the points on the line.             Now consider the system of two linear equations of . These collectively form the implicit equations for a line in . (At least two equations are needed to define a line in space.) This line also has a parametric form with one parameter  :    The planes defined by the equations and intersect in the yellow line, which is parameterized by .    Note that in each case, the parameter allows us to use to label the points on the line. However, neither line is the same as the number line : indeed, every point on the first line has two coordinates, like the point , and every point on the second line has three coordinates, like .    Planes  Plane parametric form of  Consider the linear equation of . This is an implicit equation of a plane in space. This plane has an equation in parametric form : we can write every point on the plane as In this case, we need two parameters  and to describe all points on the plane.   The plane in defined by the equation . This plane is parameterized by two numbers .    Note that the parameters allow us to use to label the points on the plane. However, this plane is not the same as the plane : indeed, every point on this plane has three coordinates, like the point .   When there is a unique solution, as in , it is not necessary to use parameters to describe the solution set.      Is the following equation linear in the variables , , and ? Justify your answer. .    Linear. Can be written as .      Is the following equation linear in the variables , , and ? Justify your answer. .    Not linear, due to the term.      Is the following equation linear in the variables , , and ? Justify your answer. .    Linear. Here, and are real number coefficients of the and terms, respectively.      Is the following equation linear in the variables , , and ? Justify your answer. .    Not linear, due to variables being within exponents.      Is there a consistent system of three linear equations in two variables and ? If your answer is yes, write such a system and draw a corresponding picture using to label points in . If your answer is no, explain why no such system exists.    Yes, for example we could visualize three different lines in the -plane that have exactly one point in common. If we want to be that point, we could write equations for three different lines that contain .   .          In each case, determine whether the point is in the plane in given by . We follow the usual convention of using to label points in .        No: , not .         No: is not even a point in .         Yes: .         Yes: .         No: , not .       Is there an inconsistent system of two linear equations in three variables , , and ? If your answer is yes, write such a system and draw a corresponding picture using to label points in . If your answer is no, explain why no such system exists.    Yes, for example  . For this system to be consistent, we would need , so the system is inconsistent.      Consider the system of linear equations in , , and given by  . Describe its solution set geometrically, where we use to label points in .    The solution set is a line. It is the intersection of the horizontal plane with the vertical plane where .  We could parametrize the points on this line by where is real.      Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is the -plane.    The -plane in space is given by the single linear equation , or in longhand: .      Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is a line.    The -axis in space the set of all points in space where and , so our system is simply  .      Write a linear equation or a system of linear equations in the variables , , and , so that the solution set is the point .    The system of equations must only be satisfied when , , and . One way to do this is simply to make the three equations , , and . In long form,   .      The following is a kind of common brain teaser that many people answer incorrectly. We will use linear algebra to solve it now.  A rare baseball card and a coffee mug cost together. The baseball card costs more than the mug. How much does the baseball card cost?    Let be the cost of the baseball card and be the cost of the mug. We have been told that and . Now that we have written down this system of two linear equations in two variables, it is a standard high school algebra problem. This gives so and thus . Therefore, the baseball card costs .      Suppose is a polynomial of the form whose graph passes through the points , , and . Write a system of linear equations that we could solve to find , , and .    We use the facts , , and :   . This gives us the linear system of equations:   .      This brain teaser comes from a memorial article for the mathematician Paul Salley in the Notices of the American Mathematical Society, Volume 65, Number 5. The article is accessible at this link . This type of so-called Jim and John Problem has many variations that sound like tricky brain teasers but can be solved by writing systems of equations and using linear algebra. We give a slight variation here:  Alice and Bob have the same birthday. Alice is 24 years old, which is twice as old as Bob was at the time when Alice was as old as Bob is now. How old is Bob now?    While Alice and Bob are alive, the difference between their ages is some constant no matter what year we are in: . We're told that alice is 24, so . Also, from the information we are given, Bob was 12 when Alice was the same age that Bob is now. . We have a system of two equations:  . Subtracting the first equation from the second, we get , therefore Bob is now years old and ( means Alice is years older than Bob, which agrees with the fact that Alice is 24).      Consider a QR code given by an array below, where each spot can either have a 0 (for black) or 1 (for white).      Each QR code is an element in some . What is ?    There are spots where we can put a or a , so .      How many QR codes are there?    We have two choices for each entry in each QR code, with possibilities ranging from all zeros to all ones. This gives us such QR codes.      "
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
  "number": "1.1.1",
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
  "number": "1.1.2",
  "title": "Solution sets.",
  "body": " Solution sets     A solution of a system of equations is a list of numbers that make all of the equations true simultaneously.  The solution set of a system of equations is the collection of all solutions.  Solving the system means finding all solutions with formulas involving some number of parameters.   System of linear equations solution of  Solution System of linear equations  Solution set definition of    "
},
{
  "id": "sec-systems-of-eqns-3-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#sec-systems-of-eqns-3-8",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": " System of linear equations inconsistent  System of linear equations consistent  Consistent System of linear equations  Inconsistent System of linear equations   A system of equations is called inconsistent if it has no solutions. It is called consistent otherwise.   "
},
{
  "id": "subsec-Rn-3",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-3",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": " Real -space  Real -space point of    Real -space    Let be a positive whole number. We define An -tuple of real numbers is called a point of .   "
},
{
  "id": "subsec-Rn-5",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-5",
  "type": "Example",
  "number": "1.1.5",
  "title": "The number line.",
  "body": " The number line  Real numbers  Line number line  When , we just get back: . Geometrically, this is the number line.   The number line marked with integers from -3 to 3    "
},
{
  "id": "subsec-Rn-6",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-6",
  "type": "Example",
  "number": "1.1.6",
  "title": "The Euclidean plane.",
  "body": " The Euclidean plane  Plane -plane  When , we can think of as the -plane. We can do so because every point on the plane can be represented by an ordered pair of real numbers, namely, its - and -coordinates.  The Euclidean plane with two marked points   The Euclidean plane with drawn horizontal and vertical axes and two marked points at and .   "
},
{
  "id": "subsec-Rn-7",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-7",
  "type": "Example",
  "number": "1.1.7",
  "title": "3-Space.",
  "body": " 3-Space  Space  When , we can think of as the space we (appear to) live in. We can do so because every point in space can be represented by an ordered triple of real numbers, namely, its -, -, and -coordinates.  3-space with two marked points  3-space with , and axes drawn along with a grid in the -plane and two marked points at and .   "
},
{
  "id": "subsec-Rn-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-8",
  "type": "Interactive",
  "number": "1.1.8",
  "title": "Points in 3-Space.",
  "body": " Points in 3-Space   A point in 3-space, and its coordinates.    "
},
{
  "id": "subsec-Rn-13",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-13",
  "type": "Example",
  "number": "1.1.10",
  "title": "Color Space.",
  "body": " Color Space  Space color space  Color space  All colors you can see can be described by three quantities: the amount of red, green, and blue light in that color. (Humans are trichromatic .) Therefore, we can use the points of to label all colors: for instance, the point labels the color with red, green, and blue intensity.  Gradient of colors on a cube, with red, green, and blue axes labeled  "
},
{
  "id": "systems-eqns-R4",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-R4",
  "type": "Example",
  "number": "1.1.11",
  "title": "Traffic Flow.",
  "body": " Traffic Flow  In the , we could have used to label the amount of traffic passing through four streets. In other words, if there are cars per hour passing through roads , respectively, then this can be recorded by the point in . This is useful from a psychological standpoint: instead of having four numbers, we are now dealing with just one piece of data.  Directed traffic flows into, out of, and around a square formed by four intersections.  "
},
{
  "id": "subsec-Rn-15",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-Rn-15",
  "type": "Example",
  "number": "1.1.12",
  "title": "QR Codes.",
  "body": " QR Codes  QR codes  A QR code is a method of storing data in a grid of black and white squares in a way that computers can easily read. A typical QR code is a grid. Reading each line left-to-right and reading the lines top-to-bottom (like you read a book) we can think of such a QR code as a sequence of digits, each digit being 1 (for white) or 0 (for black). In such a way, the entire QR code can be regarded as a point in . As in the previous , it is very useful from a psychological perspective to view a QR code as a single piece of data in this way.   The QR code for this textbook is a array of black\/white squares.   QR code that links to the textbook homepage    "
},
{
  "id": "systems-eqns-picture-line",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-picture-line",
  "type": "Example",
  "number": "1.1.14",
  "title": "One Equation in Two Variables.",
  "body": " One Equation in Two Variables  Consider the linear equation . We can rewrite this as , which defines a line in the plane: the slope is , and the -intercept is .   Line in the plane with slope negative 1 and interecept 1    "
},
{
  "id": "defn-lines",
  "level": "2",
  "url": "sec-systems-of-eqns.html#defn-lines",
  "type": "Definition",
  "number": "1.1.15",
  "title": "Lines.",
  "body": " Lines  Line geometric definition of   For our purposes, a line is a ray that is straight and infinite in both directions.   "
},
{
  "id": "systems-eqns-picture-plane",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-picture-plane",
  "type": "Example",
  "number": "1.1.16",
  "title": "One Equation in Three Variables.",
  "body": " One Equation in Three Variables  Consider the linear equation . This is the implicit equation for a plane in space.   Plane in 3-space    "
},
{
  "id": "subsec-systems-eqns-pictures-7",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-systems-eqns-pictures-7",
  "type": "Definition",
  "number": "1.1.17",
  "title": "Planes.",
  "body": " Planes  Plane geometric definition of   A plane is a flat sheet that is infinite in all directions.   "
},
{
  "id": "subsec-systems-eqns-pictures-8",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-systems-eqns-pictures-8",
  "type": "Remark",
  "number": "1.1.18",
  "title": "",
  "body": " The equation defines a -plane in -space, and more generally, a single linear equation in variables defines an -plane in -space. We will make these statements precise in .  "
},
{
  "id": "systems-eqns-picture-2lines",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-picture-2lines",
  "type": "Example",
  "number": "1.1.19",
  "title": "Two Equations in Two Variables.",
  "body": " Two Equations in Two Variables  Now consider the system of two linear equations Each equation individually defines a line in the plane, pictured below.   Two lines in the plane intersecting at a point    A solution to the system of both equations is a pair of numbers that makes both equations true at once. In other words, it as a point that lies on both lines simultaneously. We can see in the picture above that there is only one point where the lines intersect: therefore, this system has exactly one solution. (This solution is , as the reader can verify.)  Usually, two lines in the plane will intersect in one point, but of course this is not always the case. Consider now the system of equations These define parallel lines in the plane.   Two parallel lines in the plane    The fact that that the lines do not intersect means that the system of equations has no solution. Of course, this is easy to see algebraically: if , then it is cannot also be the case that .  There is one more possibility. Consider the system of equations The second equation is a multiple of the first, so these equations define the same line in the plane.   Two lines in the plane that are equal    In this case, there are infinitely many solutions of the system of equations.  "
},
{
  "id": "systems-eqns-two-planes",
  "level": "2",
  "url": "sec-systems-of-eqns.html#systems-eqns-two-planes",
  "type": "Example",
  "number": "1.1.20",
  "title": "Two Equations in Three Variables.",
  "body": " Two Equations in Three Variables  Consider the system of two linear equations Each equation individually defines a plane in space. The solutions of the system of both equations are the points that lie on both planes. We can see in the picture below that the planes intersect in a line. In particular, this system has infinitely many solutions.   The planes defined by the equations and intersect in the red line, which is the solution set of the system of both equations.    "
},
{
  "id": "subsec-systems-eqns-pictures-11",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-systems-eqns-pictures-11",
  "type": "Remark",
  "number": "1.1.22",
  "title": "",
  "body": " In general, the solutions of a system of equations in variables is the intersection of -planes in -space. This is always some kind of linear space, as we will discuss in .  "
},
{
  "id": "subsec-parametric-description-5",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-parametric-description-5",
  "type": "Example",
  "number": "1.1.23",
  "title": "Lines.",
  "body": " Lines  Line parametric form of  Consider the linear equation of . In this context, we call an implicit equation of the line. We can write the same line in parametric form as follows: This means that every point on the line has the form for some real number . In this case, we call a parameter , as it parameterizes the points on the line.             Now consider the system of two linear equations of . These collectively form the implicit equations for a line in . (At least two equations are needed to define a line in space.) This line also has a parametric form with one parameter  :    The planes defined by the equations and intersect in the yellow line, which is parameterized by .    Note that in each case, the parameter allows us to use to label the points on the line. However, neither line is the same as the number line : indeed, every point on the first line has two coordinates, like the point , and every point on the second line has three coordinates, like .  "
},
{
  "id": "subsec-parametric-description-6",
  "level": "2",
  "url": "sec-systems-of-eqns.html#subsec-parametric-description-6",
  "type": "Example",
  "number": "1.1.25",
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
  "body": "  In each case, determine whether the point is in the plane in given by . We follow the usual convention of using to label points in .        No: , not .         No: is not even a point in .         Yes: .         Yes: .         No: , not .    "
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
  "body": "  Consider a QR code given by an array below, where each spot can either have a 0 (for black) or 1 (for white).      Each QR code is an element in some . What is ?    There are spots where we can put a or a , so .      How many QR codes are there?    We have two choices for each entry in each QR code, with possibilities ranging from all zeros to all ones. This gives us such QR codes.    "
},
{
  "id": "sec-row-reduction",
  "level": "1",
  "url": "sec-row-reduction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction",
  "body": " Row Reduction    Learn to replace a system of linear equations by an augmented matrix.  Learn how the elimination method corresponds to performing row operations on an augmented matrix.  Understand when a matrix is in (reduced) row echelon form.  Learn which row reduced matrices come from inconsistent linear systems.  Recipe: the row reduction algorithm.  Vocabulary words:  row operation , row equivalence , matrix , augmented matrix , pivot , (reduced) row echelon form .     In this section, we will present an algorithm for solving a system of linear equations.    The Elimination Method  Elimination method  We will solve systems of linear equations algebraically using the elimination method. In other words, we will combine the equations in various ways to try to eliminate as many variables as possible from each equation. There are three valid operations we can perform on our system of equations:  Scaling: we can multiply both sides of an equation by a nonzero number.   Replacement: we can add a multiple of one equation to another, replacing the second equation with the result.   Swap: we can swap two equations.       Solve using the elimination method.    At this point we ve eliminated both and from the third equation, and we can solve to get . Substituting for in the second equation gives , or . Substituting for and in the first equation gives , or . Thus the only solution is .  We can check that our solution is correct by substituting into the original equation:     Augmented Matrices and Row Operations  Solving equations by elimination requires writing the variables and the equals sign over and over again, merely as placeholders: all that is changing in the equations is the coefficient numbers . We can make our life easier by extracting only the numbers, and putting them in a box: Augmented matrix Matrix   Matrix definition of  Matrix augmented This is called an augmented matrix . The word augmented refers to the vertical line, which we draw to remind ourselves where the equals sign belongs; a matrix is a grid of numbers without the vertical line. In this notation, our three valid ways of manipulating our equations become row operations : Row operations   Scaling: multiply all entries in a row by a nonzero number. Row operations scaling  Here the notation simply means the first row , and likewise for etc. Row of a matrix   Replacement: add a multiple of one row to another, replacing the second row with the result. Row operations replacement  Row replacement Row operations, replacement    Swap: interchange two rows. Row operations swap       When we wrote our row operations above we used expressions like . Of course this does not mean that the second row is equal to the second row minus twice the first row. Instead it means that we are replacing the second row with the second row minus twice the first row. This kind of syntax is used frequently in computer programming when we want to change the value of a variable.     Solve using row operations.    We start by forming an augmented matrix: Eliminating a variable from an equation means producing a zero to the left of the line in an augmented matrix. First we produce zeros in the first column (i.e. we eliminate ) by subtracting multiples of the first row. This was made much easier by the fact that the top-left entry is equal to , so we can simply multiply the first row by the number below and subtract. In order to eliminate in the same way, we would like to produce a in the second column. We could divide the second row by , but this would produce fractions; instead, let s divide the third by . We swapped the second and third row just to keep things orderly. Now we translate this augmented matrix back into a system of equations: Hence ; back-substituting as in gives .    The process of doing row operations to a matrix does not change the solution set of the corresponding linear equations!  Indeed, the whole point of doing these operations is to solve the equations using the elimination method.   Row equivalence   Two matrices are called row equivalent if one can be obtained from the other by doing some number of row operations.    So the linear equations of row-equivalent matrices have the same solution set .   An Inconsistent System   Solve the following system of equations using row operations:     First we put our system of equations into an augmented matrix. We clear the entries below the top-left using row replacement. Now we clear the second entry from the last row. This translates back into the system of equations Our original system has the same solution set as this system. But this system has no solutions: there are no values of making the third equation true! We conclude that our original equation was inconsistent.       Echelon Forms  In the previous we saw how to translate a system of linear equations into an augmented matrix. We want to find an algorithm for solving such an augmented matrix. First we must decide what it means for an augmented matrix to be solved .   Row echelon form   A matrix is in row echelon form if:  All zero rows are at the bottom.  The first nonzero entry of a row is to the right of the first nonzero entry of the row above.  Below the first nonzero entry of a row, all entries are zero.      Here is a picture of a matrix in row echelon form:    Pivot   A pivot is the first nonzero entry of a row of a matrix in row echelon form.    A matrix in row-echelon form is generally easy to solve using back-substitution. For example, We immediately see that , which implies and See .   Reduced row echelon form   A matrix is in reduced row echelon form if it is in row echelon form, and in addition:  Each pivot is equal to 1.  Each pivot is the only nonzero entry in its column.      Here is a picture of a matrix in reduced row echelon form:   A matrix in reduced row echelon form is in some sense completely solved. For example,    The following matrices are in reduced row echelon form: The following matrices are in row echelon form but not reduced row echelon form: The following matrices are not in echelon form:     When deciding if an augmented matrix is in (reduced) row echelon form, there is nothing special about the augmented column(s). Just ignore the vertical line.   If an augmented matrix is in reduced row echelon form, the corresponding linear system is viewed as solved . We will see below why this is the case, and we will show that any matrix can be put into reduced row echelon form using only row operations.   Why the word pivot ?  Consider the following system of equations: We can visualize this system as a pair of lines in (red and blue, respectively, in the picture below) that intersect at the point . If we subtract the first equation from the second, we obtain the equation , or . This results in the system of equations: In terms of row operations on matrices, we can write this as:              What has happened geometrically is that the original blue line has been replaced with the new blue line . We can think of the blue line as rotating, or pivoting, around the solution . We used the pivot position in the matrix in order to make the blue line pivot like this. This is one possible explanation for the terminology pivot .     The Row Reduction Algorithm    Every matrix is row equivalent to one and only one matrix in reduced row echelon form.    We will give an algorithm, called row reduction or Gaussian elimination , which demonstrates that every matrix is row equivalent to at least one matrix in reduced row echelon form.   The uniqueness statement is interesting it means that, no matter how you row reduce, you always get the same matrix in reduced row echelon form.   This assumes, of course, that you only do the three legal row operations, and you don t make any arithmetic errors.  We will not prove uniqueness, but maybe you can!   Row Reduction  Row reduction algorithm  Gaussian elimination Row reduction     Step 1a: Swap the 1st row with a lower one so a leftmost nonzero entry is in the 1st row (if necessary).  Step 1b: Scale the 1st row so that its first nonzero entry is equal to 1.  Step 1c: Use row replacement so all entries below this 1 are 0.  Step 2a: Swap the 2nd row with a lower one so that the leftmost nonzero entry is in the 2nd row.  Step 2b: Scale the 2nd row so that its first nonzero entry is equal to 1.  Step 2c: Use row replacement so all entries below this 1 are 0.  Step 3a: Swap the 3rd row with a lower one so that the leftmost nonzero entry is in the 3rd row.  etc.  Last Step: Use row replacement to clear all entries above the pivots, starting with the last pivot.        Row reduce this matrix:                The reduced row echelon form of the matrix is The reduced row echelon form of the matrix tells us that the only solution is    Animated slideshow of the row reduction in this example.      Here is the row reduction algorithm, summarized in pictures. Row reduction picture of              It will be very important to know where are the pivots of a matrix after row reducing; this is the reason for the following piece of terminology.   Pivots  Pivot position   A pivot position of a matrix is an entry that is a pivot of a row echelon form of that matrix.  A pivot column of a matrix is a column that contains a pivot position.     Pivot Positions   Find the pivot positions and pivot columns of this matrix     We saw in that a row echelon form of the matrix is The pivot positions of are the entries that become pivots in a row echelon form; they are marked in color below: The first, second, and third columns are pivot columns.     An Inconsistent System   Solve the linear system using row reduction.     This row reduced matrix corresponds to the inconsistent system     In the above example, we saw how to recognize the reduced row echelon form of an inconsistent system.   The Row Echelon Form of an Inconsistent System  System of linear equations inconsistent RREF criterion  An augmented matrix corresponds to an inconsistent system of equations if and only if the last column (i.e., the augmented column) is a pivot column .   In other words, the row reduced matrix of an inconsistent system looks like this:   We have discussed two classes of matrices so far:  When the reduced row echelon form of a matrix has a pivot in every non-augmented column, then it corresponds to a system with a unique solution:   When the reduced row echelon form of a matrix has a pivot in the last (augmented) column, then it corresponds to a system with a no solutions:   What happens when one of the non-augmented columns lacks a pivot? This is the subject of .   A System with Many Solutions   Solve the linear system using row reduction.     This row reduced matrix corresponds to the linear system In what sense is the system solved? We will see in .        The augmented matrix is in reduced row echelon form.    True. The second and third columns are the pivot columns, and the matrix satisfies all conditions for RREF.      If the reduced row echelon form of an augmented matrix has a row of zeros, then the system of linear equations corresponding to the augmented matrix must have infinitely many solutions.    False. For example, consider the augmented matrix .      Is the following matrix in reduced row echelon form (RREF)? If not, row reduce to put it in RREF.     The matrix is in RREF.      Is the following matrix in reduced row echelon form (RREF)? If not, row reduce to put it in RREF.     The matrix is not in RREF because the pivot in the second line has a 2 in its column. To put the matrix in RREF, we need to do one row operation: .      Is the following matrix in reduced row echelon form (RREF)? If not, row reduce to put it in RREF.     No. The rightmost column is a pivot column (with pivot in the fourth row), but the column has nonzero entries in its first and second row. .      Put the following matrix into reduced row echelon form (RREF). Indicate which columns are pivot columns. .    Try this problem using the Interactive Row Reducer here .  Columns 1 and 3 are the pivot columns, and the RREF of the matrix is .      Put the following matrix into reduced row echelon form (RREF). Indicate which columns are pivot columns. .    Try this problem using the Interactive Row Reducer here .  The quickest way might be to switch the first and fourth rows and then divide the new first row by to make the numbers work nicely.  Columns 1 and 2 are the pivot columns, and the RREF of the matrix is .      Put the following matrix into reduced row echelon form (RREF). Indicate which columns are pivot columns. Is the corresponding system of linear equations consistent or inconsistent? .    Try this problem using the Interactive Row Reducer here .  One way to do this problem is to divide the first row by and then do row operations to create zeros below the first entry of the left column. Once we do this, we see that the second column is also pivot column. Doing one more row operation gives us a row echelon form of the matrix, whereby we see all three columns to the left of the augment bar are pivot columns. One row echelon form of the augmented matrix is .  We keep row-reducing to get the RREF of the augmented matrix: . This system is consistent, with unique solution , , .      Write an augmented matrix in RREF with three pivots that represents an inconsistent system of three equations in four variables.    Many possibilities. For example, .      Is there a system of three equations in two variables that has infinitely many solutions? If your answer is yes, write an augmented matrix in RREF that represents one such system.    Yes. For example, consider the system   . Each equation represents the line , so the solution set is all points on the line . The corresponding augmented matrix and its RREF are .      Row reduce the matrix to determine whether its corresponding system of linear equations is consistent. .    We swap the first and third rows to begin. We do not need to row-reduce any further because we have found a pivot in the rightmost column, therefore the system is inconsistent. The final row of the augmented matrix corresponds to the equations .       Are there three lines in the -plane (not necessarily distinct lines) whose common intersection is exactly one point? If so, give an example and write an augmented matrix for the corresponding system of linear equations in and .    Yes. For example, take the lines , , and . The first two lines are the same line, which intersects the non-parallel line at exactly one point, namely when . To illustrate the example, we solve the augmented system below to find the unique solution. .      Write the following system of equations in augmented matrix form, and put the matrix into RREF. After this, write two solutions to the system of equations.   .    We put this into an augmented matrix and row-reduce: . Now that we have found the RREF of the matrix, we see that is a solution as long as and . To find a solution, we could just pre-set our favorite value for one of the variables and see if we could solve for the others. For example, if we set , then to satisfy we need , and now the second equation becomes . Therefore, is a solution.  To get a second solution, we could set and solve for and : gives , and then gives , so is a second solution.  In reality, there are infinitely many solutions to this system of equations. We'll see in section 1.3 that this consistent system has as a free variable because its column does not have a pivot, which means that we can set equal to any real number and then solve for and .      Find all values of so that the following system has at least one solution.  .    The answer is only. Subtracting two times the first equation from the second equation gives us  . The system will be consistent as long as (so ). In this case, the system has infinitely many solutions since both equations will describe the same line .  If , then the equation will not be satisfied, so the system is inconsistent.      Extra practice with row reduction that you can check using the interactive row reducer. Put the following matrix into reduced row echelon form (RREF).     You can check your work using the interactive row reducer here . The RREF is .      Extra practice with row reduction that you can check using the interactive row reducer. Put the following matrix into reduced row echelon form (RREF).     You can check your work using the interactive row reducer here . The RREF is .      Extra practice with row reduction that you can check using the interactive row reducer. Put the following matrix into reduced row echelon form (RREF).     You can check your work using the interactive row reducer here . The RREF is .     "
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
  "number": "1.2.1",
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
  "number": "1.2.2",
  "title": "",
  "body": " When we wrote our row operations above we used expressions like . Of course this does not mean that the second row is equal to the second row minus twice the first row. Instead it means that we are replacing the second row with the second row minus twice the first row. This kind of syntax is used frequently in computer programming when we want to change the value of a variable.  "
},
{
  "id": "systems-eqns-example1b",
  "level": "2",
  "url": "sec-row-reduction.html#systems-eqns-example1b",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Solve using row operations.    We start by forming an augmented matrix: Eliminating a variable from an equation means producing a zero to the left of the line in an augmented matrix. First we produce zeros in the first column (i.e. we eliminate ) by subtracting multiples of the first row. This was made much easier by the fact that the top-left entry is equal to , so we can simply multiply the first row by the number below and subtract. In order to eliminate in the same way, we would like to produce a in the second column. We could divide the second row by , but this would produce fractions; instead, let s divide the third by . We swapped the second and third row just to keep things orderly. Now we translate this augmented matrix back into a system of equations: Hence ; back-substituting as in gives .   "
},
{
  "id": "subsec-row-reduction-elimination-5-7",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-5-7",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": " Row equivalence   Two matrices are called row equivalent if one can be obtained from the other by doing some number of row operations.   "
},
{
  "id": "subsec-row-reduction-elimination-5-9",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-elimination-5-9",
  "type": "Example",
  "number": "1.2.5",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System   Solve the following system of equations using row operations:     First we put our system of equations into an augmented matrix. We clear the entries below the top-left using row replacement. Now we clear the second entry from the last row. This translates back into the system of equations Our original system has the same solution set as this system. But this system has no solutions: there are no values of making the third equation true! We conclude that our original equation was inconsistent.   "
},
{
  "id": "subsec-row-reduction-echelon-forms-3",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-3",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": " Row echelon form   A matrix is in row echelon form if:  All zero rows are at the bottom.  The first nonzero entry of a row is to the right of the first nonzero entry of the row above.  Below the first nonzero entry of a row, all entries are zero.     "
},
{
  "id": "subsec-row-reduction-echelon-forms-5",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-5",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": " Pivot   A pivot is the first nonzero entry of a row of a matrix in row echelon form.   "
},
{
  "id": "subsec-row-reduction-echelon-forms-7",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-7",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": " Reduced row echelon form   A matrix is in reduced row echelon form if it is in row echelon form, and in addition:  Each pivot is equal to 1.  Each pivot is the only nonzero entry in its column.     "
},
{
  "id": "subsec-row-reduction-echelon-forms-10",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-10",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": " The following matrices are in reduced row echelon form: The following matrices are in row echelon form but not reduced row echelon form: The following matrices are not in echelon form:   "
},
{
  "id": "subsec-row-reduction-echelon-forms-13",
  "level": "2",
  "url": "sec-row-reduction.html#subsec-row-reduction-echelon-forms-13",
  "type": "Remark",
  "number": "1.2.10",
  "title": "Why the word “pivot”?",
  "body": " Why the word pivot ?  Consider the following system of equations: We can visualize this system as a pair of lines in (red and blue, respectively, in the picture below) that intersect at the point . If we subtract the first equation from the second, we obtain the equation , or . This results in the system of equations: In terms of row operations on matrices, we can write this as:              What has happened geometrically is that the original blue line has been replaced with the new blue line . We can think of the blue line as rotating, or pivoting, around the solution . We used the pivot position in the matrix in order to make the blue line pivot like this. This is one possible explanation for the terminology pivot .  "
},
{
  "id": "row-reduction-works",
  "level": "2",
  "url": "sec-row-reduction.html#row-reduction-works",
  "type": "Theorem",
  "number": "1.2.11",
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
  "number": "1.2.12",
  "title": "Row Reduction.",
  "body": " Row Reduction  Row reduction algorithm  Gaussian elimination Row reduction     Step 1a: Swap the 1st row with a lower one so a leftmost nonzero entry is in the 1st row (if necessary).  Step 1b: Scale the 1st row so that its first nonzero entry is equal to 1.  Step 1c: Use row replacement so all entries below this 1 are 0.  Step 2a: Swap the 2nd row with a lower one so that the leftmost nonzero entry is in the 2nd row.  Step 2b: Scale the 2nd row so that its first nonzero entry is equal to 1.  Step 2c: Use row replacement so all entries below this 1 are 0.  Step 3a: Swap the 3rd row with a lower one so that the leftmost nonzero entry is in the 3rd row.  etc.  Last Step: Use row replacement to clear all entries above the pivots, starting with the last pivot.     "
},
{
  "id": "row-reduction-eg1",
  "level": "2",
  "url": "sec-row-reduction.html#row-reduction-eg1",
  "type": "Example",
  "number": "1.2.13",
  "title": "",
  "body": "  Row reduce this matrix:                The reduced row echelon form of the matrix is The reduced row echelon form of the matrix tells us that the only solution is    Animated slideshow of the row reduction in this example.     "
},
{
  "id": "defn-pivot-pos",
  "level": "2",
  "url": "sec-row-reduction.html#defn-pivot-pos",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Pivots.",
  "body": " Pivots  Pivot position   A pivot position of a matrix is an entry that is a pivot of a row echelon form of that matrix.  A pivot column of a matrix is a column that contains a pivot position.   "
},
{
  "id": "pivot-pos-eg",
  "level": "2",
  "url": "sec-row-reduction.html#pivot-pos-eg",
  "type": "Example",
  "number": "1.2.16",
  "title": "Pivot Positions.",
  "body": " Pivot Positions   Find the pivot positions and pivot columns of this matrix     We saw in that a row echelon form of the matrix is The pivot positions of are the entries that become pivots in a row echelon form; they are marked in color below: The first, second, and third columns are pivot columns.   "
},
{
  "id": "row-reduction-eg-inconsistent",
  "level": "2",
  "url": "sec-row-reduction.html#row-reduction-eg-inconsistent",
  "type": "Example",
  "number": "1.2.17",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System   Solve the linear system using row reduction.     This row reduced matrix corresponds to the inconsistent system    "
},
{
  "id": "sec-row-reduction-6-16",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-6-16",
  "type": "Theorem",
  "number": "1.2.18",
  "title": "The Row Echelon Form of an Inconsistent System.",
  "body": " The Row Echelon Form of an Inconsistent System  System of linear equations inconsistent RREF criterion  An augmented matrix corresponds to an inconsistent system of equations if and only if the last column (i.e., the augmented column) is a pivot column .  "
},
{
  "id": "sec-row-reduction-6-19",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-6-19",
  "type": "Example",
  "number": "1.2.19",
  "title": "A System with Many Solutions.",
  "body": " A System with Many Solutions   Solve the linear system using row reduction.     This row reduced matrix corresponds to the linear system In what sense is the system solved? We will see in .   "
},
{
  "id": "sec-row-reduction-7-1",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-1",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": "  The augmented matrix is in reduced row echelon form.    True. The second and third columns are the pivot columns, and the matrix satisfies all conditions for RREF.   "
},
{
  "id": "sec-row-reduction-7-2",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-2",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": "  If the reduced row echelon form of an augmented matrix has a row of zeros, then the system of linear equations corresponding to the augmented matrix must have infinitely many solutions.    False. For example, consider the augmented matrix .   "
},
{
  "id": "sec-row-reduction-7-3",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-3",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "",
  "body": "  Is the following matrix in reduced row echelon form (RREF)? If not, row reduce to put it in RREF.     The matrix is in RREF.   "
},
{
  "id": "sec-row-reduction-7-4",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-4",
  "type": "Exercise",
  "number": "1.2.4.4",
  "title": "",
  "body": "  Is the following matrix in reduced row echelon form (RREF)? If not, row reduce to put it in RREF.     The matrix is not in RREF because the pivot in the second line has a 2 in its column. To put the matrix in RREF, we need to do one row operation: .   "
},
{
  "id": "sec-row-reduction-7-5",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-5",
  "type": "Exercise",
  "number": "1.2.4.5",
  "title": "",
  "body": "  Is the following matrix in reduced row echelon form (RREF)? If not, row reduce to put it in RREF.     No. The rightmost column is a pivot column (with pivot in the fourth row), but the column has nonzero entries in its first and second row. .   "
},
{
  "id": "sec-row-reduction-7-6",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-6",
  "type": "Exercise",
  "number": "1.2.4.6",
  "title": "",
  "body": "  Put the following matrix into reduced row echelon form (RREF). Indicate which columns are pivot columns. .    Try this problem using the Interactive Row Reducer here .  Columns 1 and 3 are the pivot columns, and the RREF of the matrix is .   "
},
{
  "id": "sec-row-reduction-7-7",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-7",
  "type": "Exercise",
  "number": "1.2.4.7",
  "title": "",
  "body": "  Put the following matrix into reduced row echelon form (RREF). Indicate which columns are pivot columns. .    Try this problem using the Interactive Row Reducer here .  The quickest way might be to switch the first and fourth rows and then divide the new first row by to make the numbers work nicely.  Columns 1 and 2 are the pivot columns, and the RREF of the matrix is .   "
},
{
  "id": "sec-row-reduction-7-8",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-8",
  "type": "Exercise",
  "number": "1.2.4.8",
  "title": "",
  "body": "  Put the following matrix into reduced row echelon form (RREF). Indicate which columns are pivot columns. Is the corresponding system of linear equations consistent or inconsistent? .    Try this problem using the Interactive Row Reducer here .  One way to do this problem is to divide the first row by and then do row operations to create zeros below the first entry of the left column. Once we do this, we see that the second column is also pivot column. Doing one more row operation gives us a row echelon form of the matrix, whereby we see all three columns to the left of the augment bar are pivot columns. One row echelon form of the augmented matrix is .  We keep row-reducing to get the RREF of the augmented matrix: . This system is consistent, with unique solution , , .   "
},
{
  "id": "sec-row-reduction-7-9",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-9",
  "type": "Exercise",
  "number": "1.2.4.9",
  "title": "",
  "body": "  Write an augmented matrix in RREF with three pivots that represents an inconsistent system of three equations in four variables.    Many possibilities. For example, .   "
},
{
  "id": "sec-row-reduction-7-10",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-10",
  "type": "Exercise",
  "number": "1.2.4.10",
  "title": "",
  "body": "  Is there a system of three equations in two variables that has infinitely many solutions? If your answer is yes, write an augmented matrix in RREF that represents one such system.    Yes. For example, consider the system   . Each equation represents the line , so the solution set is all points on the line . The corresponding augmented matrix and its RREF are .   "
},
{
  "id": "sec-row-reduction-7-11",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-11",
  "type": "Exercise",
  "number": "1.2.4.11",
  "title": "",
  "body": "  Row reduce the matrix to determine whether its corresponding system of linear equations is consistent. .    We swap the first and third rows to begin. We do not need to row-reduce any further because we have found a pivot in the rightmost column, therefore the system is inconsistent. The final row of the augmented matrix corresponds to the equations .    "
},
{
  "id": "sec-row-reduction-7-12",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-12",
  "type": "Exercise",
  "number": "1.2.4.12",
  "title": "",
  "body": "  Are there three lines in the -plane (not necessarily distinct lines) whose common intersection is exactly one point? If so, give an example and write an augmented matrix for the corresponding system of linear equations in and .    Yes. For example, take the lines , , and . The first two lines are the same line, which intersects the non-parallel line at exactly one point, namely when . To illustrate the example, we solve the augmented system below to find the unique solution. .   "
},
{
  "id": "sec-row-reduction-7-13",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-13",
  "type": "Exercise",
  "number": "1.2.4.13",
  "title": "",
  "body": "  Write the following system of equations in augmented matrix form, and put the matrix into RREF. After this, write two solutions to the system of equations.   .    We put this into an augmented matrix and row-reduce: . Now that we have found the RREF of the matrix, we see that is a solution as long as and . To find a solution, we could just pre-set our favorite value for one of the variables and see if we could solve for the others. For example, if we set , then to satisfy we need , and now the second equation becomes . Therefore, is a solution.  To get a second solution, we could set and solve for and : gives , and then gives , so is a second solution.  In reality, there are infinitely many solutions to this system of equations. We'll see in section 1.3 that this consistent system has as a free variable because its column does not have a pivot, which means that we can set equal to any real number and then solve for and .   "
},
{
  "id": "sec-row-reduction-7-14",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-14",
  "type": "Exercise",
  "number": "1.2.4.14",
  "title": "",
  "body": "  Find all values of so that the following system has at least one solution.  .    The answer is only. Subtracting two times the first equation from the second equation gives us  . The system will be consistent as long as (so ). In this case, the system has infinitely many solutions since both equations will describe the same line .  If , then the equation will not be satisfied, so the system is inconsistent.   "
},
{
  "id": "sec-row-reduction-7-15",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-15",
  "type": "Exercise",
  "number": "1.2.4.15",
  "title": "",
  "body": "  Extra practice with row reduction that you can check using the interactive row reducer. Put the following matrix into reduced row echelon form (RREF).     You can check your work using the interactive row reducer here . The RREF is .   "
},
{
  "id": "sec-row-reduction-7-16",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-16",
  "type": "Exercise",
  "number": "1.2.4.16",
  "title": "",
  "body": "  Extra practice with row reduction that you can check using the interactive row reducer. Put the following matrix into reduced row echelon form (RREF).     You can check your work using the interactive row reducer here . The RREF is .   "
},
{
  "id": "sec-row-reduction-7-17",
  "level": "2",
  "url": "sec-row-reduction.html#sec-row-reduction-7-17",
  "type": "Exercise",
  "number": "1.2.4.17",
  "title": "",
  "body": "  Extra practice with row reduction that you can check using the interactive row reducer. Put the following matrix into reduced row echelon form (RREF).     You can check your work using the interactive row reducer here . The RREF is .   "
},
{
  "id": "sec-parametric-form",
  "level": "1",
  "url": "sec-parametric-form.html",
  "type": "Section",
  "number": "1.3",
  "title": "Parametric Form",
  "body": " Parametric Form    Learn to express the solution set of a system of linear equations in parametric form.  Understand the three possibilities for the number of solutions of a system of linear equations.  Recipe: parametric form.  Vocabulary word:  free variable .     Free Variables  There is one possibility for the row reduced form of a matrix that we did not see in .   A System with a Free Variable  Consider the linear system We solve it using row reduction: This row reduced matrix corresponds to the linear system In what sense is the system solved? We rewrite as For any value of , there is exactly one value of and that make the equations true. But we are free to choose any value of .  We have found all solutions: it is the set of all values , where This is called the parametric form for the solution to the linear system. The variable is called a free variable .   The solution set (the yellow line) of the linear system in . There is a unique solution for every value of .      Given the parametric form for the solution to a linear system, we can obtain specific solutions by replacing the free variables with any specific real numbers. For instance, setting in the last example gives the solution , and setting gives the solution .    Free variable   Consider a consistent system of equations in the variables . Let be a row echelon form of the augmented matrix for this system.  We say that is a free variable if its corresponding column in is not a pivot column .    In the above , the variable was free because the reduced row echelon form matrix was In the matrix the free variables are and . (The augmented column is not free because it does not correspond to a variable.)   Parametric form  Parametric form  System of linear equations parametric form of Parametric form  The parametric form of the solution set of a consistent system of linear equations is obtained as follows.  Write the system as an augmented matrix.  Row reduce to reduced row echelon form.  Write the corresponding (solved) system of linear equations.  Move all free variables to the right hand side of the equations.     Moving the free variables to the right hand side of the equations amounts to solving for the non-free variables (the ones that come pivot columns) in terms of the free variables. One can think of the free variables as being independent variables, and the non-free variables being dependent .   Implicit Versus Parameterized Equations  Implicit equation  Parameterized equation  The solution set of the system of linear equations is a line in , as we saw in . These equations are called the implicit equations for the line: the line is defined implicitly as the simultaneous solutions to those two equations.  The parametric form can be written as follows: This called a parameterized equation for the same line. It is an expression that produces all points of the line in terms of one parameter, .  One should think of a system of equations as being an implicit equation for its solution set, and of the parametric form as being the parameterized equation for the same set. The parameteric form is much more explicit: it gives a concrete recipe for producing all solutions.    You can choose any value for the free variables in a (consistent) linear system.  Free variables come from the columns without pivots in a matrix in row echelon form.    Suppose that the reduced row echelon form of the matrix for a linear system in four variables is The free variables are and : they are the ones whose columns are not pivot columns.  This translates into the system of equations What happened to ? It is a free variable, but no other variable depends on it. The general solution to the system is for any values of and . For instance, is a solution (with ), and is a solution (with ).    A Parameterized Plane  The system of one linear equation comes from the matrix which is already in reduced row echelon form. The free variables are and . The parametric form for the general solution is for any values of and . This is the parametric equation for a plane in .   A plane described by two parameters and . Any point on the plane is obtained by substituting suitable values for and .       Number of Solutions  System of linear equations number of solutions of  Solution set size of  There are three possibilities for the reduced row echelon form of the augmented matrix of a linear system.  The last column is a pivot column. In this case, the system is inconsistent . There are zero solutions, i.e., the solution set is empty. For example, the matrix comes from a linear system with no solutions.  Every column except the last column is a pivot column. In this case, the system has a unique solution. For example, the matrix tells us that the unique solution is .  The last column is not a pivot column, and some other column is not a pivot column either. In this case, the system has infinitely many solutions, corresponding to the infinitely many possible values of the free variable(s). For example, in the system corresponding to the matrix any values for and yield a solution to the system of equations.        If a system of linear equations has 100 variables and 70 equations, then there must be infinitely many solutions.    False. It might be inconsistent, for example one equation could be . It might also have infinitely many solutions. For example, if all 70 equations are each just the equation . The corresponding augmented matrix will not have a pivot in its rightmost column, and it will have 99 non-pivot columns to the left of the augment bar.      If a system of linear equations has 70 variables and 100 equations, then it must be inconsistent.    False. It might be consistent, for example a system where all 100 equations are just repeats of the equation .       How can we tell if an augmented matrix corresponds to a consistent system of linear equations?    The system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column.      Suppose a consistent system of linear equations has finitely many solutions. How many solutions must it have?    It must have exactly one solution. Since the system is consistent, there is no pivot in the rightmost column of the augmented matrix, leaving us with two possibilities: Either the augmented matrix has a pivot in every column to the left of the augment bar (no free variables, thus exactly one solution), or there is a non-pivot column to the left of the augment bar (free variable, thus infinitely many solutions).       Is it possible for a system of three linear equations in four variables to have exactly one solution? Justify your answer.    No. This system will correspond to an augmented matrix that has 3 rows and 4 columns to the left of the augment. This means the matrix has at most 3 pivots, so at least one variable will be free and the system will have infinitely many solutions if it is consistent.      Write the augmented matrix corresponding to the system of equations and put the matrix in reduced row echelon form. Write the set of solutions in parametric form. Indicate which variables are free variables.        The first two columns are the pivot columns, so the system is consistent and is free. The first equation is and the second is , so . Equivalently, \\ x_3       Write the augmented matrix corresponding to the system of equations and put the matrix in reduced row echelon form. Write the set of solutions in parametric form. Indicate which variables are free variables.       .  The first and third columns are the pivot columns, so the system is consistent and the variables , , and are free. Putting the free variables to the right hand side in the equations and , we get the equations below where , , and are any real numbers: . Equivalently, where , , and are any real numbers.      Write the augmented matrix corresponding to the system of equations and put the matrix in reduced row echelon form. Write the set of solutions in parametric form. Indicate which variables are free variables.    .     . The system is consistent, with free variables and : .      We have seen that any system of linear equations with more than one solution must have infinitely many solutions. Give an example of a system of two equations in two variables that is not linear and has exactly two solutions.    Picture curves that are described naturally by fundamental equations in precalculus and intersect at two points. For example, the curves and intersect at exactly two points, namely and . One way to write this system is  .      Is it possible for a system of four linear equations in four unknowns to have infinitely many solutions? If your answer is yes, write such a system. If your answer is no, justify why it is not possible.    Yes. We could simply write the same linear equation four times, but this is not the only possibility. For example,          Bruce Hernandez is infatuated with the system of linear equations given by  , where and are some real numbers.     Determine all values of and (if there are any) so that the system of equations is inconsistent.    The system is inconsistent if and only if the right column is a pivot column. Therefore, we need and so that the rightmost entry of the second row is a pivot. .      Determine all values of and (if there are any) so that the system of equations has infinitely many solutions.    To have infinitely many solutions, we must have a free variable AND the rightmost column cannot be a pivot colum, so the entire second row above must be zero. Thus and . . *** In both parts, we are finding and so that the lines given by each equation are parallel. In (a), we solve so that we get two \\textit{different} parallel lines. In (b), each equation gives the \\textit{same} line since the second row is two times the first row.      .      Write a system of linear equations in the variables whose general solution has parametric form .    We have exactly 1 free variable in a consistent linear system in 4 variables, so we must have 3 pivots in our corresponding augmented matrix. This means we must have at least 3 rows in our augmented matrix. One possibility is .      Find every polynomial of degree whose graph passes through the points , , and .    With (where since has degree ), and using the facts , , and :   . This gives us a linear system of equations, which we put into an augmented matrix and row-reduce:   .   . Therefore , , and , so there is exactly one degree polynomial that goes through the three points given in the problem: .      Find every polynomial of degree whose graph passes through the points , , and .    We let (where ) and plug in the three points:   . We put this into a system and row-reduce its corresponding augmented matrix:     .   . Thus is free and .  This gives us infinitely degree polynomials going through the three prescribed points, depending upon which value we choose for (we just need to choose so that , otherwise will have degree less than ). For example, when we get the polynomial whereas when we get . We could even take and get , and so on.     "
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
  "number": "1.3.1",
  "title": "A System with a Free Variable.",
  "body": " A System with a Free Variable  Consider the linear system We solve it using row reduction: This row reduced matrix corresponds to the linear system In what sense is the system solved? We rewrite as For any value of , there is exactly one value of and that make the equations true. But we are free to choose any value of .  We have found all solutions: it is the set of all values , where This is called the parametric form for the solution to the linear system. The variable is called a free variable .   The solution set (the yellow line) of the linear system in . There is a unique solution for every value of .    "
},
{
  "id": "subsec-free-variables-5",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-5",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": " Free variable   Consider a consistent system of equations in the variables . Let be a row echelon form of the augmented matrix for this system.  We say that is a free variable if its corresponding column in is not a pivot column .   "
},
{
  "id": "subsec-free-variables-7",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-7",
  "type": "Recipe",
  "number": "1.3.4",
  "title": "Parametric form.",
  "body": " Parametric form  Parametric form  System of linear equations parametric form of Parametric form  The parametric form of the solution set of a consistent system of linear equations is obtained as follows.  Write the system as an augmented matrix.  Row reduce to reduced row echelon form.  Write the corresponding (solved) system of linear equations.  Move all free variables to the right hand side of the equations.    "
},
{
  "id": "subsec-free-variables-9",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-9",
  "type": "Note",
  "number": "1.3.5",
  "title": "Implicit Versus Parameterized Equations.",
  "body": " Implicit Versus Parameterized Equations  Implicit equation  Parameterized equation  The solution set of the system of linear equations is a line in , as we saw in . These equations are called the implicit equations for the line: the line is defined implicitly as the simultaneous solutions to those two equations.  The parametric form can be written as follows: This called a parameterized equation for the same line. It is an expression that produces all points of the line in terms of one parameter, .  One should think of a system of equations as being an implicit equation for its solution set, and of the parametric form as being the parameterized equation for the same set. The parameteric form is much more explicit: it gives a concrete recipe for producing all solutions.  "
},
{
  "id": "subsec-free-variables-11",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-11",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": " Suppose that the reduced row echelon form of the matrix for a linear system in four variables is The free variables are and : they are the ones whose columns are not pivot columns.  This translates into the system of equations What happened to ? It is a free variable, but no other variable depends on it. The general solution to the system is for any values of and . For instance, is a solution (with ), and is a solution (with ).  "
},
{
  "id": "subsec-free-variables-12",
  "level": "2",
  "url": "sec-parametric-form.html#subsec-free-variables-12",
  "type": "Example",
  "number": "1.3.7",
  "title": "A Parameterized Plane.",
  "body": " A Parameterized Plane  The system of one linear equation comes from the matrix which is already in reduced row echelon form. The free variables are and . The parametric form for the general solution is for any values of and . This is the parametric equation for a plane in .   A plane described by two parameters and . Any point on the plane is obtained by substituting suitable values for and .    "
},
{
  "id": "sec-parametric-form-5-1",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-1",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": "  If a system of linear equations has 100 variables and 70 equations, then there must be infinitely many solutions.    False. It might be inconsistent, for example one equation could be . It might also have infinitely many solutions. For example, if all 70 equations are each just the equation . The corresponding augmented matrix will not have a pivot in its rightmost column, and it will have 99 non-pivot columns to the left of the augment bar.   "
},
{
  "id": "sec-parametric-form-5-2",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-2",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": "  If a system of linear equations has 70 variables and 100 equations, then it must be inconsistent.    False. It might be consistent, for example a system where all 100 equations are just repeats of the equation .   "
},
{
  "id": "sec-parametric-form-5-3",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-3",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": "   How can we tell if an augmented matrix corresponds to a consistent system of linear equations?    The system is consistent if and only if the rightmost column of the augmented matrix is NOT a pivot column.      Suppose a consistent system of linear equations has finitely many solutions. How many solutions must it have?    It must have exactly one solution. Since the system is consistent, there is no pivot in the rightmost column of the augmented matrix, leaving us with two possibilities: Either the augmented matrix has a pivot in every column to the left of the augment bar (no free variables, thus exactly one solution), or there is a non-pivot column to the left of the augment bar (free variable, thus infinitely many solutions).    "
},
{
  "id": "sec-parametric-form-5-4",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-4",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": "  Is it possible for a system of three linear equations in four variables to have exactly one solution? Justify your answer.    No. This system will correspond to an augmented matrix that has 3 rows and 4 columns to the left of the augment. This means the matrix has at most 3 pivots, so at least one variable will be free and the system will have infinitely many solutions if it is consistent.   "
},
{
  "id": "sec-parametric-form-5-5",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-5",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": "  Write the augmented matrix corresponding to the system of equations and put the matrix in reduced row echelon form. Write the set of solutions in parametric form. Indicate which variables are free variables.        The first two columns are the pivot columns, so the system is consistent and is free. The first equation is and the second is , so . Equivalently, \\ x_3    "
},
{
  "id": "sec-parametric-form-5-6",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-6",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "",
  "body": "  Write the augmented matrix corresponding to the system of equations and put the matrix in reduced row echelon form. Write the set of solutions in parametric form. Indicate which variables are free variables.       .  The first and third columns are the pivot columns, so the system is consistent and the variables , , and are free. Putting the free variables to the right hand side in the equations and , we get the equations below where , , and are any real numbers: . Equivalently, where , , and are any real numbers.   "
},
{
  "id": "sec-parametric-form-5-7",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-7",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "",
  "body": "  Write the augmented matrix corresponding to the system of equations and put the matrix in reduced row echelon form. Write the set of solutions in parametric form. Indicate which variables are free variables.    .     . The system is consistent, with free variables and : .   "
},
{
  "id": "sec-parametric-form-5-8",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-8",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "",
  "body": "  We have seen that any system of linear equations with more than one solution must have infinitely many solutions. Give an example of a system of two equations in two variables that is not linear and has exactly two solutions.    Picture curves that are described naturally by fundamental equations in precalculus and intersect at two points. For example, the curves and intersect at exactly two points, namely and . One way to write this system is  .   "
},
{
  "id": "sec-parametric-form-5-9",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-9",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "",
  "body": "  Is it possible for a system of four linear equations in four unknowns to have infinitely many solutions? If your answer is yes, write such a system. If your answer is no, justify why it is not possible.    Yes. We could simply write the same linear equation four times, but this is not the only possibility. For example,       "
},
{
  "id": "sec-parametric-form-5-10",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-10",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "",
  "body": "  Bruce Hernandez is infatuated with the system of linear equations given by  , where and are some real numbers.     Determine all values of and (if there are any) so that the system of equations is inconsistent.    The system is inconsistent if and only if the right column is a pivot column. Therefore, we need and so that the rightmost entry of the second row is a pivot. .      Determine all values of and (if there are any) so that the system of equations has infinitely many solutions.    To have infinitely many solutions, we must have a free variable AND the rightmost column cannot be a pivot colum, so the entire second row above must be zero. Thus and . . *** In both parts, we are finding and so that the lines given by each equation are parallel. In (a), we solve so that we get two \\textit{different} parallel lines. In (b), each equation gives the \\textit{same} line since the second row is two times the first row.      .   "
},
{
  "id": "sec-parametric-form-5-11",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-11",
  "type": "Exercise",
  "number": "1.3.3.11",
  "title": "",
  "body": "  Write a system of linear equations in the variables whose general solution has parametric form .    We have exactly 1 free variable in a consistent linear system in 4 variables, so we must have 3 pivots in our corresponding augmented matrix. This means we must have at least 3 rows in our augmented matrix. One possibility is .   "
},
{
  "id": "sec-parametric-form-5-12",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-12",
  "type": "Exercise",
  "number": "1.3.3.12",
  "title": "",
  "body": "  Find every polynomial of degree whose graph passes through the points , , and .    With (where since has degree ), and using the facts , , and :   . This gives us a linear system of equations, which we put into an augmented matrix and row-reduce:   .   . Therefore , , and , so there is exactly one degree polynomial that goes through the three points given in the problem: .   "
},
{
  "id": "sec-parametric-form-5-13",
  "level": "2",
  "url": "sec-parametric-form.html#sec-parametric-form-5-13",
  "type": "Exercise",
  "number": "1.3.3.13",
  "title": "",
  "body": "  Find every polynomial of degree whose graph passes through the points , , and .    We let (where ) and plug in the three points:   . We put this into a system and row-reduce its corresponding augmented matrix:     .   . Thus is free and .  This gives us infinitely degree polynomials going through the three prescribed points, depending upon which value we choose for (we just need to choose so that , otherwise will have degree less than ). For example, when we get the polynomial whereas when we get . We could even take and get , and so on.   "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors",
  "body": " Vectors    Learn how to add and scale vectors in , both algebraically and geometrically.  Understand linear combinations geometrically.  Pictures: vector addition, vector subtraction, linear combinations.  Vocabulary words:  vector , linear combination .     Vectors in  We have been drawing points in as dots in the line, plane, space, etc. We can also draw them as arrows . Since we have two geometric interpretations in mind, we now discuss the relationship between the two points of view.   Points and Vectors  Point  Vector definition of   Again, a point in is drawn as a dot.             A vector is a point in , drawn as an arrow.               The difference is purely psychological: points and vectors are both just lists of numbers .   A vector in , by coordinates   A vector in , and its coordinates.     When we think of a point in as a vector, we will usually write it vertically, like a matrix with one column: . We will also write for the zero vector. A vector  The zero vector   Why make the distinction between points and vectors? A vector need not start at the origin: it can be located anywhere ! In other words, an arrow is determined by its length and its direction, not by its location. For instance, these arrows all represent the vector .              Unless otherwise specified, we will assume that all vectors start at the origin.   Vectors makes sense in the real world: many physical quantities, such as velocity, are represented as vectors. But it makes more sense to think of the velocity of a car as being located at the car.   Some authors use boldface letters to represent vectors, as in , or use arrows, as in . As it is usually clear from context if a letter represents a vector, we do not decorate vectors in this way.    Another way to think about a vector is as a difference between two points, or the arrow from one point to another. For instance, is the arrow from to .               Vector Algebra and Geometry  Here we learn how to add vectors together and how to multiply vectors by numbers, both algebraically and geometrically.   Vector addition and scalar multiplication    We can add two vectors together: . Vector addition   We can multiply, or scale , a vector by a real number : Vector scalar multiplication  . We call a scalar to distinguish it from a vector. If is a vector and is a scalar, then is called a scalar multiple of .  Addition and scalar multiplication work in the same way for vectors of length .     .    The Parallelogram Law for Vector Addition  Geometrically, the sum of two vectors is obtained as follows: place the tail of at the head of . Then is the vector whose tail is the tail of and whose head is the head of . Doing this both ways creates a parallelogram. For example, . Vector addition parallelogram law   Why? The width of is the sum of the widths, and likewise with the heights.              The parallelogram law for vector addition   The parallelogram law for vector addition.       Vector Subtraction  Vector subtraction picture of  Geometrically, the difference of two vectors is obtained as follows: place the tail of and at the same point. Then is the vector from the head of to the head of . For example, .  Why? If you add to , you get .              Vector subtraction   Vector subtraction.       Scalar Multiplication  A scalar multiple of a vector has the same (or opposite) direction, but a different length. For instance, is the vector in the direction of but twice as long, and is the vector in the opposite direction of , but half as long. Note that the set of all scalar multiples of a (nonzero) vector is a line . Vector scalar multiplication picture of               Scalar multiplication   Scalar multiplication.        Linear Combinations  We can add and scale vectors in the same equation.   Linear combination definition of  Vector linear combination of Linear combination   Let be scalars, and let be vectors in . The vector in  is called a linear combination of the vectors , with weights or coefficients  .    Geometrically, a linear combination is obtained by stretching \/ shrinking the vectors according to the coefficients, then adding them together using the parallelogram law.   Let and . Here are some linear combinations of and , drawn as points.              Linear combination two vectors, picture of The locations of these points are found using the parallelogram law for vector addition. Any vector on the plane is a linear combination of and , with suitable coefficients.    Linear combinations of two vectors in .     Linear combinations of three vectors   Linear combinations of three vectors.      Linear Combinations of a Single Vector  Linear combination single vector, picture of  A linear combination of a single vector is just a scalar multiple of . So some examples include The set of all linear combinations is the line through . (Unless , in which case any scalar multiple of is again .)               Linear Combinations of Collinear Vectors  Linear combination collinear vectors, picture of  The set of all linear combinations of the vectors is the line containing both vectors.             The difference between this and the previous is that both vectors lie on the same line. Hence any scalar multiples of lie on that line, as does their sum.    Linear combinations of two collinear vectors   Linear combinations of two collinear vectors in .      "
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
  "number": "2.1.1",
  "title": "Points and Vectors.",
  "body": " Points and Vectors  Point  Vector definition of   Again, a point in is drawn as a dot.             A vector is a point in , drawn as an arrow.              "
},
{
  "id": "subsec-vectors-in-rn-5",
  "level": "2",
  "url": "sec-vectors.html#subsec-vectors-in-rn-5",
  "type": "Interactive",
  "number": "2.1.2",
  "title": "A vector in <span class=\"process-math\">\\(\\R^3\\text{,}\\)<\/span> by coordinates.",
  "body": " A vector in , by coordinates   A vector in , and its coordinates.    "
},
{
  "id": "subsec-vectors-in-rn-11",
  "level": "2",
  "url": "sec-vectors.html#subsec-vectors-in-rn-11",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " Some authors use boldface letters to represent vectors, as in , or use arrows, as in . As it is usually clear from context if a letter represents a vector, we do not decorate vectors in this way.  "
},
{
  "id": "vectors-diff-pts",
  "level": "2",
  "url": "sec-vectors.html#vectors-diff-pts",
  "type": "Note",
  "number": "2.1.5",
  "title": "",
  "body": " Another way to think about a vector is as a difference between two points, or the arrow from one point to another. For instance, is the arrow from to .            "
},
{
  "id": "subsec-vector-algebra-and-geometry-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-3",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Vector addition and scalar multiplication.",
  "body": " Vector addition and scalar multiplication    We can add two vectors together: . Vector addition   We can multiply, or scale , a vector by a real number : Vector scalar multiplication  . We call a scalar to distinguish it from a vector. If is a vector and is a scalar, then is called a scalar multiple of .  Addition and scalar multiplication work in the same way for vectors of length .   "
},
{
  "id": "subsec-vector-algebra-and-geometry-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-4",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " .  "
},
{
  "id": "subsec-vector-algebra-and-geometry-5-5",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-5-5",
  "type": "Interactive",
  "number": "2.1.8",
  "title": "The parallelogram law for vector addition.",
  "body": " The parallelogram law for vector addition   The parallelogram law for vector addition.    "
},
{
  "id": "subsec-vector-algebra-and-geometry-6-6",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-6-6",
  "type": "Interactive",
  "number": "2.1.10",
  "title": "Vector subtraction.",
  "body": " Vector subtraction   Vector subtraction.    "
},
{
  "id": "subsec-vector-algebra-and-geometry-7-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-algebra-and-geometry-7-4",
  "type": "Interactive",
  "number": "2.1.12",
  "title": "Scalar multiplication.",
  "body": " Scalar multiplication   Scalar multiplication.    "
},
{
  "id": "subsec-linear-combinations-3",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-3",
  "type": "Definition",
  "number": "2.1.14",
  "title": "",
  "body": " Linear combination definition of  Vector linear combination of Linear combination   Let be scalars, and let be vectors in . The vector in  is called a linear combination of the vectors , with weights or coefficients  .   "
},
{
  "id": "vectors-eg-lincombo-plane",
  "level": "2",
  "url": "sec-vectors.html#vectors-eg-lincombo-plane",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": " Let and . Here are some linear combinations of and , drawn as points.              Linear combination two vectors, picture of The locations of these points are found using the parallelogram law for vector addition. Any vector on the plane is a linear combination of and , with suitable coefficients.  "
},
{
  "id": "subsec-linear-combinations-6",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-6",
  "type": "Figure",
  "number": "2.1.16",
  "title": "",
  "body": " Linear combinations of two vectors in .   "
},
{
  "id": "subsec-linear-combinations-7",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-7",
  "type": "Interactive",
  "number": "2.1.17",
  "title": "Linear combinations of three vectors.",
  "body": " Linear combinations of three vectors   Linear combinations of three vectors.    "
},
{
  "id": "subsec-linear-combinations-8",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-8",
  "type": "Example",
  "number": "2.1.19",
  "title": "Linear Combinations of a Single Vector.",
  "body": " Linear Combinations of a Single Vector  Linear combination single vector, picture of  A linear combination of a single vector is just a scalar multiple of . So some examples include The set of all linear combinations is the line through . (Unless , in which case any scalar multiple of is again .)             "
},
{
  "id": "subsec-linear-combinations-9",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-9",
  "type": "Example",
  "number": "2.1.20",
  "title": "Linear Combinations of Collinear Vectors.",
  "body": " Linear Combinations of Collinear Vectors  Linear combination collinear vectors, picture of  The set of all linear combinations of the vectors is the line containing both vectors.             The difference between this and the previous is that both vectors lie on the same line. Hence any scalar multiples of lie on that line, as does their sum.  "
},
{
  "id": "subsec-linear-combinations-10",
  "level": "2",
  "url": "sec-vectors.html#subsec-linear-combinations-10",
  "type": "Interactive",
  "number": "2.1.21",
  "title": "Linear combinations of two collinear vectors.",
  "body": " Linear combinations of two collinear vectors   Linear combinations of two collinear vectors in .    "
},
{
  "id": "sec-spans",
  "level": "1",
  "url": "sec-spans.html",
  "type": "Section",
  "number": "2.2",
  "title": "Vector Equations and Spans",
  "body": " Vector Equations and Spans    Understand the equivalence between a system of linear equations and a vector equation.  Learn the definition of , and how to draw pictures of spans.  Recipe: solve a vector equation using augmented matrices \/ decide if a vector is in a span.  Pictures: an inconsistent system of equations, a consistent system of equations, spans in and .  Vocabulary word:  vector equation .  Essential vocabulary word:  span .     Vector Equations   Vector equation equivalence with system of equations An equation involving vectors with coordinates is the same as equations involving only numbers. For example, the equation simplifies to . For two vectors to be equal, all of their coordinates must be equal, so this is just the system of linear equations    Vector equation definition of   A vector equation is an equation involving a linear combination of vectors with possibly unknown coefficients.     Asking whether or not a vector equation has a solution is the same as asking if a given vector is a linear combination of some other given vectors.   For example the vector equation above is asking if the vector is a linear combination of the vectors and .  The thing we really care about is solving systems of linear equations, not solving vector equations. The whole point of vector equations is that they give us a different, and more geometric, way of viewing systems of linear equations.   A Picture of a Consistent System  Vector equation consistent System of linear equations, consistent  Vector equation inconsistent System of linear equations, inconsistent  System of linear equations consistent picture of  Below we will show that the above system of equations is consistent. Equivalently, this means that the above vector equation has a solution. In other words, there is a linear combination of and that equals . We can visualize the last statement geometrically. Therefore, the following gives a picture of a consistent system of equations . Compare with below, which shows a picture of an inconsistent system.    A picture of the above vector equation. Try to solve the equation geometrically by moving the sliders.    In order to actually solve the vector equation , one has to solve the system of linear equations This means forming the augmented matrix and row reducing. Note that the columns of the augmented matrix are the vectors from the original vector equation , so it is not actually necessary to write the system of equations: one can go directly from the vector equation to the augmented matrix by smooshing the vectors together . In the following we carry out the row reduction and find the solution.    Is a linear combination of and ?    As discussed above, this question boils down to a row reduction: . From this we see that the equation is consistent, and the solution is and . We conclude that is indeed a linear combination of and , with coefficients and : .     Solving a vector equation  Vector equation solving  In general, the vector equation where are vectors in and are unknown scalars, has the same solution set as the linear system with augmented matrix whose columns are the s and the s.   Now we have three equivalent ways of thinking about a linear system:  As a system of equations:   As an augmented matrix:   As a vector equation ( ):   The third is geometric in nature: it lends itself to drawing pictures.    Spans  It will be important to know what are all linear combinations of a set of vectors in . In other words, we would like to understand the set of all vectors in such that the vector equation (in the unknowns ) has a solution (i.e. is consistent).   Span definition of     Essential definition   Let be vectors in . The span of is the collection of all linear combinations of , and is denoted . In symbols: Span of vectors  We also say that is the subset spanned by or generated by the vectors .     The above is the first of several essential definitions that we will see in this textbook. They are essential in that they form the essence of the subject of linear algebra: learning linear algebra means (in part) learning these definitions. All of the definitions are important, but it is essential that you learn and understand the definitions marked as such.   Set Builder Notation  Set builder notation  Subset set builder notation  The notation Set builder notation  reads as: the set of all things of the form such that are in . The vertical line is such that ; everything to the left of it is the set of all things of this form , and everything to the right is the condition that those things must satisfy to be in the set. Specifying a set in this way is called set builder notation .  All mathematical notation is only shorthand: any sequence of symbols must translate into a usual sentence.    Three characterizations of consistency  System of linear equations consistent span criterion  Now we have three equivalent ways of making the same statement:  A vector is in the span of .  The vector equation has a solution.  The linear system with augmented matrix is consistent.     Equivalent means that, for any given list of vectors , either all three statements are true, or all three statements are false.   This is a picture of an inconsistent linear system: the vector on the right-hand side of the equation is not in the span of . Convince yourself of this by trying to solve the equation by moving the sliders, and by row reduction. Compare .  System of linear equations inconsistent picture of     Pictures of Spans  Span pictures of  Drawing a picture of is the same as drawing a picture of all linear combinations of .   Pictures of spans in .               Pictures of spans in . The span of two noncollinear vectors is the plane containing the origin and the heads of the vectors. Note that three coplanar (but not collinear) vectors span a plane and not a 3-space, just as two collinear vectors span a line and not a plane.               Span of two vectors in   Interactive picture of a span of two vectors in .      Span of two vectors in   Interactive picture of a span of two vectors in .      Span of three vectors in   Interactive picture of a span of three vectors in .          For any collection of vectors in , the zero vector in is a linear combination of .    True: .      The vector can be written as a linear combination of and in infinitely many ways.    True: the equation corresponds to the augmented matrix . One step of row-reduction gives us , so the system is consistent and has a free variable, so it has infinitely many solutions.      The vector in the span of and .    True: row reduction quickly gives . We don't need to keep going to RREF to see that this augmented matrix has a pivot in every column except the rightmost column, so it is consistent.      If are vectors in , then the equation must be consistent.    True: If we set through all equal to , then .      The plane in is a span.    False: any span contains the zero vector but the plane does not contain the zero vector, so it is not a span.      The three vectors and span .    True. If is any vector in , then the vector equation corresponds to the augmented matrix . From the RREF we see that the augmented matrix cannot have a pivot in the rightmost column, so the system is consistent no matter what is. In other words, every in is in .      If , , and are nonzero vectors in , then Span is .    False. Take . Many other counterexamples possible.      The line is a span of some number of vectors in .    False. The span of any number of vectors must include the origin, but the line does not go through the origin.      Suppose is a vector in , and consider the set of all linear combinations of . What geometric shape(s) can this be?    If is the zero vector, then the set of all linear combinations of is just the zero vector, since no matter what the scalar is.  If is not the zero vector, then the set of all linear combinations of is a line. More specifically, it is the line through the origin and .      Consider the following two vectors which characterize two colors in terms of Red, Green, and Blue.       For which can we get as a combination of those two colors?        We put everything into an augmented matrix and row reduce. . This system is consistent if and only if .      Consider the system of equations given by   .     Write the system of equations as a vector equation.         Solve the vector equation, and use your solution to write the target vector in your equation as a linear combination of the other vectors.    We row-reduce: . This gives , , and . Therefore, .        Write nonzero vectors and in so that is a line.    Many examples possible. For example .      Write nonzero vectors and in so that is the line (where we use the coordinates to label points in ).    We can choose any two nonzero vectors that are on the line , which is the span of . For example, .       Let , , . Describe .    The vector is a linear combination of and since , so is the same as . The span of and is the -plane of , since if and are any real numbers then . For an illustration, see this graphic .      Find all solutions to the vector equation . If there are no solutions, justify why the vector equation is inconsistent.     . Therefore, \\ \\ and \\ .      Supppose we are asked to find a solution to the linear system of equations corresponding to the augmented matrix .     Rewrite the problem in terms of a vector equation.    Find a solution to the vector equation .      Rewrite the problem as a question about linear combinations.    Write as a linear combination of , , and .       Find all values of (if there are any) so that is a linear combination of and , and write as a linear combination of and .    We set up an augmented matrix and solve for so that the corresponding system is consistent. We will swap the first and third rows to make the math easier, but also to make it easier to solve for . . The system is consistent when there is no pivot in the right column, so , thus . To finish the problem, we need to solve . For this, we use the work that was already done above and do one more row operation. . .      Let and . Write a vector in that is not in .    Since is the set of all linear combinations of and , we need to find a vector that is not a linear combination of and . In other words, we need to find a so that the vector equation is inconsistent. We can put this in augmented matrix form and row-reduce. . The system will be inconsistent precisely when the final column has a pivot, which is when . For example, the vector will make the system inconsistent since .  Alternatively, we could have done this problem through trial and error. Since the system of equations is , one vector that will make this inconsistent is , since that requires and but .      Find all values of and so that is not .    Neither of the vectors given is the zero vector, so their span is at least a line. The only way their span is just a line is if they are collinear. Therefore, the vectors will span unless one is a scalar multiple of the other, which means there is some (nonzero) so that and , which means . Therefore, is any nonzero real number and .      Consider the set of all vectors in of the form . Write as a span of vectors in .    Unwrapping the general form of a vector in , we see . Therefore, the vectors in are simply all linear combinations of and . In other words, .     "
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
  "number": "2.2.1",
  "title": "",
  "body": " Vector equation definition of   A vector equation is an equation involving a linear combination of vectors with possibly unknown coefficients.   "
},
{
  "id": "subsec-vector-equations-7",
  "level": "2",
  "url": "sec-spans.html#subsec-vector-equations-7",
  "type": "Note",
  "number": "2.2.2",
  "title": "A Picture of a Consistent System.",
  "body": " A Picture of a Consistent System  Vector equation consistent System of linear equations, consistent  Vector equation inconsistent System of linear equations, inconsistent  System of linear equations consistent picture of  Below we will show that the above system of equations is consistent. Equivalently, this means that the above vector equation has a solution. In other words, there is a linear combination of and that equals . We can visualize the last statement geometrically. Therefore, the following gives a picture of a consistent system of equations . Compare with below, which shows a picture of an inconsistent system.  "
},
{
  "id": "vectors-figure-consistent",
  "level": "2",
  "url": "sec-spans.html#vectors-figure-consistent",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " A picture of the above vector equation. Try to solve the equation geometrically by moving the sliders.   "
},
{
  "id": "vectors-example-consistent",
  "level": "2",
  "url": "sec-spans.html#vectors-example-consistent",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Is a linear combination of and ?    As discussed above, this question boils down to a row reduction: . From this we see that the equation is consistent, and the solution is and . We conclude that is indeed a linear combination of and , with coefficients and : .   "
},
{
  "id": "subsec-vector-equations-11",
  "level": "2",
  "url": "sec-spans.html#subsec-vector-equations-11",
  "type": "Recipe",
  "number": "2.2.5",
  "title": "Solving a vector equation.",
  "body": " Solving a vector equation  Vector equation solving  In general, the vector equation where are vectors in and are unknown scalars, has the same solution set as the linear system with augmented matrix whose columns are the s and the s.  "
},
{
  "id": "vectors-defn-span",
  "level": "2",
  "url": "sec-spans.html#vectors-defn-span",
  "type": "Definition",
  "number": "2.2.6",
  "title": "",
  "body": " Span definition of     Essential definition   Let be vectors in . The span of is the collection of all linear combinations of , and is denoted . In symbols: Span of vectors  We also say that is the subset spanned by or generated by the vectors .    "
},
{
  "id": "set-builder-notation",
  "level": "2",
  "url": "sec-spans.html#set-builder-notation",
  "type": "Note",
  "number": "2.2.7",
  "title": "Set Builder Notation.",
  "body": " Set Builder Notation  Set builder notation  Subset set builder notation  The notation Set builder notation  reads as: the set of all things of the form such that are in . The vertical line is such that ; everything to the left of it is the set of all things of this form , and everything to the right is the condition that those things must satisfy to be in the set. Specifying a set in this way is called set builder notation .  All mathematical notation is only shorthand: any sequence of symbols must translate into a usual sentence.  "
},
{
  "id": "subsec-spans-6",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-6",
  "type": "Note",
  "number": "2.2.8",
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
  "number": "2.2.9",
  "title": "",
  "body": " This is a picture of an inconsistent linear system: the vector on the right-hand side of the equation is not in the span of . Convince yourself of this by trying to solve the equation by moving the sliders, and by row reduction. Compare .  System of linear equations inconsistent picture of   "
},
{
  "id": "subsec-spans-9-4",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-4",
  "type": "Figure",
  "number": "2.2.10",
  "title": "",
  "body": " Pictures of spans in .             "
},
{
  "id": "subsec-spans-9-5",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-5",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " Pictures of spans in . The span of two noncollinear vectors is the plane containing the origin and the heads of the vectors. Note that three coplanar (but not collinear) vectors span a plane and not a 3-space, just as two collinear vectors span a line and not a plane.             "
},
{
  "id": "subsec-spans-9-6",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-6",
  "type": "Interactive",
  "number": "2.2.12",
  "title": "Span of two vectors in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Span of two vectors in   Interactive picture of a span of two vectors in .    "
},
{
  "id": "subsec-spans-9-7",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-7",
  "type": "Interactive",
  "number": "2.2.14",
  "title": "Span of two vectors in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Span of two vectors in   Interactive picture of a span of two vectors in .    "
},
{
  "id": "subsec-spans-9-8",
  "level": "2",
  "url": "sec-spans.html#subsec-spans-9-8",
  "type": "Interactive",
  "number": "2.2.16",
  "title": "Span of three vectors in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Span of three vectors in   Interactive picture of a span of three vectors in .    "
},
{
  "id": "sec-spans-5-1",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-1",
  "type": "Exercise",
  "number": "2.2.3.1",
  "title": "",
  "body": "  For any collection of vectors in , the zero vector in is a linear combination of .    True: .   "
},
{
  "id": "sec-spans-5-2",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-2",
  "type": "Exercise",
  "number": "2.2.3.2",
  "title": "",
  "body": "  The vector can be written as a linear combination of and in infinitely many ways.    True: the equation corresponds to the augmented matrix . One step of row-reduction gives us , so the system is consistent and has a free variable, so it has infinitely many solutions.   "
},
{
  "id": "sec-spans-5-3",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-3",
  "type": "Exercise",
  "number": "2.2.3.3",
  "title": "",
  "body": "  The vector in the span of and .    True: row reduction quickly gives . We don't need to keep going to RREF to see that this augmented matrix has a pivot in every column except the rightmost column, so it is consistent.   "
},
{
  "id": "sec-spans-5-4",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-4",
  "type": "Exercise",
  "number": "2.2.3.4",
  "title": "",
  "body": "  If are vectors in , then the equation must be consistent.    True: If we set through all equal to , then .   "
},
{
  "id": "sec-spans-5-5",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-5",
  "type": "Exercise",
  "number": "2.2.3.5",
  "title": "",
  "body": "  The plane in is a span.    False: any span contains the zero vector but the plane does not contain the zero vector, so it is not a span.   "
},
{
  "id": "sec-spans-5-6",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-6",
  "type": "Exercise",
  "number": "2.2.3.6",
  "title": "",
  "body": "  The three vectors and span .    True. If is any vector in , then the vector equation corresponds to the augmented matrix . From the RREF we see that the augmented matrix cannot have a pivot in the rightmost column, so the system is consistent no matter what is. In other words, every in is in .   "
},
{
  "id": "sec-spans-5-7",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-7",
  "type": "Exercise",
  "number": "2.2.3.7",
  "title": "",
  "body": "  If , , and are nonzero vectors in , then Span is .    False. Take . Many other counterexamples possible.   "
},
{
  "id": "sec-spans-5-8",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-8",
  "type": "Exercise",
  "number": "2.2.3.8",
  "title": "",
  "body": "  The line is a span of some number of vectors in .    False. The span of any number of vectors must include the origin, but the line does not go through the origin.   "
},
{
  "id": "sec-spans-5-9",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-9",
  "type": "Exercise",
  "number": "2.2.3.9",
  "title": "",
  "body": "  Suppose is a vector in , and consider the set of all linear combinations of . What geometric shape(s) can this be?    If is the zero vector, then the set of all linear combinations of is just the zero vector, since no matter what the scalar is.  If is not the zero vector, then the set of all linear combinations of is a line. More specifically, it is the line through the origin and .   "
},
{
  "id": "sec-spans-5-10",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-10",
  "type": "Exercise",
  "number": "2.2.3.10",
  "title": "",
  "body": "  Consider the following two vectors which characterize two colors in terms of Red, Green, and Blue.       For which can we get as a combination of those two colors?        We put everything into an augmented matrix and row reduce. . This system is consistent if and only if .   "
},
{
  "id": "sec-spans-5-11",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-11",
  "type": "Exercise",
  "number": "2.2.3.11",
  "title": "",
  "body": "  Consider the system of equations given by   .     Write the system of equations as a vector equation.         Solve the vector equation, and use your solution to write the target vector in your equation as a linear combination of the other vectors.    We row-reduce: . This gives , , and . Therefore, .    "
},
{
  "id": "sec-spans-5-12",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-12",
  "type": "Exercise",
  "number": "2.2.3.12",
  "title": "",
  "body": "   Write nonzero vectors and in so that is a line.    Many examples possible. For example .      Write nonzero vectors and in so that is the line (where we use the coordinates to label points in ).    We can choose any two nonzero vectors that are on the line , which is the span of . For example, .    "
},
{
  "id": "sec-spans-5-13",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-13",
  "type": "Exercise",
  "number": "2.2.3.13",
  "title": "",
  "body": "  Let , , . Describe .    The vector is a linear combination of and since , so is the same as . The span of and is the -plane of , since if and are any real numbers then . For an illustration, see this graphic .   "
},
{
  "id": "sec-spans-5-14",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-14",
  "type": "Exercise",
  "number": "2.2.3.14",
  "title": "",
  "body": "  Find all solutions to the vector equation . If there are no solutions, justify why the vector equation is inconsistent.     . Therefore, \\ \\ and \\ .   "
},
{
  "id": "sec-spans-5-15",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-15",
  "type": "Exercise",
  "number": "2.2.3.15",
  "title": "",
  "body": "  Supppose we are asked to find a solution to the linear system of equations corresponding to the augmented matrix .     Rewrite the problem in terms of a vector equation.    Find a solution to the vector equation .      Rewrite the problem as a question about linear combinations.    Write as a linear combination of , , and .    "
},
{
  "id": "sec-spans-5-16",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-16",
  "type": "Exercise",
  "number": "2.2.3.16",
  "title": "",
  "body": "  Find all values of (if there are any) so that is a linear combination of and , and write as a linear combination of and .    We set up an augmented matrix and solve for so that the corresponding system is consistent. We will swap the first and third rows to make the math easier, but also to make it easier to solve for . . The system is consistent when there is no pivot in the right column, so , thus . To finish the problem, we need to solve . For this, we use the work that was already done above and do one more row operation. . .   "
},
{
  "id": "sec-spans-5-17",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-17",
  "type": "Exercise",
  "number": "2.2.3.17",
  "title": "",
  "body": "  Let and . Write a vector in that is not in .    Since is the set of all linear combinations of and , we need to find a vector that is not a linear combination of and . In other words, we need to find a so that the vector equation is inconsistent. We can put this in augmented matrix form and row-reduce. . The system will be inconsistent precisely when the final column has a pivot, which is when . For example, the vector will make the system inconsistent since .  Alternatively, we could have done this problem through trial and error. Since the system of equations is , one vector that will make this inconsistent is , since that requires and but .   "
},
{
  "id": "sec-spans-5-18",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-18",
  "type": "Exercise",
  "number": "2.2.3.18",
  "title": "",
  "body": "  Find all values of and so that is not .    Neither of the vectors given is the zero vector, so their span is at least a line. The only way their span is just a line is if they are collinear. Therefore, the vectors will span unless one is a scalar multiple of the other, which means there is some (nonzero) so that and , which means . Therefore, is any nonzero real number and .   "
},
{
  "id": "sec-spans-5-19",
  "level": "2",
  "url": "sec-spans.html#sec-spans-5-19",
  "type": "Exercise",
  "number": "2.2.3.19",
  "title": "",
  "body": "  Consider the set of all vectors in of the form . Write as a span of vectors in .    Unwrapping the general form of a vector in , we see . Therefore, the vectors in are simply all linear combinations of and . In other words, .   "
},
{
  "id": "sec-matrix-equations",
  "level": "1",
  "url": "sec-matrix-equations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Equations",
  "body": " Matrix Equations    Understand the equivalence between a system of linear equations, an augmented matrix, a vector equation, and a matrix equation.  Characterize the vectors such that is consistent, in terms of the span of the columns of .  Characterize matrices such that is consistent for all vectors .  Recipe: multiply a vector by a matrix (two ways).  Picture: the set of all vectors such that is consistent.  Vocabulary word:  matrix equation .     The Matrix Equation .  In this section we introduce a very concise way of writing a system of linear equations: . Here is a matrix and are vectors (generally of different sizes), so first we must explain how to multiply a matrix by a vector.   When we say is an matrix, we mean that has rows and columns. Matrix size of  Size of a matrix     In this book, we do not reserve the letters and for the numbers of rows and columns of a matrix. If we write is an matrix , then is the number of rows of and is the number of columns.    Matrix-vector product definition of  Matrix product with vector Matrix-vector product  Vector product with matrix Matrix-vector product   Let be an matrix with columns : The product of with a vector in is the linear combination . This is a vector in .     .   In order for to make sense, the number of entries of has to be the same as the number of columns of : we are using the entries of as the coefficients of the columns of in a linear combination. The resulting vector has the same number of entries as the number of rows of , since each column of has that number of entries.   If is an matrix ( rows, columns), then makes sense when has entries. The product has entries.    Properties of the Matrix-Vector Product   Let be an matrix, let be vectors in , and let be a scalar. Then:         Matrix equation definition of   A matrix equation is an equation of the form , where is an matrix, is a vector in , and is a vector whose coefficients are unknown.    In this book we will study two complementary questions about a matrix equation :  Given a specific choice of , what are all of the solutions to ?  What are all of the choices of so that is consistent?  The first question is more like the questions you might be used to from your earlier courses in algebra; you have a lot of practice solving equations like for . The second question is perhaps a new concept for you. The , which is the culmination of this chapter, tells us that the two questions are intimately related.   Matrix Equations and Vector Equations  Matrix equation equivalence with vector equation  Vector equation equivalence with matrix equation  Let and be vectors in . Consider the vector equation . This is equivalent to the matrix equation , where . Conversely, if is any matrix, then is equivalent to the vector equation , where are the columns of , and are the entries of .     Write the vector equation as a matrix equation, where are vectors in .    Let be the matrix with columns , and let be the vector with entries . Then , so the vector equation is equivalent to the matrix equation      Four Ways of Writing a Linear System  We now have four equivalent ways of writing (and thinking about) a system of linear equations: System of linear equations four ways of writing   As a system of equations: .  As an augmented matrix:   As a vector equation ( ):   As a matrix equation ( ): .  In particular, all four have the same solution set .    We will move back and forth freely between the four ways of writing a linear system, over and over again, for the rest of the book.    Another Way to Compute  The above is a useful way of defining the product of a matrix with a vector when it comes to understanding the relationship between matrix equations and vector equations. Here we give a definition that is better-adapted to computations by hand.   Row vector Vector  Vector row vector  Vector row vector product with column vector   A row vector is a matrix with one row. The product of a row vector of length and a (column) vector of length is . This is a scalar.     The row-column rule for matrix-vector multiplication  Matrix-vector product row-column rule  If is an matrix with rows , and is a vector in , then .    . This is the same answer as before: .      Spans and Consistency  Let be a matrix with columns : . Then .   Spans and Consistency  Matrix equation spans and consistency  System of linear equations consistent span criterion  Column span Column space  The matrix equation has a solution if and only if is in the span of the columns of .   This gives an equivalence between an algebraic statement ( is consistent), and a geometric statement ( is in the span of the columns of ).   An Inconsistent System  Let . Does the equation have a solution?   First we answer the question geometrically. The columns of are , and the target vector (on the right-hand side of the equation) is The equation is consistent if and only if is contained in the span of the columns of . So we draw a picture:             It does not appear that lies in so the equation is inconsistent.   The vector is not contained in , so the equation is inconsistent. (Try moving the sliders to solve the equation.)    Let us check our geometric answer by solving the matrix equation using row reduction. We put the system into an augmented matrix and row reduce: . The last equation is , so the system is indeed inconsistent, and the matrix equation has no solution.     A Consistent System  Let . Does the equation have a solution?   First we answer the question geometrically. The columns of are , and the target vector (on the right-hand side of the equation) is The equation is consistent if and only if is contained in the span of the columns of . So we draw a picture:             It appears that is indeed contained in the span of the columns of ; in fact, we can see .   The vector is contained in , so the equation is consistent. (Move the sliders to solve the equation.)    Let us check our geometric answer by solving the matrix equation using row reduction. We put the system into an augmented matrix and row reduce: . This gives us and , which is consistent with the picture: .     When Solutions Always Exist  Building on , we have the following criterion for when is consistent for every choice of .   Matrix equation always consistent   Let be an (non-augmented) matrix. The following are equivalent:  has a solution for all in .  The span of the columns of is all of .  has a pivot position in every row.      The equivalence of 1 and 2 is established by as applied to every in .  Now we show that 1 and 3 are equivalent. (Since we know 1 and 2 are equivalent, this implies 2 and 3 are equivalent as well.) If has a pivot in every row, then its reduced row echelon form looks like this: , and therefore reduces to this: . There is no that makes it inconsistent, so there is always a solution. Conversely, if does not have a pivot in each row, then its reduced row echelon form looks like this: , which can give rise to an inconsistent system after augmenting with : .    Recall that equivalent means that, for any given matrix , either all of the conditions of the above are true, or they are all false.   Be careful when reading the statement of the above . The first two conditions look very much like , but they are logically quite different because of the quantifier for all  .    The criteria of the theorem are satisfied   An example where the criteria of the above are satisfied. The violet region is the span of the columns of , which is the same as the set of all such that has a solution. If you drag , the demo will solve for you and move .      The critera of the theorem are not satisfied   An example where the criteria of the above are not satisfied. The violet line is the span of the columns of , which is the same as the set of all such that has a solution. Try dragging in and out of the column span.      We will see in that the dimension of the span of the columns is equal to the number of pivots of . That is, the columns of span a line if has one pivot, they span a plane if has two pivots, etc. The whole space has dimension , so this generalizes the fact that the columns of span when has pivots.       Suppose is a matrix. Then the equation must be inconsistent for some in .    False. Since has rows and columns, it is possible for to have a pivot in each row, in which case will be consistent for every in . For example: .      Suppose is an matrix and the matrix equation is consistent for each in . Then .    True. If , then has more rows than columns and so the max number of pivots possible number of pivots is , thus cannot have a pivot in every row.       If is a matrix and the product makes sense, then which is in?    The vector must be in , since has columns.      Write the following linear equation as a matrix equation:  .    .      Write the following linear system as a matrix equation:          Write the following linear system as a matrix equation:          Write the following linear system as a matrix equation:          Write the following linear system as a matrix equation:          Carry out the following matrix multiplication. .     .      Carry out the following matrix multiplication. .     .      Is the following matrix equation consistent? If so, solve it. . Can you do this problem without row-reducing?    This matrix equation is consistent: and . We can do this without row-reduction. We see must equal in order for the second entry to be , and so we need to subtract to get .      Is the following matrix equation consistent? If so, solve it. . Can you do this problem without row-reducing?    This matrix equation is inconsistent. Each of the vectors and has its first entry equal to its third entry (so any linear combination will also have first and third entries equal), but the target vector has first entry different than third entry.      Todd Stromboly sells apples, bananas, and dragonfruits. At his fruit stand:  You purchased apples, bananas, and dragonfruit, at a cost of .  Your friend bought apples, bananas, and dragonfruits at a cost of .  Your sworn enemy bought apple, bananas, and dragonfruits at a cost of . Let , , and , be the sale price of an apple, banana, and dragonfruit, respectively.     Write a system of equations whose solution would give us the price of each item.    The system of equations is   .      Write a vector equation whose solution would give us the price of each item.    The vector equation is .      Write a matrix equation whose solution would give us the price of each item.    The matrix equation is .      Find the price of each item.    We put an augmented matrix into RREF. . Thus , \\ , and . In other words, an apple costs , a banana costs , and a dragonfruit costs .       Suppose is a matrix whose columns are nonzero vectors and .     Write one nonzero vector so that is consistent.    Many possible answers. For example, is consistent since .      Write one nonzero solution to the equation .    By definition of matrix multiplication, so satisfies .       Your overall semester score in Math will be determined by the weights: homework, quizzes, for midterm 1, for midterm 2, and for the final exam.  Your grades were on homework, for quizzes, for midterm 1, and for midterm 2.     Write , , and so that solving the matrix equation will give us the final exam score we need in order to get a overall score for the course.    We arrange the matrix entries of in the order that the categories were given, and we put the grades in each category as the corresponding entries of . .      Solve the equation in part (a).    Carrying out the multiplication and solving gives us  If the exam does not give fractions of a point as credit, you will need to get a on the final exam.       The diagram below represents the temperature at points along wires, in celcius.         Let be the temperatures at the interior points. Assume the temperature at each interior point is the average of the temperatures of the three adjacent points.     Write a system of three linear equations whose solution would give the temperatures , , and . Do not solve it.    The left side system below or right-side system below are both fine.  , \\quad or \\quad . , \\quad or \\quad .  , \\quad or \\quad .      Write the system as a vector equation. Do not solve it.    .      Write a matrix equation that represents this system. Specify every entry of , , and . Do not solve it.    .      "
},
{
  "id": "sec-matrix-equations-2",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  Understand the equivalence between a system of linear equations, an augmented matrix, a vector equation, and a matrix equation.  Characterize the vectors such that is consistent, in terms of the span of the columns of .  Characterize matrices such that is consistent for all vectors .  Recipe: multiply a vector by a matrix (two ways).  Picture: the set of all vectors such that is consistent.  Vocabulary word:  matrix equation .   "
},
{
  "id": "subsec-the-matrix-equation-axb-4",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-4",
  "type": "Remark",
  "number": "2.3.1",
  "title": "",
  "body": " In this book, we do not reserve the letters and for the numbers of rows and columns of a matrix. If we write is an matrix , then is the number of rows of and is the number of columns.  "
},
{
  "id": "matrixeq-defn-Ax1",
  "level": "2",
  "url": "sec-matrix-equations.html#matrixeq-defn-Ax1",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": " Matrix-vector product definition of  Matrix product with vector Matrix-vector product  Vector product with matrix Matrix-vector product   Let be an matrix with columns : The product of with a vector in is the linear combination . This is a vector in .   "
},
{
  "id": "subsec-the-matrix-equation-axb-6",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-6",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " .  "
},
{
  "id": "matrix-linearity",
  "level": "2",
  "url": "sec-matrix-equations.html#matrix-linearity",
  "type": "Proposition",
  "number": "2.3.4",
  "title": "Properties of the Matrix-Vector Product.",
  "body": " Properties of the Matrix-Vector Product   Let be an matrix, let be vectors in , and let be a scalar. Then:       "
},
{
  "id": "subsec-the-matrix-equation-axb-10",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-10",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": " Matrix equation definition of   A matrix equation is an equation of the form , where is an matrix, is a vector in , and is a vector whose coefficients are unknown.   "
},
{
  "id": "subsec-the-matrix-equation-axb-12",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-12",
  "type": "Note",
  "number": "2.3.6",
  "title": "Matrix Equations and Vector Equations.",
  "body": " Matrix Equations and Vector Equations  Matrix equation equivalence with vector equation  Vector equation equivalence with matrix equation  Let and be vectors in . Consider the vector equation . This is equivalent to the matrix equation , where . Conversely, if is any matrix, then is equivalent to the vector equation , where are the columns of , and are the entries of .  "
},
{
  "id": "subsec-the-matrix-equation-axb-13",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-13",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": "  Write the vector equation as a matrix equation, where are vectors in .    Let be the matrix with columns , and let be the vector with entries . Then , so the vector equation is equivalent to the matrix equation    "
},
{
  "id": "subsec-the-matrix-equation-axb-14",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-14",
  "type": "Note",
  "number": "2.3.8",
  "title": "Four Ways of Writing a Linear System.",
  "body": " Four Ways of Writing a Linear System  We now have four equivalent ways of writing (and thinking about) a system of linear equations: System of linear equations four ways of writing   As a system of equations: .  As an augmented matrix:   As a vector equation ( ):   As a matrix equation ( ): .  In particular, all four have the same solution set .  "
},
{
  "id": "matrixeq-row-column-prod",
  "level": "2",
  "url": "sec-matrix-equations.html#matrixeq-row-column-prod",
  "type": "Definition",
  "number": "2.3.9",
  "title": "",
  "body": " Row vector Vector  Vector row vector  Vector row vector product with column vector   A row vector is a matrix with one row. The product of a row vector of length and a (column) vector of length is . This is a scalar.   "
},
{
  "id": "matrixeq-row-column",
  "level": "2",
  "url": "sec-matrix-equations.html#matrixeq-row-column",
  "type": "Recipe",
  "number": "2.3.10",
  "title": "The row-column rule for matrix-vector multiplication.",
  "body": " The row-column rule for matrix-vector multiplication  Matrix-vector product row-column rule  If is an matrix with rows , and is a vector in , then .  "
},
{
  "id": "subsec-the-matrix-equation-axb-16-5",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-the-matrix-equation-axb-16-5",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": " . This is the same answer as before: .  "
},
{
  "id": "subsec-spans-and-consistency-5",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-spans-and-consistency-5",
  "type": "Example",
  "number": "2.3.12",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System  Let . Does the equation have a solution?   First we answer the question geometrically. The columns of are , and the target vector (on the right-hand side of the equation) is The equation is consistent if and only if is contained in the span of the columns of . So we draw a picture:             It does not appear that lies in so the equation is inconsistent.   The vector is not contained in , so the equation is inconsistent. (Try moving the sliders to solve the equation.)    Let us check our geometric answer by solving the matrix equation using row reduction. We put the system into an augmented matrix and row reduce: . The last equation is , so the system is indeed inconsistent, and the matrix equation has no solution.   "
},
{
  "id": "subsec-spans-and-consistency-6",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-spans-and-consistency-6",
  "type": "Example",
  "number": "2.3.14",
  "title": "A Consistent System.",
  "body": " A Consistent System  Let . Does the equation have a solution?   First we answer the question geometrically. The columns of are , and the target vector (on the right-hand side of the equation) is The equation is consistent if and only if is contained in the span of the columns of . So we draw a picture:             It appears that is indeed contained in the span of the columns of ; in fact, we can see .   The vector is contained in , so the equation is consistent. (Move the sliders to solve the equation.)    Let us check our geometric answer by solving the matrix equation using row reduction. We put the system into an augmented matrix and row reduce: . This gives us and , which is consistent with the picture: .   "
},
{
  "id": "matrixeq-thm-full-span",
  "level": "2",
  "url": "sec-matrix-equations.html#matrixeq-thm-full-span",
  "type": "Theorem",
  "number": "2.3.16",
  "title": "",
  "body": " Matrix equation always consistent   Let be an (non-augmented) matrix. The following are equivalent:  has a solution for all in .  The span of the columns of is all of .  has a pivot position in every row.      The equivalence of 1 and 2 is established by as applied to every in .  Now we show that 1 and 3 are equivalent. (Since we know 1 and 2 are equivalent, this implies 2 and 3 are equivalent as well.) If has a pivot in every row, then its reduced row echelon form looks like this: , and therefore reduces to this: . There is no that makes it inconsistent, so there is always a solution. Conversely, if does not have a pivot in each row, then its reduced row echelon form looks like this: , which can give rise to an inconsistent system after augmenting with : .   "
},
{
  "id": "subsec-spans-and-consistency-7-4",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-spans-and-consistency-7-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "subsec-spans-and-consistency-7-6",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-spans-and-consistency-7-6",
  "type": "Interactive",
  "number": "2.3.17",
  "title": "The criteria of the theorem are satisfied.",
  "body": " The criteria of the theorem are satisfied   An example where the criteria of the above are satisfied. The violet region is the span of the columns of , which is the same as the set of all such that has a solution. If you drag , the demo will solve for you and move .    "
},
{
  "id": "subsec-spans-and-consistency-7-7",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-spans-and-consistency-7-7",
  "type": "Interactive",
  "number": "2.3.19",
  "title": "The critera of the theorem are not satisfied.",
  "body": " The critera of the theorem are not satisfied   An example where the criteria of the above are not satisfied. The violet line is the span of the columns of , which is the same as the set of all such that has a solution. Try dragging in and out of the column span.    "
},
{
  "id": "subsec-spans-and-consistency-7-8",
  "level": "2",
  "url": "sec-matrix-equations.html#subsec-spans-and-consistency-7-8",
  "type": "Remark",
  "number": "2.3.21",
  "title": "",
  "body": " We will see in that the dimension of the span of the columns is equal to the number of pivots of . That is, the columns of span a line if has one pivot, they span a plane if has two pivots, etc. The whole space has dimension , so this generalizes the fact that the columns of span when has pivots.  "
},
{
  "id": "sec-matrix-equations-5-1",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-1",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "  Suppose is a matrix. Then the equation must be inconsistent for some in .    False. Since has rows and columns, it is possible for to have a pivot in each row, in which case will be consistent for every in . For example: .   "
},
{
  "id": "sec-matrix-equations-5-2",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-2",
  "type": "Exercise",
  "number": "2.3.3.2",
  "title": "",
  "body": "  Suppose is an matrix and the matrix equation is consistent for each in . Then .    True. If , then has more rows than columns and so the max number of pivots possible number of pivots is , thus cannot have a pivot in every row.   "
},
{
  "id": "sec-matrix-equations-5-3",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-3",
  "type": "Exercise",
  "number": "2.3.3.3",
  "title": "",
  "body": "   If is a matrix and the product makes sense, then which is in?    The vector must be in , since has columns.   "
},
{
  "id": "sec-matrix-equations-5-4",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-4",
  "type": "Exercise",
  "number": "2.3.3.4",
  "title": "",
  "body": "  Write the following linear equation as a matrix equation:  .    .   "
},
{
  "id": "sec-matrix-equations-5-5",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-5",
  "type": "Exercise",
  "number": "2.3.3.5",
  "title": "",
  "body": "  Write the following linear system as a matrix equation:       "
},
{
  "id": "sec-matrix-equations-5-6",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-6",
  "type": "Exercise",
  "number": "2.3.3.6",
  "title": "",
  "body": "  Write the following linear system as a matrix equation:       "
},
{
  "id": "sec-matrix-equations-5-7",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-7",
  "type": "Exercise",
  "number": "2.3.3.7",
  "title": "",
  "body": "  Write the following linear system as a matrix equation:       "
},
{
  "id": "sec-matrix-equations-5-8",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-8",
  "type": "Exercise",
  "number": "2.3.3.8",
  "title": "",
  "body": "  Write the following linear system as a matrix equation:       "
},
{
  "id": "sec-matrix-equations-5-9",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-9",
  "type": "Exercise",
  "number": "2.3.3.9",
  "title": "",
  "body": "  Carry out the following matrix multiplication. .     .   "
},
{
  "id": "sec-matrix-equations-5-10",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-10",
  "type": "Exercise",
  "number": "2.3.3.10",
  "title": "",
  "body": "  Carry out the following matrix multiplication. .     .   "
},
{
  "id": "sec-matrix-equations-5-11",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-11",
  "type": "Exercise",
  "number": "2.3.3.11",
  "title": "",
  "body": "  Is the following matrix equation consistent? If so, solve it. . Can you do this problem without row-reducing?    This matrix equation is consistent: and . We can do this without row-reduction. We see must equal in order for the second entry to be , and so we need to subtract to get .   "
},
{
  "id": "sec-matrix-equations-5-12",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-12",
  "type": "Exercise",
  "number": "2.3.3.12",
  "title": "",
  "body": "  Is the following matrix equation consistent? If so, solve it. . Can you do this problem without row-reducing?    This matrix equation is inconsistent. Each of the vectors and has its first entry equal to its third entry (so any linear combination will also have first and third entries equal), but the target vector has first entry different than third entry.   "
},
{
  "id": "sec-matrix-equations-5-13",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-13",
  "type": "Exercise",
  "number": "2.3.3.13",
  "title": "",
  "body": "  Todd Stromboly sells apples, bananas, and dragonfruits. At his fruit stand:  You purchased apples, bananas, and dragonfruit, at a cost of .  Your friend bought apples, bananas, and dragonfruits at a cost of .  Your sworn enemy bought apple, bananas, and dragonfruits at a cost of . Let , , and , be the sale price of an apple, banana, and dragonfruit, respectively.     Write a system of equations whose solution would give us the price of each item.    The system of equations is   .      Write a vector equation whose solution would give us the price of each item.    The vector equation is .      Write a matrix equation whose solution would give us the price of each item.    The matrix equation is .      Find the price of each item.    We put an augmented matrix into RREF. . Thus , \\ , and . In other words, an apple costs , a banana costs , and a dragonfruit costs .    "
},
{
  "id": "sec-matrix-equations-5-14",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-14",
  "type": "Exercise",
  "number": "2.3.3.14",
  "title": "",
  "body": "  Suppose is a matrix whose columns are nonzero vectors and .     Write one nonzero vector so that is consistent.    Many possible answers. For example, is consistent since .      Write one nonzero solution to the equation .    By definition of matrix multiplication, so satisfies .    "
},
{
  "id": "sec-matrix-equations-5-15",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-15",
  "type": "Exercise",
  "number": "2.3.3.15",
  "title": "",
  "body": "  Your overall semester score in Math will be determined by the weights: homework, quizzes, for midterm 1, for midterm 2, and for the final exam.  Your grades were on homework, for quizzes, for midterm 1, and for midterm 2.     Write , , and so that solving the matrix equation will give us the final exam score we need in order to get a overall score for the course.    We arrange the matrix entries of in the order that the categories were given, and we put the grades in each category as the corresponding entries of . .      Solve the equation in part (a).    Carrying out the multiplication and solving gives us  If the exam does not give fractions of a point as credit, you will need to get a on the final exam.    "
},
{
  "id": "sec-matrix-equations-5-16",
  "level": "2",
  "url": "sec-matrix-equations.html#sec-matrix-equations-5-16",
  "type": "Exercise",
  "number": "2.3.3.16",
  "title": "",
  "body": "  The diagram below represents the temperature at points along wires, in celcius.         Let be the temperatures at the interior points. Assume the temperature at each interior point is the average of the temperatures of the three adjacent points.     Write a system of three linear equations whose solution would give the temperatures , , and . Do not solve it.    The left side system below or right-side system below are both fine.  , \\quad or \\quad . , \\quad or \\quad .  , \\quad or \\quad .      Write the system as a vector equation. Do not solve it.    .      Write a matrix equation that represents this system. Specify every entry of , , and . Do not solve it.    .    "
},
{
  "id": "sec-solution-sets",
  "level": "1",
  "url": "sec-solution-sets.html",
  "type": "Section",
  "number": "2.4",
  "title": "Solution Sets",
  "body": " Solution Sets    Understand the relationship between the solution set of and the solution set of .  Understand the difference between the solution set and the column span.  Recipes: parametric vector form, write the solution set of a homogeneous system as a span.  Pictures: solution set of a homogeneous system, solution set of an inhomogeneous system, the relationship between the two.  Vocabulary words:  homogeneous \/ inhomogeneous , trivial solution .     In this section we will study the geometry of the solution set of any matrix equation .    Homogeneous Systems  The equation is easier to solve when , so we start with this case.   System of linear equations homogeneous  System of linear equations inhomogeneous  Homogeneous System of linear equations  Inhomogeneous System of linear equations   A system of linear equations of the form is called homogeneous .  A system of linear equations of the form for is called inhomogeneous .    A homogeneous system is just a system of linear equations where all constants on the right side of the equals sign are zero.   System of linear equations trivial solution  System of linear equations nontrivial solution  System of linear equations homogeneous trivial solution  Trivial solution System of linear equations  Nontrivial solution System of linear equations  A homogeneous system always has the solution . This is called the trivial solution . Any nonzero solution is called nontrivial .    System of linear equations nontrivial solution and free variables  The equation has a nontrivial solution there is a free variable  has a column without a pivot position .    No nontrivial solutions   What is the solution set of , where    We form an augmented matrix and row reduce: . The only solution is the trivial solution .     When we row reduce the augmented matrix for a homogeneous system of linear equations, the last column will be zero throughout the row reduction process. We saw this in the last : So it is not really necessary to write augmented matrices when solving homogeneous systems.   When the homogeneous equation does have nontrivial solutions, it turns out that the solution set can be conveniently expressed as a span.   Parametric Vector Form (homogeneous case)  Parametric vector form of a homogeneous equation  Consider the following matrix in reduced row echelon form: . The matrix equation corresponds to the system of equations We can write the parametric form as follows: We wrote the redundant equations and in order to turn the above system into a vector equation : . This vector equation is called the parametric vector form of the solution set. Since and are allowed to be anything, this says that the solution set is the set of all linear combinations of and . In other words, the solution set is .   Here is the general procedure.   Parametric vector form (homogeneous case)  Parametric vector form of a homogeneous equation  System of linear equations parametric vector form of Parametric vector form  Let be an matrix. Suppose that the free variables in the homogeneous equation are, for example, , , and .  Find the reduced row echelon form of .  Write the parametric form of the solution set, including the redundant equations , , . Put equations for all of the in order.  Make a single vector equation from these equations by making the coefficients of and into vectors and , respectively.  The solutions to will then be expressed in the form for some vectors in , and any scalars . This is called the parametric vector form of the solution.  In this case, the solution set can be written as    We emphasize the following fact in particular.   Solution set of a homogeneous system is a span  The set of solutions to a homogeneous equation is a span.    The solution set is a line   Compute the parametric vector form of the solution set of , where .    We row reduce (without augmenting, as suggested in the above ): . This corresponds to the single equation . We write the parametric form including the redundant equation : We turn these into a single vector equation: . This is the parametric vector form of the solution set. Since is allowed to be anything, this says that the solution set is the set of all scalar multiples of , otherwise known as . We know how to draw the picture of a span of a vector: it is a line. Therefore, this is a picture of the the solution set:              Interactive picture of the solution set of . If you drag along the line spanned by , the product is always equal to zero. This is what it means for to be the solution set of .      Since there were two variables in the above , the solution set is a subset of . Since one of the variables was free, the solution set is a line :              System of linear equations nontrivial solution finding  In order to actually find a nontrivial solution to in the above , it suffices to substitute any nonzero value for the free variable . For instance, taking gives the nontrivial solution Compare to .    The solution set is a plane   Compute the parametric vector form of the solution set of , where .    We row reduce (without augmenting, as suggested in the above ): . This corresponds to the single equation . We write the parametric form including the redundant equations and : We turn these into a single vector equation: . This is the parametric vector form of the solution set. Since and are allowed to be anything, this says that the solution set is the set of all linear combinations of and . In other words, the solution set is . We know how to draw the span of two noncollinear vectors in : it is a plane. Therefore, this is a picture of the solution set:              Interactive picture of the solution set of . If you drag along the violet plane, the product is always equal to zero. This is what it means for the plane to be the solution set of .      Since there were three variables in the above , the solution set is a subset of . Since two of the variables were free, the solution set is a plane .  There is a natural question to ask here: is it possible to write the solution to a homogeneous matrix equation using fewer vectors than the one given in the above recipe? We will see in that the answer is no : the vectors from the recipe are always linearly independent, which means that there is no way to write the solution with fewer vectors.  Another natural question is: are the solution sets for inhomogeneuous equations also spans? As we will see shortly, they are never spans, but they are closely related to spans.  There is a natural relationship between the number of free variables and the size of the solution set, as follows.  Dimension of the solution set  Line dimension-1 solution set  Plane dimension-2 solution set  Space dimension-3 solution set  Dimension of a solution set  The above examples show us the following pattern: when there is one free variable in a consistent matrix equation, the solution set is a line, and when there are two free variables, the solution set is a plane, etc. The number of free variables is called the dimension of the solution set.   We will develop a rigorous definition of dimension in , but for now the dimension will simply mean the number of free variables. Compare with .  Intuitively, the dimension of a solution set is the number of parameters you need to describe a point in the solution set. For a line only one parameter is needed, and for a plane two parameters are needed. This is similar to how the location of a building on Peachtree Street which is like a line is determined by one number and how a street corner in Manhattan which is like a plane is specified by two numbers.    Inhomogeneous Systems  Recall that a matrix equation is called inhomogeneous when .   The solution set is a line   What is the solution set of , where (Compare to , where we solved the corresponding homogeneous equation.)    We row reduce the associated augmented matrix: . This corresponds to the single equation . We can write the parametric form as follows: We turn the above system into a vector equation : . This vector equation is called the parametric vector form of the solution set. We write the solution set as . Here is a picture of the the solution set:              Interactive picture of the solution set of . If you drag along the violet line, the product is always equal to . This is what it means for the line to be the solution set of .      In the above , the solution set was all vectors of the form where is any scalar. The vector is also a solution of : take . We call a particular solution .  In the solution set, is allowed to be anything, and so the solution set is obtained as follows: we take all scalar multiples of and then add the particular solution to each of these scalar multiples. Geometrically, this is accomplished by first drawing the span of , which is a line through the origin (and, not coincidentally, the solution to ), and we translate , or push, this line along . The translated line contains and is parallel to : it is a translate of a line .              The solution set is a plane   What is the solution set of , where (Compare .)    We row reduce the associated augmented matrix: . This corresponds to the single equation . We can write the parametric form as follows: We turn the above system into a vector equation : . This vector equation is called the parametric vector form of the solution set. Since and are allowed to be anything, this says that the solution set is the set of all linear combinations of and , translated by the vector . This is a plane which contains and is parallel to : it is a translate of a plane . We write the solution set as . Here is a picture of the solution set:              Interactive picture of the solution set of . If you drag along the violet plane, the product is always equal to . This is what it means for the plane to be the solution set of .      In the above , the solution set was all vectors of the form . where and are any scalars. In this case, a particular solution is .  In and the before it, the parametric vector form of the solution set of was exactly the same as the parametric vector form of the solution set of (from and , respectively), plus a particular solution.   Key Observation  Parametric vector form particular solution  Particular solution Parametric vector form  System of linear equations particular solution of Parametric vector form  Solution set translate of a span  If is consistent, the set of solutions to is obtained by taking one particular solution  of , and adding all solutions of .  In particular, if is consistent, the solution set is a translate of a span .    Parametric vector form of an inhomogeneous equation The parametric vector form of the solutions of is just the parametric vector form of the solutions of , plus a particular solution .  It is not hard to see why the is true. If is a particular solution, then , and if is a solution to the homogeneous equation , then , so is another solution of . On the other hand, if we start with any solution to then is a solution to since .   Row reducing to find the parametric vector form will give you one particular solution of . But the is true for any solution . In other words, if we row reduce in a different way and find a different solution to then the solutions to can be obtained from the solutions to by either adding or by adding .    The solution set is a point   What is the solution set of , where    We form an augmented matrix and row reduce: . The only solution is .  According to the , this is supposed to be a translate of a span by . Indeed, we saw in the first that the only solution of is the trivial solution, i.e., that the solution set is the one-point set . The solution set of the inhomogeneous equation is . Note that , so the homogeneous solution set is a span.               See the interactive figures in the next for visualizations of the .  Dimension of the solution set  Line dimension-1 solution set  Plane dimension-2 solution set  Space dimension-3 solution set  Dimension of a solution set  As in , when there is one free variable in a consistent matrix equation, the solution set is a line this line does not pass through the origin when the system is inhomogeneous when there are two free variables, the solution set is a plane (again not through the origin when the system is inhomogeneous), etc.   Again compare with .    Solution Sets and Column Spans  Column space versus the solution set  Solution set versus the column space  To every matrix , we have now associated two completely different geometric objects, both described using spans.   The solution set : for fixed , this is the set of all such that .  This is a span if , and it is a translate of a span if (and is consistent).  It is a subset of .  It is computed by solving a system of equations: usually by row reducing and finding the parametric vector form.      The span of the columns of : this is the set of all such that is consistent.  This is always a span.  It is a subset of .  It is not computed by solving a system of equations: row reduction plays no role.       Do not confuse these two geometric constructions! In the first the question is which ’s work for a given and in the second the question is which ’s work for some .   Solution set and span of the columns (1)   Left: the solution set of is in violet. Right: the span of the columns of is in violet. As you move , you change , so the solution set changes but all solution sets are parallel planes. If you move within the span of the columns, the solution set also changes, and the demo solves the equation to find a particular solution . If you move outside of the span of the columns, the system becomes inconsistent, and the solution set disappears.      Solution set and span of the columns (2)   Left: the solution set of is in violet. Right: the span of the columns of is in violet. As you move , you change , so the solution set changes but all solution sets are parallel planes. If you move within the span of the columns, the solution set also changes, and the demo solves the equation to find a particular solution . If you move outside of the span of the columns, the system becomes inconsistent, and the solution set disappears.      Solution set and span of the columns (3)   Left: the solution set of is in violet. Right: the span of the columns of is in violet. As you move , you change , so the solution set changes but all solution sets are parallel planes. If you move within the span of the columns, the solution set also changes, and the demo solves the equation to find a particular solution . If you move outside of the span of the columns, the system becomes inconsistent, and the solution set disappears.         If is a matrix with four pivots, then the matrix equation must be consistent for every in .    True. Since has pivots, it follows that for any vector in , the matrix will have a pivot in each of its rows, and each pivot will be to the left of the augment bar. Therefore, the system will be consistent.      If is a matrix with three pivots, then the set of solutions to is a plane.    True. Since has pivots but columns, there will be exactly columns that do not have a pivot. Therefore, the system will have exactly two free variables, which means that its solution set is a plane.      If is a nonzero vector and has infinitely many solutions, then must have infinitely many solutions.    True. The solution set to is a translate of the solution set to , hence must also have infinitely many solutions.      If is a matrix and the solution set for is a line, then has exactly pivots.    False. The solution set to will be a line if and only if has exactly free variable. Since has columns, this means has exactly (not ) pivots.      There is a matrix whose homogeneous solution set is the line .    False. The zero vector does not satisfy the equation .      Suppose that the set of solutions to is the plane . What is the set of solutions to ?    From the theory of section 2.4, the solution set to is the plane through the origin parallel to the plane . Therefore, the solution set to is the -plane in (this is the plane ).      Suppose that the set of solutions to is the plane in . Is it possible that there is a so that the set of solutions to is the line ? Justify your answer.    No. If is consistent, then its solution set must be parallel to the solution set to , namely the line which has slope . The line is the line , which has slope , so it cannot be the solution set to any consistent system .      Suppose that the set of solutions to is the plane in . Is it possible that there is a so that the set of solutions to is the -axis in ? Justify your answer.    No. The solution set to is a plane, then the solution set of any consistent equation must be a parallel plane, but the -axis is a line.      Suppose that the set of solutions to is the plane in and that the vector is a solution to .     Find one other solution to .    We can get the solution set to by taking any particular solution to (in this case, ) and then adding all homogeneous solutions. The solution set to is the plane , and we can find a homogeneous solution by just guessing and checking to find , , and that satisfy the equation. One such homogeneous solution is . Another solution to is .      Find all solutions to . Write your answer in parametric vector form.    The homogeneous equation corresponds to , which gives where and are free. . The solution set to is the translation of the homogeneous solution set by the particular solution : .       Is there a matrix so that the set of solutions to is the line ? If so, find such an . If not, explain why not.    Yes: we need to be in the span of the columns of , so that is consistent. Also, we need for the line to be the set of solutions to since that is the line through the origin parallel to . One way to get is to start as if both columns are , then modify until we satisfy the above. One such matrix is .      Fill in the blanks: If is a matrix with two pivots, then the set of solutions to is a \\underline{\\qquad \\quad} that lives in \\underline{\\qquad}.    has two pivot columns, so we will get one free variable in the when we solve , therefore the solution set will be a line. The solution set lives in since has three columns.      Let .     Which matrix equation makes sense: or ?    is a matrix, so any solution must be in and the target vector must be in . Therefore, makes sense but does not. One way to check this is to translate the matrix equation into a system of equations to confirm our answer, which we do in part (b).      For the answer you chose in part (a), write the matrix equation as a system of equations.    The linear system corresponding to is  .      For the answer you chose in part (a), write the matrix equation as a vector equation.    The corresponding vector equation is .      Solve the matrix equation and write your answer in parametric vector form.    We row-reduce : . This gives us and , with free. . We finish the problem by putting this into parametric vector form: .       Consider the system of equations in , , , and given below.   . Put an augmented matrix into reduced row echelon form to solve the system of equations. Write your answer in parametric vector form.       The free variables are and : .   .      Consider the linear system of equations in , , , and given below.   .     Write the set of solutions to the system in parametric vector form.    We put the system into an augmented matrix and row-reduce: . Therefore, and while and are free: .      Write two different solutions to the system of equations.    We can obtain a solution to the system by choosing any values we wish for and . For example, if we choose and we get . If we choose and we get .      Write two nonzero solutions to the corresponding homogeneous linear system of equations.    The solutions to the corresponding homogeneous system (where , , and are all replaced by zero) are given by everything in the span of the two vectors and . Therefore, and are two solutions to the homogeneous equations.       Suppose is a matrix and that for some vector , the set of solutions to is the line . Write the general solution to the homogeneous equation in parametric vector form.    The solution set for must include the origin and also must be a translate to the solution set to . In other words, the solution set for is the line through the origin that is parallel to . This is the line , so and is free. . Another way to do this problem is to draw the line , then draw its parallel line through the origin and notice that this line is the span of (or equivalently the span of ).      For some matrix and some vector , the dashed line below is the solution set to the matrix equation .         On the same graph, draw the solution set to .    The solution set is the line through the origin that is parallel to the dashed blue line.          True or false: It is possible that for some vector , the solution set to is a single point.    False. If is consistent, then its solution set must be a translation of the solution set to , which is a line. If is inconsistent, then it has no solution. Either way, it is not possible for to have exactly one solution.       Write a system of linear equations whose solution set has parametric form .    Writing as a single vector, we get: . Therefore, and (free). One possible answer is the following single equation, which will give us with as a free variable: .      The diagram below describes traffic in a part of town.            Write a system of three linear equations in , , and corresponding to the traffic flow.    For the top, bottom right, and bottom left nodes, the number of cars entering must match the number of cars exiting, so the system is:   .      Use an augmented matrix to solve this system of linear equations.    The system can be written   . We form an augmented matrix and perform row operations. . Therefore, is a free variable, , and .      Were we given enough information to know the exact values of , , and ? If your answer is yes, justify why. If your answer is no, give the range of possible values for , , and .    We cannot know the exact values of , , and with the information we have only been given. For example, we could have , , . Or, we could have , , , etc.  Even though is a free variable in the system of equations, the real-world constraints of the problem make us consider what is actually possible here. Since the variables are counting the number of cars at each intersection, they must all be at least zero. Therefore, we need to have (whereby ), and since we also need .  To summarize: As the values of range from to , the values of range from to while the values for range from (when ) down to (when ).      "
},
{
  "id": "sec-solution-sets-2",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "  Understand the relationship between the solution set of and the solution set of .  Understand the difference between the solution set and the column span.  Recipes: parametric vector form, write the solution set of a homogeneous system as a span.  Pictures: solution set of a homogeneous system, solution set of an inhomogeneous system, the relationship between the two.  Vocabulary words:  homogeneous \/ inhomogeneous , trivial solution .   "
},
{
  "id": "subsec-solnsets-homog-3",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-homog-3",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": " System of linear equations homogeneous  System of linear equations inhomogeneous  Homogeneous System of linear equations  Inhomogeneous System of linear equations   A system of linear equations of the form is called homogeneous .  A system of linear equations of the form for is called inhomogeneous .   "
},
{
  "id": "subsec-solnsets-homog-5-6",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-homog-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trivial solution nontrivial "
},
{
  "id": "solnsets-nontrivial",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-nontrivial",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " System of linear equations nontrivial solution and free variables  The equation has a nontrivial solution there is a free variable  has a column without a pivot position .  "
},
{
  "id": "solnsets-eg-no-nontrivial",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-eg-no-nontrivial",
  "type": "Example",
  "number": "2.4.3",
  "title": "No nontrivial solutions.",
  "body": " No nontrivial solutions   What is the solution set of , where    We form an augmented matrix and row reduce: . The only solution is the trivial solution .   "
},
{
  "id": "solnsets-no-augment",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-no-augment",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": " When we row reduce the augmented matrix for a homogeneous system of linear equations, the last column will be zero throughout the row reduction process. We saw this in the last : So it is not really necessary to write augmented matrices when solving homogeneous systems.  "
},
{
  "id": "subsec-solnsets-homog-10",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-homog-10",
  "type": "Example",
  "number": "2.4.5",
  "title": "Parametric Vector Form (homogeneous case).",
  "body": " Parametric Vector Form (homogeneous case)  Parametric vector form of a homogeneous equation  Consider the following matrix in reduced row echelon form: . The matrix equation corresponds to the system of equations We can write the parametric form as follows: We wrote the redundant equations and in order to turn the above system into a vector equation : . This vector equation is called the parametric vector form of the solution set. Since and are allowed to be anything, this says that the solution set is the set of all linear combinations of and . In other words, the solution set is .  "
},
{
  "id": "subsec-solnsets-homog-12",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-homog-12",
  "type": "Recipe",
  "number": "2.4.6",
  "title": "Parametric vector form (homogeneous case).",
  "body": " Parametric vector form (homogeneous case)  Parametric vector form of a homogeneous equation  System of linear equations parametric vector form of Parametric vector form  Let be an matrix. Suppose that the free variables in the homogeneous equation are, for example, , , and .  Find the reduced row echelon form of .  Write the parametric form of the solution set, including the redundant equations , , . Put equations for all of the in order.  Make a single vector equation from these equations by making the coefficients of and into vectors and , respectively.  The solutions to will then be expressed in the form for some vectors in , and any scalars . This is called the parametric vector form of the solution.  In this case, the solution set can be written as   "
},
{
  "id": "solnsets-eg-line",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-eg-line",
  "type": "Example",
  "number": "2.4.7",
  "title": "The solution set is a line.",
  "body": " The solution set is a line   Compute the parametric vector form of the solution set of , where .    We row reduce (without augmenting, as suggested in the above ): . This corresponds to the single equation . We write the parametric form including the redundant equation : We turn these into a single vector equation: . This is the parametric vector form of the solution set. Since is allowed to be anything, this says that the solution set is the set of all scalar multiples of , otherwise known as . We know how to draw the picture of a span of a vector: it is a line. Therefore, this is a picture of the the solution set:              Interactive picture of the solution set of . If you drag along the line spanned by , the product is always equal to zero. This is what it means for to be the solution set of .     "
},
{
  "id": "solnsets-eg-plane",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-eg-plane",
  "type": "Example",
  "number": "2.4.9",
  "title": "The solution set is a plane.",
  "body": " The solution set is a plane   Compute the parametric vector form of the solution set of , where .    We row reduce (without augmenting, as suggested in the above ): . This corresponds to the single equation . We write the parametric form including the redundant equations and : We turn these into a single vector equation: . This is the parametric vector form of the solution set. Since and are allowed to be anything, this says that the solution set is the set of all linear combinations of and . In other words, the solution set is . We know how to draw the span of two noncollinear vectors in : it is a plane. Therefore, this is a picture of the solution set:              Interactive picture of the solution set of . If you drag along the violet plane, the product is always equal to zero. This is what it means for the plane to be the solution set of .     "
},
{
  "id": "subsec-inhomogeneous-systems-2",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-inhomogeneous-systems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inhomogeneous "
},
{
  "id": "solnsets-eg-line2",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-eg-line2",
  "type": "Example",
  "number": "2.4.11",
  "title": "The solution set is a line.",
  "body": " The solution set is a line   What is the solution set of , where (Compare to , where we solved the corresponding homogeneous equation.)    We row reduce the associated augmented matrix: . This corresponds to the single equation . We can write the parametric form as follows: We turn the above system into a vector equation : . This vector equation is called the parametric vector form of the solution set. We write the solution set as . Here is a picture of the the solution set:              Interactive picture of the solution set of . If you drag along the violet line, the product is always equal to . This is what it means for the line to be the solution set of .     "
},
{
  "id": "subsec-inhomogeneous-systems-4",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-inhomogeneous-systems-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "particular solution "
},
{
  "id": "solnsets-eg-plane2",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-eg-plane2",
  "type": "Example",
  "number": "2.4.13",
  "title": "The solution set is a plane.",
  "body": " The solution set is a plane   What is the solution set of , where (Compare .)    We row reduce the associated augmented matrix: . This corresponds to the single equation . We can write the parametric form as follows: We turn the above system into a vector equation : . This vector equation is called the parametric vector form of the solution set. Since and are allowed to be anything, this says that the solution set is the set of all linear combinations of and , translated by the vector . This is a plane which contains and is parallel to : it is a translate of a plane . We write the solution set as . Here is a picture of the solution set:              Interactive picture of the solution set of . If you drag along the violet plane, the product is always equal to . This is what it means for the plane to be the solution set of .     "
},
{
  "id": "solnsets-translate-span-6",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-translate-span-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "particular solution "
},
{
  "id": "subsec-inhomogeneous-systems-11",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-inhomogeneous-systems-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric vector form "
},
{
  "id": "subsec-inhomogeneous-systems-13",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-inhomogeneous-systems-13",
  "type": "Remark",
  "number": "2.4.15",
  "title": "",
  "body": " Row reducing to find the parametric vector form will give you one particular solution of . But the is true for any solution . In other words, if we row reduce in a different way and find a different solution to then the solutions to can be obtained from the solutions to by either adding or by adding .  "
},
{
  "id": "solnsets-eg-point",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-eg-point",
  "type": "Example",
  "number": "2.4.16",
  "title": "The solution set is a point.",
  "body": " The solution set is a point   What is the solution set of , where    We form an augmented matrix and row reduce: . The only solution is .  According to the , this is supposed to be a translate of a span by . Indeed, we saw in the first that the only solution of is the trivial solution, i.e., that the solution set is the one-point set . The solution set of the inhomogeneous equation is . Note that , so the homogeneous solution set is a span.              "
},
{
  "id": "subsec-solnsets-ss-and-cs-4",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-ss-and-cs-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution set span of the columns of "
},
{
  "id": "subsec-solnsets-ss-and-cs-6",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-ss-and-cs-6",
  "type": "Interactive",
  "number": "2.4.17",
  "title": "Solution set and span of the columns (1).",
  "body": " Solution set and span of the columns (1)   Left: the solution set of is in violet. Right: the span of the columns of is in violet. As you move , you change , so the solution set changes but all solution sets are parallel planes. If you move within the span of the columns, the solution set also changes, and the demo solves the equation to find a particular solution . If you move outside of the span of the columns, the system becomes inconsistent, and the solution set disappears.    "
},
{
  "id": "subsec-solnsets-ss-and-cs-7",
  "level": "2",
  "url": "sec-solution-sets.html#subsec-solnsets-ss-and-cs-7",
  "type": "Interactive",
  "number": "2.4.19",
  "title": "Solution set and span of the columns (2).",
  "body": " Solution set and span of the columns (2)   Left: the solution set of is in violet. Right: the span of the columns of is in violet. As you move , you change , so the solution set changes but all solution sets are parallel planes. If you move within the span of the columns, the solution set also changes, and the demo solves the equation to find a particular solution . If you move outside of the span of the columns, the system becomes inconsistent, and the solution set disappears.    "
},
{
  "id": "solnsets-line-plane",
  "level": "2",
  "url": "sec-solution-sets.html#solnsets-line-plane",
  "type": "Interactive",
  "number": "2.4.21",
  "title": "Solution set and span of the columns (3).",
  "body": " Solution set and span of the columns (3)   Left: the solution set of is in violet. Right: the span of the columns of is in violet. As you move , you change , so the solution set changes but all solution sets are parallel planes. If you move within the span of the columns, the solution set also changes, and the demo solves the equation to find a particular solution . If you move outside of the span of the columns, the system becomes inconsistent, and the solution set disappears.    "
},
{
  "id": "sec-solution-sets-7-1",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-1",
  "type": "Exercise",
  "number": "2.4.4.1",
  "title": "",
  "body": "  If is a matrix with four pivots, then the matrix equation must be consistent for every in .    True. Since has pivots, it follows that for any vector in , the matrix will have a pivot in each of its rows, and each pivot will be to the left of the augment bar. Therefore, the system will be consistent.   "
},
{
  "id": "sec-solution-sets-7-2",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-2",
  "type": "Exercise",
  "number": "2.4.4.2",
  "title": "",
  "body": "  If is a matrix with three pivots, then the set of solutions to is a plane.    True. Since has pivots but columns, there will be exactly columns that do not have a pivot. Therefore, the system will have exactly two free variables, which means that its solution set is a plane.   "
},
{
  "id": "sec-solution-sets-7-3",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-3",
  "type": "Exercise",
  "number": "2.4.4.3",
  "title": "",
  "body": "  If is a nonzero vector and has infinitely many solutions, then must have infinitely many solutions.    True. The solution set to is a translate of the solution set to , hence must also have infinitely many solutions.   "
},
{
  "id": "sec-solution-sets-7-4",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-4",
  "type": "Exercise",
  "number": "2.4.4.4",
  "title": "",
  "body": "  If is a matrix and the solution set for is a line, then has exactly pivots.    False. The solution set to will be a line if and only if has exactly free variable. Since has columns, this means has exactly (not ) pivots.   "
},
{
  "id": "sec-solution-sets-7-5",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-5",
  "type": "Exercise",
  "number": "2.4.4.5",
  "title": "",
  "body": "  There is a matrix whose homogeneous solution set is the line .    False. The zero vector does not satisfy the equation .   "
},
{
  "id": "sec-solution-sets-7-6",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-6",
  "type": "Exercise",
  "number": "2.4.4.6",
  "title": "",
  "body": "  Suppose that the set of solutions to is the plane . What is the set of solutions to ?    From the theory of section 2.4, the solution set to is the plane through the origin parallel to the plane . Therefore, the solution set to is the -plane in (this is the plane ).   "
},
{
  "id": "sec-solution-sets-7-7",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-7",
  "type": "Exercise",
  "number": "2.4.4.7",
  "title": "",
  "body": "  Suppose that the set of solutions to is the plane in . Is it possible that there is a so that the set of solutions to is the line ? Justify your answer.    No. If is consistent, then its solution set must be parallel to the solution set to , namely the line which has slope . The line is the line , which has slope , so it cannot be the solution set to any consistent system .   "
},
{
  "id": "sec-solution-sets-7-8",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-8",
  "type": "Exercise",
  "number": "2.4.4.8",
  "title": "",
  "body": "  Suppose that the set of solutions to is the plane in . Is it possible that there is a so that the set of solutions to is the -axis in ? Justify your answer.    No. The solution set to is a plane, then the solution set of any consistent equation must be a parallel plane, but the -axis is a line.   "
},
{
  "id": "sec-solution-sets-7-9",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-9",
  "type": "Exercise",
  "number": "2.4.4.9",
  "title": "",
  "body": "  Suppose that the set of solutions to is the plane in and that the vector is a solution to .     Find one other solution to .    We can get the solution set to by taking any particular solution to (in this case, ) and then adding all homogeneous solutions. The solution set to is the plane , and we can find a homogeneous solution by just guessing and checking to find , , and that satisfy the equation. One such homogeneous solution is . Another solution to is .      Find all solutions to . Write your answer in parametric vector form.    The homogeneous equation corresponds to , which gives where and are free. . The solution set to is the translation of the homogeneous solution set by the particular solution : .    "
},
{
  "id": "sec-solution-sets-7-10",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-10",
  "type": "Exercise",
  "number": "2.4.4.10",
  "title": "",
  "body": "  Is there a matrix so that the set of solutions to is the line ? If so, find such an . If not, explain why not.    Yes: we need to be in the span of the columns of , so that is consistent. Also, we need for the line to be the set of solutions to since that is the line through the origin parallel to . One way to get is to start as if both columns are , then modify until we satisfy the above. One such matrix is .   "
},
{
  "id": "sec-solution-sets-7-11",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-11",
  "type": "Exercise",
  "number": "2.4.4.11",
  "title": "",
  "body": "  Fill in the blanks: If is a matrix with two pivots, then the set of solutions to is a \\underline{\\qquad \\quad} that lives in \\underline{\\qquad}.    has two pivot columns, so we will get one free variable in the when we solve , therefore the solution set will be a line. The solution set lives in since has three columns.   "
},
{
  "id": "sec-solution-sets-7-12",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-12",
  "type": "Exercise",
  "number": "2.4.4.12",
  "title": "",
  "body": "  Let .     Which matrix equation makes sense: or ?    is a matrix, so any solution must be in and the target vector must be in . Therefore, makes sense but does not. One way to check this is to translate the matrix equation into a system of equations to confirm our answer, which we do in part (b).      For the answer you chose in part (a), write the matrix equation as a system of equations.    The linear system corresponding to is  .      For the answer you chose in part (a), write the matrix equation as a vector equation.    The corresponding vector equation is .      Solve the matrix equation and write your answer in parametric vector form.    We row-reduce : . This gives us and , with free. . We finish the problem by putting this into parametric vector form: .    "
},
{
  "id": "sec-solution-sets-7-13",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-13",
  "type": "Exercise",
  "number": "2.4.4.13",
  "title": "",
  "body": "  Consider the system of equations in , , , and given below.   . Put an augmented matrix into reduced row echelon form to solve the system of equations. Write your answer in parametric vector form.       The free variables are and : .   .   "
},
{
  "id": "sec-solution-sets-7-14",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-14",
  "type": "Exercise",
  "number": "2.4.4.14",
  "title": "",
  "body": "  Consider the linear system of equations in , , , and given below.   .     Write the set of solutions to the system in parametric vector form.    We put the system into an augmented matrix and row-reduce: . Therefore, and while and are free: .      Write two different solutions to the system of equations.    We can obtain a solution to the system by choosing any values we wish for and . For example, if we choose and we get . If we choose and we get .      Write two nonzero solutions to the corresponding homogeneous linear system of equations.    The solutions to the corresponding homogeneous system (where , , and are all replaced by zero) are given by everything in the span of the two vectors and . Therefore, and are two solutions to the homogeneous equations.    "
},
{
  "id": "sec-solution-sets-7-15",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-15",
  "type": "Exercise",
  "number": "2.4.4.15",
  "title": "",
  "body": "  Suppose is a matrix and that for some vector , the set of solutions to is the line . Write the general solution to the homogeneous equation in parametric vector form.    The solution set for must include the origin and also must be a translate to the solution set to . In other words, the solution set for is the line through the origin that is parallel to . This is the line , so and is free. . Another way to do this problem is to draw the line , then draw its parallel line through the origin and notice that this line is the span of (or equivalently the span of ).   "
},
{
  "id": "sec-solution-sets-7-16",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-16",
  "type": "Exercise",
  "number": "2.4.4.16",
  "title": "",
  "body": "  For some matrix and some vector , the dashed line below is the solution set to the matrix equation .         On the same graph, draw the solution set to .    The solution set is the line through the origin that is parallel to the dashed blue line.          True or false: It is possible that for some vector , the solution set to is a single point.    False. If is consistent, then its solution set must be a translation of the solution set to , which is a line. If is inconsistent, then it has no solution. Either way, it is not possible for to have exactly one solution.    "
},
{
  "id": "sec-solution-sets-7-17",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-17",
  "type": "Exercise",
  "number": "2.4.4.17",
  "title": "",
  "body": "  Write a system of linear equations whose solution set has parametric form .    Writing as a single vector, we get: . Therefore, and (free). One possible answer is the following single equation, which will give us with as a free variable: .   "
},
{
  "id": "sec-solution-sets-7-18",
  "level": "2",
  "url": "sec-solution-sets.html#sec-solution-sets-7-18",
  "type": "Exercise",
  "number": "2.4.4.18",
  "title": "",
  "body": "  The diagram below describes traffic in a part of town.            Write a system of three linear equations in , , and corresponding to the traffic flow.    For the top, bottom right, and bottom left nodes, the number of cars entering must match the number of cars exiting, so the system is:   .      Use an augmented matrix to solve this system of linear equations.    The system can be written   . We form an augmented matrix and perform row operations. . Therefore, is a free variable, , and .      Were we given enough information to know the exact values of , , and ? If your answer is yes, justify why. If your answer is no, give the range of possible values for , , and .    We cannot know the exact values of , , and with the information we have only been given. For example, we could have , , . Or, we could have , , , etc.  Even though is a free variable in the system of equations, the real-world constraints of the problem make us consider what is actually possible here. Since the variables are counting the number of cars at each intersection, they must all be at least zero. Therefore, we need to have (whereby ), and since we also need .  To summarize: As the values of range from to , the values of range from to while the values for range from (when ) down to (when ).    "
},
{
  "id": "sec-linear-independence",
  "level": "1",
  "url": "sec-linear-independence.html",
  "type": "Section",
  "number": "2.5",
  "title": "Linear Independence",
  "body": " Linear Independence    Understand the concept of linear independence.  Learn two criteria for linear independence.  Understand the relationship between linear independence and pivot columns \/ free variables.  Recipe: test if a set of vectors is linearly independent \/ find an equation of linear dependence.  Picture: whether a set of vectors in or is linearly independent or not.  Vocabulary words:  linear dependence relation \/ equation of linear dependence .  Essential vocabulary words:  linearly independent , linearly dependent .     Sometimes the span of a set of vectors is smaller than you expect from the number of vectors, as in the picture below. This means that (at least) one of the vectors is redundant: it can be removed without affecting the span. In the present section, we formalize this idea in the notion of linear independence .   Pictures of sets of vectors that are linearly dependent. Note that in each case, one vector is in the span of the others so it doesn t make the span bigger.                The Definition of Linear Independence   Linear independence definition of  Linear dependence Linear independence     Essential definition   A set of vectors is linearly independent if the vector equation has only the trivial solution . The set is linearly dependent otherwise.      Linear Independence linear dependence relation  Linear Independence equation of linear dependence  Equation of linear dependence Linear independence  Linear dependence relation Linear independence In other words, is linearly dependent if there exist numbers , not all equal to zero, such that . This is called a linear dependence relation or equation of linear dependence .   Note that linear dependence and linear independence are notions that apply to a collection of vectors . It does not make sense to say things like this vector is linearly dependent on these other vectors, or this matrix is linearly independent.     Checking linear dependence   Is the set linearly independent?    Equivalently, we are asking if the homogeneous vector equation has a nontrivial solution. We solve this by forming a matrix and row reducing (we do not augment because of ): This says and . So there exist nontrivial solutions: for instance, taking gives this equation of linear dependence: .   Move the sliders to solve the homogeneous vector equation in this example. Do you see why the vectors need to be coplanar in order for there to exist a nontrivial solution?       Checking linear independence   Is the set linearly independent?    Equivalently, we are asking if the homogeneous vector equation has a nontrivial solution. We solve this by forming a matrix and row reducing (we do not augment because of ): This says , i.e., the only solution is the trivial solution. We conclude that the set is linearly independent.   Move the sliders to solve the homogeneous vector equation in this example. Do you see why the vectors would need to be coplanar in order for there to exist a nontrivial solution?       Vector parametric form  An important observation is that the vectors coming from the parametric vector form of the solution of a matrix equation are linearly independent. In we saw that the solution set of for is . Let's explain why the vectors and are linearly independent. Suppose that . Comparing the second and third coordinates, we see that . This reasoning will work in any example, since the entries corresponding to the free variables are all equal to 1 or 0, and are only equal to 1 in one of the vectors. This observation forms part of .   The above examples lead to the following recipe.   Checking linear independence  Linear Independence verifying  A set of vectors is linearly independent if and only if the vector equation has only the trivial solution, if and only if the matrix equation has only the trivial solution, where is the matrix with columns : . This is true if and only if has a pivot position in every column.  Solving the matrix equatiion will either verify that the columns are linearly independent, or will produce a linear dependence relation by substituting any nonzero values for the free variables.   (Recall that has a nontrivial solution if and only if has a column without a pivot: see .)  Suppose that has more columns than rows. Then cannot have a pivot in every column (it has at most one pivot per row), so its columns are automatically linearly dependent.   Linear Independence wide matrices  A wide matrix (a matrix with more columns than rows) has linearly dependent columns.   For example, four vectors in are automatically linearly dependent. Note that a tall matrix may or may not have linearly independent columns.   Facts about linear independence  Linear Independence basic facts     Two vectors are linearly dependent if and only if they are collinear, i.e., one is a scalar multiple of the other.  Any set containing the zero vector is linearly dependent.  If a subset of is linearly dependent, then is linearly dependent as well.        If then , so is linearly dependent. In the other direction, if with (say), then .  It is easy to produce a linear dependence relation if one vector is the zero vector: for instance, if then .  After reordering, we may suppose that is linearly dependent, with . This means that there is an equation of linear dependence , with at least one of nonzero. This is also an equation of linear dependence among , since we can take the coefficients of to all be zero.      With regard to the first fact, note that the zero vector is a multiple of any vector, so it is collinear with any other vector. Hence facts 1 and 2 are consistent with each other.    Criteria for Linear Independence  In this subsection we give two criteria for a set of vectors to be linearly independent. Keep in mind, however, that the actual is above.    A set of vectors is linearly dependent if and only if one of the vectors is in the span of the other ones.  Any such vector may be removed without affecting the span.    Suppose, for instance, that is in , so we have an equation like . We can subract from both sides of the equation to get . This is a linear dependence relation.  In this case, any linear combination of is already a linear combination of : . Therefore, is contained in . Any linear combination of is also a linear combination of (with the -coefficient equal to zero), so is also contained in , and thus they are equal.  In the other direction, if we have a linear dependence relation like , then we can move any nonzero term to the left side of the equation and divide by its coefficient: . This shows that is in .  We leave it to the reader to generalize this proof for any set of vectors.    In a linearly dependent set , it is not generally true that any vector is in the span of the others, only that at least one of them is.  For example, the set is linearly dependent, but is not in the span of the other two vectors. Also see below.   makes precise in what sense a set of linearly dependent vectors is redundant.   Increasing Span Criterion  Linear Independence increasing span criterion  Increasing span criterion Linear independence   A set of vectors is linearly independent if and only if, for every , the vector is not in .    It is equivalent to show that is linearly dependent if and only if is in for some . The if implication is an immediate consequence of . Suppose then that is linearly dependent. This means that some is in the span of the others. Choose the largest such . We claim that this is in . If not, then with not all of equal to zero. Suppose for simplicity that . Then we can rearrange: . This says that is in the span of , which contradicts our assumption that is the last vector in the span of the others.    We can rephrase this as follows:   If you make a set of vectors by adding one vector at a time, and if the span got bigger every time you added a vector, then your set is linearly independent.     Pictures of Linear Independence  Linear Independence pictures of  A set containg one vector is linearly independent when , since implies .             A set of two noncollinear vectors is linearly independent:  Neither is in the span of the other, so we can apply the first criterion .  The span got bigger when we added , so we can apply the increasing span criterion .               The set of three vectors below is linearly dependent:  is in , so we can apply the first criterion .  The span did not increase when we added , so we can apply the increasing span criterion .  In the picture below, note that is in , and is in , so we can remove any of the three vectors without shrinking the span.             Two collinear vectors are always linearly dependent:  is in , so we can apply the first criterion .  The span did not increase when we added , so we can apply the increasing span criterion .               These three vectors are linearly dependent: indeed, is already linearly dependent, so we can use the third .              Linear independence of two vectors in   Move the vector heads and the demo will tell you if they are linearly independent and show you their span.      Linear dependence of three vectors in   Move the vector heads and the demo will tell you that they are linearly dependent and show you their span.     The two vectors below are linearly independent because they are not collinear.             The three vectors below are linearly independent: the span got bigger when we added , then again when we added , so we can apply the increasing span criterion .             The three coplanar vectors below are linearly dependent:  is in , so we can apply the first criterion .  The span did not increase when we added , so we can apply the increasing span criterion .               Note that three vectors are linearly dependent if and only if they are coplanar . Indeed, is linearly dependent if and only if one vector is in the span of the other two, which is a plane (or a line) (or ).  The four vectors below are linearly dependent: they are the columns of a wide matrix . Note however that is not contained in . See .   The vectors are linearly dependent, but is not contained in .               Linear independence of two vectors in   Move the vector heads and the demo will tell you if they are linearly independent and show you their span.      Linear independence of three vectors in   Move the vector heads and the demo will tell you if they are linearly independent and show you their span.       Linear Dependence and Free Variables  In light of and criterion , it is natural to ask which columns of a matrix are redundant, i.e., which we can remove without affecting the column span.    Let be vectors in , and consider the matrix . Then we can delete the columns of  without pivots (the columns corresponding to the free variables), without changing .  The pivot columns are linearly independent, so we cannot delete any more columns without changing the span.    If the matrix is in reduced row echelon form: then the column without a pivot is visibly in the span of the pivot columns: , and the pivot columns are linearly independent: .  If the matrix is not in reduced row echelon form, then we row reduce: . The following two vector equations have the same solution set, as they come from row-equivalent matrices: . We conclude that and that has only the trivial solution.    Note that it is necessary to row reduce to find which are its pivot columns . However, the span of the columns of the row reduced matrix is generally not equal to the span of the columns of : one must use the pivot columns of the original matrix. See for a restatement of the above theorem.   The matrix has reduced row echelon form . Therefore, the first two columns of are the pivot columns, so we can delete the others without changing the span: . Moreover, the first two columns are linearly independent.    Pivot Columns and Dimension  Let be the number of pivot columns in the matrix .  If then is a line.  If then is a plane.  If then is a 3-space.  Et cetera.  The number is called the dimension. We discussed this notion in and . We will define this concept rigorously in .       Suppose and are vectors in and neither vector is a scalar multiple of the other. Then must be a linearly independent set.    True. The vectors and cannot be linearly dependent, since then would have a solution where or . This would mean and are scalar multiples of each other: if then , and similarly if then .      Suppose , , and are vectors in and that and are not collinear whenever . is a plane whenever . Then is a linearly independent set.    False. Let , \\ , \\ . No two among them are collinear, so any two vectors chosen among them will span a plane. However, they are linearly dependent since .      If is matrix and the solution set to is a line, then the columns of are linearly dependent.    True. From section 2.4, we know that the solution set of any consistent system is a translation of the homogeneous solution set. Here, the system has a line as its solution set, so the homogeneous system has a line as its solution set and thus has infinitely many solutions. Therefore, the columns of are linearly dependent.      If a set of vectors contains fewer vectors than there are entries in the vectors, then the set is linearly independent.    False. For example, the set in is linearly dependent.      If and are vectors in , then the set is linearly independent.    False. The third vector is a linear combination of the first two vectors, so the set is linearly dependent.      If a matrix has a pivot in each column, then the columns of are linearly independent.    True. Having a pivot in each column guarantees that has only the trivial solution, which is what it means for the columns of to be linearly independent.      If you have a set of linearly independent set of vectors, and the span of the vectors in is a line, then how many vectors are in ?    There is exactly one vector in . The span of any single nonzero vector is a line, whereas a linearly independent set with two (or more) vectors would span at least a plane.      In each case answer Always, Sometimes, or Never. Justify your answers.     A collection of 99 vectors in is linearly dependent.    False. We could get a set of 99 linearly independent vectors by putting in the entry of for each and making all other entries . .      A collection of 100 vectors in is linearly dependent.    True. If we put the 100 vectors as columns of a matrix, we will get a matrix. This means the matrix has columns but a max of pivots, so it cannot have a pivot in each column, therefore the set of vectors is linearly dependent.       Find all values of so that the following set vectors is linearly independent.       In each case, determine whether the set of vectors is linearly dependent or linearly independent.        Forming a matrix with the vectors as columns gives 3 pivot columns (no row-reduction required), so the vectors are linearly independent. Alternatively, use the Increasing Span Criterion.         The first and third vectors are multiples of each other, so the vectors are linearly dependent.         Any three vectors in are automatically linearly dependent.       Suppose that are vectors in and the equation has exactly one solution.     Must be linearly independent?    Yes. Since the first equation has exactly one solution, the matrix whose columns are through has a pivot in every column, therefore are linearly independent.      Must the equation have exactly one solution?    Yes. Since is linearly independent, so is , which is the same thing as saying has only the trivial solution .      Must there be a vector so that is linearly independent and the equation is consistent?    Yes. Since is linearly independent, there is at least one vector in that is not a scalar multiple of (otherwise they would all be scalar multiples of and therefore linearly dependent). Since is in the set it is also in , therefore there is at least one solution to . It will become much easier to see why this part of the problem is true by the end of chapter 2.       "
},
{
  "id": "sec-linear-independence-2",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-2",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "  Understand the concept of linear independence.  Learn two criteria for linear independence.  Understand the relationship between linear independence and pivot columns \/ free variables.  Recipe: test if a set of vectors is linearly independent \/ find an equation of linear dependence.  Picture: whether a set of vectors in or is linearly independent or not.  Vocabulary words:  linear dependence relation \/ equation of linear dependence .  Essential vocabulary words:  linearly independent , linearly dependent .   "
},
{
  "id": "linindep-intro-pic",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-intro-pic",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " Pictures of sets of vectors that are linearly dependent. Note that in each case, one vector is in the span of the others so it doesn t make the span bigger.             "
},
{
  "id": "linindep-defn-linindep",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-defn-linindep",
  "type": "Definition",
  "number": "2.5.2",
  "title": "",
  "body": " Linear independence definition of  Linear dependence Linear independence     Essential definition   A set of vectors is linearly independent if the vector equation has only the trivial solution . The set is linearly dependent otherwise.    "
},
{
  "id": "subsec-the-definition-of-linear-independence-3",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-the-definition-of-linear-independence-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear dependence relation equation of linear dependence "
},
{
  "id": "subsec-the-definition-of-linear-independence-4",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-the-definition-of-linear-independence-4",
  "type": "Insight",
  "number": "2.5.3",
  "title": "",
  "body": " Note that linear dependence and linear independence are notions that apply to a collection of vectors . It does not make sense to say things like this vector is linearly dependent on these other vectors, or this matrix is linearly independent.   "
},
{
  "id": "subsec-the-definition-of-linear-independence-5",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-the-definition-of-linear-independence-5",
  "type": "Example",
  "number": "2.5.4",
  "title": "Checking linear dependence.",
  "body": " Checking linear dependence   Is the set linearly independent?    Equivalently, we are asking if the homogeneous vector equation has a nontrivial solution. We solve this by forming a matrix and row reducing (we do not augment because of ): This says and . So there exist nontrivial solutions: for instance, taking gives this equation of linear dependence: .   Move the sliders to solve the homogeneous vector equation in this example. Do you see why the vectors need to be coplanar in order for there to exist a nontrivial solution?     "
},
{
  "id": "subsec-the-definition-of-linear-independence-6",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-the-definition-of-linear-independence-6",
  "type": "Example",
  "number": "2.5.6",
  "title": "Checking linear independence.",
  "body": " Checking linear independence   Is the set linearly independent?    Equivalently, we are asking if the homogeneous vector equation has a nontrivial solution. We solve this by forming a matrix and row reducing (we do not augment because of ): This says , i.e., the only solution is the trivial solution. We conclude that the set is linearly independent.   Move the sliders to solve the homogeneous vector equation in this example. Do you see why the vectors would need to be coplanar in order for there to exist a nontrivial solution?     "
},
{
  "id": "param-vect-form-lin-ind",
  "level": "2",
  "url": "sec-linear-independence.html#param-vect-form-lin-ind",
  "type": "Example",
  "number": "2.5.8",
  "title": "Vector parametric form.",
  "body": " Vector parametric form  An important observation is that the vectors coming from the parametric vector form of the solution of a matrix equation are linearly independent. In we saw that the solution set of for is . Let's explain why the vectors and are linearly independent. Suppose that . Comparing the second and third coordinates, we see that . This reasoning will work in any example, since the entries corresponding to the free variables are all equal to 1 or 0, and are only equal to 1 in one of the vectors. This observation forms part of .  "
},
{
  "id": "linindep-matrix-cols",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-matrix-cols",
  "type": "Recipe",
  "number": "2.5.9",
  "title": "Checking linear independence.",
  "body": " Checking linear independence  Linear Independence verifying  A set of vectors is linearly independent if and only if the vector equation has only the trivial solution, if and only if the matrix equation has only the trivial solution, where is the matrix with columns : . This is true if and only if has a pivot position in every column.  Solving the matrix equatiion will either verify that the columns are linearly independent, or will produce a linear dependence relation by substituting any nonzero values for the free variables.  "
},
{
  "id": "linindep-wide-matrix",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-wide-matrix",
  "type": "Insight",
  "number": "2.5.10",
  "title": "",
  "body": " Linear Independence wide matrices  A wide matrix (a matrix with more columns than rows) has linearly dependent columns.  "
},
{
  "id": "linindep-facts",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-facts",
  "type": "Fact",
  "number": "2.5.11",
  "title": "Facts about linear independence.",
  "body": " Facts about linear independence  Linear Independence basic facts     Two vectors are linearly dependent if and only if they are collinear, i.e., one is a scalar multiple of the other.  Any set containing the zero vector is linearly dependent.  If a subset of is linearly dependent, then is linearly dependent as well.        If then , so is linearly dependent. In the other direction, if with (say), then .  It is easy to produce a linear dependence relation if one vector is the zero vector: for instance, if then .  After reordering, we may suppose that is linearly dependent, with . This means that there is an equation of linear dependence , with at least one of nonzero. This is also an equation of linear dependence among , since we can take the coefficients of to all be zero.     "
},
{
  "id": "linindep-criterion-inspan",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-criterion-inspan",
  "type": "Theorem",
  "number": "2.5.12",
  "title": "",
  "body": "  A set of vectors is linearly dependent if and only if one of the vectors is in the span of the other ones.  Any such vector may be removed without affecting the span.    Suppose, for instance, that is in , so we have an equation like . We can subract from both sides of the equation to get . This is a linear dependence relation.  In this case, any linear combination of is already a linear combination of : . Therefore, is contained in . Any linear combination of is also a linear combination of (with the -coefficient equal to zero), so is also contained in , and thus they are equal.  In the other direction, if we have a linear dependence relation like , then we can move any nonzero term to the left side of the equation and divide by its coefficient: . This shows that is in .  We leave it to the reader to generalize this proof for any set of vectors.   "
},
{
  "id": "linindep-not-any",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-not-any",
  "type": "Insight",
  "number": "2.5.13",
  "title": "",
  "body": "In a linearly dependent set , it is not generally true that any vector is in the span of the others, only that at least one of them is. "
},
{
  "id": "linindep-increasing-span",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-increasing-span",
  "type": "Theorem",
  "number": "2.5.14",
  "title": "Increasing Span Criterion.",
  "body": " Increasing Span Criterion  Linear Independence increasing span criterion  Increasing span criterion Linear independence   A set of vectors is linearly independent if and only if, for every , the vector is not in .    It is equivalent to show that is linearly dependent if and only if is in for some . The if implication is an immediate consequence of . Suppose then that is linearly dependent. This means that some is in the span of the others. Choose the largest such . We claim that this is in . If not, then with not all of equal to zero. Suppose for simplicity that . Then we can rearrange: . This says that is in the span of , which contradicts our assumption that is the last vector in the span of the others.   "
},
{
  "id": "subsec-criteria-for-linear-independence-9",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-criteria-for-linear-independence-9",
  "type": "Insight",
  "number": "2.5.15",
  "title": "",
  "body": " If you make a set of vectors by adding one vector at a time, and if the span got bigger every time you added a vector, then your set is linearly independent.  "
},
{
  "id": "subsec-pictures-of-linear-independence-13",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-pictures-of-linear-independence-13",
  "type": "Interactive",
  "number": "2.5.16",
  "title": "Linear independence of two vectors in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Linear independence of two vectors in   Move the vector heads and the demo will tell you if they are linearly independent and show you their span.    "
},
{
  "id": "subsec-pictures-of-linear-independence-14",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-pictures-of-linear-independence-14",
  "type": "Interactive",
  "number": "2.5.18",
  "title": "Linear dependence of three vectors in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Linear dependence of three vectors in   Move the vector heads and the demo will tell you that they are linearly dependent and show you their span.    "
},
{
  "id": "linindep-3d-4vecs",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-3d-4vecs",
  "type": "Figure",
  "number": "2.5.20",
  "title": "",
  "body": " The vectors are linearly dependent, but is not contained in .             "
},
{
  "id": "subsec-pictures-of-linear-independence-24",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-pictures-of-linear-independence-24",
  "type": "Interactive",
  "number": "2.5.21",
  "title": "Linear independence of two vectors in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Linear independence of two vectors in   Move the vector heads and the demo will tell you if they are linearly independent and show you their span.    "
},
{
  "id": "subsec-pictures-of-linear-independence-25",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-pictures-of-linear-independence-25",
  "type": "Interactive",
  "number": "2.5.23",
  "title": "Linear independence of three vectors in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Linear independence of three vectors in   Move the vector heads and the demo will tell you if they are linearly independent and show you their span.    "
},
{
  "id": "linindep-pivot-cols",
  "level": "2",
  "url": "sec-linear-independence.html#linindep-pivot-cols",
  "type": "Theorem",
  "number": "2.5.25",
  "title": "",
  "body": "  Let be vectors in , and consider the matrix . Then we can delete the columns of  without pivots (the columns corresponding to the free variables), without changing .  The pivot columns are linearly independent, so we cannot delete any more columns without changing the span.    If the matrix is in reduced row echelon form: then the column without a pivot is visibly in the span of the pivot columns: , and the pivot columns are linearly independent: .  If the matrix is not in reduced row echelon form, then we row reduce: . The following two vector equations have the same solution set, as they come from row-equivalent matrices: . We conclude that and that has only the trivial solution.   "
},
{
  "id": "subsec-linear-dependence-and-free-variables-5",
  "level": "2",
  "url": "sec-linear-independence.html#subsec-linear-dependence-and-free-variables-5",
  "type": "Example",
  "number": "2.5.26",
  "title": "",
  "body": " The matrix has reduced row echelon form . Therefore, the first two columns of are the pivot columns, so we can delete the others without changing the span: . Moreover, the first two columns are linearly independent.  "
},
{
  "id": "pivot-cols-dim",
  "level": "2",
  "url": "sec-linear-independence.html#pivot-cols-dim",
  "type": "Insight",
  "number": "2.5.27",
  "title": "Pivot Columns and Dimension.",
  "body": " Pivot Columns and Dimension  Let be the number of pivot columns in the matrix .  If then is a line.  If then is a plane.  If then is a 3-space.  Et cetera.  The number is called the dimension. We discussed this notion in and . We will define this concept rigorously in .  "
},
{
  "id": "sec-linear-independence-8-1",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-1",
  "type": "Exercise",
  "number": "2.5.5.1",
  "title": "",
  "body": "  Suppose and are vectors in and neither vector is a scalar multiple of the other. Then must be a linearly independent set.    True. The vectors and cannot be linearly dependent, since then would have a solution where or . This would mean and are scalar multiples of each other: if then , and similarly if then .   "
},
{
  "id": "sec-linear-independence-8-2",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-2",
  "type": "Exercise",
  "number": "2.5.5.2",
  "title": "",
  "body": "  Suppose , , and are vectors in and that and are not collinear whenever . is a plane whenever . Then is a linearly independent set.    False. Let , \\ , \\ . No two among them are collinear, so any two vectors chosen among them will span a plane. However, they are linearly dependent since .   "
},
{
  "id": "sec-linear-independence-8-3",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-3",
  "type": "Exercise",
  "number": "2.5.5.3",
  "title": "",
  "body": "  If is matrix and the solution set to is a line, then the columns of are linearly dependent.    True. From section 2.4, we know that the solution set of any consistent system is a translation of the homogeneous solution set. Here, the system has a line as its solution set, so the homogeneous system has a line as its solution set and thus has infinitely many solutions. Therefore, the columns of are linearly dependent.   "
},
{
  "id": "sec-linear-independence-8-4",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-4",
  "type": "Exercise",
  "number": "2.5.5.4",
  "title": "",
  "body": "  If a set of vectors contains fewer vectors than there are entries in the vectors, then the set is linearly independent.    False. For example, the set in is linearly dependent.   "
},
{
  "id": "sec-linear-independence-8-5",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-5",
  "type": "Exercise",
  "number": "2.5.5.5",
  "title": "",
  "body": "  If and are vectors in , then the set is linearly independent.    False. The third vector is a linear combination of the first two vectors, so the set is linearly dependent.   "
},
{
  "id": "sec-linear-independence-8-6",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-6",
  "type": "Exercise",
  "number": "2.5.5.6",
  "title": "",
  "body": "  If a matrix has a pivot in each column, then the columns of are linearly independent.    True. Having a pivot in each column guarantees that has only the trivial solution, which is what it means for the columns of to be linearly independent.   "
},
{
  "id": "sec-linear-independence-8-7",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-7",
  "type": "Exercise",
  "number": "2.5.5.7",
  "title": "",
  "body": "  If you have a set of linearly independent set of vectors, and the span of the vectors in is a line, then how many vectors are in ?    There is exactly one vector in . The span of any single nonzero vector is a line, whereas a linearly independent set with two (or more) vectors would span at least a plane.   "
},
{
  "id": "sec-linear-independence-8-8",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-8",
  "type": "Exercise",
  "number": "2.5.5.8",
  "title": "",
  "body": "  In each case answer Always, Sometimes, or Never. Justify your answers.     A collection of 99 vectors in is linearly dependent.    False. We could get a set of 99 linearly independent vectors by putting in the entry of for each and making all other entries . .      A collection of 100 vectors in is linearly dependent.    True. If we put the 100 vectors as columns of a matrix, we will get a matrix. This means the matrix has columns but a max of pivots, so it cannot have a pivot in each column, therefore the set of vectors is linearly dependent.    "
},
{
  "id": "sec-linear-independence-8-9",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-9",
  "type": "Exercise",
  "number": "2.5.5.9",
  "title": "",
  "body": "  Find all values of so that the following set vectors is linearly independent.    "
},
{
  "id": "sec-linear-independence-8-10",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-10",
  "type": "Exercise",
  "number": "2.5.5.10",
  "title": "",
  "body": "  In each case, determine whether the set of vectors is linearly dependent or linearly independent.        Forming a matrix with the vectors as columns gives 3 pivot columns (no row-reduction required), so the vectors are linearly independent. Alternatively, use the Increasing Span Criterion.         The first and third vectors are multiples of each other, so the vectors are linearly dependent.         Any three vectors in are automatically linearly dependent.    "
},
{
  "id": "sec-linear-independence-8-11",
  "level": "2",
  "url": "sec-linear-independence.html#sec-linear-independence-8-11",
  "type": "Exercise",
  "number": "2.5.5.11",
  "title": "",
  "body": "  Suppose that are vectors in and the equation has exactly one solution.     Must be linearly independent?    Yes. Since the first equation has exactly one solution, the matrix whose columns are through has a pivot in every column, therefore are linearly independent.      Must the equation have exactly one solution?    Yes. Since is linearly independent, so is , which is the same thing as saying has only the trivial solution .      Must there be a vector so that is linearly independent and the equation is consistent?    Yes. Since is linearly independent, there is at least one vector in that is not a scalar multiple of (otherwise they would all be scalar multiples of and therefore linearly dependent). Since is in the set it is also in , therefore there is at least one solution to . It will become much easier to see why this part of the problem is true by the end of chapter 2.    "
},
{
  "id": "sec-subspaces",
  "level": "1",
  "url": "sec-subspaces.html",
  "type": "Section",
  "number": "2.6",
  "title": "Subspaces",
  "body": " Subspaces    Learn the definition of a subspace.  Learn to determine whether or not a subset is a subspace.  Learn the most important examples of subspaces.  Learn to write a given subspace as a column space or null space.  Recipe: compute a spanning set for a null space.  Picture: whether a subset of or is a subspace or not.  Vocabulary words:  subspace , column space , null space .     In this section we discuss subspaces of . A subspace turns out to be exactly the same thing as a span, except we don t have a particular set of spanning vectors in mind. This change in perspective is quite useful, as it is easy to produce subspaces that are not obviously spans. For example, the solution set of the equation is a span because the equation is homogeneous, but we would have to compute the parametric vector form in order to write it as a span.             (A subspace also turns out to be the same thing as the solution set of a homogeneous system of equations.)    Subspaces: Definition and Examples   Subset definition of   A subset of is any collection of points of .    For instance, the unit circle is a subset of .  Above we expressed in set builder notation : in English, it reads is the set of all ordered pairs in such that .    Subspace definition of   A subspace of is a subset of satisfying:  Non-emptiness: The zero vector is in .  Closure under addition: If and are in , then is also in .  Closure under scalar multiplication: If is in and is in , then is also in .      As a consequence of these properties, we see:  If is a vector in , then all scalar multiples of are in by the third property. In other words the line through any nonzero vector in is also contained in .  If are vectors in and are scalars, then are also in by the third property, so is in by the second property. Therefore, all of is contained in  Similarly, if are all in , then is contained in . In other words, a subspace contains the span of any vectors in it.  If you choose enough vectors, then eventually their span will fill up , so we already see that a subspace is a span . See below for a precise statement.   Suppose that is a non-empty subset of that satisfies properties 2 and 3. Let be any vector in . Then is in by the third property, so automatically satisfies property 1. It follows that the only subset of that satisfies properties 2 and 3 but not property 1 is the empty subset . This is why we call the first property non-emptiness .    Real -space as a subspace of itself  Subspace real -space  The set is a subspace of itself: indeed, it contains zero, and is closed under addition and scalar multiplication.    Subspace zero  The set containing only the zero vector is a subspace of : it contains zero, and if you add zero to itself or multiply it by a scalar, you always get zero.    A line through the origin  A line through the origin is a subspace.             Indeed, contains zero, and is easily seen to be closed under addition and scalar multiplication.    A plane through the origin  A plane through the origin is a subspace.             Indeed, contains zero; the sum of two vectors in is also in ; and any scalar multiple of a vector in is also in .    Non-example (A line not containing the origin)  A line (or any other subset) that does not contain the origin is not a subspace. It fails the first defining property: every subspace contains the origin by definition.               Non-example (A circle)  The unit circle is not a subspace. It fails all three defining properties: it does not contain the origin, it is not closed under addition, and it is not closed under scalar multiplication. In the picture, one red vector is the sum of the two black vectors (which are contained in ), and the other is a scalar multiple of a black vector.               Non-example (The first quadrant)  The first quadrant in is not a subspace. It contains the origin and is closed under addition, but it is not closed under scalar multiplication (by negative numbers).               Non-example (A line union a plane)  The union of a line and a plane in is not a subspace. It contains the origin and is closed under scalar multiplication, but it is not closed under addition: the sum of a vector on the line and a vector on the plane is not contained in the line or in the plane.               Subsets versus Subspaces  Subspace versus subset  Subset versus subspace  A sub set of is any collection of vectors whatsoever. For instance, the unit circle is a subset of , but it is not a subspace. In fact, all of the non-examples above are still subsets of . A subspace is a subset that happens to satisfy the three additional defining properties.   In order to verify that a subset of is in fact a subspace, one has to check the three defining properties. That is, unless the subset has already been verified to be a subspace: see below.   Verifying that a subset is a subspace   Let . Verify that is a subspace.    First we point out that the condition defines whether or not a vector is in : that is, to say is in  means that . In other words, a vector is in if twice its first coordinate equals three times its second coordinate. So for instance, and are in , but is not because .  Let us check the first property. The subset does contain the zero vector , because .  Next we check the second property. To show that is closed under addition, we have to check that for any vectors and in , the sum is in . Since we cannot assume anything else about and , we must treat them as unknowns .  We have . To say that is contained in means that , or . The one thing we are allowed to assume about and is that and , so we see that is indeed contained in .  Next we check the third property. To show that is closed under scalar multiplication, we have to check that for any vector in and any scalar in , the product is in . Again, we must treat and as unknowns. We have . To say that is contained in means that , i.e., that . The one thing we are allowed to assume about is that , so is indeed contained in .  Since satisfies all three defining properties, it is a subspace. In fact, it is the line through the origin with slope .                Showing that a subset is not a subspace   Let . Is a subspace?    First we point out that the condition defines whether or not a vector is in : that is, to say is in  means that . In other words, a vector is in if the product of its coordinates is zero, i.e., if one (or both) of its coordinates are zero. So for instance, and are in , but is not because .  Let us check the first property. The subset does contain the zero vector , because .  Next we check the third property. To show that is closed under scalar multiplication, we have to check that for any vector in and any scalar in , the product is in . Since we cannot assume anything else about and , we must treat them as unknowns .  We have . To say that is contained in means that . Rewriting, this means . The one thing we are allowed to assume about is that , so we see that is indeed contained in .  Next we check the second property. It turns out that is not closed under addition; to verify this, we must show that there exists some vectors in such that is not contained in . The easiest way to do so is to produce examples of such vectors. We can take and ; these are contained in because the products of their coordinates are zero, but is not contained in because .  Since does not satisfy the second property (it is not closed under addition), we conclude that is not a subspace. Indeed, it is the union of the two coordinate axes, which is not a span.                 Common Types of Subspaces   Spans are Subspaces and Subspaces are Spans  Subspace and spans  Span is a subspace  Subspace is a span   If are any vectors in , then is a subspace of . Moreover, any subspace of can be written as a span of a set of linearly independent vectors in for .    To show that is a subspace, we have to verify the three defining properties.  The zero vector is in the span.  If and are in , then is also in .  If is in and is a scalar, then is also in .  Since satisfies the three defining properties of a subspace, it is a subspace.  Now let be a subspace of . If is the zero subspace, then it is the span of the empty set, so we may assume is nonzero. Choose a nonzero vector in . If , then we are done. Otherwise, there exists a vector that is in but not in . Then is contained in , and by the increasing span criterion , the set is linearly independent. If then we are done. Otherwise, we continue in this fashion until we have written for some linearly independent set . This process terminates after at most steps by .    If , we say that is the subspace spanned by or generated by the vectors . We call a spanning set for .  Any matrix naturally gives rise to two subspaces.   Column space definition of  Null space definition of  Column space  Null space   Let be an matrix.  The column space of is the subspace of spanned by the columns of . It is written .  The null space of is the subspace of consisting of all solutions of the homogeneous equation : .       Column space is a subspace The column space is defined to be a span, so it is a subspace by the above . We need to verify that the null space is really a subspace. In we already saw that the set of solutions of is always a span, so the fact that the null spaces is a subspace should not come as a surprise.   Null space is a subspace  We have to verify the three defining properties. To say that a vector is in  means that .  The zero vector is in because .  Suppose that are in . This means that and . Hence by the linearity of the matrix-vector product . Therefore, is in .  Suppose that is in and is a scalar. Then by the linearity of the matrix-vector product , so is also in .  Since satisfies the three defining properties of a subspace, it is a subspace.     Describe the column space and the null space of .    The column space is the span of the columns of : . This is a line in .             The null space is the solution set of the homogeneous system . To compute this, we need to row reduce . Its reduced row echelon form is . This gives the equation , or . Hence the null space is , which is a line in .             Notice that the column space is a subspace of , whereas the null space is a subspace of . This is because has three rows and two columns.    The column space and the null space of a matrix are both subspaces, so they are both spans. The column space of a matrix is defined to be the span of the columns of . The null space is defined to be the solution set of , so this is a good example of a kind of subspace that we can define without any spanning set in mind. In other words, it is easier to show that the null space is a subspace than to show it is a span see the proof above. In order to do computations, however, it is usually necessary to find a spanning set.   Null Spaces are Solution Sets   Null space is a solution set  Solution set of a homogeneous system is a null space The null space of a matrix is the solution set of a homogeneous system of equations. For example, the null space of the matrix is the solution set of , i.e., the solution set of the system of equations Conversely, the solution set of any homogeneous system of equations is precisely the null space of the corresponding coefficient matrix.   To find a spanning set for the null space, one has to solve a system of homogeneous equations.   Compute a spanning set for a null space  Null space computing  To find a spanning set for , compute the parametric vector form of the solutions to the homogeneous equation . The vectors attached to the free variables form a spanning set for .    Two free variables   Find a spanning set for the null space of the matrix .    We compute the parametric vector form of the solutions of . The reduced row echelon form of is . The free variables are and ; the parametric form of the solution set is . Therefore, .     No free variables   Find a spanning set for the null space of the matrix .    We compute the parametric vector form of the solutions of . The reduced row echelon form of is . There are no free variables; hence the only solution of is the trivial solution. In other words, . It is natural to define , so that we can take our spanning set to be empty. This is consistent with the definition of dimension .     Writing a subspace as a column space or a null space  Subspace writing as column or null space  A subspace can be given to you in many different forms. In practice, computations involving subspaces are much easier if your subspace is the column space or null space of a matrix. The simplest example of such a computation is finding a spanning set: a column space is by definition the span of the columns of a matrix, and we showed above how to compute a spanning set for a null space using parametric vector form. For this reason, it is useful to rewrite a subspace as a column space or a null space before trying to answer questions about it.   When asking questions about a subspace, it is usually best to rewrite the subspace as a column space or a null space.   This also applies to the question is my subset a subspace? If your subset is a column space or null space of a matrix, then the answer is yes.   Let be the subset of a previous . The subset is exactly the solution set of the homogeneous equation . Therefore, . In particular, it is a subspace. The reduced row echelon form of is , so the parametric form of is , so the parametric vector form is and hence spans .     Let be the plane in defined by . Write as the column space of a matrix.    Since , we notice that is exactly the span of the vectors . Hence .         The set of solutions to a consistent matrix equation is always a subspace.    False. The set of solutions to a consistent matrix equation is only a subspace when . If is not the zero vector, then the solution set to will not contain the zero vector.      The set of that consists only of the zero vector is a subspace of .    True. The set contains the zero vector, and it is closed under addition and scalar multiplication because any linear combination of the vector is itself the zero vector.      If is a matrix, then the null space of is a subspace of .    False: is a subspace of .      Every subspace of is the span of some vectors in .    True. It is a fundamental fact that every subspace of is the span of some vectors in , and, conversely, the span of any number of vectors in is a subspace of .      Consider the set . Is a subspace of ? If not, which properties does it fail?    (1) contains the zero vector, since .  (2) is not closed under addition. For example, take and . Both vectors are in since and . However, their sum is , which is not in since .  (3) is closed under scalar multiplication. If is in and is any scalar, then for we have .  Most students find it easier if we first draw a picture of to gain intuition, rather than plugging in random vectors to test properties. In order for a vector to be in , either both entries are positive, or both entries are negative, or at least one entry is zero. Putting this together, we see that is the union of the first and third quadrants of the -plane (including the -axis and -axis).      Consider the -axis in . Is it a subspace of ? If not, which properties does it fail?    Yes: the -axis in is the span of , and spans are automatically subspaces of the appropriate how, so the -axis is a subspace of .      Consider the set . Is a subspace of ? If not, which properties does it fail?    Yes: is the solution set to the augmented system , which is precisely . Null spaces are always subspaces of the appropriate , and in this case is the null space of a matrix with columns, so is a subspace of .      Let be the green graph below. Determine which properties of a subspace of are satisfied by .        (1) contains the zero vector, since the line passes through the origin.  (2) is closed under addition. If and are vectors along the line , their sum is just another vector along the line.  (3) is closed under scalar multiplication. If you scale any vector along , the result is still a vector along .      Let . Is a subspace of ? Justify your answer.    Yes: is the set of solutions to the homogeneous system of equations . In other words, . The null space of any matrix with columns is a subspace of .  Alternatively, we could verify the subspace properties individually. For example, contains since , and we could similarly verify that is closed under addition and multiplication.      Which of the following are subspaces of ? Answer yes or nox in each case.        No. This is a subspace of , not .         Yes. The null space of any matrix is a subspace of .      The set of solutions to the system of equations in the variables given by  .    No. This solution set does not contain the origin, since it corresponds to a non-homogeneous linear system of equations.       If and are sets in , then their \\textit{union}, denoted , is the set of all vectors that are in at least one of and . In other words, a vector is in if is in or is in (or is in both and ).  Suppose and are subspaces of . When will also a subspace of ?    The union will be a subspace of if and only if one of one of or is contained in the other (or both are equal). In this case, the union will just be one of or , which we already know to be subspaces.  On the other hand, suppose neither nor is contained in the other. Then there is a vector that is in but not in , and there is a vector that is in but not in . We show that: . After all, cannot be in the subspace , because if it were then would need to be in since is closed under addition. Similarly, cannot be in because then would need to be in since is closed under addition.  In summary: and are in , but is not in , so is not closed under addition and is therefore not a subspace of .      Let be the green graph below. Determine which properties of a subspace of are satisfied by .        doesn't satisfy any of the properties of a subspace:  (1) does not pass through the origin.  (2) is not closed under addition since for example and are in but their sum is not in .  (3) is not closed under multiplication since, for example, is in but is not in .  Although it fails all subspace properties, the truth is that is almost a subspace because it is a line in , but the fact that it does not pass through the origin ruins all three subspace properties.      Let be the red graph below. It is the paraboloid . Determine which properties of a subspace of are satisfied by .        (1) contains the zero vector since it passes through the origin.  (2) is not closed under scalar multiplication because if is any nonzero vector in then it is above the -axis, but is below the -axis and thus not in .  (3) is not closed under addition because, for example, the point is in but is not in .      Let be the light blue graph below. Determine which properties of a subspace of are satisfied by .        is a plane in that does not contain the origin. It will fail all three properties of a subspace in the same way that a line not through the origin in will fail all three subspace properties.      Recall from section 2.1 that a QR code is a grid of boxes, where each box is colored black or white. We can think of each box as labeled by (if white) or (if black). Reading from top to bottom and left to right, we can regard a QR code as a vector in , where each entry of is or .  Let be the set of all QR codes, considered as a subset of . Determine which properties of a subspace satisfies.     Does contain the vector?    Yes. The vector is the QR code where every box is black.      Is closed under addition?    No. The vectors and are in . However, if we add and we obtain , which is not in because it has an entry (its first entry) which is neither nor .      Is closed under scalar multiplication?    No. The vector is in but is not in because it has an entry (its first entry) which is neither nor .       Let be the set of all points in satisfying .     Does contain the zero vector?    No, since is not greater than .      Is closed under addition?    Yes: take any vectors and in , so . For the vector , we subtract the second coordinate from the first and regroup terms: , therefore is in .      Is closed under scalar multiplication?    No: for example, is in , but is not in since which is not greater than .     An alternative approach is to draw , which is relatively straightforward since consists of all points satisfying , which is all points that are strictly below the line . Once you graph , you can tell right away that it does not contain the zero vector and is not closed under scalar multiplication, and you can also deduce that it is closed under addition.      Let be the set of all points in satisfying .     Does contain the zero vector?    Yes: the origin satisfies .      Is closed under addition?    No: for example, let . Then and are both in but their sum is which is not in since .      Is closed under scalar multiplication?       (Challenge problem) Abstract spaces go beyond just . For example, the set of all polynomials with real coefficients forms an abstract vector space.  Consider the set consisting of all polynomials that have degree or less. In other words, is the set of all functions of the form where , , and are real numbers. Show that satisfies the properties of a subspace:     contains the zero polynomial. In other words, contains the polynomial given by for all .      If polynomials and are in , then so is the polynomial given by .      If is in and is a scalar, then the polynomial given by is also in .      "
},
{
  "id": "sec-subspaces-2",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-2",
  "type": "Objectives",
  "number": "2.6",
  "title": "",
  "body": "  Learn the definition of a subspace.  Learn to determine whether or not a subset is a subspace.  Learn the most important examples of subspaces.  Learn to write a given subspace as a column space or null space.  Recipe: compute a spanning set for a null space.  Picture: whether a subset of or is a subspace or not.  Vocabulary words:  subspace , column space , null space .   "
},
{
  "id": "subsec-subspaces-definition-and-examples-2",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-2",
  "type": "Definition",
  "number": "2.6.1",
  "title": "",
  "body": " Subset definition of   A subset of is any collection of points of .   "
},
{
  "id": "subspaces-defn-of",
  "level": "2",
  "url": "sec-subspaces.html#subspaces-defn-of",
  "type": "Definition",
  "number": "2.6.2",
  "title": "",
  "body": " Subspace definition of   A subspace of is a subset of satisfying:  Non-emptiness: The zero vector is in .  Closure under addition: If and are in , then is also in .  Closure under scalar multiplication: If is in and is in , then is also in .     "
},
{
  "id": "subsec-subspaces-definition-and-examples-7",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-7",
  "type": "Remark",
  "number": "2.6.3",
  "title": "",
  "body": " Suppose that is a non-empty subset of that satisfies properties 2 and 3. Let be any vector in . Then is in by the third property, so automatically satisfies property 1. It follows that the only subset of that satisfies properties 2 and 3 but not property 1 is the empty subset . This is why we call the first property non-emptiness .  "
},
{
  "id": "subsec-subspaces-definition-and-examples-8",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-8",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": " Real -space as a subspace of itself  Subspace real -space  The set is a subspace of itself: indeed, it contains zero, and is closed under addition and scalar multiplication.  "
},
{
  "id": "subsec-subspaces-definition-and-examples-9",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-9",
  "type": "Example",
  "number": "2.6.5",
  "title": "",
  "body": " Subspace zero  The set containing only the zero vector is a subspace of : it contains zero, and if you add zero to itself or multiply it by a scalar, you always get zero.  "
},
{
  "id": "subsec-subspaces-definition-and-examples-10",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-10",
  "type": "Example",
  "number": "2.6.6",
  "title": "A line through the origin.",
  "body": " A line through the origin  A line through the origin is a subspace.             Indeed, contains zero, and is easily seen to be closed under addition and scalar multiplication.  "
},
{
  "id": "subsec-subspaces-definition-and-examples-11",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-11",
  "type": "Example",
  "number": "2.6.7",
  "title": "A plane through the origin.",
  "body": " A plane through the origin  A plane through the origin is a subspace.             Indeed, contains zero; the sum of two vectors in is also in ; and any scalar multiple of a vector in is also in .  "
},
{
  "id": "subsec-subspaces-definition-and-examples-12",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-12",
  "type": "Example",
  "number": "2.6.8",
  "title": "Non-example (A line not containing the origin).",
  "body": " Non-example (A line not containing the origin)  A line (or any other subset) that does not contain the origin is not a subspace. It fails the first defining property: every subspace contains the origin by definition.             "
},
{
  "id": "subsec-subspaces-definition-and-examples-13",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-13",
  "type": "Example",
  "number": "2.6.9",
  "title": "Non-example (A circle).",
  "body": " Non-example (A circle)  The unit circle is not a subspace. It fails all three defining properties: it does not contain the origin, it is not closed under addition, and it is not closed under scalar multiplication. In the picture, one red vector is the sum of the two black vectors (which are contained in ), and the other is a scalar multiple of a black vector.             "
},
{
  "id": "subsec-subspaces-definition-and-examples-14",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-14",
  "type": "Example",
  "number": "2.6.10",
  "title": "Non-example (The first quadrant).",
  "body": " Non-example (The first quadrant)  The first quadrant in is not a subspace. It contains the origin and is closed under addition, but it is not closed under scalar multiplication (by negative numbers).             "
},
{
  "id": "subsec-subspaces-definition-and-examples-15",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-15",
  "type": "Example",
  "number": "2.6.11",
  "title": "Non-example (A line union a plane).",
  "body": " Non-example (A line union a plane)  The union of a line and a plane in is not a subspace. It contains the origin and is closed under scalar multiplication, but it is not closed under addition: the sum of a vector on the line and a vector on the plane is not contained in the line or in the plane.             "
},
{
  "id": "subspaces-eg-byhand",
  "level": "2",
  "url": "sec-subspaces.html#subspaces-eg-byhand",
  "type": "Example",
  "number": "2.6.12",
  "title": "Verifying that a subset is a subspace.",
  "body": " Verifying that a subset is a subspace   Let . Verify that is a subspace.    First we point out that the condition defines whether or not a vector is in : that is, to say is in  means that . In other words, a vector is in if twice its first coordinate equals three times its second coordinate. So for instance, and are in , but is not because .  Let us check the first property. The subset does contain the zero vector , because .  Next we check the second property. To show that is closed under addition, we have to check that for any vectors and in , the sum is in . Since we cannot assume anything else about and , we must treat them as unknowns .  We have . To say that is contained in means that , or . The one thing we are allowed to assume about and is that and , so we see that is indeed contained in .  Next we check the third property. To show that is closed under scalar multiplication, we have to check that for any vector in and any scalar in , the product is in . Again, we must treat and as unknowns. We have . To say that is contained in means that , i.e., that . The one thing we are allowed to assume about is that , so is indeed contained in .  Since satisfies all three defining properties, it is a subspace. In fact, it is the line through the origin with slope .              "
},
{
  "id": "subsec-subspaces-definition-and-examples-19",
  "level": "2",
  "url": "sec-subspaces.html#subsec-subspaces-definition-and-examples-19",
  "type": "Example",
  "number": "2.6.13",
  "title": "Showing that a subset is not a subspace.",
  "body": " Showing that a subset is not a subspace   Let . Is a subspace?    First we point out that the condition defines whether or not a vector is in : that is, to say is in  means that . In other words, a vector is in if the product of its coordinates is zero, i.e., if one (or both) of its coordinates are zero. So for instance, and are in , but is not because .  Let us check the first property. The subset does contain the zero vector , because .  Next we check the third property. To show that is closed under scalar multiplication, we have to check that for any vector in and any scalar in , the product is in . Since we cannot assume anything else about and , we must treat them as unknowns .  We have . To say that is contained in means that . Rewriting, this means . The one thing we are allowed to assume about is that , so we see that is indeed contained in .  Next we check the second property. It turns out that is not closed under addition; to verify this, we must show that there exists some vectors in such that is not contained in . The easiest way to do so is to produce examples of such vectors. We can take and ; these are contained in because the products of their coordinates are zero, but is not contained in because .  Since does not satisfy the second property (it is not closed under addition), we conclude that is not a subspace. Indeed, it is the union of the two coordinate axes, which is not a span.              "
},
{
  "id": "subspaces-spans-are-subspaces",
  "level": "2",
  "url": "sec-subspaces.html#subspaces-spans-are-subspaces",
  "type": "Theorem",
  "number": "2.6.14",
  "title": "Spans are Subspaces and Subspaces are Spans.",
  "body": " Spans are Subspaces and Subspaces are Spans  Subspace and spans  Span is a subspace  Subspace is a span   If are any vectors in , then is a subspace of . Moreover, any subspace of can be written as a span of a set of linearly independent vectors in for .    To show that is a subspace, we have to verify the three defining properties.  The zero vector is in the span.  If and are in , then is also in .  If is in and is a scalar, then is also in .  Since satisfies the three defining properties of a subspace, it is a subspace.  Now let be a subspace of . If is the zero subspace, then it is the span of the empty set, so we may assume is nonzero. Choose a nonzero vector in . If , then we are done. Otherwise, there exists a vector that is in but not in . Then is contained in , and by the increasing span criterion , the set is linearly independent. If then we are done. Otherwise, we continue in this fashion until we have written for some linearly independent set . This process terminates after at most steps by .   "
},
{
  "id": "subsec-common-types-of-subspaces-3",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanned by generated by spanning set "
},
{
  "id": "subsec-common-types-of-subspaces-5",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-5",
  "type": "Definition",
  "number": "2.6.15",
  "title": "",
  "body": " Column space definition of  Null space definition of  Column space  Null space   Let be an matrix.  The column space of is the subspace of spanned by the columns of . It is written .  The null space of is the subspace of consisting of all solutions of the homogeneous equation : .     "
},
{
  "id": "subsec-common-types-of-subspaces-7",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-7",
  "type": "Proof",
  "number": "2.6.2.1",
  "title": "",
  "body": " Null space is a subspace  We have to verify the three defining properties. To say that a vector is in  means that .  The zero vector is in because .  Suppose that are in . This means that and . Hence by the linearity of the matrix-vector product . Therefore, is in .  Suppose that is in and is a scalar. Then by the linearity of the matrix-vector product , so is also in .  Since satisfies the three defining properties of a subspace, it is a subspace.  "
},
{
  "id": "subspaces-col-nul-1",
  "level": "2",
  "url": "sec-subspaces.html#subspaces-col-nul-1",
  "type": "Example",
  "number": "2.6.16",
  "title": "",
  "body": "  Describe the column space and the null space of .    The column space is the span of the columns of : . This is a line in .             The null space is the solution set of the homogeneous system . To compute this, we need to row reduce . Its reduced row echelon form is . This gives the equation , or . Hence the null space is , which is a line in .             Notice that the column space is a subspace of , whereas the null space is a subspace of . This is because has three rows and two columns.   "
},
{
  "id": "subsec-common-types-of-subspaces-10",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-10",
  "type": "Example",
  "number": "2.6.17",
  "title": "Null Spaces are Solution Sets.",
  "body": " Null Spaces are Solution Sets   Null space is a solution set  Solution set of a homogeneous system is a null space The null space of a matrix is the solution set of a homogeneous system of equations. For example, the null space of the matrix is the solution set of , i.e., the solution set of the system of equations Conversely, the solution set of any homogeneous system of equations is precisely the null space of the corresponding coefficient matrix.  "
},
{
  "id": "subspaces-span-nullspace",
  "level": "2",
  "url": "sec-subspaces.html#subspaces-span-nullspace",
  "type": "Recipe",
  "number": "2.6.18",
  "title": "Compute a spanning set for a null space.",
  "body": " Compute a spanning set for a null space  Null space computing  To find a spanning set for , compute the parametric vector form of the solutions to the homogeneous equation . The vectors attached to the free variables form a spanning set for .  "
},
{
  "id": "subsec-common-types-of-subspaces-13",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-13",
  "type": "Example",
  "number": "2.6.19",
  "title": "Two free variables.",
  "body": " Two free variables   Find a spanning set for the null space of the matrix .    We compute the parametric vector form of the solutions of . The reduced row echelon form of is . The free variables are and ; the parametric form of the solution set is . Therefore, .   "
},
{
  "id": "subsec-common-types-of-subspaces-14",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-14",
  "type": "Example",
  "number": "2.6.20",
  "title": "No free variables.",
  "body": " No free variables   Find a spanning set for the null space of the matrix .    We compute the parametric vector form of the solutions of . The reduced row echelon form of is . There are no free variables; hence the only solution of is the trivial solution. In other words, . It is natural to define , so that we can take our spanning set to be empty. This is consistent with the definition of dimension .   "
},
{
  "id": "subsec-common-types-of-subspaces-15-6",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-15-6",
  "type": "Example",
  "number": "2.6.21",
  "title": "",
  "body": " Let be the subset of a previous . The subset is exactly the solution set of the homogeneous equation . Therefore, . In particular, it is a subspace. The reduced row echelon form of is , so the parametric form of is , so the parametric vector form is and hence spans .  "
},
{
  "id": "subsec-common-types-of-subspaces-15-7",
  "level": "2",
  "url": "sec-subspaces.html#subsec-common-types-of-subspaces-15-7",
  "type": "Example",
  "number": "2.6.22",
  "title": "",
  "body": "  Let be the plane in defined by . Write as the column space of a matrix.    Since , we notice that is exactly the span of the vectors . Hence .   "
},
{
  "id": "sec-subspaces-6-1",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-1",
  "type": "Exercise",
  "number": "2.6.3.1",
  "title": "",
  "body": "  The set of solutions to a consistent matrix equation is always a subspace.    False. The set of solutions to a consistent matrix equation is only a subspace when . If is not the zero vector, then the solution set to will not contain the zero vector.   "
},
{
  "id": "sec-subspaces-6-2",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-2",
  "type": "Exercise",
  "number": "2.6.3.2",
  "title": "",
  "body": "  The set of that consists only of the zero vector is a subspace of .    True. The set contains the zero vector, and it is closed under addition and scalar multiplication because any linear combination of the vector is itself the zero vector.   "
},
{
  "id": "sec-subspaces-6-3",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-3",
  "type": "Exercise",
  "number": "2.6.3.3",
  "title": "",
  "body": "  If is a matrix, then the null space of is a subspace of .    False: is a subspace of .   "
},
{
  "id": "sec-subspaces-6-4",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-4",
  "type": "Exercise",
  "number": "2.6.3.4",
  "title": "",
  "body": "  Every subspace of is the span of some vectors in .    True. It is a fundamental fact that every subspace of is the span of some vectors in , and, conversely, the span of any number of vectors in is a subspace of .   "
},
{
  "id": "sec-subspaces-6-5",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-5",
  "type": "Exercise",
  "number": "2.6.3.5",
  "title": "",
  "body": "  Consider the set . Is a subspace of ? If not, which properties does it fail?    (1) contains the zero vector, since .  (2) is not closed under addition. For example, take and . Both vectors are in since and . However, their sum is , which is not in since .  (3) is closed under scalar multiplication. If is in and is any scalar, then for we have .  Most students find it easier if we first draw a picture of to gain intuition, rather than plugging in random vectors to test properties. In order for a vector to be in , either both entries are positive, or both entries are negative, or at least one entry is zero. Putting this together, we see that is the union of the first and third quadrants of the -plane (including the -axis and -axis).   "
},
{
  "id": "sec-subspaces-6-6",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-6",
  "type": "Exercise",
  "number": "2.6.3.6",
  "title": "",
  "body": "  Consider the -axis in . Is it a subspace of ? If not, which properties does it fail?    Yes: the -axis in is the span of , and spans are automatically subspaces of the appropriate how, so the -axis is a subspace of .   "
},
{
  "id": "sec-subspaces-6-7",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-7",
  "type": "Exercise",
  "number": "2.6.3.7",
  "title": "",
  "body": "  Consider the set . Is a subspace of ? If not, which properties does it fail?    Yes: is the solution set to the augmented system , which is precisely . Null spaces are always subspaces of the appropriate , and in this case is the null space of a matrix with columns, so is a subspace of .   "
},
{
  "id": "sec-subspaces-6-8",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-8",
  "type": "Exercise",
  "number": "2.6.3.8",
  "title": "",
  "body": "  Let be the green graph below. Determine which properties of a subspace of are satisfied by .        (1) contains the zero vector, since the line passes through the origin.  (2) is closed under addition. If and are vectors along the line , their sum is just another vector along the line.  (3) is closed under scalar multiplication. If you scale any vector along , the result is still a vector along .   "
},
{
  "id": "sec-subspaces-6-9",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-9",
  "type": "Exercise",
  "number": "2.6.3.9",
  "title": "",
  "body": "  Let . Is a subspace of ? Justify your answer.    Yes: is the set of solutions to the homogeneous system of equations . In other words, . The null space of any matrix with columns is a subspace of .  Alternatively, we could verify the subspace properties individually. For example, contains since , and we could similarly verify that is closed under addition and multiplication.   "
},
{
  "id": "sec-subspaces-6-10",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-10",
  "type": "Exercise",
  "number": "2.6.3.10",
  "title": "",
  "body": "  Which of the following are subspaces of ? Answer yes or nox in each case.        No. This is a subspace of , not .         Yes. The null space of any matrix is a subspace of .      The set of solutions to the system of equations in the variables given by  .    No. This solution set does not contain the origin, since it corresponds to a non-homogeneous linear system of equations.    "
},
{
  "id": "sec-subspaces-6-11",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-11",
  "type": "Exercise",
  "number": "2.6.3.11",
  "title": "",
  "body": "  If and are sets in , then their \\textit{union}, denoted , is the set of all vectors that are in at least one of and . In other words, a vector is in if is in or is in (or is in both and ).  Suppose and are subspaces of . When will also a subspace of ?    The union will be a subspace of if and only if one of one of or is contained in the other (or both are equal). In this case, the union will just be one of or , which we already know to be subspaces.  On the other hand, suppose neither nor is contained in the other. Then there is a vector that is in but not in , and there is a vector that is in but not in . We show that: . After all, cannot be in the subspace , because if it were then would need to be in since is closed under addition. Similarly, cannot be in because then would need to be in since is closed under addition.  In summary: and are in , but is not in , so is not closed under addition and is therefore not a subspace of .   "
},
{
  "id": "sec-subspaces-6-12",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-12",
  "type": "Exercise",
  "number": "2.6.3.12",
  "title": "",
  "body": "  Let be the green graph below. Determine which properties of a subspace of are satisfied by .        doesn't satisfy any of the properties of a subspace:  (1) does not pass through the origin.  (2) is not closed under addition since for example and are in but their sum is not in .  (3) is not closed under multiplication since, for example, is in but is not in .  Although it fails all subspace properties, the truth is that is almost a subspace because it is a line in , but the fact that it does not pass through the origin ruins all three subspace properties.   "
},
{
  "id": "sec-subspaces-6-13",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-13",
  "type": "Exercise",
  "number": "2.6.3.13",
  "title": "",
  "body": "  Let be the red graph below. It is the paraboloid . Determine which properties of a subspace of are satisfied by .        (1) contains the zero vector since it passes through the origin.  (2) is not closed under scalar multiplication because if is any nonzero vector in then it is above the -axis, but is below the -axis and thus not in .  (3) is not closed under addition because, for example, the point is in but is not in .   "
},
{
  "id": "sec-subspaces-6-14",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-14",
  "type": "Exercise",
  "number": "2.6.3.14",
  "title": "",
  "body": "  Let be the light blue graph below. Determine which properties of a subspace of are satisfied by .        is a plane in that does not contain the origin. It will fail all three properties of a subspace in the same way that a line not through the origin in will fail all three subspace properties.   "
},
{
  "id": "sec-subspaces-6-15",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-15",
  "type": "Exercise",
  "number": "2.6.3.15",
  "title": "",
  "body": "  Recall from section 2.1 that a QR code is a grid of boxes, where each box is colored black or white. We can think of each box as labeled by (if white) or (if black). Reading from top to bottom and left to right, we can regard a QR code as a vector in , where each entry of is or .  Let be the set of all QR codes, considered as a subset of . Determine which properties of a subspace satisfies.     Does contain the vector?    Yes. The vector is the QR code where every box is black.      Is closed under addition?    No. The vectors and are in . However, if we add and we obtain , which is not in because it has an entry (its first entry) which is neither nor .      Is closed under scalar multiplication?    No. The vector is in but is not in because it has an entry (its first entry) which is neither nor .    "
},
{
  "id": "sec-subspaces-6-16",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-16",
  "type": "Exercise",
  "number": "2.6.3.16",
  "title": "",
  "body": "  Let be the set of all points in satisfying .     Does contain the zero vector?    No, since is not greater than .      Is closed under addition?    Yes: take any vectors and in , so . For the vector , we subtract the second coordinate from the first and regroup terms: , therefore is in .      Is closed under scalar multiplication?    No: for example, is in , but is not in since which is not greater than .     An alternative approach is to draw , which is relatively straightforward since consists of all points satisfying , which is all points that are strictly below the line . Once you graph , you can tell right away that it does not contain the zero vector and is not closed under scalar multiplication, and you can also deduce that it is closed under addition.   "
},
{
  "id": "sec-subspaces-6-17",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-17",
  "type": "Exercise",
  "number": "2.6.3.17",
  "title": "",
  "body": "  Let be the set of all points in satisfying .     Does contain the zero vector?    Yes: the origin satisfies .      Is closed under addition?    No: for example, let . Then and are both in but their sum is which is not in since .      Is closed under scalar multiplication?    "
},
{
  "id": "sec-subspaces-6-18",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-6-18",
  "type": "Exercise",
  "number": "2.6.3.18",
  "title": "",
  "body": "  (Challenge problem) Abstract spaces go beyond just . For example, the set of all polynomials with real coefficients forms an abstract vector space.  Consider the set consisting of all polynomials that have degree or less. In other words, is the set of all functions of the form where , , and are real numbers. Show that satisfies the properties of a subspace:     contains the zero polynomial. In other words, contains the polynomial given by for all .      If polynomials and are in , then so is the polynomial given by .      If is in and is a scalar, then the polynomial given by is also in .    "
},
{
  "id": "sec-dimension",
  "level": "1",
  "url": "sec-dimension.html",
  "type": "Section",
  "number": "2.7",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension    Understand the definition of a basis of a subspace.  Understand the basis theorem.  Recipes: basis for a column space, basis for a null space, basis of a span.  Picture: basis of a subspace of or .  Theorem: basis theorem.  Essential vocabulary words:  basis , dimension .     Basis of a Subspace  As we discussed in , a subspace is the same as a span, except we do not have a set of spanning vectors in mind. There are infinitely many choices of spanning sets for a nonzero subspace; to avoid reduncancy, usually it is most convenient to choose a spanning set with the minimal number of vectors in it. This is the idea behind the notion of a basis.   Basis definition of    Essential definition   Let be a subspace of . A basis of is a set of vectors in such that:  , and  the set is linearly independent.      Recall that a set of vectors is linearly independent if and only if, when you remove any vector from the set, the span shrinks ( ). In other words, if is a basis of a subspace , then no proper subset of will span : it is a minimal spanning set. Any subspace admits a basis by .   Basis infinitely many  A nonzero subspace has infinitely many different bases, but they all contain the same number of vectors.   We leave it as an exercise to prove that any two bases have the same number of vectors; one might want to wait until after learning the invertible matrix theorem in .   Dimension definition of  Dimension of a subspace    Essential definition   Let be a subspace of . The number of vectors in any basis of is called the dimension of , and is written .     A basis of   Find a basis of .    We need to find two vectors in that span and are linearly independent. One such basis is :  They span because any vector can be written as a linear combination of : .  They are linearly independent: if then .  This shows that the plane has dimension 2.                All bases of   Find all bases of .    We know from that has dimension 2, so any basis of has two vectors in it. Let be vectors in , and let be the matrix with columns .  To say that spans means that has a pivot in every row : see .  To say that is linearly independent means that has a pivot in every column : see .  Since is a matrix, it has a pivot in every row exactly when it has a pivot in every column. Hence any two noncollinear vectors form a basis of . For example, is a basis.                The standard basis of  Basis of  One shows exactly as in the above that the standard coordinate vectors form a basis for . This is sometimes known as the standard basis .  In particular, has dimension .    Basis of   implies that any basis for has vectors in it. Let be vectors in , and let be the matrix with columns .  To say that spans means that has a pivot position in every row : see .  To say that is linearly independent means that has a pivot position in every column : see .  Since is a square matrix, it has a pivot in every row if and only if it has a pivot in every column. We will see in that the above two conditions are equivalent to the invertibility of the matrix .     Let . Verify that is a subspace, and show directly that is a basis for .    First we observe that is the solution set of the homogeneous equation , so it is a subspace: see . To show that is a basis, we really need to verify three things:  Both vectors are in because .   Span: suppose that is in . Since we have , so . Hence spans .   Linearly independent:  . Alternatively, one can observe that the two vectors are not collinear.  Since has a basis with two vectors, it has dimension two: it is a plane .   A picture of the plane and its basis . Note that spans and is linearly independent.    This example is somewhat contrived, in that we will learn systematic methods for verifying that a subset is a basis. The intention is to illustrate the defining properties of a basis.      Computing a Basis for a Subspace  Now we show how to find bases for the column space of a matrix and the null space of a matrix. In order to find a basis for a given subspace, it is usually best to rewrite the subspace as a column space or a null space first: see .   A basis for the column space  First we show how to compute a basis for the column space of a matrix.   Basis of a column space  Column space basis of Basis   The pivot columns of a matrix form a basis for .    This is a restatement of a .     The above theorem is referring to the pivot columns in the original matrix, not its reduced row echelon form. Indeed, a matrix and its reduced row echelon form generally have different column spaces. For example, in the matrix below:             the pivot columns are the first two columns, so a basis for is . The first two columns of the reduced row echelon form certainly span a different subspace, as , but contains vectors whose last coordinate is nonzero.     The dimension of is the number of pivots of .      A basis of a span   Basis of a span  Span basis of Basis Computing a basis for a span is the same as computing a basis for a column space. Indeed, the span of finitely many vectors  is the column space of a matrix, namely, the matrix whose columns are : .   A basis of a span   Find a basis of the subspace .    The subspace is the column space of the matrix . The reduced row echelon form of this matrix is . The first two columns are pivot columns, so a basis for is .   A picture of the plane and its basis .       Another basis of the same span   Find a basis of the subspace which does not consist of the first two vectors, as in .    The point of this example is that the above gives one basis for ; as always, there are infinitely more.  Reordering the vectors, we can express as the column space of . The reduced row echelon form of this matrix is . The first two columns are pivot columns, so a basis for is . These are the last two vectors in the given spanning set.   A picture of the plane and its basis .        A basis for the null space  In order to compute a basis for the null space of a matrix, one has to find the parametric vector form of the solutions of the homogeneous equation .   Basis of a null space  Null space basis of Basis   The vectors attached to the free variables in the parametric vector form of the solution set of form a basis of .    The proof of the theorem has two parts. The first part is that every solution lies in the span of the given vectors. This is automatic: the vectors are exactly chosen so that every solution is a linear combination of those vectors. The second part is that the vectors are linearly independent. This part was discussed in .    A basis for a general subspace  As mentioned at the beginning of this subsection, when given a subspace written in a different form, in order to compute a basis it is usually best to rewrite it as a column space or null space of a matrix.   A basis of a subspace   Let be the subspace defined by . Find a basis for . What is ?    First we notice that is exactly the solution set of the homogeneous linear equation . Hence This matrix is in reduced row echelon form; the parametric form of the general solution is , so the parametric vector form is . It follows that a basis is . Since has a basis with two vectors, its dimension is : it is a plane.       The Basis Theorem  Recall that forms a basis for if and only if the matrix with columns has a pivot in every row and column (see ). Since is an matrix, these two conditions are equivalent: the vectors span if and only if they are linearly independent. The basis theorem is an abstract version of the preceding statement, that applies to any subspace.   Basis basis theorem   Let be a subspace of dimension . Then:  Any linearly independent vectors in form a basis for .  Any vectors that span form a basis for .      Suppose that is a set of linearly independent vectors in . In order to show that is a basis for , we must prove that If not, then there exists some vector in that is not contained in By the increasing span criterion , the set is also linearly independent. Continuing in this way, we keep choosing vectors until we eventually do have a linearly independent spanning set: say . Then is a basis for , which implies that . But we were assuming that has dimension , so must have already been a basis.  Now suppose that spans . If is not linearly independent, then by , we can remove some number of vectors from without shrinking its span. After reordering, we can assume that we removed the last vectors without shrinking the span, and that we cannot remove any more. Now , and is a basis for because it is linearly independent. This implies that . But we were assuming that , so must have already been a basis.    In other words, if you already know that , and if you have a set of vectors in , then you only have to check one of:  is linearly independent, or  spans ,  in order for to be a basis of . If you did not already know that , then you would have to check both properties.  To put it yet another way, suppose we have a set of vectors in a subspace . Then if any two of the following statements is true, the third must also be true:  is linearly independent,  spans , and     For example, if is a plane, then any two noncollinear vectors in form a basis.   Two noncollinear vectors form a basis of a plane   Find a basis of the subspace which is different from the bases in and .    We know from the previous examples that . By the , it suffices to find any two noncollinear vectors in . We write two linear combinations of the four given spanning vectors, chosen at random: . Since are not collinear, is a basis for .   A picture of the plane and its basis .       Finding a basis by inspection   Find a basis for the plane by inspection. (This plane is expressed in set builder notation .)    First note that is the null space of the matrix ; this matrix is in reduced row echelon form and has two free variables, so is indeed a plane. We write down two vectors satisfying : . Since and are not collinear, they are linearly independent; since , the basis theorem implies that is a basis for .        If is a plane containing the origin in , then every basis for has exactly two vectors.    True. Since is a plane through the origin in , it is a subspace of and it is two-dimensional, so any basis for conssists of exactly two vectors.      If two vectors are in the same plane through the origin in , and if the two vectors are not collinear, then they form a basis for the plane.    True. The span of the two vectors must be a plane, otherwise their span would be a line or a point which is impossible since the two vectors is not collinear. Any two vectors that span a plane must be linearly independent, therefore the two vectors form a basis for the plane.      The dimension of the null space of is the number of pivots of .    False: is the number of columns in that do NOT have a pivot.      If lies in the column space of and the columns of are linearly independent, then has infinitely many solutions.    False: the columns of are linearly independent, so has a pivot in every column, therefore the augmented matrix has a pivot in each column to the left of the augment bar, so either the system is inconsistent or has exactly one solution. We were told that is in the column space of , so the system is consistent, hence has exactly one solution.      Any three vectors that span must be linearly independent.    True. Let be the matrix whose columns are the three vectors. Since these vectors span , we conclude has a pivot in every row, so has pivots. This means that has a pivot in each of its columns, so its columns are linearly independent.      How many vectors are there in a basis for a line through the origin in ?    One. Take any nonzero vector along the line . Then is linearly independent, and any vector along the line can be obtained by scaling by an appropriate scalar . In fact, the set of all vectors of the form (where is a scalar) is the line . Therefore, is a basis for .      Find a basis for the -plane in .    The -plane is all vectors of the form where and are real. A basis for the -plane is : the two vectors are clearly linearly independent, and they span the -plane since any vector of the form can be written as the linear combination .      Find a basis for the column space and the null space of .    We row-reduce to find . The pivot columns of form a basis for : . For , the RREF of gives us , , and is free, so and .       Find a basis for where no basis vector has as entry.    Many answers possible, for example: . We could row-reduce to find that has a pivot in every row and column. This answer was obtained by starting with the standard basis and doing row replacements until there were no zeros left in the matrix (added the second and third rows to the first row, then added the new first row to the second and third rows).      Allen Argent has put the matrix below in its reduced row echelon form: .     Find a basis for .    The RREF of shows that if then . So . Thus       Is in ? If so, write as a linear combination of the basis vectors of . If not, justify why is not in .     . Therefore, is in , in fact .      Is in ?    Yes. is A so it is in , no work required.       Let . Clearly draw and , using the usual convention of labeling points in by .      \\qquad \\quad        is the span of ; is the span of . We graph first, then graph . For emphasis, we draw the column space a solid line and the null space as a dashed line.      \\qquad \\qquad          Write a matrix whose column space is the solid line and whose null space is the dashed line graphed below.        Here is the span of , so each column must be a scalar multiple of . Also, we need to be the span of , so , which is the homogeneous equation . Therefore, each row of must be a scalar multiple of . Some possible examples for is .      Suppose is a -dimensional subspace of . Must it be true that for some matrix ? Justify your answer.    Yes. Just from the fact that , we know that there is a basis of consisting of exactly vectors so that . Therefore, for the matrix      Let .     Show that is a subspace of .    We could verify that is a subspace using the properties of a subspace, but there is a much faster way. is the set of all points in so that . This is , which is automatically a subspace of since the null space of \\textit{any} matrix with columns is a subspace of .      Find a basis for . (Hint: it may be helpful to write as the null space of some matrix)    To find we use the augmented matrix , which gives us , is free, and is free. Therefore, a basis for is .      Write a matrix so that .    This problem might seem complicated at first, but if we go back to the fundamentals, we see it is a concept check using the definition of column space. We just need to write a matrix so that . One way to do this is just to let .       (Challenge) Consider the set consisting of all polynomials that have degree or less. In other words, is the set of all functions of the form where , , and are real numbers.     What should it mean for a set of polynomials in to be linearly independent?    A set of polynomials in is linearly independent if the equation has only the trivial solution .  In other words, if for every real number , then .      Find a basis for . In other words, find a linearly independent set of polynomials in , so that any polynomial in can be written as a linear combination of elements in .    A basis for is where .  First we show that , and span . Let be any polynomial in . Then for some , , and we have , so and therefore is in .  Also, is linearly independent: if , then for all we have . This means that the polynomial has infinitely many roots, which is only possible if all coefficients are (otherwise, it would have a maximum of roots).      What is the dimension of ?    Since has a basis consisting of elements, the dimension of is .      "
},
{
  "id": "sec-dimension-2",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-2",
  "type": "Objectives",
  "number": "2.7",
  "title": "",
  "body": "  Understand the definition of a basis of a subspace.  Understand the basis theorem.  Recipes: basis for a column space, basis for a null space, basis of a span.  Picture: basis of a subspace of or .  Theorem: basis theorem.  Essential vocabulary words:  basis , dimension .   "
},
{
  "id": "dimension-defn-basis",
  "level": "2",
  "url": "sec-dimension.html#dimension-defn-basis",
  "type": "Definition",
  "number": "2.7.1",
  "title": "",
  "body": " Basis definition of    Essential definition   Let be a subspace of . A basis of is a set of vectors in such that:  , and  the set is linearly independent.     "
},
{
  "id": "subsec-basis-of-a-subspace-5",
  "level": "2",
  "url": "sec-dimension.html#subsec-basis-of-a-subspace-5",
  "type": "Insight",
  "number": "2.7.2",
  "title": "",
  "body": " Basis infinitely many  A nonzero subspace has infinitely many different bases, but they all contain the same number of vectors.  "
},
{
  "id": "dimension-defn-dimension",
  "level": "2",
  "url": "sec-dimension.html#dimension-defn-dimension",
  "type": "Definition",
  "number": "2.7.3",
  "title": "",
  "body": " Dimension definition of  Dimension of a subspace    Essential definition   Let be a subspace of . The number of vectors in any basis of is called the dimension of , and is written .   "
},
{
  "id": "dimension-eg-R2",
  "level": "2",
  "url": "sec-dimension.html#dimension-eg-R2",
  "type": "Example",
  "number": "2.7.4",
  "title": "A basis of <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " A basis of   Find a basis of .    We need to find two vectors in that span and are linearly independent. One such basis is :  They span because any vector can be written as a linear combination of : .  They are linearly independent: if then .  This shows that the plane has dimension 2.              "
},
{
  "id": "subsec-basis-of-a-subspace-9",
  "level": "2",
  "url": "sec-dimension.html#subsec-basis-of-a-subspace-9",
  "type": "Example",
  "number": "2.7.5",
  "title": "All bases of <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " All bases of   Find all bases of .    We know from that has dimension 2, so any basis of has two vectors in it. Let be vectors in , and let be the matrix with columns .  To say that spans means that has a pivot in every row : see .  To say that is linearly independent means that has a pivot in every column : see .  Since is a matrix, it has a pivot in every row exactly when it has a pivot in every column. Hence any two noncollinear vectors form a basis of . For example, is a basis.              "
},
{
  "id": "dimension-eg-Rn",
  "level": "2",
  "url": "sec-dimension.html#dimension-eg-Rn",
  "type": "Example",
  "number": "2.7.6",
  "title": "The standard basis of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " The standard basis of  Basis of  One shows exactly as in the above that the standard coordinate vectors form a basis for . This is sometimes known as the standard basis .  In particular, has dimension .  "
},
{
  "id": "dimension-eg-Rn-any",
  "level": "2",
  "url": "sec-dimension.html#dimension-eg-Rn-any",
  "type": "Example",
  "number": "2.7.7",
  "title": "",
  "body": " Basis of   implies that any basis for has vectors in it. Let be vectors in , and let be the matrix with columns .  To say that spans means that has a pivot position in every row : see .  To say that is linearly independent means that has a pivot position in every column : see .  Since is a square matrix, it has a pivot in every row if and only if it has a pivot in every column. We will see in that the above two conditions are equivalent to the invertibility of the matrix .  "
},
{
  "id": "subsec-basis-of-a-subspace-12",
  "level": "2",
  "url": "sec-dimension.html#subsec-basis-of-a-subspace-12",
  "type": "Example",
  "number": "2.7.8",
  "title": "",
  "body": "  Let . Verify that is a subspace, and show directly that is a basis for .    First we observe that is the solution set of the homogeneous equation , so it is a subspace: see . To show that is a basis, we really need to verify three things:  Both vectors are in because .   Span: suppose that is in . Since we have , so . Hence spans .   Linearly independent:  . Alternatively, one can observe that the two vectors are not collinear.  Since has a basis with two vectors, it has dimension two: it is a plane .   A picture of the plane and its basis . Note that spans and is linearly independent.    This example is somewhat contrived, in that we will learn systematic methods for verifying that a subset is a basis. The intention is to illustrate the defining properties of a basis.   "
},
{
  "id": "dimension-basis-colspace",
  "level": "2",
  "url": "sec-dimension.html#dimension-basis-colspace",
  "type": "Theorem",
  "number": "2.7.10",
  "title": "",
  "body": " Basis of a column space  Column space basis of Basis   The pivot columns of a matrix form a basis for .    This is a restatement of a .   "
},
{
  "id": "subsec-computing-a-basis-for-a-subspace-3-4",
  "level": "2",
  "url": "sec-dimension.html#subsec-computing-a-basis-for-a-subspace-3-4",
  "type": "Insight",
  "number": "2.7.11",
  "title": "",
  "body": " The above theorem is referring to the pivot columns in the original matrix, not its reduced row echelon form. Indeed, a matrix and its reduced row echelon form generally have different column spaces. For example, in the matrix below:             the pivot columns are the first two columns, so a basis for is . The first two columns of the reduced row echelon form certainly span a different subspace, as , but contains vectors whose last coordinate is nonzero.  "
},
{
  "id": "dimension-basis-colspace-dim",
  "level": "2",
  "url": "sec-dimension.html#dimension-basis-colspace-dim",
  "type": "Corollary",
  "number": "2.7.12",
  "title": "",
  "body": "  The dimension of is the number of pivots of .   "
},
{
  "id": "dimension-eg-basis-span",
  "level": "2",
  "url": "sec-dimension.html#dimension-eg-basis-span",
  "type": "Example",
  "number": "2.7.13",
  "title": "A basis of a span.",
  "body": " A basis of a span   Find a basis of the subspace .    The subspace is the column space of the matrix . The reduced row echelon form of this matrix is . The first two columns are pivot columns, so a basis for is .   A picture of the plane and its basis .     "
},
{
  "id": "dimension-eg-basis-span2",
  "level": "2",
  "url": "sec-dimension.html#dimension-eg-basis-span2",
  "type": "Example",
  "number": "2.7.15",
  "title": "Another basis of the same span.",
  "body": " Another basis of the same span   Find a basis of the subspace which does not consist of the first two vectors, as in .    The point of this example is that the above gives one basis for ; as always, there are infinitely more.  Reordering the vectors, we can express as the column space of . The reduced row echelon form of this matrix is . The first two columns are pivot columns, so a basis for is . These are the last two vectors in the given spanning set.   A picture of the plane and its basis .     "
},
{
  "id": "dimension-basis-nulspace",
  "level": "2",
  "url": "sec-dimension.html#dimension-basis-nulspace",
  "type": "Theorem",
  "number": "2.7.17",
  "title": "",
  "body": " Basis of a null space  Null space basis of Basis   The vectors attached to the free variables in the parametric vector form of the solution set of form a basis of .   "
},
{
  "id": "subsec-computing-a-basis-for-a-subspace-6-3",
  "level": "2",
  "url": "sec-dimension.html#subsec-computing-a-basis-for-a-subspace-6-3",
  "type": "Example",
  "number": "2.7.18",
  "title": "A basis of a subspace.",
  "body": " A basis of a subspace   Let be the subspace defined by . Find a basis for . What is ?    First we notice that is exactly the solution set of the homogeneous linear equation . Hence This matrix is in reduced row echelon form; the parametric form of the general solution is , so the parametric vector form is . It follows that a basis is . Since has a basis with two vectors, its dimension is : it is a plane.   "
},
{
  "id": "basis-theorem",
  "level": "2",
  "url": "sec-dimension.html#basis-theorem",
  "type": "Theorem",
  "number": "2.7.19",
  "title": "",
  "body": " Basis basis theorem   Let be a subspace of dimension . Then:  Any linearly independent vectors in form a basis for .  Any vectors that span form a basis for .      Suppose that is a set of linearly independent vectors in . In order to show that is a basis for , we must prove that If not, then there exists some vector in that is not contained in By the increasing span criterion , the set is also linearly independent. Continuing in this way, we keep choosing vectors until we eventually do have a linearly independent spanning set: say . Then is a basis for , which implies that . But we were assuming that has dimension , so must have already been a basis.  Now suppose that spans . If is not linearly independent, then by , we can remove some number of vectors from without shrinking its span. After reordering, we can assume that we removed the last vectors without shrinking the span, and that we cannot remove any more. Now , and is a basis for because it is linearly independent. This implies that . But we were assuming that , so must have already been a basis.   "
},
{
  "id": "subsec-the-basis-theorem-7",
  "level": "2",
  "url": "sec-dimension.html#subsec-the-basis-theorem-7",
  "type": "Example",
  "number": "2.7.20",
  "title": "Two noncollinear vectors form a basis of a plane.",
  "body": " Two noncollinear vectors form a basis of a plane   Find a basis of the subspace which is different from the bases in and .    We know from the previous examples that . By the , it suffices to find any two noncollinear vectors in . We write two linear combinations of the four given spanning vectors, chosen at random: . Since are not collinear, is a basis for .   A picture of the plane and its basis .     "
},
{
  "id": "subsec-the-basis-theorem-8",
  "level": "2",
  "url": "sec-dimension.html#subsec-the-basis-theorem-8",
  "type": "Example",
  "number": "2.7.22",
  "title": "Finding a basis by inspection.",
  "body": " Finding a basis by inspection   Find a basis for the plane by inspection. (This plane is expressed in set builder notation .)    First note that is the null space of the matrix ; this matrix is in reduced row echelon form and has two free variables, so is indeed a plane. We write down two vectors satisfying : . Since and are not collinear, they are linearly independent; since , the basis theorem implies that is a basis for .   "
},
{
  "id": "sec-dimension-6-1",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-1",
  "type": "Exercise",
  "number": "2.7.4.1",
  "title": "",
  "body": "  If is a plane containing the origin in , then every basis for has exactly two vectors.    True. Since is a plane through the origin in , it is a subspace of and it is two-dimensional, so any basis for conssists of exactly two vectors.   "
},
{
  "id": "sec-dimension-6-2",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-2",
  "type": "Exercise",
  "number": "2.7.4.2",
  "title": "",
  "body": "  If two vectors are in the same plane through the origin in , and if the two vectors are not collinear, then they form a basis for the plane.    True. The span of the two vectors must be a plane, otherwise their span would be a line or a point which is impossible since the two vectors is not collinear. Any two vectors that span a plane must be linearly independent, therefore the two vectors form a basis for the plane.   "
},
{
  "id": "sec-dimension-6-3",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-3",
  "type": "Exercise",
  "number": "2.7.4.3",
  "title": "",
  "body": "  The dimension of the null space of is the number of pivots of .    False: is the number of columns in that do NOT have a pivot.   "
},
{
  "id": "sec-dimension-6-4",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-4",
  "type": "Exercise",
  "number": "2.7.4.4",
  "title": "",
  "body": "  If lies in the column space of and the columns of are linearly independent, then has infinitely many solutions.    False: the columns of are linearly independent, so has a pivot in every column, therefore the augmented matrix has a pivot in each column to the left of the augment bar, so either the system is inconsistent or has exactly one solution. We were told that is in the column space of , so the system is consistent, hence has exactly one solution.   "
},
{
  "id": "sec-dimension-6-5",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-5",
  "type": "Exercise",
  "number": "2.7.4.5",
  "title": "",
  "body": "  Any three vectors that span must be linearly independent.    True. Let be the matrix whose columns are the three vectors. Since these vectors span , we conclude has a pivot in every row, so has pivots. This means that has a pivot in each of its columns, so its columns are linearly independent.   "
},
{
  "id": "sec-dimension-6-6",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-6",
  "type": "Exercise",
  "number": "2.7.4.6",
  "title": "",
  "body": "  How many vectors are there in a basis for a line through the origin in ?    One. Take any nonzero vector along the line . Then is linearly independent, and any vector along the line can be obtained by scaling by an appropriate scalar . In fact, the set of all vectors of the form (where is a scalar) is the line . Therefore, is a basis for .   "
},
{
  "id": "sec-dimension-6-7",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-7",
  "type": "Exercise",
  "number": "2.7.4.7",
  "title": "",
  "body": "  Find a basis for the -plane in .    The -plane is all vectors of the form where and are real. A basis for the -plane is : the two vectors are clearly linearly independent, and they span the -plane since any vector of the form can be written as the linear combination .   "
},
{
  "id": "sec-dimension-6-8",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-8",
  "type": "Exercise",
  "number": "2.7.4.8",
  "title": "",
  "body": "  Find a basis for the column space and the null space of .    We row-reduce to find . The pivot columns of form a basis for : . For , the RREF of gives us , , and is free, so and .    "
},
{
  "id": "sec-dimension-6-9",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-9",
  "type": "Exercise",
  "number": "2.7.4.9",
  "title": "",
  "body": "  Find a basis for where no basis vector has as entry.    Many answers possible, for example: . We could row-reduce to find that has a pivot in every row and column. This answer was obtained by starting with the standard basis and doing row replacements until there were no zeros left in the matrix (added the second and third rows to the first row, then added the new first row to the second and third rows).   "
},
{
  "id": "sec-dimension-6-10",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-10",
  "type": "Exercise",
  "number": "2.7.4.10",
  "title": "",
  "body": "  Allen Argent has put the matrix below in its reduced row echelon form: .     Find a basis for .    The RREF of shows that if then . So . Thus       Is in ? If so, write as a linear combination of the basis vectors of . If not, justify why is not in .     . Therefore, is in , in fact .      Is in ?    Yes. is A so it is in , no work required.    "
},
{
  "id": "sec-dimension-6-11",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-11",
  "type": "Exercise",
  "number": "2.7.4.11",
  "title": "",
  "body": "  Let . Clearly draw and , using the usual convention of labeling points in by .      \\qquad \\quad        is the span of ; is the span of . We graph first, then graph . For emphasis, we draw the column space a solid line and the null space as a dashed line.      \\qquad \\qquad       "
},
{
  "id": "sec-dimension-6-12",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-12",
  "type": "Exercise",
  "number": "2.7.4.12",
  "title": "",
  "body": "  Write a matrix whose column space is the solid line and whose null space is the dashed line graphed below.        Here is the span of , so each column must be a scalar multiple of . Also, we need to be the span of , so , which is the homogeneous equation . Therefore, each row of must be a scalar multiple of . Some possible examples for is .   "
},
{
  "id": "sec-dimension-6-13",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-13",
  "type": "Exercise",
  "number": "2.7.4.13",
  "title": "",
  "body": "  Suppose is a -dimensional subspace of . Must it be true that for some matrix ? Justify your answer.    Yes. Just from the fact that , we know that there is a basis of consisting of exactly vectors so that . Therefore, for the matrix   "
},
{
  "id": "sec-dimension-6-14",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-14",
  "type": "Exercise",
  "number": "2.7.4.14",
  "title": "",
  "body": "  Let .     Show that is a subspace of .    We could verify that is a subspace using the properties of a subspace, but there is a much faster way. is the set of all points in so that . This is , which is automatically a subspace of since the null space of \\textit{any} matrix with columns is a subspace of .      Find a basis for . (Hint: it may be helpful to write as the null space of some matrix)    To find we use the augmented matrix , which gives us , is free, and is free. Therefore, a basis for is .      Write a matrix so that .    This problem might seem complicated at first, but if we go back to the fundamentals, we see it is a concept check using the definition of column space. We just need to write a matrix so that . One way to do this is just to let .    "
},
{
  "id": "sec-dimension-6-15",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-15",
  "type": "Exercise",
  "number": "2.7.4.15",
  "title": "",
  "body": "  (Challenge) Consider the set consisting of all polynomials that have degree or less. In other words, is the set of all functions of the form where , , and are real numbers.     What should it mean for a set of polynomials in to be linearly independent?    A set of polynomials in is linearly independent if the equation has only the trivial solution .  In other words, if for every real number , then .      Find a basis for . In other words, find a linearly independent set of polynomials in , so that any polynomial in can be written as a linear combination of elements in .    A basis for is where .  First we show that , and span . Let be any polynomial in . Then for some , , and we have , so and therefore is in .  Also, is linearly independent: if , then for all we have . This means that the polynomial has infinitely many roots, which is only possible if all coefficients are (otherwise, it would have a maximum of roots).      What is the dimension of ?    Since has a basis consisting of elements, the dimension of is .    "
},
{
  "id": "sec-bases-as-coord-systems",
  "level": "1",
  "url": "sec-bases-as-coord-systems.html",
  "type": "Section",
  "number": "2.8",
  "title": "Bases as Coordinate Systems",
  "body": " Bases as Coordinate Systems    Learn to view a basis as a coordinate system on a subspace.  Recipes: compute the -coordinates of a vector, compute the usual coordinates of a vector from its -coordinates.  Picture: the -coordinates of a vector using its location on a nonstandard coordinate grid.  Vocabulary word:  -coordinates .    In this section, we interpret a basis of a subspace as a coordinate system on , and we learn how to write a vector in in that coordinate system.   Basis uniqueness with respect to  Basis coordinates with respect to -coordinates   If is a basis for a subspace , then any vector in can be written as a linear combination in exactly one way.    Recall that to say is a basis for means that spans and is linearly independent. Since spans , we can write any in as a linear combination of . For uniqueness, suppose that we had two such expressions: . Subtracting the first equation from the second yields . Since is linearly independent, the only solution to the above equation is the trivial solution: all the coefficients must be zero. It follows that for all , which proves that .     Consider the standard basis of from : . According to the above , every vector in can be written as a linear combination of , with unique coefficients. For example, . In this case, the coordinates of are exactly the coefficients of .    What exactly are coordinates, anyway? One way to think of coordinates is that they give directions for how to get to a certain point from the origin. In the above example, the linear combination can be thought of as the following list of instructions: start at the origin, travel units north, then travel units east, then units down.   -coordinates definition of   Let be a basis of a subspace , and let be a vector in . The coefficients are the coordinates of with respect to . The -coordinate vector of is the vector .     -coordinates informally If we change the basis, then we can still give instructions for how to get to the point , but the instructions will be different. Say for example we take the basis . We can write in this basis as . In other words: start at the origin, travel northeast times as far as , then units east, then units down. In this situation, we can say that is the -coordinate of , is the -coordinate of , and is the -coordinate of .    -coordinates labeling points  The above gives a way of using to label the points of a subspace of dimension : a point is simply labeled by its -coordinate vector. For instance, if we choose a basis for a plane, we can label the points of that plane with the points of .    A nonstandard coordinate system on   Define .  Verify that is a basis for .  If , then what is ?  Find the -coordinates of         By the , any two linearly independent vectors form a basis for . Clearly are not multiples of each other, so they are linearly independent.  To say means that is the -coordinate of , and that is the -coordinate: .  We have to solve the vector equation in the unknowns . We form an augmented matrix and row reduce: . We have and , so and   In the following picture, we indicate the coordinate system defined by by drawing lines parallel to the -axis and -axis . Using this grid it is easy to see that the -coordinates of are , and that the -coordinates of are .             This picture could be the grid of streets in Palo Alto, California . Residents of Palo Alto refer to northwest as north and to northeast as east . There is a reason for this: the old road to San Francisco is called El Camino Real, and that road runs from the southeast to the northwest in Palo Alto. So when a Palo Alto resident says go south two blocks and east one block , they are giving directions from the origin to the Whole Foods at .   A picture of the basis of . The grid indicates the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Use the sliders to find the -coordinates of .       -coordinates nonstandard grid  Let . These form a basis for a plane in . We indicate the coordinate system defined by by drawing lines parallel to the -axis and -axis :             We can see from the picture that the -coordinate of is equal to , as is the -coordinate, so Similarly, we have .   Left: the -coordinates of a vector . Right: the vector . The violet grid on the right is a picture of the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Drag the heads of the vectors and to understand the correspondence between and its -coordinate vector.      A coordinate system on a plane   Define .  Verify that is a basis for .  If , then what is ?  Find the -coordinates of         We need to verify that spans , and that it is linearly independent. By definition, is the span of ; since and are not multiples of each other, they are linearly independent. This shows in particular that is a plane .  To say means that is the -coordinate of , and that is the -coordinate: .  We have to solve the vector equation in the unknowns . We form an augmented matrix and row reduce: . We have and , so and      A picture of the plane and the basis . The violet grid is a picture of the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Use the sliders to find the -coordinates of .       A coordinate system on another plane   Define .  Find a basis for .  Find the -coordinates of .        We write as the column space of a matrix , then row reduce to find the pivot columns, as in . . The first two columns are pivot columns, so we can take as our basis for .  We have to solve the vector equation . We form an augmented matrix and row reduce: . We have and , so , and thus      A picture of the plane and the basis . The violet grid is a picture of the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Use the sliders to find the -coordinates of .       Recipes: -coordinates  -coordinates computing row reduction  If is a basis for a subspace and is in , then . Finding the -coordinates of means solving the vector equation in the unknowns . This generally means row reducing the augmented matrix .    Let be a basis of a subspace . Finding the -coordinates of a vector means solving the vector equation . If is not in , then this equation has no solution, as is not in . In other words, the above equation is inconsistent when is not in .   "
},
{
  "id": "sec-bases-as-coord-systems-2",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-2",
  "type": "Objectives",
  "number": "2.8",
  "title": "",
  "body": "  Learn to view a basis as a coordinate system on a subspace.  Recipes: compute the -coordinates of a vector, compute the usual coordinates of a vector from its -coordinates.  Picture: the -coordinates of a vector using its location on a nonstandard coordinate grid.  Vocabulary word:  -coordinates .   "
},
{
  "id": "dimension-unique-coeff",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#dimension-unique-coeff",
  "type": "Fact",
  "number": "2.8.1",
  "title": "",
  "body": " Basis uniqueness with respect to  Basis coordinates with respect to -coordinates   If is a basis for a subspace , then any vector in can be written as a linear combination in exactly one way.    Recall that to say is a basis for means that spans and is linearly independent. Since spans , we can write any in as a linear combination of . For uniqueness, suppose that we had two such expressions: . Subtracting the first equation from the second yields . Since is linearly independent, the only solution to the above equation is the trivial solution: all the coefficients must be zero. It follows that for all , which proves that .   "
},
{
  "id": "sec-bases-as-coord-systems-5",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-5",
  "type": "Example",
  "number": "2.8.2",
  "title": "",
  "body": " Consider the standard basis of from : . According to the above , every vector in can be written as a linear combination of , with unique coefficients. For example, . In this case, the coordinates of are exactly the coefficients of .   "
},
{
  "id": "dimension-defn-Bcoords",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#dimension-defn-Bcoords",
  "type": "Definition",
  "number": "2.8.3",
  "title": "",
  "body": " -coordinates definition of   Let be a basis of a subspace , and let be a vector in . The coefficients are the coordinates of with respect to . The -coordinate vector of is the vector .   "
},
{
  "id": "sec-bases-as-coord-systems-10",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-10",
  "type": "Example",
  "number": "2.8.4",
  "title": "A nonstandard coordinate system on <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " A nonstandard coordinate system on   Define .  Verify that is a basis for .  If , then what is ?  Find the -coordinates of         By the , any two linearly independent vectors form a basis for . Clearly are not multiples of each other, so they are linearly independent.  To say means that is the -coordinate of , and that is the -coordinate: .  We have to solve the vector equation in the unknowns . We form an augmented matrix and row reduce: . We have and , so and   In the following picture, we indicate the coordinate system defined by by drawing lines parallel to the -axis and -axis . Using this grid it is easy to see that the -coordinates of are , and that the -coordinates of are .             This picture could be the grid of streets in Palo Alto, California . Residents of Palo Alto refer to northwest as north and to northeast as east . There is a reason for this: the old road to San Francisco is called El Camino Real, and that road runs from the southeast to the northwest in Palo Alto. So when a Palo Alto resident says go south two blocks and east one block , they are giving directions from the origin to the Whole Foods at .   A picture of the basis of . The grid indicates the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Use the sliders to find the -coordinates of .     "
},
{
  "id": "sec-bases-as-coord-systems-11",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-11",
  "type": "Example",
  "number": "2.8.6",
  "title": "",
  "body": " -coordinates nonstandard grid  Let . These form a basis for a plane in . We indicate the coordinate system defined by by drawing lines parallel to the -axis and -axis :             We can see from the picture that the -coordinate of is equal to , as is the -coordinate, so Similarly, we have .   Left: the -coordinates of a vector . Right: the vector . The violet grid on the right is a picture of the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Drag the heads of the vectors and to understand the correspondence between and its -coordinate vector.    "
},
{
  "id": "sec-bases-as-coord-systems-12",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-12",
  "type": "Example",
  "number": "2.8.8",
  "title": "A coordinate system on a plane.",
  "body": " A coordinate system on a plane   Define .  Verify that is a basis for .  If , then what is ?  Find the -coordinates of         We need to verify that spans , and that it is linearly independent. By definition, is the span of ; since and are not multiples of each other, they are linearly independent. This shows in particular that is a plane .  To say means that is the -coordinate of , and that is the -coordinate: .  We have to solve the vector equation in the unknowns . We form an augmented matrix and row reduce: . We have and , so and      A picture of the plane and the basis . The violet grid is a picture of the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Use the sliders to find the -coordinates of .     "
},
{
  "id": "sec-bases-as-coord-systems-13",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-13",
  "type": "Example",
  "number": "2.8.10",
  "title": "A coordinate system on another plane.",
  "body": " A coordinate system on another plane   Define .  Find a basis for .  Find the -coordinates of .        We write as the column space of a matrix , then row reduce to find the pivot columns, as in . . The first two columns are pivot columns, so we can take as our basis for .  We have to solve the vector equation . We form an augmented matrix and row reduce: . We have and , so , and thus      A picture of the plane and the basis . The violet grid is a picture of the coordinate system defined by the basis ; one set of lines measures the -coordinate, and the other set measures the -coordinate. Use the sliders to find the -coordinates of .     "
},
{
  "id": "sec-bases-as-coord-systems-15",
  "level": "2",
  "url": "sec-bases-as-coord-systems.html#sec-bases-as-coord-systems-15",
  "type": "Remark",
  "number": "2.8.12",
  "title": "",
  "body": " Let be a basis of a subspace . Finding the -coordinates of a vector means solving the vector equation . If is not in , then this equation has no solution, as is not in . In other words, the above equation is inconsistent when is not in .  "
},
{
  "id": "sec-rank-thm",
  "level": "1",
  "url": "sec-rank-thm.html",
  "type": "Section",
  "number": "2.9",
  "title": "The Rank Theorem",
  "body": " The Rank Theorem    Learn to understand and use the rank theorem.  Picture: the rank theorem.  Theorem: rank theorem.  Vocabulary words:  rank , nullity .    In this section we present the rank theorem, which is the culmination of all of the work we have done so far.  The reader may have observed a relationship between the column space and the null space of a matrix. In , the column space and the null space of a matrix are both lines, in and , respectively:             In , the null space of the matrix is a plane in , and the column space the line in spanned by :             In , the null space of a matrix is a line in , and the column space is a plane in :             In all examples, the dimension of the column space plus the dimension of the null space is equal to the number of columns of the matrix. This is the content of the rank theorem.   Matrix rank of Rank  Column space and rank Rank  Rank  Matrix nullity of Nullity  Nullity  Dimension of a column space  Dimension of a null space  The rank of a matrix  The nullity of a matrix   The rank of a matrix , written , is the dimension of the column space .  The nullity of a matrix , written , is the dimension of the null space .    The rank of a matrix gives us important information about the solutions to . Recall from that is consistent exactly when is in the span of the columns of , in other words when is in the column space of . Thus, is the dimension of the set of with the property that is consistent.  We know that the rank of is equal to the number of pivot columns (see ), and the nullity of is equal to the number of free variables (see ), which is the number of columns without pivots. To summarize: Clearly , so we have proved the following theorem.   Rank Theorem  Rank rank theorem  Nullity rank theorem   If is a matrix with columns, then .    In other words, for any consistent system of linear equations, .  The rank theorem theorem is really the culmination of this chapter, as it gives a strong relationship between the null space of a matrix (the solution set of ) with the column space (the set of vectors making consistent), our two primary objects of interest. The more freedom we have in choosing the less freedom we have in choosing and vice versa.   Rank and nullity  Here is a concrete example of the rank theorem and the interplay between the degrees of freedom we have in choosing and in a matrix equation . Consider the matrices . If we multiply a vector in by and we obtain the vectors and . So we can think of multiplication by as giving the latitude and longitude of a point in and we can think of multiplication by as giving the height of a point in . The rank of is 2 and the nullity is 1. Similarly, the rank of is 1 and the nullity is 2.  These facts have natural interpretations. For the matrix : the set of all latitudes and longitudes in is a plane, and the set of points with the same latitude and longitude in is a line; and for the matrix : the set of all heights in is a line, and the set of points at a given height in is a plane. As the rank theorem tells us, we trade off having more choices for for having more choices for , and vice versa.   The rank theorem is a prime example of how we use the theory of linear algebra to say something qualitative about a system of equations without ever solving it. This is, in essence, the power of the subject.   The rank is 2 and the nullity is 2  Consider the following matrix and its reduced row echelon form:             A basis for is given by the pivot columns: , so .  Since there are two free variables , the null space of has two vectors (see ): , so .  In this case, the rank theorem says that , where 4 is the number of columns.    Rank is 1, nullity is 2   This matrix has rank 1 and nullity 2. The violet plane on the left is the null space, and the violet line on the right is the column space.      Rank is 2, nullity is 1   This matrix has rank 2 and nullity 1. The violet line on the left is the null space, and the violet plane on the right is the column space.        There is a matrix so that the column space of is a line and the null space of is a line.    True: for example, . This has one column with a pivot (so is a line) and one column without a pivot (so is a line).      There is a matrix so that the column space of is a line and the null space of is a line.    False: If and are both lines, then the sum of their dimensions is , but this is impossible by the Rank Theorem since .      If is a matrix and its null space is a line, then every vector in is a linear combination of the columns of .    True. First we recall that since has rows, the column space of is a subspace of . By the Rank Theorem and the fact that the null space is a line, we get . Therefore, is a -dimensional subspace of , which is just another way of saying .      Suppose is a matrix. Which of the following statements are true? Select all that apply.     The homogeneous equation must have infinitely many solutions.    True: is , so has at most pivots. Since has columns, this means at least columns in will not have pivots, therefore the equation has at least free variables. This is just another way of rephrasing the consequences of the Rank Theorem, which expresses this succinctly in part (c).      The column space of is a subspace .    True, since has rows.      .    True. By the Rank Theorem, , but since is a subspace of we know , therefore .       Is there a matrix with the property that ? If so, write one.    No: if , then by the Rank Theorem, . This would mean .      Is there a matrix with the property that ? If so, write one.    Yes: unlike in the case, the Rank Theorem does not rule out the possibility that . However, it may take some time and trial and error to write such an . One example is . Both its range and null space are the span of .      Suppose that is a matrix and that the column space of is -dimensional. Is it possible for and to be solutions to for some in ? Justify your answer.    No, it is not possible. Here is with a -dimensional column space, so both of its columns are pivot columns. In other words, its columns are linearly independent. Therefore, has exactly one solution, so any consistent system must have exactly one solution.      Suppose that is a matrix and the column space of is a line in . Describe the set of solutions to .    We are told that . By the Rank Theorem: . Also, the null space of lives in since has columns. Therefore, the set of solutions to is -dimensional subspace of .      Suppose that is a matrix and the column space of is . Describe the set of solutions to .    We are told that . By the Rank Theorem: . Also, the null space of lives in since has columns. Therefore, the set of solutions to is a plane in .      Suppose that is a matrix and the null space of is a plane. Is the matrix equation consistent? Justify your answer.    Yes. The Rank Theorem gives us . In other words, the column space of is all of , therefore is consistent for every in .      Fill in the blanks: If is a matrix and whose columns span a plane, then the null space of is a \\underline{\\qquad \\qquad}-dimensional subspace of .    is a subspace of , and so . Thus is a 4-dimensional subspace of .      Write a matrix whose null space is -dimensional and whose column space is -dimensional.    By the Rank Theorem, the sum of the dimensions of the null and column spaces is equal to the number of columns of , so must have columns. Moreover, exactly columns must be pivot columns so that .  One example is .     "
},
{
  "id": "sec-rank-thm-2",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-2",
  "type": "Objectives",
  "number": "2.9",
  "title": "",
  "body": "  Learn to understand and use the rank theorem.  Picture: the rank theorem.  Theorem: rank theorem.  Vocabulary words:  rank , nullity .   "
},
{
  "id": "sec-rank-thm-11",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-11",
  "type": "Definition",
  "number": "2.9.1",
  "title": "",
  "body": " Matrix rank of Rank  Column space and rank Rank  Rank  Matrix nullity of Nullity  Nullity  Dimension of a column space  Dimension of a null space  The rank of a matrix  The nullity of a matrix   The rank of a matrix , written , is the dimension of the column space .  The nullity of a matrix , written , is the dimension of the null space .   "
},
{
  "id": "rank-theorem",
  "level": "2",
  "url": "sec-rank-thm.html#rank-theorem",
  "type": "Theorem",
  "number": "2.9.2",
  "title": "Rank Theorem.",
  "body": " Rank Theorem  Rank rank theorem  Nullity rank theorem   If is a matrix with columns, then .   "
},
{
  "id": "sec-rank-thm-17",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-17",
  "type": "Example",
  "number": "2.9.3",
  "title": "Rank and nullity.",
  "body": " Rank and nullity  Here is a concrete example of the rank theorem and the interplay between the degrees of freedom we have in choosing and in a matrix equation . Consider the matrices . If we multiply a vector in by and we obtain the vectors and . So we can think of multiplication by as giving the latitude and longitude of a point in and we can think of multiplication by as giving the height of a point in . The rank of is 2 and the nullity is 1. Similarly, the rank of is 1 and the nullity is 2.  These facts have natural interpretations. For the matrix : the set of all latitudes and longitudes in is a plane, and the set of points with the same latitude and longitude in is a line; and for the matrix : the set of all heights in is a line, and the set of points at a given height in is a plane. As the rank theorem tells us, we trade off having more choices for for having more choices for , and vice versa.  "
},
{
  "id": "sec-rank-thm-19",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-19",
  "type": "Example",
  "number": "2.9.4",
  "title": "The rank is 2 and the nullity is 2.",
  "body": " The rank is 2 and the nullity is 2  Consider the following matrix and its reduced row echelon form:             A basis for is given by the pivot columns: , so .  Since there are two free variables , the null space of has two vectors (see ): , so .  In this case, the rank theorem says that , where 4 is the number of columns.  "
},
{
  "id": "sec-rank-thm-20",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-20",
  "type": "Interactive",
  "number": "2.9.5",
  "title": "Rank is 1, nullity is 2.",
  "body": " Rank is 1, nullity is 2   This matrix has rank 1 and nullity 2. The violet plane on the left is the null space, and the violet line on the right is the column space.    "
},
{
  "id": "sec-rank-thm-21",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-21",
  "type": "Interactive",
  "number": "2.9.7",
  "title": "Rank is 2, nullity is 1.",
  "body": " Rank is 2, nullity is 1   This matrix has rank 2 and nullity 1. The violet line on the left is the null space, and the violet plane on the right is the column space.    "
},
{
  "id": "sec-rank-thm-22-1",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-1",
  "type": "Exercise",
  "number": "2.9.1",
  "title": "",
  "body": "  There is a matrix so that the column space of is a line and the null space of is a line.    True: for example, . This has one column with a pivot (so is a line) and one column without a pivot (so is a line).   "
},
{
  "id": "sec-rank-thm-22-2",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-2",
  "type": "Exercise",
  "number": "2.9.2",
  "title": "",
  "body": "  There is a matrix so that the column space of is a line and the null space of is a line.    False: If and are both lines, then the sum of their dimensions is , but this is impossible by the Rank Theorem since .   "
},
{
  "id": "sec-rank-thm-22-3",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-3",
  "type": "Exercise",
  "number": "2.9.3",
  "title": "",
  "body": "  If is a matrix and its null space is a line, then every vector in is a linear combination of the columns of .    True. First we recall that since has rows, the column space of is a subspace of . By the Rank Theorem and the fact that the null space is a line, we get . Therefore, is a -dimensional subspace of , which is just another way of saying .   "
},
{
  "id": "sec-rank-thm-22-4",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-4",
  "type": "Exercise",
  "number": "2.9.4",
  "title": "",
  "body": "  Suppose is a matrix. Which of the following statements are true? Select all that apply.     The homogeneous equation must have infinitely many solutions.    True: is , so has at most pivots. Since has columns, this means at least columns in will not have pivots, therefore the equation has at least free variables. This is just another way of rephrasing the consequences of the Rank Theorem, which expresses this succinctly in part (c).      The column space of is a subspace .    True, since has rows.      .    True. By the Rank Theorem, , but since is a subspace of we know , therefore .    "
},
{
  "id": "sec-rank-thm-22-5",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-5",
  "type": "Exercise",
  "number": "2.9.5",
  "title": "",
  "body": "  Is there a matrix with the property that ? If so, write one.    No: if , then by the Rank Theorem, . This would mean .   "
},
{
  "id": "sec-rank-thm-22-6",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-6",
  "type": "Exercise",
  "number": "2.9.6",
  "title": "",
  "body": "  Is there a matrix with the property that ? If so, write one.    Yes: unlike in the case, the Rank Theorem does not rule out the possibility that . However, it may take some time and trial and error to write such an . One example is . Both its range and null space are the span of .   "
},
{
  "id": "sec-rank-thm-22-7",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-7",
  "type": "Exercise",
  "number": "2.9.7",
  "title": "",
  "body": "  Suppose that is a matrix and that the column space of is -dimensional. Is it possible for and to be solutions to for some in ? Justify your answer.    No, it is not possible. Here is with a -dimensional column space, so both of its columns are pivot columns. In other words, its columns are linearly independent. Therefore, has exactly one solution, so any consistent system must have exactly one solution.   "
},
{
  "id": "sec-rank-thm-22-8",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-8",
  "type": "Exercise",
  "number": "2.9.8",
  "title": "",
  "body": "  Suppose that is a matrix and the column space of is a line in . Describe the set of solutions to .    We are told that . By the Rank Theorem: . Also, the null space of lives in since has columns. Therefore, the set of solutions to is -dimensional subspace of .   "
},
{
  "id": "sec-rank-thm-22-9",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-9",
  "type": "Exercise",
  "number": "2.9.9",
  "title": "",
  "body": "  Suppose that is a matrix and the column space of is . Describe the set of solutions to .    We are told that . By the Rank Theorem: . Also, the null space of lives in since has columns. Therefore, the set of solutions to is a plane in .   "
},
{
  "id": "sec-rank-thm-22-10",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-10",
  "type": "Exercise",
  "number": "2.9.10",
  "title": "",
  "body": "  Suppose that is a matrix and the null space of is a plane. Is the matrix equation consistent? Justify your answer.    Yes. The Rank Theorem gives us . In other words, the column space of is all of , therefore is consistent for every in .   "
},
{
  "id": "sec-rank-thm-22-11",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-11",
  "type": "Exercise",
  "number": "2.9.11",
  "title": "",
  "body": "  Fill in the blanks: If is a matrix and whose columns span a plane, then the null space of is a \\underline{\\qquad \\qquad}-dimensional subspace of .    is a subspace of , and so . Thus is a 4-dimensional subspace of .   "
},
{
  "id": "sec-rank-thm-22-12",
  "level": "2",
  "url": "sec-rank-thm.html#sec-rank-thm-22-12",
  "type": "Exercise",
  "number": "2.9.12",
  "title": "",
  "body": "  Write a matrix whose null space is -dimensional and whose column space is -dimensional.    By the Rank Theorem, the sum of the dimensions of the null and column spaces is equal to the number of columns of , so must have columns. Moreover, exactly columns must be pivot columns so that .  One example is .   "
},
{
  "id": "chap-matrices",
  "level": "1",
  "url": "chap-matrices.html",
  "type": "Chapter",
  "number": "3",
  "title": "Linear Transformations and Matrix Algebra",
  "body": " Linear Transformations and Matrix Algebra    Learn about linear transformations and their relationship to matrices.   In practice, one is often lead to ask questions about the geometry of a transformation : a function that takes an input and produces an output. This kind of question can be answered by linear algebra if the transformation can be expressed by a matrix.   Suppose you are building a robot arm with three joints that can move its hand around a plane, as in the following picture.           Define a transformation as follows: is the position of the hand when the joints are rotated by angles , respectively. The output of tells you where the hand will be on the plane when the joints are set at the given input angles.  Unfortunately, this kind of function does not come from a matrix, so one cannot use linear algebra to answer questions about this function. In fact, these functions are rather complicated; their study is the subject of inverse kinematics .   In this chapter, we will be concerned with the relationship between matrices and transformations. In , we will consider the equation as a function with independent variable and dependent variable , and we draw pictures accordingly. We spend some time studying transformations in the abstract, and asking questions about a transformation, like whether it is one-to-one and\/or onto ( ). In we will answer the question: when exactly can a transformation be expressed by a matrix? We then present matrix multiplication as a special case of composition of transformations ( ). This leads to the study of matrix algebra : that is, to what extent one can do arithmetic with matrices in the place of numbers. With this in place, we learn to solve matrix equations by dividing by a matrix in .    "
},
{
  "id": "chap-matrices-2-1",
  "level": "2",
  "url": "chap-matrices.html#chap-matrices-2-1",
  "type": "Primary Goal",
  "number": "3.0.1",
  "title": "",
  "body": " Learn about linear transformations and their relationship to matrices.  "
},
{
  "id": "chap-matrices-2-3",
  "level": "2",
  "url": "chap-matrices.html#chap-matrices-2-3",
  "type": "Example",
  "number": "3.0.2",
  "title": "",
  "body": " Suppose you are building a robot arm with three joints that can move its hand around a plane, as in the following picture.           Define a transformation as follows: is the position of the hand when the joints are rotated by angles , respectively. The output of tells you where the hand will be on the plane when the joints are set at the given input angles.  Unfortunately, this kind of function does not come from a matrix, so one cannot use linear algebra to answer questions about this function. In fact, these functions are rather complicated; their study is the subject of inverse kinematics .  "
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
  "number": "4.0.1",
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
  "number": "5.0.1",
  "title": "",
  "body": " Solve the matrix equation   "
},
{
  "id": "chap-eigenvalues-2-3",
  "level": "2",
  "url": "chap-eigenvalues.html#chap-eigenvalues-2-3",
  "type": "Example",
  "number": "5.0.2",
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
  "number": "6.0.1",
  "title": "",
  "body": " Approximately solve the matrix equation   "
},
{
  "id": "chap-orthogonality-2-6",
  "level": "2",
  "url": "chap-orthogonality.html#chap-orthogonality-2-6",
  "type": "Example",
  "number": "6.0.2",
  "title": "",
  "body": " In data modeling, one often asks: what line is my data supposed to lie on? This can be solved using a simple application of the least-squares method.             "
},
{
  "id": "chap-orthogonality-2-7",
  "level": "2",
  "url": "chap-orthogonality.html#chap-orthogonality-2-7",
  "type": "Example",
  "number": "6.0.3",
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
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Solutions to Selected Exercises",
  "body": " Solutions to Selected Exercises  "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "C",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document s overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work s title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document s license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:    Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document s license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version s license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation s users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document s Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy s public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
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
