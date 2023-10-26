const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map(item => item.trim());

  const N = +info;

  const arr = data[0].split(' ');

  let answer = 'YES';

  arr.forEach((item, index) => {
    if (index % 2 === 0 && item % 2 !== 1) {
      answer = 'NO';
    }

    if (index % 2 === 1 && item % 2 !== 0) {
      answer = 'NO';
    }
  });

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
