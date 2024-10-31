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
    return poppedElement;
  }

  // to search an item in array
  search(value) {
    for (let i = 0; i < this.arrayLength; i++) {
      if (this.arrayData[i] === value) {
        return `${value} found at position ${i + 1}`;
      }
    }
    return `value not found`;
  }

  // to sort the array items
  sort() {
    let temp;
    for (let i = 0; i < this.arrayLength; i++) {
      for (let j = i + 1; j < this.arrayLength; j++) {
        if (this.arrayData[i] > this.arrayData[j]) {
          temp = this.arrayData[i];
          this.arrayData[i] = this.arrayData[j];
          this.arrayData[j] = temp;
        }
      }
    }
    return this.arrayData;
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
console.log(arrayObject.arrayData);
console.log(arrayObject.arrayLength);

arrayObject.push(13);
arrayObject.push(8);
arrayObject.push(3);
console.log(arrayObject.arrayData);

console.log(arrayObject.search(19));
console.log(arrayObject.search(13));

console.log(arrayObject.sort());
