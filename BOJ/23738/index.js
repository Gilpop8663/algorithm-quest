const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const info = input;

  const word = [
    ['A', 'a'],
    ['B', 'v'],
    ['E', 'ye'],
    ['K', 'k'],
    ['M', 'm'],
    ['H', 'n'],
    ['O', 'o'],
    ['P', 'r'],
    ['C', 's'],
    ['T', 't'],
    ['Y', 'u'],
    ['X', 'h'],
  ];

  let answer = '';

  for (let x of info) {
    for (let y of word) {
      if (x === y[0]) {
        answer += y[1];
        break;
      }
    }
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
