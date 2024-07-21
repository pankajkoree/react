const book = {
  name: "cknk",
  title: "jfjkbnsd",
  year: 1998,
  library: {
    books: ["chemistyr", "maths"],
  },
};

for (let key in book) {
  console.log(`${key} : ${book[key]}`);
}
console.log(book);

if (typeof book.library == "object") {
  book.library = JSON.stringify(book.library);
}
