var romanToInt = function (s) {
  let romanNotaion = ["I", "V", "X", "L", "C", "D", "M"];
  let numberNotaion = [1, 5, 10, 50, 100, 500, 1000];
  let indicationValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // let stringSplit = s.split("");
  // console.log(stringSplit);
  // let indexes = [];
  // let result = [];
  // stringSplit.forEach((romNum) => {
  //   if (romanNotaion.includes(romNum)) {
  //     let valIndex = romanNotaion.indexOf(romNum);
  //     indexes.push(valIndex);

  //     for (let i = 0; i < indexes.length; i++) {
  //      console.log(indexes[i]);
  //     }
  //   }
  // });
  // console.log(indexes);
  // console.log(result);
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    indicationValue[s[i]] < indicationValue[s[i + 1]]
      ? (value -= indicationValue[s[i]])
      : (value += indicationValue[s[i]]);
  }
  return value;
};

console.log(romanToInt("XIV"))
