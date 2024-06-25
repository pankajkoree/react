// ---------------Try and Catch ------------------------

// try {
//   console.log(a);
// } catch (err) {
//   console.log(err); //error is a object
// }

// console.log(5 + 67);

// ------------------------------------------------------
// it can be used anywhere like in synchronous as well asynchronous
// but we generally do it with asynchronous

async function makeRequest() {
  try {
    const url = "https://dummyjson.com/users";

    const responsePromise = await fetch(url); // await returns the result of the fetch

    const data = await responsePromise.json();

    // // the above two lines code can be done in single line using await again as :
    // const data = await (await fetch(url)).json(); // await returns the result of the fetch
    // // but its not the recommended way to do

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("hi");
}
makeRequest();
