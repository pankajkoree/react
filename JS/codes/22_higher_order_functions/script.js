function aa(b) {
  console.dir(b);
  //   console.log(typeof b);

  //   b(); // throw error as b isn't a function
  b();
}

// aa("hii");
// aa({ name: "pk", age: 23 });
// aa([2, 3, 4]);

//checking whether something is object or not
// console.dir(aa); // it it remains same means it's not object else everything is object

// aa.age = 24;
// console.log(aa.age);

function sayHi() {
  console.log("hii");
}

aa(sayHi);
