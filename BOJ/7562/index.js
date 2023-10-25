const input = require('fs').readFileSync(0, 'utf-8').trim();

const dx = [1, 2, 2, 1, -2, -2, -1, -1];
const dy = [2, 1, -1, -2, -1, 1, -2, 2];

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
}

function solution(input) {
  const [T, ...data] = input.split('\n').map((item) => item.trim());

  const answer = [];

  for (let i = 0; i < T * 3; i += 3) {
    const visited = Array.from({ length: 301 }, () =>
      Array.from({ length: 301 }, () => -1)
    );

    const queue = new Queue();

    const L = Number(data[i]);
    const [kx, ky] = data[i + 1].split(' ').map((item) => +item);
    queue.push([kx, ky]);
    visited[kx][ky] = 0;
    const [mx, my] = data[i + 2].split(' ').map((item) => +item);

    while (1) {
      const [x, y] = queue.pop();
      const count = visited[x][y];

      if (x === mx && y === my) {
        answer.push(count);
        break;
      }

      for (let k = 0; k < 8; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx < 0 || ny < 0 || nx >= L || ny >= L) continue;
        if (visited[nx][ny] !== -1) continue;

        queue.push([nx, ny]);
        visited[nx][ny] = count + 1;
      }
    }
  }
  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
