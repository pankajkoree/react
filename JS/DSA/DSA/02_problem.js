// problem 2: to iterate over the item, using nested loop for O(n^2)

const numbers = [9, 8, 7, 6, 5];

const iterate = (arrays) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(`${arrays[i]} ${arrays[j]}`);
    }
  }
};

iterate(numbers);
