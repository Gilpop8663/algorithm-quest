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
    if (this.isEmpty()) {
      return;
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

function solution(input) {
  const [info, ...data] = input.split('\n').map(item => item.trim());

  const N = Number(info);

  const arr = data.map(item => item.split(''));

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  const queue = new Queue();

  const answer = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === '0') continue;
      if (visited[i][j]) continue;

      let count = 0;
      queue.push([i, j]);
      visited[i][j] = true;

      while (!queue.isEmpty()) {
        const [curX, curY] = queue.pop();
        count += 1;

        for (let k = 0; k < 4; k++) {
          const nx = curX + dx[k];
          const ny = curY + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (visited[nx][ny] || arr[nx][ny] === '0') continue;

          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }

      answer.push(count);
    }
  }

  const sortedAnswer = answer.sort((a, b) => a - b);

  const realAnswer = answer.length + '\n' + sortedAnswer.join('\n');

  return realAnswer;
}

const output = console.log(solution(input));

// module.exports = solution;
