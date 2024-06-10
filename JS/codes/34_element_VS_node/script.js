// -------------Element VS Node------------------------

// ----------------------Element---------------------
// are the tags that resides in that particular element i.e.

document.body.children; //gives the result as below
// HTMLCollection(2) [h1, script]   // gives a result of htmlCollection which is basically the elements

// --------------------------------------------------

// ----------------------Node------------------------

document.body.childNodes;

// typeof document.body.childNodes;
// ("object");

// the result will be and the type of the nodes will be Object
// NodeList(7) [text, h1, text, comment, text, script, text]
// 0
// :
// text
// 1
// :
// h1
// 2
// :
// text
// 3
// :
// comment
// 4
// :
// text
// 5
// :
// script
// 6
// :
// text
// length
// :
// 7
// [[Prototype]]
// :
// NodeList

// --------------------------------------------------

// --------------------Nodetype--------------------------

// the type of the node will be determined by the table
// EG:
// fetching : document.body.children[0]     // this we get the result as
//<h1>Element VS Node</h1>
// and the type of this h1 will be 1 which means its element node

// lets give a class to above h1 element and fetch its type
// its not necessary to know the node type of node but remember that there are different types of nodes

// --------------------------------------------------

// -------------updating the code which is on fly-----------

// code on the fly means those code which isn't inside any tags, so updating those code isn't easy but can be done using below technique

document.body.childNodes[6].nodeValue = "Namaste";
// the original text in html file is still hello world but if you see the text in element section its Namaste

// ----------------------------------------------------------

// -------------------******************-------------------
