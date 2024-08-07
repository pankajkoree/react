var maxProfit = function (prices) {
  let profit = 0;
  let loss = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < loss) {
      loss = prices[i];
    } else if (prices[i] > loss) {
      profit = Math.max(profit, prices[i] - loss);
    }
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
