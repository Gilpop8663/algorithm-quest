const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 *
 *
 * a*b+c = abc*+
 * ) +-(
 */
function solution(input) {
  const str = input.trim();
  const stack = [];

  let answer = '(';

  let plusMinus = [];

  let realAnswer = '';

  const tmp = ['+', '-', '*', '/'];

  for (let i = 0; i < str.length; i++) {
    const word = str[i];
    if (tmp.includes(word)) {
      if (word === '*' || word === '/') {
        while (stack.length !== 0) {
          const top = stack[stack.length - 1];
          if (top === '+' || top === '-' || top === '(') break;

          const strr = stack.pop();

          realAnswer += strr;
        }

        stack.push(word);
        continue;
      }

      if (word === '+' || word === '-') {
        while (stack.length !== 0) {
          const top = stack[stack.length - 1];
          if (top === '(') break;

          const strr = stack.pop();

          realAnswer += strr;
        }

        stack.push(word);
        continue;
      }

      // ABC*
      //
      continue;
    }

    if (word === '(') {
      stack.push(word);

      continue;
    }

    if (word === ')') {
      // console.log(stack, realAnswer);
      while (1) {
        const tmppp = stack.pop();
        // console.log(tmppp);

        if (tmppp === '(') {
          break;
        }

        realAnswer += tmppp;
      }

      continue;
    }

    realAnswer += word;
  }

  while (stack.length !== 0) {
    const strr = stack.pop();

    if (strr === '(' || strr === ')') continue;
    realAnswer += strr;
  }

  // console.log(realAnswer, stack);

  return realAnswer.trim();
}

const output = console.log(solution(input));

// module.exports = solution;
