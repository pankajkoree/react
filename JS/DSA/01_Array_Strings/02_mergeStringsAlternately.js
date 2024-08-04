var mergeAlternately = function (word1, word2) {
  let word1Length = word1.length,
    word2Length = word2.length;
  let word1_ = 0,
    word2_ = 0;
  let mergedWords = "";

  while (word1_ < word1Length && word2_ < word2Length) {
    mergedWords += word1[word1_++];
    mergedWords += word2[word2_++];
  }
  while (word1_ < word1Length) {
    mergedWords += word1[word1_++];
  }
  while (word2_ < word2Length) {
    mergedWords += word2[word2_++];
  }
  return mergedWords;
};
console.log(mergeAlternately("apple", "ball"));
