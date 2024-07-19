# 30 Days JS Challenge

## Topic : Objects

### Solution Code:

```js
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
console.log("<------------task 5--------------->");
book.library = {
  name: "libraryOfBooks",
  booksTitle: ["Chemistyr", "Maths", "Python", "DBMS"],
};
console.log(book.library);

// task 6: access and log the name of the library and the titles of all the books in the library
console.log("<------------task 6--------------->");
const nameOfLibrary = book.library.name;
console.log(nameOfLibrary);
const booksTitle = book.library.booksTitle.forEach((bookName) => {
  console.log(bookName);
});

// task 7: add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
console.log("<------------task 7--------------->");
book.thisMethod = () => {
  return `Title of book is ${book.title} and year is ${book.year}`;
};
console.log(book.thisMethod());

// task 8: use a for...in loop to iterate over the properties of the book object and log each property and its value
console.log("<------------task 8--------------->");
for (const items in book) {
  typeof book[items] == "function"
    ? console.log(`${items} : ${book[items]()}`)
    : typeof book[items] == "object"
    ? console.log(`${items} : ${JSON.stringify(book[items])}`)
    : console.log(`${items} : ${book[items]}`);
}

// task 9: use Object.keys and Object.values methods to log all the keys and value of the book object
console.log("<------------task 9--------------->");
console.log(Object.keys(book));
console.log(Object.values(book));
```