let array1 = [23, 12, 45, 66, 77];
let arraySize = array1.length;

// Insert an element
const push = (num) => {
  array1[arraySize] = num;
  arraySize++;
  return array1;
};

push(67);
push(69);
push(90);
push(35);

console.log(array1);
console.log(arraySize);

// Delete an element
const pop = () => {
  if (arraySize > 0) {
    arraySize = arraySize - 1;
    array1.length = arraySize;
  }
  return array1;
};

pop(array1);
pop(array1);

console.log(array1);
console.log(arraySize);

// Traverse the array
for (let i = 0; i < arraySize; i++) {
  console.log(array1[i]);
}

// Search for an element
const search = (num) => {
  for (let i = 0; i < arraySize; i++) {
    if (array1[i] === num) {
      return `${num} found at index ${i}`;
    }
  }
  return "element not found";
};

console.log(search(12));
console.log(search(39));

// Sorting the array
const sorting = (array1) => {
  let temp;
  for (let i = 0; i < arraySize; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      if (array1[i] > array1[j]) {
        temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
      }
    }
  }
  return array1;
};

console.log(sorting(array1));
