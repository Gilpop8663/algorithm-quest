// const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, K] = info.split(' ').map((item) => +item);

  const arr = data[0].split(' ').map((item) => +item);

  // console.log(N, K, arr);

  const dp = Array.from({ length: N }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    dp[i + 1] = dp[i] + arr[i];
  }

  let answer = -10000000000;

  for (let i = 0; i < N - K + 1; i++) {
    // console.log(i + K, i);
    answer = Math.max(answer, dp[i + K] - dp[i]);
  }

  console.log(dp);

  return answer;
}

// const output = console.log(solution(input));

module.exports = solution;
