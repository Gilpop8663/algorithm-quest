const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = data.map((item) => item.split(' ').map((item) => +item));

  const arr1 = arr[0];
  const arr2 = arr[1];

  arr1.push(1000000000000);
  arr2.push(1000000000000);

  let stI1 = 0;
  let stI2 = 0;

  // console.log(arr1, arr2);
  let count = 0;
  const answer = [];

  while (count < N + M) {
    if (arr1[stI1] <= arr2[stI2]) {
      answer.push(arr1[stI1]);
      stI1 += 1;
    } else {
      answer.push(arr2[stI2]);
      stI2 += 1;
    }
    count += 1;
  }

  return answer.join(' ');
}

const output = console.log(solution(input));

// module.exports = solution;
