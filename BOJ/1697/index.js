const input = require('fs').readFileSync(0, 'utf-8').trim();

class Queue {
  queue = [];
  top = 0;

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.isEmpty()) return;

    const popped = this.queue[this.top];

    this.top += 1;

    return popped;
  }

  isEmpty() {
    return this.queue.length === this.top;
  }
}

function solution(input) {
  const [N, K] = input.split(' ').map((item) => +item);

  const visited = Array.from({ length: 100001 }, () => -1);
  const queue = new Queue();
  queue.push(N);
  visited[N] = 0;

  if (K < N) {
    return N - K;
  }

  while (true) {
    const num = queue.pop();
    const count = visited[num];

    if (num === K) {
      return count;
    }

    if (num < K && visited[num + 1] === -1) {
      queue.push(num + 1);
      visited[num + 1] = count + 1;
    }

    if (visited[num - 1] === -1) {
      queue.push(num - 1);
      visited[num - 1] = count + 1;
    }

    if (num < K && visited[num * 2] === -1) {
      queue.push(num * 2);
      visited[num * 2] = count + 1;
    }
  }
}

const output = console.log(solution(input));

// module.exports = solution;
