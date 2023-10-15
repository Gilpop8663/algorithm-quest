const input = require('fs').readFileSync(0, 'utf-8').trim();

class Queue {
  queue = [];
  top = 0;

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

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

  const [N, M] = info.split(' ').map(item => +item);

  const arr = data.map(item => item.split('').map(item => +item));

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  const queue = new Queue();

  queue.push([0, 0, 1]);
  visited[0][0] = true;

  while (!queue.isEmpty()) {
    const [curX, curY, count] = queue.pop();

    if (curX === N - 1 && curY === M - 1) {
      return count;
    }

    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny] || arr[nx][ny] === 0) continue;

      queue.push([nx, ny, count + 1]);
      visited[nx][ny] = true;
    }
  }
}

const output = console.log(solution(input));

// module.exports = solution;
