// -----------------remove vs removeChild -------------------

// -----------------using remove--------------------------

// removing element using remove property
const delElem = document.querySelector("body > div > div:nth-child(5)");
// delElem.remove();

// -------------------------------------------------------
// -------------------------------------------------------

// using removeChild()
// this removeChild expects a parameter i.e. which child needs to be removed
// first we need to select the parent of the element to be removed and then calling the removeChild function with the argumnet of the child
// EG:
delElem.parentElement.removeChild(delElem); //but it's not a good approach to remove element

// -------------------------------------------------------
// -------------------------------------------------------

// but these things still remains in the memory if we had store them in the variable

// ------------------*****************----------------------
