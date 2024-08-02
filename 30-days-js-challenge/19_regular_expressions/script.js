// task 1: regular expression to match a simple pattern(example match all occurances of the word "javascript" in a string) in js
const text = "JavaScript is a versatile language. I love JavaScript!";
const regex = /javascript/gi;

const matches = text.match(regex);

if (matches) {
  console.log("Matches found:", matches);
  console.log("Number of matches:", matches.length);
} else {
  console.log("No matches found.");
}

// task 2: regular expression to match all digits in a string
const text2 = "There are 123 apples and 4567 oranges.";
const regex2 = /\d+/g;

const matches2 = text2.match(regex2);

if (matches2) {
  console.log("Digits found:", matches2);
  console.log("Number of matches:", matches2.length);
} else {
  console.log("No digits found.");
}

// task 3: regular expressions to match all words in a string that start with a capital letter
const text3 = "The Quick Brown Fox Jumps Over The Lazy Dog.";
const regex3 = /\b[A-Z][a-z]*\b/g;

const matches3 = text3.match(regex3);

if (matches3) {
  console.log("Capitalized words found:", matches3);
  console.log("Number of matches:", matches3.length);
} else {
  console.log("No capitalized words found.");
}

// task 4: regular expression to match all sequence of one or more digits in a digits
const text4 = "The numbers are 42, 123, and 45678.";
const regex4 = /\d+/g;

const matches4 = text4.match(regex4);

if (matches4) {
  console.log("Sequences of digits found:", matches4);
  console.log("Number of matches:", matches4.length);
} else {
  console.log("No sequences of digits found.");
}

// task 5: regular expression to capture the area code, central office code, and line number from a US phone number format(e.g (123) 456-7890. log the captures
const phoneNumber = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const match5 = phoneNumber.match(regex5);

if (match5) {
  const areaCode = match5[1];
  const centralOfficeCode = match5[2];
  const lineNumber = match5[3];

  console.log("Area Code:", areaCode);
  console.log("Central Office Code:", centralOfficeCode);
  console.log("Line Number:", lineNumber);
} else {
  console.log("No match found.");
}

// task 6: regular expression to capture the username and domain from an email address
const email = "rajanpoudel@yahoo.com";
const regex6 = /^([^@]+)@(.+)$/;

const match6 = email.match(regex6);

if (match6) {
  const username = match6[1];
  const domain = match6[2];

  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("No match found.");
}

// task 7: regular expression to match any of the word only if it is at the beginning of a string
// const text7 = "apple is a fruit.";
// const regex7 = /^(apple|banana|cherry)\b/;

const text7 = "Rajan isn't a boy";
const regex7 = /^(Rajan|Rajani|Ranjita)\b/;

const match7 = text7.match(regex7);

if (match7) {
  console.log("The word is at the beginning of the string:", match7[0]);
} else {
  console.log(
    "None of the specified words are at the beginning of the string."
  );
}

// task 8: regular expression to match any of the word only if it is at the end of a string
const text8 = "I love cherry";
const regex8 = /(apple|banana|cherry)\b$/;

const match8 = text8.match(regex8);

if (match8) {
  console.log("The word is at the end of the string:", match8[0]);
} else {
  console.log("None of the specified words are at the end of the string.");
}

// task 9: regular expression to vallidate a simple passoword(must include at least one uppercase letter, one lowercase letter, one digit and one special character)
const passwords = [
  "Password1!",
  "pass1234",
  "PASSWORD!",
  "P@ssw0rd",
  "CorrectHorseBatteryStaple!",
];

const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

passwords.forEach((password) => {
  if (regex9.test(password)) {
    console.log(`"${password}" is a valid password.`);
  } else {
    console.log(`"${password}" is not a valid password.`);
  }
});

// task 10: regular expression to validate a URL
const urls = [
  "https://www.example.com",
  "http://example.com/path?query=123",
  "https://example.com/#fragment",
  "ftp://example.com",
  "http://-example.com",
  "http://example..com",
];

const regex10 =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-\.~%!$&'()*+,;=:@]*)*(\?[;&a-zA-Z0-9%_+=-]*)?(#[\w-]*)?$/i;

urls.forEach((url) => {
  if (regex10.test(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is not a valid URL.`);
  }
});
