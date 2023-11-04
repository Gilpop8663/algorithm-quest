const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const dataArr = data
    .slice(0, N)
    .map((item) => item.split(' ').map((item) => +item));

  const K = +data[N];

  // console.log(K);

  const xyData = data
    .slice(N + 1, N + K + 1)
    .map((item) => item.split(' ').map((item) => +item));

  // console.log(arr, xyData);

  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => 0)
  );

  const arr = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => 0)
  );

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      arr[i][j] = dataArr[i - 1][j - 1];
    }
  }

  // console.log(arr);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + arr[i][j] - dp[i - 1][j - 1];
    }
  }

  // console.log(dp);

  const answer = [];

  for (let i = 0; i < K; i++) {
    const [stX, stY, enX, enY] = xyData[i];

    const num =
      dp[enX][enY] - dp[stX - 1][enY] - dp[enX][stY - 1] + dp[stX - 1][stY - 1];
    // console.log(num);
    answer.push(num);
  }

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
