const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 *
 * 0 1
 * 1 0
 */

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  let one = 0;
  let zero = 0;
  let pop = false;

  const arr = data.map((item) => item.split(' ').map((item) => +item));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const num = arr[i][j];
      if (num === 1) {
        one += 1;
      } else {
        zero += 1;
      }

      if (pop) continue;

      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (arr[nx][ny] === num) {
          pop = true;
        }
      }
    }
  }

  if (one % 2 === 0 && zero % 2 === 0 && pop) {
    return 1;
  } else {
    return -1;
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
