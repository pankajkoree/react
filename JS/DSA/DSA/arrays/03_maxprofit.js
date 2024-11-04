const maxProfit = (arr) => {
  const difference = [];
  const maxProfit = [0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      difference.push(arr[i + 1] - arr[i]);
    }
  }
  for (let i = 0; i < difference.length; i++) {
    if (difference[i] > maxProfit[0]) {
      maxProfit[0] = difference[i];
    }
  }
  return maxProfit[0];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
