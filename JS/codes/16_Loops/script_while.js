// while loop
console.log("while loop started");

console.log("printing number");
let num = 0;
while (num < 5) {
  console.log(num);
  num++;
}

// printing the name
const nameLetter = ["a", "b", "c", "d", "e"];
let i = 0;
console.log("letter printing");
while (i < nameLetter.length) {
  console.log(i + 1 + "." + nameLetter[i] + " " + "procoder");
  i++;
}
console.log("while loop ended");
