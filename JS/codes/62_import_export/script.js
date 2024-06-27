// -----------import and export -----------------------------

// import { usersData } from "./usersData.js";
// import { productsData } from "./productsData.js"; //default export can't be imported using {} so
// import productsData from "./productsData.js";
// import getFirstUser from "./usersData.js";

// console.log(usersData);
// console.log(productsData);

// console.log(getFirstUser());

// ---------------------------------------------------------

// import { usersData } from "./usersData.js";
// import getFirstUser from "./usersData.js";

// these both things can be import as whole as
// import * as userData from "./usersData.js";

// console.log(userData);

// the default one can be used as
// console.log(userData.default);  // the output will be as : getFirstUser() {
//     return usersData[0];
//   }

// ---------------------------------------------------------

// but if default export is a function we can directly access it as

// console.log(userData.default()); // we'll get the actual result

// and other thing can be accessd using . operator
// console.log(userData.usersData); // we get the actual result

// ---------------------------------------------------------
// every thing defined will of module scope such as user that is below
// type="module" automatically have defer attribute

// const user = "coder";

// import { usersData } from "./usersData.js";
// console.log(user);

// ---------------------------------------------------------

// without defer attribute, accessing this will have a null value
// const h1 = document.querySelector("h1");
// console.log(h1);

// ---------------------------------------------------------

//but when we add type="module" defer gets automatically included
// const h1 = document.querySelector("h1");
// console.log(h1);

// ---------------------------------------------------------
// when we declare something without const, let , var, it gets declared in global scope
// but we shouldn't use like this
// so we use 'use strict'
// and when we add 'use strict' in top of script, it thorws error
// user = "hii";

// console.log(user);

// ---------------------------------------------------------
// but when we use type="module", it automatically adds 'use strict'
// in this case, it throws error as : ReferenceError: user is not defined

// user = "hii";

// console.log(user);

// ---------------------------------------------------------
