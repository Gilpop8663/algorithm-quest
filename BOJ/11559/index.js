const input = require('fs').readFileSync(0, 'utf-8').trim();

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

class Queue {
  queue = [];
  top = 0;

  push(value) {
    this.queue.push(value);
  }

  pop() {
    const popped = this.queue[this.top];

    this.top += 1;

    return popped;
  }

  isEmpty() {
    return this.queue.length === this.top;
  }
}

/**
 * 1.
 *
 *
 */
function solution(input) {
  const data = input.split('\n').map((item) => item.trim());

  const arr = data.map((item) => item.split(''));

  const visited = Array.from({ length: 12 }, () =>
    Array.from({ length: 6 }, () => false)
  );

  const reset = () => {
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 6; j++) {
        visited[i][j] = false;
      }
    }
  };

  const arrGravity = () => {
    for (let i = 10; i >= 0; i--) {
      for (let j = 0; j < 6; j++) {
        if (arr[i][j] !== '.' && arr[i + 1][j] === '.') {
          gravity(i, j);
        }
      }
    }
  };

  const gravity = (x, y) => {
    for (let i = 11; i >= 0; i--) {
      if (arr[i][y] === '.') {
        arr[i][y] = arr[x][y];
        arr[x][y] = '.';
        break;
      }
    }
  };

  const calculate = () => {
    let isFlag = false;
    for (let i = 11; i >= 0; i--) {
      for (let j = 0; j < 6; j++) {
        let count = 0;
        const color = arr[i][j];
        const memo = [];
        if (visited[i][j]) continue;

        if (color !== '.') {
          reset();
          Q.push([i, j]);
          visited[i][j] = true;
        }

        while (!Q.isEmpty()) {
          const [x, y] = Q.pop();
          count += 1;
          memo.push([x, y]);

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx < 0 || ny < 0 || nx >= 12 || ny >= 6) continue;
            if (visited[nx][ny] || arr[nx][ny] !== color) continue;
            Q.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }

        if (count >= 4) {
          memo.forEach((item) => {
            const [x, y] = item;

            arr[x][y] = '.';
          });

          isFlag = true;
        }
      }
    }

    arrGravity();

    return isFlag;
  };

  const Q = new Queue();

  let answer = 0;

  while (1) {
    const num = calculate() ? 1 : 0;
    if (num === 0) break;
    answer += num;
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
