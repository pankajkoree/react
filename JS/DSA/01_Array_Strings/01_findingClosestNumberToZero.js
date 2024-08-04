/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closestNumber = nums[0];
  nums.forEach((x) => {
    if (Math.abs(x) < Math.abs(closestNumber)) {
      closestNumber = x;
    }
  });
  if (closestNumber < 0 && nums.includes(Math.abs(closestNumber))) {
    return Math.abs(closestNumber);
  } else {
    return closestNumber;
  }
};

console.log(findClosestNumber([-4, -5, 2, 5]));
