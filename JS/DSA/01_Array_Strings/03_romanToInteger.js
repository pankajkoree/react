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
  let stringSplit = s.split("");
  console.log(stringSplit);
  let indexes = [];
  let result = [];
  stringSplit.forEach((romNum) => {
    if (romanNotaion.includes(romNum)) {
      let valIndex = romanNotaion.indexOf(romNum);
      indexes.push(valIndex);
      console.log(numberNotaion[valIndex]);

      for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] > indexes[i + 1]) {
          result.push(indexes[i] + indexes[i + 1]);
        }
        if (indexes[i] < indexes[i + 1]) {
          result.push(indexes[i + 1] - indexes[i]);
        }
      }
    }
  });
  console.log(indexes);
  console.log(result);
};

romanToInt("XIV");
