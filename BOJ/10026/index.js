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

  const N = +info;

  const arr = data.map(item => item.split(''));

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  const queue = new Queue();

  let normalAnswer = 0;
  let rgAnswer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;
      const color = arr[i][j];
      queue.push([i, j, color]);

      normalAnswer += 1;

      while (!queue.isEmpty()) {
        const [curX, curY, curColor] = queue.pop();

        for (let k = 0; k < 4; k++) {
          const nx = curX + dx[k];
          const ny = curY + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (visited[nx][ny] || arr[nx][ny] !== curColor) continue;

          queue.push([nx, ny, curColor]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 'R') {
        arr[i][j] = 'G';
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;
      const color = arr[i][j];
      queue.push([i, j, color]);

      rgAnswer += 1;

      while (!queue.isEmpty()) {
        const [curX, curY, curColor] = queue.pop();

        for (let k = 0; k < 4; k++) {
          const nx = curX + dx[k];
          const ny = curY + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (visited[nx][ny] || arr[nx][ny] !== curColor) continue;

          queue.push([nx, ny, curColor]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  const answer = normalAnswer + ' ' + rgAnswer;

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
