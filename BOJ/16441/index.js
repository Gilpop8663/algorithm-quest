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

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 4 }, () => false))
  );

  const Q = new Queue();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 'W') {
        for (let k = 0; k < 4; k++) {
          Q.push([i, j, k, false]);
          visited[i][j][k] = true;
        }
      }
    }
  }

  while (!Q.isEmpty()) {
    const [x, y, dir, isSliding] = Q.pop();

    if (isSliding) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      // console.log(nx, ny, dir);

      if (arr[nx][ny] === '+') {
        if (visited[nx][ny][dir]) continue;
        Q.push([nx, ny, dir, true]);
        visited[nx][ny][dir] = true;
        continue;
      }

      if (arr[nx][ny] === '.') {
        if (visited[nx][ny][dir]) continue;
        Q.push([nx, ny, dir, false]);
        visited[nx][ny][dir] = true;
        continue;
      }

      if (arr[nx][ny] !== '#') continue;

      // # . W
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (arr[nx][ny] === '#' || visited[nx][ny][k]) continue;
      if (arr[nx][ny] === '.') {
        Q.push([nx, ny, k, false]);
        visited[nx][ny][k] = true;
      }

      if (arr[nx][ny] === '+') {
        Q.push([nx, ny, k, true]);
        visited[nx][ny][k] = true;
      }
    }
  }

  let answer = '';

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 'W' || arr[i][j] === '#' || arr[i][j] === '+') {
        answer += arr[i][j];
      }

      if (arr[i][j] === '.') {
        let flag = false;

        for (let k = 0; k < 4; k++) {
          if (visited[i][j][k]) {
            flag = true;
          }
        }

        if (flag) {
          answer += '.';
        } else {
          answer += 'P';
        }
      }
    }
    answer += '\n';
  }

  // console.log(visited);

  return answer.trim();
}

const output = console.log(solution(input));

// module.exports = solution;
