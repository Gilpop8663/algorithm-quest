const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map(item => item.trim());

  const [N, M] = info.split(' ').map(item => Number(item));

  const answer = [];

  for (let i = 0; i < N; i++) {
    let str = '';

    for (let j = 0; j < M; j++) {
      const A = data[i];

      for (let k = 0; k < 2; k++) {
        str += A[j];
      }
    }
    answer.push(str);
  }

  let flag = false;

  for (let i = N; i < 2 * N; i++) {
    if (answer[i - N] !== data[i]) {
      flag = true;
      break;
    }
  }

  if (flag) {
    return 'Not Eyfa';
  }

  return 'Eyfa';
}

const output = console.log(solution(input));

// module.exports = solution;
