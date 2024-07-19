// task 1: create an object representing a book with properties like title, author, and year, and log the object
console.log("<------------task 1--------------->");
const book = {
  title: "Physics",
  author: "KD Raman",
  year: "1989",
};

console.log(book);

// task 2: access and log the title and author properties of the object
console.log("<------------task 2--------------->");
const title = book.title;
console.log(title);

const author = book.author;
console.log(author);

// task 3: add a method to the book object that returns a string with the book's title and author and log the result of calling this method
console.log("<------------task 3--------------->");
book.titleAndAuthorMethod = () => {
  return `Books title is ${book.title} and author is ${book.author}`;
};
console.log(book.titleAndAuthorMethod());

// task 4: add a method to the book object that takes a parameter(year)  and updates the book's year property and log the updated object
console.log("<------------task 4--------------->");
book.updateYear = (year) => {
  book.year = year;
};
book.updateYear(1995);

console.log(book);

// task 5: create a nested object representing a library with properties like name and book(an array of book objects), and log the library object