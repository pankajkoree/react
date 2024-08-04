// task 1: median of two sorted arrays
var findMedianSortedArrays = function (nums1, nums2) {
  const toltalLength = nums1.length + nums2.length;
  let x = 0;
  let y = 0;
  const mergedArr = [];
  for (let i = 0; i < toltalLength; i++) {
    if (x > nums1.length - 1) {
      nums2.splice(0, y);
      mergedArr.push(...nums2);
      break;
    }
    if (y > nums2.length - 1) {
      nums1.splice(0, x);
      mergedArr.push(...nums1);
      break;
    }
    if (nums1[x] > nums2[y]) {
      mergedArr.push(nums2[y]);
      y++;
      continue;
    } else {
      mergedArr.push(nums1[x]);
      x++;
      continue;
    }
  }
  if (toltalLength % 2 === 0) {
    return (mergedArr[toltalLength / 2] + mergedArr[toltalLength / 2 - 1]) / 2;
  } else {
    return mergedArr[(toltalLength - 1) / 2];
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));

// task 2: merge k sorted lists
function merge(left, right) {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}
function helper(lists, start, end) {
  if (start === end) {
    return lists[start];
  } else if (start < end) {
    const mid = parseInt((start + end) / 2);
    const left = helper(lists, start, mid);
    const right = helper(lists, mid + 1, end);
    return merge(left, right);
  } else {
    return null;
  }
}
var mergeKLists = function (lists) {
  return helper(lists, 0, lists.length - 1);
};
console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);

// task 3: trapping rain water
var trap = function (height) {
  let i = 0;
  let left = height[0];
  let sum = 0;
  let j = height.length - 1;
  let right = height[j];
  while (i < j) {
    if (left <= right) {
      sum += left - height[i];
      i++;
      left = Math.max(left, height[i]);
    } else {
      sum += right - height[j];
      j--;
      right = Math.max(right, height[j]);
    }
  }
  return sum;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// task 4: N-Queens
var solveNQueens = function (n) {
  let mat = [];
  let res = [];
  for (let i = 0; i < n; i++) {
    mat[i] = new Array(n).fill(".");
  }
  function nQueen(mat, row) {
    if (row === mat.length) {
      res.push([]);
      for (let i = 0; i < mat.length; i++) {
        res[res.length - 1].push(mat[i].join(""));
      }
      return;
    }
    for (let i = 0; i < mat.length; i++) {
      if (isSafe(mat, row, i)) {
        mat[row][i] = "Q";
        nQueen(mat, row + 1);
        mat[row][i] = ".";
      }
    }
  }
  function isSafe(mat, row, col) {
    for (let i = row - 1; i >= 0; i--) {
      if (mat[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (mat[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < mat.length; i--, j++) {
      if (mat[i][j] === "Q") return false;
    }
    return true;
  }
  nQueen(mat, 0);
  return res;
};
console.log(solveNQueens(4));

// task 5: word ladder
function ladderLength(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const wordSet = new Set(wordList);
  const dp = {};
  dp[beginWord] = 1;

  const queue = [beginWord];

  while (queue.length > 0) {
    const currentWord = queue.shift();

    for (let i = 0; i < currentWord.length; i++) {
      const wordArray = currentWord.split("");
      for (let j = 0; j < 26; j++) {
        wordArray[i] = String.fromCharCode(97 + j); // Generating new words by changing one character
        const newWord = wordArray.join("");

        if (wordSet.has(newWord) && !dp.hasOwnProperty(newWord)) {
          dp[newWord] = dp[currentWord] + 1;
          if (newWord === endWord) {
            return dp[newWord];
          }
          queue.push(newWord);
        }
      }
    }
  }

  return 0;
}
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);