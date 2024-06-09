// ------------DOM - Document Object Model-----------------

function sayHi() {
  console.log("hi");
}

// -----------------------------------------------------
// using innerHTML, we can add tags too like --- h1.innerHTML = "<i>PK</i>"
//but using, innerText, we can't add those tags, adding tags doesn't affect but seems as same as in HTML too

// -----------------------------------------------------
// selecting the element using old / unuseful techniques
// let img = document.body.children[3];

// -----------------------------------------------------
// selecting DOM item using getElementsByTagName
// i.e.
const selectTagName = document.getElementsByTagName("img");
// but it selects all the img tag as : HTMLCollection(3) [img, img, img]  //throws an array although it has a single element

// -----------------------------------------------------

// selecting elements using className
const selectClassName = document.getElementsByClassName("css-image");
// selects all the elements whose classname will be same

// -----------------------------------------------------
// selecting the element using getElementById
const selectById = document.getElementById("html-id");
// fetches a single DOM element if present else it will return null

// -----------------------------------------------------
// but all of the above have some demerits, so we use another i.e.
const selectQuery = document.querySelector("#html-id");
// it can be used to select anytype of element either id, class, tag etc

// using querySelectorAll
const selectQueryAll = document.querySelectorAll(".css-image"); // it throws a nodelist, and returns multiple element whom it matches
// but if we give same id to multiple elements, it select all those element but it's not a good practice

// -----------------------------------------------------

// quick assignment
// const jsImage = document.querySelector("#js-image");
// jsImage.src =
//   "https://gomycode.com/wp-content/uploads/2023/09/Why-Is-JS-So-Popular-1024x576.jpg";

// another way
const jsimg = document.querySelector("[id='js-image']");
// jsimg.src =
//   "https://cdn.educba.com/academy/wp-content/uploads/2018/10/Uses-of-JavaScript-1.jpg.webp";

// -----------------------------------------------------

// changing all three images

// ------------**************************------------------
