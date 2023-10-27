const input = require('fs').readFileSync(0, 'utf-8').trim();

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

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map(item => item.trim());

  const [N, M] = info.split(' ').map(item => +item);

  const arr = data.map(item => item.split('').map(item => +item));

  const Q = new Queue();

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 2 }, () => -1))
  );

  Q.push([0, 0, 0]);
  visited[0][0][0] = 0;

  while (!Q.isEmpty()) {
    const [x, y, isBreak] = Q.pop();
    const dist = visited[x][y][isBreak];

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny][isBreak] > 0) continue;
      if (isBreak === 1 && arr[nx][ny] === 1) continue;

      if (isBreak === 0 && arr[nx][ny] === 1) {
        Q.push([nx, ny, 1]);
        visited[nx][ny][1] = dist + 1;
        continue;
      }

      Q.push([nx, ny, isBreak]);
      visited[nx][ny][isBreak] = dist + 1;
    }
  }

  // console.log(visited[N - 1][M - 1][0], visited[N - 1][M - 1][1]);

  if (visited[N - 1][M - 1][0] !== -1 && visited[N - 1][M - 1][1] !== -1) {
    return Math.min(visited[N - 1][M - 1][0] + 1, visited[N - 1][M - 1][1] + 1);
  }

  if (visited[N - 1][M - 1][0] !== -1) {
    return visited[N - 1][M - 1][0] + 1;
  }

  if (visited[N - 1][M - 1][1] !== -1) {
    return visited[N - 1][M - 1][1] + 1;
  }

  return -1;
}

const output = console.log(solution(input));

// module.exports = solution;
