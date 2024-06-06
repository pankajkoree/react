// setTimeout isn't the part of the js, its a part of web browser but used in js
// setTimeout("hii"); //doesn;t a expect a string, but a js code

setTimeout("console.log('hi')"); // in output this output is shown but the source file won't be this, it will create its own file based on this code file

// uses
// to add some time, so that code runs after some delay
setTimeout('console.log("delay in printing")', 2000);

// multiple lines of console in a single line
setTimeout("console.log('hi my name is '); console.log('your name is ')", 5000); // this also throws error when we remove any semicolon after each console finish

// what if we write above lines in two line in source code
// setTimeout("console.log('hi my name is ');
//     console.log('your name is ')", 5000);    //throws the error if we do like this
// so the correct way is using string literals
setTimeout(
  `console.log('hi my name is ') 
    console.log('your name is ')`,
  5000
); // but it doesn't throws any error when we remove the semicolor after a console

// passing these codes directly in console returns a id eg: setTimeout("console.log('hi')",4000)
// setTimeout("console.log('hi444')",5000)
// 8    // it is the id of the last console
// VM2080:1 hi
// VM2082:1 hi444

// when we want to clear those setTimeout before its exection we pass the id of that console in clearTimeout EG:
// setTimeout("console.log('hi')",1500)
// setTimeout("console.log('hi000')",5000)
// setTimeout("console.log('hifgjlf')",10000)
// 9    // id of the last console
// VM2656:1 hi
// VM2678:1 hi000
// clearTimeout(9)  // passed the id of the last console
