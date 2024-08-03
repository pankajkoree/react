// task 1: add two numbers
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var addTwoNumbers = function (l1, l2) {
  const ln = new ListNode();
  let count = 0;
  let cur = ln;
  while (l1 || l2 || count) {
    const s = (l1?.val || 0) + (l2?.val || 0) + count;
    count = Math.floor(s / 10);
    cur.next = new ListNode(s % 10);
    cur = cur.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return ln.next;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// task 2: longest substring without repeating characters
var lengthOfLongestSubstring = function (str) {
  let check = null;
  let temp = "";
  let array = [];
  let max = 0;
  if (str.length == 0) {
    return 0;
  }
  if (str.length == 1) {
    return 1;
  }
  for (let i = 0; i < str.length; ++i) {
    check = temp.indexOf(str[i]);
    if (check >= 0) {
      array.push(temp);
      temp = temp.slice(check + 1, i + 1) + str[i];
    } else {
      temp += str[i];
      if (i == str.length - 1) {
        array.push(temp);
      }
    }
  }
  max = array[0];
  array.forEach(function (v) {
    if (v.length > max.length) {
      max = v;
    }
  });
  return max.length;
};
console.log(lengthOfLongestSubstring("abcabcbb"));

// task 3: container with most water
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
console.log(maxArea([3, 6, 7, 3, 8, 4, 9]));

// task 4: 3Sum
var threeSum = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  let out = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      let res = sorted[i] + sorted[left] + sorted[right];
      if (res === 0) {
        out.push([sorted[i], sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) left++;
        while (left < right && sorted[right] === sorted[right - 1]) right--;
        left++;
        right--;
      } else if (res > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return out;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// task 5: group anagrams
var groupAnagrams = function (strs) {
  var obj = {};
  for (let i = 0; i < strs.length; i++) {
    if (!obj[strs[i].split("").sort().join("")])
      obj[strs[i].split("").sort().join("")] = [];
    obj[strs[i].split("").sort().join("")] = [
      ...obj[strs[i].split("").sort().join("")],
      strs[i],
    ];
  }

  return Object.values(obj);
};
console.log(groupAnagrams(["eat", "tea", "tan", "fat", "mat", "cat"]));
