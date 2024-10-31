// arrays

class MyArray {
  constructor() {
    this.arrayLength = 0;
    this.arrayData = [];
  }

  push(value) {
    this.arrayData[this.arrayLength] = value;
    this.arrayLength++;
    return this.arrayLength;
  }

  get(index) {
    if (index > this.arrayLength) {
      return `index is out of range`;
    }
    return this.arrayData[index - 1];
  }

  //   pop() {
  //     if (this.arrayLength <= 0) {
  //       return `underflow`;
  //     }
  //     this.arrayLength = this.arrayLength - 1;
  //     return (this.arrayData[this.arrayLength]);
  //   }
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
