const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const data = input.split('\n').map((item) => item.trim());

  const arr = data.map((item) => +item);

  // console.log(arr);

  const dp = Array(11).fill(0);

  for (let i = 0; i < 10; i++) {
    dp[i + 1] = dp[i] + arr[i];
  }

  // console.log(dp);

  let answer = -10000;

  for (let j = 1; j <= 10; j++) {
    const num = dp[j] - dp[0];
    // console.log(num);

    if (Math.abs(100 - answer) >= Math.abs(100 - num) && answer < num) {
      answer = num;
    }
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
