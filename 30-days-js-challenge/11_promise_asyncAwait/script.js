// task 1: create a promise that resolves with a message after a 2-second timeout and log the message

const promise = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved(console.log("promise is resolved after 2 seconds"));
  }, 2000);
});

// task 2: create a promise that rejects with an error message after a 2-seconds timeout and handle the error using .catch()

const promise2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected(new Error("promise rejected after 2 seconds"));
  }, 2000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// task 3: create a sequence of promises that simulate fetching data from a server. Chain the promises to log the message in specific order

const fetchFromServer = (resource) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(`${resource}`);
    }, 3000);
  });
};

fetchFromServer("fetching data at first")
  .then((data) => {
    console.log(data);
    return fetchFromServer("fetching data at second");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// task 4: an async function that waits for a promise to resolve and then logs the resolved value

async function resolveFunctionTask4() {
  await new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(
        console.log("Async function waited for promise to get resolved")
      );
    }, 10000);
  });
}

resolveFunctionTask4();

// task 5: an async function that handles a rejected promise using try-catch and logs the error message

async function resolveFunctionTask5() {
  try {
    await new Promise((resolved, rejected) => {
      setTimeout(() => {
        rejected("rejected using try and catch");
      }, 11000);
    });
  } catch (error) {
    console.log(error);
  }
}

resolveFunctionTask5();

// task 6: use the fetch API to get data from a public API and log the response data to the console using promises

const fetchData = (url) => {
  setTimeout(() => {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response Data : ", data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, 12000);
};

fetchData("https://dummyjson.com/posts");

// task 7: use the fetch API to get data from a public API and log the response data to the console using async/await
const fetchData2 = async (url) => {
  setTimeout(() => {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response Data : ", data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, 13000);
};

fetchData2("https://dummyjson.com/posts/1");

// task 8: use promise.all to wait for multiple promises to resolve and then log all their values

const promise1Resolve = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved(fetch("https://dummyjson.com/posts/2"));
  }, 14000);
});

const promise2Resolve = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved(fetch("https://dummyjson.com/posts/3"));
  }, 14000);
});

Promise.all([promise1Resolve, promise2Resolve])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((data) => {
    console.log(data);
  });
// task 9: use Promise.race to log the values of the first promise that resolves using multiple promises

const promise3Resolve = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved(fetch("https://dummyjson.com/posts/6"));
  }, 15000);
});

const promise4Resolve = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved(fetch("https://dummyjson.com/posts/10"));
  }, 15000);
});
Promise.race([promise3Resolve, promise4Resolve])
  .then((firstResolvedPromise) => firstResolvedPromise.json())
  .then((data) => {
    console.log("First resolved promise data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });