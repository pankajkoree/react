// Nested If else
// Grade determination

// const marks = +prompt("Enter the marks: ") || 40; // default marks
const marks = 40; //default marks
if (marks >= 40) {
  if (marks >= 90) {
    console.log("A+");
  } else if (marks >= 80 && marks < 90) {
    console.log("A");
  } else if (marks >= 70 && marks < 80) {
    console.log("B+");
  } else if (marks >= 60 && marks < 70) {
    console.log("B");
  } else if (marks >= 50 && marks < 60) {
    console.log("C+");
  } else {
    console.log("C");
  }
} else {
  if (marks < 40 && marks >= 35) {
    console.log("D grade");
  } else {
    console.log("Not graded - NG");
  }
}

// Switch Case
// Room allotment
