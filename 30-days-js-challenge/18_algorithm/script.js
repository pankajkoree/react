// task 1: bubble sort
function bubbleSort(array1) {
  let n = array1.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array1[j] > array1[j + 1]) {
        let temp = array1[j];
        array1[j] = array1[j + 1];
        array1[j + 1] = temp;
      }
    }
  }
  return array1;
}
const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array1));

// task 2: selection sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
console.log(selectionSort(array1));

// task 3: quickSort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(array1));

// task 4: linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const index = linearSearch(array1, 22);
if (index !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log("Target not found in the array");
}

// task 5: binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}
const numbers = [11, 12, 22, 25, 34, 64, 90];
const bSresult = binarySearch(numbers, 90);
if (bSresult !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log("Target not found in the array");
}

// task 6: number of occurance
function countCharacterOccurrences(str) {
  const charCount = {};
  for (const char of str) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  for (const [char, count] of Object.entries(charCount)) {
    console.log(`${char}: ${count}`);
  }
}

countCharacterOccurrences("javascript");

// task 7: longest substring
function findLongestUniqueSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let longestSubstring = "";
  const charIndexMap = {};
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (char in charIndexMap && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }
    charIndexMap[char] = end;
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longestSubstring = str.slice(start, end + 1);
    }
  }
  console.log(
    "Longest substring without repeating characters:",
    longestSubstring
  );
}
findLongestUniqueSubstring("philinthropist");

// task 8: rotate an array by k
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
  console.log("Rotated array:", rotatedArray);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

// task 9: merge two sorted array
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  console.log("Merged array:", mergedArray);
  return mergedArray;
}
mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);

// task 10: fibonacci sequence using DP
function fibonacci(n) {
  if (n <= 0) {
    console.log([]);
    return [];
  } else if (n === 1) {
    console.log([0]);
    return [0];
  }
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
  return fib;
}

fibonacci(10);

// task 11: knapsack problem using DP
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  console.log("Maximum value:", dp[n][capacity]);
  return dp[n][capacity];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
knapsack(weights, values, capacity);
