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

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, K] = info.split(' ').map((item) => +item);

  const arr = [];

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  const queue = [];

  for (let i = 0; i <= K; i++) {
    queue.push(new Queue());
  }

  for (let i = 0; i < N; i++) {
    const ss = data[i].split(' ').map((item) => +item);
    arr.push(ss);
  }

  let [S, X, Y] = data
    .at(-1)
    .split(' ')
    .map((item) => +item);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] !== 0) {
        const num = arr[i][j];
        queue[num].push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  while (S--) {
    for (let i = 1; i <= K; i++) {
      const tQ = new Queue();
      while (!queue[i].isEmpty()) {
        const [x, y] = queue[i].pop();

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (visited[nx][ny] || arr[nx][ny] !== 0) continue;

          arr[nx][ny] = i;
          visited[nx][ny] = true;

          tQ.push([nx, ny]);
        }
      }

      while (!tQ.isEmpty()) {
        queue[i].push(tQ.pop());
      }
    }
  }

  const answer = arr[X - 1][Y - 1];

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
