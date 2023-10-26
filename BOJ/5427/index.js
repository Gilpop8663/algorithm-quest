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

  let T = +info;

  const answer = [];

  let stI = 0;

  while (T > 0) {
    T -= 1;
    const [M, N] = data[stI].split(' ').map(item => +item);
    const endI = stI + N + 1;

    const sVisited = Array.from({ length: N }, () =>
      Array.from({ length: M }, () => -1)
    );
    const fVisited = Array.from({ length: N }, () =>
      Array.from({ length: M }, () => false)
    );

    const arr = [];

    for (let i = stI + 1; i < endI; i++) {
      const building = data[i].split('');
      arr.push(building);
      for (let j = 0; j < M; j++) {
        // arr.push(building[j]);
      }
    }

    const INIT_NUM = 10000000;
    let count = INIT_NUM;
    const fQ = new Queue();
    const sQ = new Queue();
    const fQ2 = new Queue();
    const sQ2 = new Queue();

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === '*') {
          fQ.push([i, j]);
          fVisited[i][j] = true;
        }

        if (arr[i][j] === '@') {
          sQ.push([i, j]);
          sVisited[i][j] = 0;
        }
      }
    }

    while (!fQ.isEmpty() || !sQ.isEmpty()) {
      while (!fQ.isEmpty()) {
        const [x, y] = fQ.pop();

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
          if (fVisited[nx][ny]) continue;
          if (arr[nx][ny] !== '#') {
            fQ2.push([nx, ny]);
            fVisited[nx][ny] = true;
          }
        }
      }

      while (!sQ.isEmpty()) {
        const [x, y] = sQ.pop();
        const dist = sVisited[x][y];

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
            count = Math.min(count, dist + 1);
            continue;
          }
          if (sVisited[nx][ny] > 0 || fVisited[nx][ny]) continue;
          if (arr[nx][ny] === '.') {
            sQ2.push([nx, ny]);
            sVisited[nx][ny] = dist + 1;
          }
        }
      }

      while (!sQ2.isEmpty()) {
        sQ.push(sQ2.pop());
      }

      while (!fQ2.isEmpty()) {
        fQ.push(fQ2.pop());
      }
    }

    // console.log(count);
    if (count !== INIT_NUM) {
      answer.push(count);
    } else {
      answer.push('IMPOSSIBLE');
    }

    stI += N + 1;

    // console.log(T, stI);
  }

  return answer.join('\n').trim();
}

const output = console.log(solution(input));

// module.exports = solution;
