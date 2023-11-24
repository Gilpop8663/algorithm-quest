const input = require("fs").readFileSync(0, "utf-8").trim();

function solution(input) {
  const data = input.split("\n").map((item) => item.trim());

  const dataa = data.map((item) => item.split(" ").map((item) => +item));

  const N = dataa[0][0];
  const arr = dataa[1];

  const M = dataa[2];
  const brr = dataa[3];

  arr.sort((a, b) => a - b);

  const answer = [];
  brr.forEach((item) => {
    let st = 0;
    let en = N;
    let flag = false;

    while (st <= en) {
      let mid = Math.floor((st + en) / 2);

      // console.log(st, en, mid, arr[mid], item);

      if (arr[mid] === item) {
        flag = true;
        break;
      }

      if (arr[mid] < item) {
        st = mid + 1;
      } else {
        en = mid - 1;
      }
    }

    if (flag) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  });

  return answer.join("\n");
}

const output = console.log(solution(input));

// module.exports = solution;
