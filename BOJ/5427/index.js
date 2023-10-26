// const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  let T = +info;

  let stI = 0;

  while (T > 0) {
    T -= 1;
    const [M, N] = data[stI].split(' ').map((item) => +item);
    const endI = stI + N + 1;

    for (let i = stI + 1; i < endI; i++) {
      const building = data[i];
      console.log(building);
      for (let j = 0; j < M; j++) {
        // console.log(building[i][j]);
      }
    }

    stI += N + 1;

    console.log(T, stI);
  }

  return answer;
}

// const output = console.log(solution(input));

module.exports = solution;
