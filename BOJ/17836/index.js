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

  const [N, M, T] = info.split(' ').map((item) => +item);

  const queue = new Queue();
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 2 }, () => -1))
  );

  const arr = data.map((item) => item.split(' ').map((item) => +item));

  queue.push([0, 0, 0]);
  visited[0][0][0] = 0;

  while (!queue.isEmpty()) {
    const [x, y, isFind] = queue.pop();
    const dist = visited[x][y][isFind];

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (arr[nx][ny] === 1 && isFind === 0) continue;
      if (visited[nx][ny][isFind] >= 0) continue;

      if (arr[nx][ny] === 2) {
        queue.push([nx, ny, 1]);
        visited[nx][ny][1] = dist + 1;
        continue;
      }

      queue.push([nx, ny, isFind]);
      visited[nx][ny][isFind] = dist + 1;
    }
  }

  /**
   * 검을 찾지 않고 도착한 경우
   * 검을 찾고 도착한 경우
   *
   *
   */
  // console.log(visited[N - 1][M - 1][0], visited[N - 1][M - 1][1]);

  if (visited[N - 1][M - 1][0] !== -1 && visited[N - 1][M - 1][1] !== -1) {
    const answer = Math.min(visited[N - 1][M - 1][0], visited[N - 1][M - 1][1]);

    if (answer > T) {
      return 'Fail';
    }

    return answer;
  }

  if (visited[N - 1][M - 1][1] !== -1) {
    const answer = visited[N - 1][M - 1][1];

    if (answer > T) {
      return 'Fail';
    }

    return answer;
  }

  if (visited[N - 1][M - 1][0] !== -1) {
    const answer = visited[N - 1][M - 1][0];

    if (answer > T) {
      return 'Fail';
    }

    return answer;
  }

  return 'Fail';
}

const output = console.log(solution(input));

// module.exports = solution;
