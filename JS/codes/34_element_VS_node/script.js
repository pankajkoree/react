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

// -------------------******************-------------------
