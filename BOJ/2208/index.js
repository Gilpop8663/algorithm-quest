const input = require("fs").readFileSync(0, "utf-8").trim();

/**
 *
 * m개 이상을 주워야함
 *  보석을 줍다가 M개 이상이고 음수가 나오면 그만줍고 탈출한다.
 * 보석은 M개는 무조건 연속으로 줍는다.
 * 0<M<=N<100,000 이라서 모든것을 탐색하면서 가면 시간초과가 날 것임.
 * 투포인트를 해볼까
 * 1. 최대 길이 순열을 구한다.
 * 2. 근데 길이가 M 이상인 것만 구한다.
 *
 * 10,000,000,000
 *
 */
function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());

  const [N, M] = info.split(" ").map((item) => +item);

  const arr = data.map((item) => +item);

  const dp = Array.from({ length: N }, () => -20000);

  const sum = Array.from({ length: N + 1 }, () => 0);

  for (let i = 0; i < N; i++) {
    sum[i + 1] = sum[i] + arr[i];
  }

  let sum1 = 0,
    sum2 = 0,
    answer = 0;
  for (let i = M + 1; i <= N; i++) {
    sum2 = Math.min(sum[i - M], sum2);
    answer = Math.max(answer, sum[i] - sum2);
    // console.log(sum2, answer, sum[i]);
  }

  let str = "";
  for (let i = 1; i <= N; i++) {
    str += sum[i] + " ";
    // console.log(dp[i]);
  }

  // console.log(str);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
