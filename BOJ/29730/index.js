const input = require("fs").readFileSync(0, "utf-8").trim();

function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());

  const tmp = [];

  const arr = data.filter((item) => {
    if (item.slice(0, 7) === "boj.kr/") {
      tmp.push(+item.slice(7));
    }

    return item.slice(0, 7) !== "boj.kr/";
  });

  arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    return a > b ? 1 : -1;
  });

  tmp.sort((a, b) => a - b);

  tmp.forEach((item) => {
    arr.push(`boj.kr/${item}`);
  });

  return arr.join("\n").trim();
}

const output = console.log(solution(input));

// module.exports = solution;
