// arrays

class MyArray {
  constructor() {
    this.arrayLength = 0;
    this.arrayData = [];
  }

  // to push the value in the last of the array
  push(value) {
    this.arrayData[this.arrayLength] = value;
    this.arrayLength++;
    return this.arrayLength;
  }

  // to display the data of the array
  get(index) {
    if (index > this.arrayLength) {
      return `index is out of range`;
    }
    return this.arrayData[index - 1];
  }

  // to delete a item from the last of the array
  pop() {
    if (this.arrayLength <= 0) {
      return `underflow`;
    }
    let poppedElement = this.arrayData[this.arrayLength - 1];
    this.arrayLength = this.arrayLength - 1;
    this.arrayData.length = this.arrayLength;
    let data = this.arrayData;
    return `Popped Element : ${poppedElement} Array Data : ${data}`;
  }
}

const arrayObject = new MyArray();

// push
arrayObject.push(2);
arrayObject.push(5);
arrayObject.push(9);
arrayObject.push(7);
console.log(arrayObject.arrayData);
console.log(arrayObject.arrayLength);

// get
console.log(arrayObject.get(5));
console.log(arrayObject.get(4));

// pop
console.log(arrayObject.pop());
