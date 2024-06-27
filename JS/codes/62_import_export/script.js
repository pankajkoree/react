// -----------import and export -----------------------------

// import { usersData } from "./usersData.js";
// import { productsData } from "./productsData.js"; //default export can't be imported using {} so
import productsData from "./productsData.js";
// import getFirstUser from "./usersData.js";

// console.log(usersData);
console.log(productsData);

// console.log(getFirstUser());

// ---------------------------------------------------------

// import { usersData } from "./usersData.js";
// import getFirstUser from "./usersData.js";

// these both things can be import as whole as
import * as userData from "./usersData.js";

console.log(userData);

// the default one can be used as
// console.log(userData.default);  // the output will be as : getFirstUser() {
//     return usersData[0];
//   }

// ---------------------------------------------------------

// but if default export is a function we can directly access it as

console.log(userData.default()); // we'll get the actual result

// and other thing can be accessd using . operator
console.log(userData.usersData); // we get the actual result
