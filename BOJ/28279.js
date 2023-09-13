const input = require('fs').readFileSync(0, 'utf-8');

// Double Ended Queue
class Deque {
  constructor(size) {
    this.deque = new Array(size * 2 + 1);
    this.front = size;
    this.back = size + 1;
  }

  pushFront(value) {
    this.deque[this.front] = value;
    this.front -= 1;
  }

  pushBack(value) {
    this.deque[this.back] = value;
    this.back += 1;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }

    this.front += 1;
    const popped = this.deque[this.front];

    return popped;
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }

    this.back -= 1;
    const popped = this.deque[this.back];

    return popped;
  }

  size() {
    return this.back - this.front - 1;
  }

  isEmpty() {
    return this.size() === 0 ? 1 : 0;
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.deque[this.front + 1];
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.deque[this.back - 1];
  }
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  const [N, ...arr] = data;

  const deque = new Deque(Number(N));

  const answer = [];

  for (let i = 0; i < N; i++) {
    const line = arr[i];

    const [command, value] = line.split(' ');

    if (command === '1') {
      deque.pushFront(value);
      continue;
    }

    if (command === '2') {
      deque.pushBack(value);
      continue;
    }

    if (command === '3') {
      answer.push(deque.popFront());
      continue;
    }

    if (command === '4') {
      answer.push(deque.popBack());
      continue;
    }

    if (command === '5') {
      answer.push(deque.size());
      continue;
    }

    if (command === '6') {
      answer.push(deque.isEmpty());
      continue;
    }

    if (command === '7') {
      answer.push(deque.getFront());
      continue;
    }

    if (command === '8') {
      answer.push(deque.getBack());
      continue;
    }
  }

  return answer.join('\n');
}

// test('예제2', () => {
//   const input = `11
//   6
//   1 3
//   1 8
//   7
//   8
//   3
//   2 5
//   1 2
//   5
//   4
//   4`;

//   const answer = `1
//   8
//   3
//   8
//   3
//   5
//   3`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = console.log(solution(input));
