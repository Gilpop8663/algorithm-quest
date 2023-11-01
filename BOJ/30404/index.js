const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, K] = info.split(' ').map((item) => +item);

  const arr = data[0].split(' ').map((item) => +item);

  const answer = [];

  arr.forEach((item) => {
    // console.log(item, item + K);
    if (answer.length === 0 || answer[answer.length - 1] < item) {
      answer.push(item + K);
    }
  });

  return answer.length;
}

const output = console.log(solution(input));

// module.exports = solution;
