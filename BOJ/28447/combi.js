const { K, N } = require('.');

const combi = (num, arr) => {
  if (arr.length === K) {
    console.log(arr);
    // comb.add(arr);
    return;
  }
  // console.log(num, arr);
  const newArr = [...arr];

  for (let i = num + 1; i < N; i++) {
    newArr.push(i);
    combi(i, newArr);
    combi(i, arr);
  }
};
exports.combi = combi;
