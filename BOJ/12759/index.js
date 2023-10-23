const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  let start = Number(info);

  const isRowLine = (value) => {
    const num = visited[1][value];

    if (!visited[1][value]) return false;

    for (let i = 1; i <= 3; i++) {
      if (visited[i][value] !== num) {
        return false;
      }
    }

    return true;
  };

  const isColLine = (value) => {
    const num = visited[value][1];

    if (!visited[value][1]) return false;

    for (let i = 1; i <= 3; i++) {
      if (visited[value][i] !== num) {
        return false;
      }
    }

    return true;
  };

  const isFilled = () => {
    for (let i = 1; i <= 3; i++) {
      if (isRowLine(i)) return true;
      if (isColLine(i)) return true;
    }

    const sameNum = visited[1][1];

    if (!sameNum) return false;

    if (
      visited[1][1] === sameNum &&
      visited[2][2] === sameNum &&
      visited[3][3] === sameNum
    )
      return true;

    const sameNum2 = visited[1][3];

    if (!sameNum2) return false;

    if (
      visited[1][3] === sameNum2 &&
      visited[2][2] === sameNum2 &&
      visited[3][1] === sameNum2
    )
      return true;

    return false;
  };

  const visited = Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => false)
  );

  for (let i = 0; i < data.length; i++) {
    const [x, y] = data[i].split(' ').map((item) => +item);
    visited[x][y] = start;

    if (isFilled()) return start;

    if (start === 2) {
      start = 1;
    } else {
      start = 2;
    }
  }

  return 0;
}

const output = console.log(solution(input));

// module.exports = solution;
