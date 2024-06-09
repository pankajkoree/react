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
const imgURL = [
  "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
  "https://images.pexels.com/photos/45863/frog-butterfly-pond-mirroring-45863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/41004/alaska-wilderness-sky-aurora-borealis-41004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const image1 = document.querySelectorAll("img");

// image1[0].src = imgURL[0];
// image1[1].src = imgURL[1];
// image1[2].src = imgURL[2];

// changing using for loop
// for (let i = 0; i < image1.length; i++) {
//   image1[i].src = imgURL[i];
// }

// -----------------------------------------------------
// using forEach()
// image1.forEach((img, i) => {
//   img.src = imgURL[i];
// });

// -----------------------------------------------------

// when using document.querySelector searches element in whole document page
// so its better to search using querySelector for children

// getElementById is only usable for the document

// -----------------------------------------------------

// Difference between innerText and textContent
// innerText shows only the text as it seems in the browser as space is considered as a single space only but in textContent it is same as it is originally in the sourceCode

// ------------**************************------------------

// -----------getAttribute and setAttribute--------------
// we can give any attribute in html manually, which isn't defined by html EG: <h1 faltuAttribute="pk">PK</h1>  //it can be selected by ['pk'] in CSS
// in JS: document.querySelector('[pk]')

// -----------getAttribute--------------------------
document.querySelector("#js-image").getAttribute("class"); //fetches all the class name in that #js-image

// -----------------setAttribute-------------------

document
  .querySelector("#js-image")
  .setAttribute("title", "nothing but a image");
// add the attribute in the selected elements

// adding an id in the tags
document.querySelector(".vue").setAttribute("id", "vue");

// we can set the attribute like this too but it only set the attributes for those only which is inbuilt in html but can's set our own
document.querySelector("#vue").href = "www.google.com";

document.querySelector("#vue").class = "vueclass";

document.querySelector("#vue").faltu = "faltu";

// ------------**************************------------------
// ---------styling using JS------------------------
// giving style in external CSS doesn't seems in console checking but when we style using inline, it seems in console properties

// like external css style has been overritten by inline ones, inline has specificity of 1000

// ------------**************************------------------
