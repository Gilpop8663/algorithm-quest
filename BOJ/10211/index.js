const input = require("fs").readFileSync(0, "utf-8").trim();

function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());

  const T = +info;

  const answer = [];

  for (let i = 0; i < T; i++) {
    const N = data[i * 2];
    const arr = data[i * 2 + 1].split(" ").map((item) => +item);

    let sum1 = 0,
      sum2 = 0,
      result = -52000;
    for (let j = 0; j < N; j++) {
      const num = arr[j];

      sum1 += num;
      result = Math.max(sum1 - sum2, result);
      sum2 = Math.min(sum2, sum1);
    }
    answer.push(result);
  }

  return answer.join("\n");
}

const output = console.log(solution(input));

// module.exports = solution;
