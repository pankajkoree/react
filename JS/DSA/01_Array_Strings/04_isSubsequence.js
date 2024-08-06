var isSubsequence = function (s, t) {
  let index = 0;
  if (s.length > t.length) return false;
  for (let i = 0; i < t.length; i++) {
    if (s[index] == t[i]) {
      index++;
      if (index == s.length) break;
    }
  }
  return s.length === index;
};
console.log(isSubsequence("abc", "abcde"));

console.log(isSubsequence("axc", "ahbgdc"));

console.log(isSubsequence("abc", "ahbgdc"));
