const input = require('fs').readFileSync(0, 'utf-8').trim();

function colorPaperCutSolution(input) {
  const data = input.split('\n');

  const [N, ...arr] = data;

  const answer = [0, 0];

  const paper = arr.map((item) => item.trim().split(' '));

  const isFull = (x, y, count) => {
    for (let i = x; i < x + count; i++) {
      for (let j = y; j < y + count; j++) {
        if (paper[i][j] !== paper[x][y]) {
          return false;
        }
      }
    }
    return true;
  };

  const solution = (x, y, count) => {
    if (isFull(x, y, count)) {
      answer[Number(paper[x][y])] += 1;
      return;
    }

    const col = [x, x + count / 2];
    const row = [y, y + count / 2];

    col.forEach((colItem) => {
      row.forEach((rowItem) => {
        solution(colItem, rowItem, count / 2);
      });
    });
  };

  solution(0, 0, N);

  return answer.join('\n');
}

const output = console.log(colorPaperCutSolution(input));

module.exports = colorPaperCutSolution;
