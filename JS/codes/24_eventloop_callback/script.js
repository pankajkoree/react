// synchronous code means code runs one by one
// EG:

// 1st synchronous codes get executed then after that asynchronous code gets executed although the timer is 0
console.log("1st line will be called");

function callfun() {
  console.log("will be printed when called eithter it is at first or whatever");
}

for (let i = 1; i <= 4; i++) {
  console.log(i);
}

// callback queue   // setting the time in settimeout for 1s doesn't means it gets executed after 1s, it means it will take minimum 1s for execution, and if other synchronous code is being executed then, after that it only goes in callstack otherwise it remains in callback queue
setTimeout(callfun, 5000); // it doesn't directly goes to call stack,it first goes in WebApis and wait for sometimes,and then goes to callback queue for waiting for its time and then goes in call stack and gets printed
console.log("last line");
