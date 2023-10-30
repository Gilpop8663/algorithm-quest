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
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = data.map((item) => item.split(''));
  const Q = new Queue();
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 'I') {
        Q.push([i, j]);
        visited[i][j] = true;
        break;
      }
    }
  }

  let answer = 0;

  while (!Q.isEmpty()) {
    const [x, y] = Q.pop();

    if (arr[x][y] === 'P') {
      answer += 1;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny] || arr[nx][ny] === 'X') continue;
      Q.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }

  if (answer === 0) {
    return 'TT';
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
