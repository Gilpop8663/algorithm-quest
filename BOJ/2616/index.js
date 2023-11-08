const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data[0].split(' ').map((item) => +item);

  const K = +data[1];

  const dp = Array.from({ length: 4 }, () =>
    Array.from({ length: N }, () => 0)
  );

  const sum = Array.from({ length: N + 1 }, () => 0);

  let count = 3;

  let answer = 0;

  for (let i = 0; i < N; i++) {
    sum[i + 1] = sum[i] + arr[i];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = K; j <= N; j++) {
      if (i === 0) {
        dp[i][j] = Math.max(dp[i][j - 1], sum[j] - sum[j - K]);
        continue;
      }
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - K] + sum[j] - sum[j - K]);
    }
  }

  answer = dp[2][N];
  // console.log(dp, visited);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
