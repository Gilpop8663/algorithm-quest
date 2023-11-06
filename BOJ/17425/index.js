const input = require('fs').readFileSync(0, 'utf-8').trim();

const calculateMeasure = (num) => {
  let tmp = [];

  if (num === 1) return 1;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      tmp.push(i);
      if (num / i !== i) {
        tmp.push(num / i);
      }
    }
  }

  return tmp.reduce((acc, cur) => acc + cur, 0);
};

/**
 *
 * 1000 곱하기 100만 1000
 *
 */

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const T = +info;

  const arr = data.map((item) => +item);

  const MAX = 1000000;

  const tmp = Array(MAX + 1).fill(0);

  for (let i = 1; i <= MAX; i++) {
    for (let j = 1; i * j <= MAX; j++) {
      tmp[i * j] += i;
    }
  }

  const dp = Array.from({ length: MAX + 1 }, () => 0);

  for (let i = 0; i <= MAX; i++) {
    dp[i + 1] = dp[i] + tmp[i];
  }

  const answer = [];

  arr.forEach((item) => {
    // console.log(dp[item + 1], item, 'asdasd');
    answer.push(dp[item + 1]);
  });

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
