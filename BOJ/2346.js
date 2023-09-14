// const input = require('fs').readFileSync(0, 'utf-8');

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
    return this.deque[this.front];
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }

    this.back -= 1;
    return this.deque[this.back];
  }

  size() {
    return this.back - this.front - 1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.deque[this.back - 1];
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.deque[this.front + 1];
  }
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  const [N, str] = data;

  const arr = str.split(' ');

  const deque = new Deque(1000000);

  for (let i = 0; i < N; i++) {
    deque.pushBack([Number(arr[i]), i + 1]);
  }

  const answer = [];

  while (!deque.isEmpty()) {
    const popped = deque.popFront();

    if (popped === -1) break;

    const number = popped[0];

    answer.push(popped[1]);

    const M = Math.abs(number) - 1;

    if (number > 0) {
      for (let i = 0; i < M; i++) {
        deque.pushBack(deque.popFront());
      }
    } else {
      for (let i = 0; i < M + 1; i++) {
        deque.pushFront(deque.popBack());
      }
    }
  }

  return answer.join(' ');
}

test('예제1', () => {
  const input = `5
  3 2 1 -3 -1`;

  const answer = `1 4 5 3 2`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

// const output = console.log(solution(input));
