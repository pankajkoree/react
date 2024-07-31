// task 1:
class Person {
  name = "Rajan";
  age = 20;
  greet() {
    return `Hello, I'm ${this.name} and i'm ${this.age} years old.`;
  }
}

const instance = new Person();
console.log(instance.greet());

// task 2:
Person.prototype.updateAge = function (age) {
  this.age = age;
  return `Age : ${age}`;
};

const newIns = new Person();

console.log(newIns.updateAge(23));

// task 3:
class Student extends Person {
  studentId = 101;
  getStudentId() {
    return `Student ID : ${this.studentId}`;
  }
}

const studentObject = new Student();
console.log(studentObject.getStudentId());

// task 4:
Student.prototype.greet = function (studentId) {
  this.studentId = studentId;
  return `Hello, your student id : ${studentId}`;
};

console.log(studentObject.greet(studentObject.studentId));

// task 5:
Person.newGreet = function () {
  return `Hello from the new static class`;
};

console.log(Person.newGreet());

// task 6:
Student.noOfStudent = 1;
Student.constructor = function () {
  this.noOfStudent++;
  return this.noOfStudent;
};
console.log(Student.noOfStudent);

// task 7:
Person.lastName = "Poudel";
Person.firstName = instance.name;

Person.getFullName = function () {
  return `FullName : ${Person.firstName} ${Person.lastName}`;
};

console.log(Person.getFullName());

// task 8:
Person.setFullName = function (fname, lname) {
  Person.firstName = fname;
  Person.lastName = lname;
  return `Update fullName : ${Person.firstName} ${Person.lastName}`;
};

Person.setFullName("Dipti", "Ghorasaini");
console.log(Person.getFullName());

// task 9 & 10:
class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }

  deposit(amount) {
    amount > 0 ? (this.#balance += amount) : "Deposit amount must be positive";
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > 0) {
      if (this.#balance > amount) {
        this.#balance -= amount;
        return this.#balance;
      } else {
        return `Insufficient balance`;
      }
    } else {
      return `Withdrawal amount must be greater than 0`;
    }
  }
}

const bankOb = new Account();

console.log(bankOb.deposit(15000));

console.log(bankOb.withdraw(23000));
console.log(bankOb.withdraw(12000));

console.log(bankOb.deposit(2000));