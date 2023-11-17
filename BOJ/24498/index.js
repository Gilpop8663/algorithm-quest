const input = require("fs").readFileSync(0, "utf-8").trim();

function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());

  const N = +info;
  const arr = data[0].split(" ").map((item) => +item);

  let num = 0;
  for (let i = 1; i < N - 1; i++) {
    const min = Math.min(arr[i - 1], arr[i + 1]);
    // console.log(num, i);
    if (min === 0 || arr[i] === 0) continue;
    if (num < min + arr[i]) {
      num = min + arr[i];
    }
  }

  // console.log(arr[ansI], num);

  let answer = num;

  for (let i = 0; i < N; i++) {
    answer = Math.max(arr[i], answer);
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
