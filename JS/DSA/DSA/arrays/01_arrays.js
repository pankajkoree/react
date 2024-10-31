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

  pop() {}
}

const arrayObject = new MyArray();

arrayObject.push(2);
arrayObject.push(5);
arrayObject.push(9);
arrayObject.push(7);

console.log(arrayObject.arrayData);
