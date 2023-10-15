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

  getFront() {
    return this.queue[this.top];
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

  const [N, M] = info.split(' ').map(item => Number(item));

  const arr = data.map(item => item.split(' ').map(item => Number(item)));

  const lineList = Array.from({ length: N + 1 }, () => []);

  const visited = Array.from({ length: N + 1 }, () => false);

  arr.forEach(item => {
    const [U, V] = item;

    lineList[U].push(V);
    lineList[V].push(U);
  });

  const queue = new Queue();

  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    queue.push(i);
    visited[i] = true;

    answer += 1;

    while (!queue.isEmpty()) {
      const curNum = queue.pop();
      const curLineList = lineList[curNum];

      for (let j = 0; j < curLineList.length; j++) {
        const nextNum = curLineList[j];

        if (visited[nextNum]) continue;
        queue.push(nextNum);
        visited[nextNum] = true;
      }
    }
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
