const input = require('fs').readFileSync(0, 'utf-8').trim();

const frontOneMinus = num => {
  const value = String(num);

  const findIndex = value.indexOf('1');

  const updatedValue = value.slice(0, findIndex) + value.slice(findIndex + 1);

  let index = 0;

  for (let i = 0; i < updatedValue.length; i++) {
    if (updatedValue[i] !== '0') {
      index = i;
      break;
    }
  }

  return Number(updatedValue.slice(index));
};

function solution(input) {
  let num = Number(input);

  let answer = 0;

  while (num !== 0) {
    const value = String(num);
    answer += 1;

    if (value.includes('1')) {
      num = frontOneMinus(num);
      continue;
    }

    num -= 1;
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
