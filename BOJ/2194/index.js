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

  /**
   * N,M 맵 크기
   * A,B 유닛 크기,
   * K는 장애물 개수
   */
  const [N, M, A, B, K] = info.split(' ').map((item) => +item);
  let arr = data.map((item) => item.split(' ').map((item) => +item));

  const [stX, stY] = arr.at(-2);
  const [enX, enY] = arr.at(-1);

  arr = arr.slice(0, -2);

  const visited = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => -1)
  );

  arr.forEach((item) => {
    const [x, y] = item;

    visited[x][y] = -999;
  });

  const Q = new Queue();

  Q.push([stX, stY]);
  visited[stX][stY] = 0;
  let answer = 100000;

  while (!Q.isEmpty()) {
    const [x, y] = Q.pop();
    const dist = visited[x][y];

    if (x === enX && y == enY) {
      // console.log(visited);
      return dist;
      continue;
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      let flag = false;
      if (nx < 1 || ny < 1 || nx + A - 1 > N || ny + B - 1 > M) continue;
      if (visited[nx][ny] !== -1) continue;
      for (i = 0; i < A; i++) {
        for (let j = 0; j < B; j++) {
          if (visited[nx + i][ny + j] === -999) {
            flag = true;
          }
        }
      }

      if (flag) continue;

      Q.push([nx, ny]);
      visited[nx][ny] = dist + 1;

      // 상하
      // if (k % 2 === 0) {
      //   for (let l = 0; l < B; l++) {
      //     if (ny + l > M) continue;
      //     visited[nx][ny + l] = dist + 1;
      //   }
      // }

      // //좌우
      // if (k % 2 === 1) {
      //   for (let l = 0; l < A; l++) {
      //     if (nx + l > N) continue;
      //     visited[nx + l][ny] = dist + 1;
      //   }
      // }
    }
  }

  if (answer === 100000) {
    return -1;
  }

  return -1;
}

const output = console.log(solution(input));

// module.exports = solution;
