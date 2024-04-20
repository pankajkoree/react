import { usersData, myName } from "./usersData.js";

// import {productsData} from "./productsData.js";  // it gives error when we import default exported using curly brackets

// import name can be anything, it's not compulsory to use the same exported name in default export
import productsData from "./productsData.js";

// import and exoport name can be changed, it is need when two things has same name and need to use in a single place

console.log(myName);

console.log(usersData);

console.log(productsData);
