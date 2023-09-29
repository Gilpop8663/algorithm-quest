const input = require('fs').readFileSync(0, 'utf-8').trim();

const answer = [0, 0, 0];

const paperSolution = (arr, x, y, count) => {
  let flag = true;

  for (let i = x; i < x + count; i++) {
    if (!flag) break;

    for (let j = y; j < y + count; j++) {
      if (arr[i][j] !== arr[x][y]) {
        flag = false;

        break;
      }
    }
  }

  if (flag) {
    answer[Number(arr[x][y]) + 1] += 1;
    return;
  }

  const column = [x, x + count / 3, x + (count / 3) * 2];
  const row = [y, y + count / 3, y + (count / 3) * 2];

  column.forEach((columnItem) => {
    for (let i = 0; i < 3; i++) {
      const rowItem = row[i];
      paperSolution(arr, columnItem, rowItem, count / 3);
    }
  });
  return;
};

function colorPaperSolution(input) {
  const data = input.split('\n');

  const [N, ...arr] = data;

  const paper = arr.map((item) => item.trim().split(' '));

  paperSolution(paper, 0, 0, N);

  return answer.join('\n');
}

const output = console.log(colorPaperSolution(input));

module.exports = colorPaperSolution;
