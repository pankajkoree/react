# DATA STRUCTURES AND ALGORITHMS IN JAVASCRIPT

### 1: in a record of student, find the specific student

```javascript
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

### 2: to iterate over the item, using nested loop for O(n^2)

```javascript
// problem 2: to iterate over the item, using nested loop for O(n^2)

const numbers = [9, 8, 7, 6, 5];

const iterate = (arrays) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(`${arrays[i]} ${arrays[j]}`);
    }
  }
};

iterate(numbers);
```
