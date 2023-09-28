// const input = require('fs').readFileSync(0, 'utf-8');

class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const popped = this.queue[this.front];
    this.front += 1;

    return popped;
  }

  size() {
    return this.back - this.front;
  }

  isEmpty() {
    return this.size() === 0 ? 1 : 0;
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.front];
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.back - 1];
  }
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  const [N, ...arr] = data;

  const queue = new Queue(N);

  let answer = [];

  for (let i = 0; i < N; i++) {
    const line = arr[i];

    const [command, number] = line.split(' ');

    if (command === 'push') {
      queue.push(number);
      continue;
    }

    if (command === 'front') {
      answer.push(queue.getFront());
      continue;
    }

    if (command === 'back') {
      answer.push(queue.getBack());
      continue;
    }

    if (command === 'size') {
      answer.push(queue.size());
      continue;
    }

    if (command === 'empty') {
      answer.push(queue.isEmpty());
      continue;
    }

    if (command === 'pop') {
      answer.push(queue.pop());
      continue;
    }
  }

  return answer.join('\n');
}

test('예제2', () => {
  const input = `15
  push 1
  push 2
  front
  back
  size
  empty
  pop
  pop
  pop
  size
  empty
  pop
  push 3
  empty
  front`;

  const answer = `1
  2
  2
  0
  1
  2
  -1
  0
  1
  -1
  0
  3`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

// const output = console.log(solution(input));
