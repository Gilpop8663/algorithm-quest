// const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 *
 *
 * a*b+c = abc*+
 * ) +-(
 */
function solution(input) {
  const str = input.trim();
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  const tmp = ['+', '-', '*', '/', '(', ')'];

  const word = [];
  const plus = [];

  let isFlag = false;

  while (stack.length !== 0) {
    const tmpStr = stack.pop();

    if (tmpStr === ')') {
      isFlag = !isFlag;
      continue;
    }

    if (tmpStr === '(') {
      isFlag = !isFlag;
      continue;
    }

    if (tmp.includes(tmpStr)) {
      if (isFlag) {
        plus.unshift(tmpStr);
      } else {
        plus.push(tmpStr);
      }
      continue;
    }

    word.push(tmpStr);
  }

  console.log(word, plus);

  return answer;
}

// const output = console.log(solution(input));

module.exports = solution;
