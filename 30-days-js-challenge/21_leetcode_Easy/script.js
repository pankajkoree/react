// activity 1: leetcode : Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let sumPair = {};
  for (let i = 0; i <= nums.length; i++) {
    let difference = target - nums[i];
    if (difference in sumPair) {
      return [sumPair[difference], i];
    }
    sumPair[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

// activity 2: leetcode: Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let powValue = Math.pow(2, 31) - 1;
  let rev = x.toString().split("").reverse().join("");
  let result = parseInt(rev);
  if (result > powValue || result < -powValue) {
    return 0;
  }
  if (x < 0) {
    return -result;
  } else {
    return result;
  }
};

console.log(reverse(12345));
console.log(reverse(-456));

// activity 3: leetcode: palindrome number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let palidromeValue = x.toString().split("").reverse().join("");

  let normal = x.toString();
  return palidromeValue === normal;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-323));

// activity 4:
var mergeTwoLists = function (list1, list2) {
  var mergedList = null;
  var currentNode = null;
  var smallerNode = null;
  if (!list1) return list2;
  if (!list2) return list1;

  while (list1 || list2) {
    if (!list1) {
      currentNode.next = list2;
      break;
    }
    if (!list2) {
      currentNode.next = list1;
      break;
    }
    if (list1.val <= list2.val) {
      smallerNode = list1;
      list1 = list1.next;
    } else {
      smallerNode = list2;
      list2 = list2.next;
    }
    if (!mergedList) {
      mergedList = smallerNode;
      currentNode = mergedList;
    } else {
      currentNode.next = smallerNode;
      currentNode = currentNode.next;
    }
  }
  return mergedList;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// activity 5:
var isValid = function (s) {
  let stack = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};
console.log(isValid("()"));
console.log(isValid("(){}"));