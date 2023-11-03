const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const dp = Array.from({ length: N }, () => 0);

  const arr = data[0].split(' ').map((item) => +item);

  for (let i = 0; i < N; i++) {
    dp[i + 1] = dp[i] + arr[i];
  }

  const answer = [];
  // console.log(dp);
  for (let i = 0; i < M; i++) {
    const [x, y] = data[i + 1].split(' ').map((item) => +item);

    // console.log(dp[y], dp[x - 1]);

    const num = dp[y] - dp[x - 1];

    answer.push(num);
  }

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
