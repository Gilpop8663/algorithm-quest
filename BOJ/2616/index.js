const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data[0].split(' ').map((item) => +item);

  const K = +data[1];

  const dp = Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    dp[i + 1] = dp[i] + arr[i];
  }

  const visited = Array.from({ length: N + 1 }, () => false);

  let count = 3;

  let answer = 0;

  for (let i = 0; i < N; i++) {
    dp[i + 1] = dp[i] + arr[i];
  }

  for (let i = 0; i < N - K + 1; i++) {
    for (let j = i + K; j < N - K + 1; j++) {
      for (let k = j + K; k < N - K + 1; k++) {
        // console.log(i, j, k);
        const num = dp[i + K] - dp[i] + dp[j + K] - dp[j] + dp[k + K] - dp[k];
        answer = Math.max(num, answer);
      }
    }
  }

  for (let i = 0; i < N - K + 1; i++) {}

  // console.log(dp, visited);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
