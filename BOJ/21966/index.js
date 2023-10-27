const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  if (N <= 25) {
    return data;
  }

  let flag = false;
  for (let i = 11; i < data.length - 12; i++) {
    if (data[i] === '.') {
      flag = true;
      break;
    }
  }

  if (N > 25 && flag) {
    return data.slice(0, 9) + '......' + data.slice(data.length - 10);
  }

  return data.slice(0, 11) + '...' + data.slice(data.length - 11);
  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
