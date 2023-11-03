const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arrTmp = data
    .slice(0, N)
    .map((item) => item.split(' ').map((item) => +item));

  const tmp = data
    .slice(-M)
    .map((item) => item.split(' ').map((item) => +item));

  const arr = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      arr[i][j] = arrTmp[i - 1][j - 1];
    }
  }

  const dp = Array.from({ length: N + 2 }, () =>
    Array.from({ length: N + 2 }, () => 0)
  );

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // console.log(dp[i + 1][j]);
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + arr[i][j] - dp[i - 1][j - 1];
      // dp[i + 1][j + 1] = dp[i + 1][j] + dp[i][j + 1] - dp[i][j] + arr[i][j];
    }
  }

  const answer = [];

  tmp.forEach((item) => {
    const [stX, stY, enX, enY] = item;

    const num =
      dp[enX][enY] - dp[stX - 1][enY] - dp[enX][stY - 1] + dp[stX - 1][stY - 1];

    answer.push(num);

    // console.log(num);
  });

  let str = '';
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      str += dp[i][j] + ' ';
    }
    str += '\n';
  }
  // console.log(str);
  // console.log(arr);
  // console.log(tmp);

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
