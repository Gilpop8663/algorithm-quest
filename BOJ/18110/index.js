const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data.map((item) => +item).sort((a, b) => b - a);

  const per = Math.round(N * 0.15);

  let count = 0;
  let num = N - 2 * per;
  for (let i = per; i < N - per; i++) {
    count += arr[i];
  }

  if (N === 0) return 0;

  // console.log(count, num, per);

  const answer = Math.round(count / num);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
