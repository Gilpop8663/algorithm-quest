const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data[0].split(' ').map((item) => +item);

  arr.push(0);
  arr.push(0);
  arr.unshift(0);

  const sum = Array.from({ length: N + 5 }, () => 0);

  for (let i = 1; i <= N + 2; i++) {
    const num = arr[i];
    sum[i] = -Infinity;
    if (i >= 3) {
      sum[i] = Math.max(
        sum[i],
        sum[i - 3] + (arr[i] + arr[i - 1] + arr[i - 2]) * 2
      );
    }

    sum[i] = Math.max(sum[i], sum[i - 1] + arr[i]);
  }

  // console.log(sum[N]);

  answer = sum[N + 2];

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
