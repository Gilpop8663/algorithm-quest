const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data.map((item) => item.split(' ').map((item) => +item));

  const stack = [];

  const answer = [];

  arr.forEach((item) => {
    const isEmpty = stack.length === 0;
    const [x, y] = item;
    if (x === 1) {
      stack.push(y);
    }

    if (x === 2) {
      if (isEmpty) {
        answer.push(-1);
      } else {
        answer.push(stack.pop());
      }
    }

    if (x === 3) {
      answer.push(stack.length);
    }

    if (x === 4) {
      if (isEmpty) {
        answer.push(1);
      } else {
        answer.push(0);
      }
    }

    if (x === 5) {
      if (isEmpty) {
        answer.push(-1);
      } else {
        answer.push(stack[stack.length - 1]);
      }
    }
  });

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
