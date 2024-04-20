const colors = ["red", "black", "gold", "blue", "pink"];

const user = {
  name: "Pankaj",
  age: "23",
  country: {
    birthCountry: "Nepal",
    currentCountry: "India",
  },
};

// normal way which we generally use
// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];

// lets do above things using destructuring
const [color1, color2, color3, color4, color5] = colors;

// skipping some values and adding others in order
const [, , , colorn] = colors;

// behind the scenes array are also objects so, we can access above array like the objects as key : value pair
const {
  0: color_0,
  1: color_1,
  2: color_2,
  3: color_3,
  4: color_4,
  //5: color_5,
} = colors;

// const printColor = ({ a, b, c, d, e }) => {
//   console.log(a, b, c, d, e);
// };

// calling the arry in function doesn't need the same variable name
function printColor([a, b, c, d, e]) {
  console.log(a, b, c, d, e);
}

printColor(colors);

// <------------------------------>
// <------------------------------>

// Destructring objects

// single single    -- props that doesn't exist return undefined and the defining things should as same as the originam  or if we use new varibale we can rewrite as name : userName

const { name: userName, age } = user;

// destructing those which is again nested in objects -> known as multilevel destructuring
// const { country } = user;
const {
  country: { birthCountry, currentCountry },
} = user;

const userr = ({ name, age, birthCountry, currentCountry }) => {
  console.log(
    "Name : " +
      name +
      " age : " +
      age +
      " BirthCountry : " +
      birthCountry +
      " CurrentCountry : " +
      currentCountry
  );
};

// userr(user);
