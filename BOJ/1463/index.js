const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  let N = +info;

  const dp = Array(1000000).fill(10000000);

  const MAX = 10000000;

  dp[N] = 0;

  const func = (M) => {
    const dist = dp[M];

    if (M <= 1) return;

    if (M % 3 === 0) {
      const num = M / 3;

      if (dp[num] > dist + 1) {
        dp[num] = Math.min(dp[num], dist + 1);
        func(num);
      }
    }

    if (M % 2 === 0) {
      const num = M / 2;
      if (dp[num] > dist + 1) {
        dp[num] = Math.min(dp[num], dist + 1);
        func(num);
      }
    }

    const num = M - 1;

    if (dp[num] > dist + 1) {
      dp[num] = Math.min(dp[num], dist + 1);
      func(num);
    }
  };

  func(N);

  // console.log(dp[5], dp[4], dp[3]);

  // 10 5 4 2 1
  // 9 3 1
  const answer = dp[1];

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
