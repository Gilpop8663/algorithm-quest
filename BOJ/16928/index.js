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

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = Array.from({ length: 107 }, (__, index) => index);
  const visited = Array.from({ length: 107 }, () => -1);

  data
    .map((item) => item.split(' ').map((item) => +item))
    .forEach((item) => {
      const [st, end] = item;

      arr[st] = end;
    });

  const queue = new Queue();
  queue.push(1);
  visited[1] = 0;

  while (!queue.isEmpty()) {
    const num = queue.pop();
    const dist = visited[num];

    for (let i = 1; i <= 6; i++) {
      const arriveNum = arr[num + i];

      if (visited[arriveNum] > 0) continue;

      queue.push(arriveNum);
      visited[arriveNum] = dist + 1;
    }
  }

  const answer = visited[100];

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
