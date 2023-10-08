const input = require('fs').readFileSync(0, 'utf-8').trim();

const dx = [2, 0, -2, 0];
const dy = [0, 2, 0, -2];

function DabbabaChess(input) {
  const [info, ...data] = input.split('\n').map(item => item.trim());

  const [N, K] = info.split(' ').map(item => Number(item));

  const set = new Set();

  for (let i = 0; i < K; i++) {
    const [X, Y] = data[i].split(' ').map(item => Number(item));

    set.add(`${X} ${Y}`);

    for (let j = 0; j < 4; j++) {
      const nx = X + dx[j];
      const ny = Y + dy[j];

      if (nx < 1 || ny < 1 || nx > N || ny > N) continue;
      set.add(`${nx} ${ny}`);
    }
  }

  const answer = set.size - K;

  return answer;
}

const output = console.log(DabbabaChess(input));

// module.exports = DabbabaChess;
