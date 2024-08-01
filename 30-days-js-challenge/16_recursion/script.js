// task 1:

const factorial = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(5));
console.log(factorial(6));

// task 2:
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(9));

// task 3:
let arrayList = [4, 7, 9, 2];
const sumArray = (arrayList) => {
  if (arrayList.length === 0) {
    return 0;
  }
  return arrayList[0] + sumArray(arrayList.slice(1));
};
console.log(sumArray(arrayList));

// task 4:
const maxNumber = (arrayList) => {
  if (arrayList.length === 1) {
    return arrayList[0];
  }
  const maxOther = maxNumber(arrayList.slice(1));
  return Math.max(arrayList[0], maxOther);
};

console.log(maxNumber(arrayList));

// task 5:
const reverseString = (string1) => {
  if (string1.length <= 1) {
    return string1;
  }
  return reverseString(string1.slice(1)) + string1[0];
};
console.log(reverseString("javascript"));

// task 6:
const isStringPalindrome = (string1) => {
  if (string1.length <= 1) {
    return true;
  }
  if (string1[0] !== string1[string1.length - 1]) {
    return false;
  }
  return isStringPalindrome(string1.slice(1, -1));
};

console.log(isStringPalindrome("javascript"));
console.log(isStringPalindrome("eye"));

// task 7:
let sortedArray = [3, 5, 7, 9, 23, 45];

const binarySearch = (
  sortedArray,
  target,
  left = 0,
  right = sortedArray.length - 1
) => {
  if (left > right) {
    return "Not found";
  }
  const mid = Math.floor((left + right) / 2);
  if (sortedArray[mid] === target) {
    return mid;
  }
  if (target < sortedArray[mid]) {
    return binarySearch(sortedArray, target, left, mid - 1);
  }
  return binarySearch(sortedArray, target, mid + 1, right);
};

console.log(binarySearch(sortedArray, (target = 6)));
console.log(binarySearch(sortedArray, (target = 23)));

// task 8:
let arrayElements = [5, 5, 2, 3, 7, 8, 9, 2, 4];
const countOccurances = (arrayElements) => {
  if (arrayElements.length === 0) {
    return 0;
  }
  const countOther = countOccurances(arrayElements.slice(1), target);

  return (arrayElements[0] === target ? 1 : 0) + countOther;
};

console.log(countOccurances(arrayElements, (target = 4)));
console.log(countOccurances(arrayElements, (target = 2)));

// task 9:
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const tree1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

const inOrderTraversal = (TreeNode) => {
  if (TreeNode === null) {
    return;
  }
  inOrderTraversal(TreeNode.left);
  console.log(TreeNode.value);
  inOrderTraversal(TreeNode.right);
};

inOrderTraversal(tree1);

// task 10:
const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

const calcDepth = (node) => {
  if (node === null) {
    return 0;
  }
  const leftDepth = calcDepth(node.left);
  const rightDepth = calcDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
console.log(calcDepth(tree2));
