const input = require("fs").readFileSync(0, "utf-8").trim();

function solution(input) {
  const data = input.split("\n").map((item) => item.trim());

  const dataa = data.map((item) => item.split(" ").map((item) => +item));

  const N = dataa[0];
  const arr = dataa[1];

  const M = dataa[2];
  const brr = dataa[3];

  const set = new Set();
  for (let i = 0; i < N; i++) {
    set.add(arr[i]);
  }

  const answer = [];
  brr.forEach((item) => {
    if (set.has(item)) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  });

  return answer.join("\n");
}

const output = console.log(solution(input));

// module.exports = solution;
