# DATA STRUCTURES AND ALGORITHMS IN JAVASCRIPT

### 1: in a record of student, find the specific student

```
// problem 1: in a record of student, find the specific student

// data structures
const studentRecords = ["aftab", "risek", "selera", "kashif"];

// algorithm
const findStudent = (studentRecords, studentName) => {
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudent(studentRecords, "risek");

```