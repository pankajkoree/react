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
const floorNo = +prompt("Enter the floor no : ");
const roomNo = Math.floor(Math.random() * 100) + floorNo * 100;
const roomObject = {
  0: "Ground",
  1: "First",
  2: "Second",
  3: "Third",
  4: "Fourth",
};
switch (floorNo) {
  case 0:
    console.log(
      `Your room is in ${roomObject[floorNo]} floor and Your room no is : ${roomNo}`
    );
    break;
  case 1:
    console.log(
      `Your room is in ${roomObject[floorNo]} floor and Your room no is : ${roomNo}`
    );
    break;

  case 2:
    console.log(
      `Your room is in ${roomObject[floorNo]} floor and Your room no is : ${roomNo}`
    );
    break;
  case 3:
    console.log(
      `Your room is in ${roomObject[floorNo]} floor and Your room no is : ${roomNo}`
    );
    break;
  case 4:
    console.log(
      `Your room is in ${roomObject[floorNo]} floor and Your room no is : ${roomNo}`
    );
    break;
  default:
    console.log("Sorry, your room allotment process isn't done");
}
