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

  getSize() {
    return this.queue.length - this.top;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map(item => item.trim());
  const [M, N] = info.split(' ').map(item => +item);

  const arr = data.map(item => item.split(' ').map(item => +item));
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => -1)
  );

  const queue = new Queue();

  const isCheckFill = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === -1) continue;

        if (visited[i][j] === -1) return false;
      }
    }

    return true;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] !== 1) continue;
      queue.push([i, j, 0]);
      visited[i][j] = 0;
    }
  }

  if (isCheckFill()) {
    return 0;
  }

  while (!queue.isEmpty()) {
    const [curX, curY, curDate] = queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny] >= 0 || arr[nx][ny] === -1) continue;

      queue.push([nx, ny, curDate + 1]);
      visited[nx][ny] = curDate + 1;
    }
  }

  if (isCheckFill()) {
    let answer = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        answer = Math.max(answer, visited[i][j]);
      }
    }
    return answer;
  }

  return -1;
}

const output = console.log(solution(input));

// module.exports = solution;
