const input = require('fs').readFileSync(0, 'utf-8');

class Queue {
  constructor(size) {
    this.queue = new Array(size * size);
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

  isBigger() {
    const curFront = this.getFront();

    return this.queue
      .slice(this.front, this.back)
      .some(item => Number(item.value) > Number(curFront.value));
  }
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  let [T, ...rest] = data;

  const answer = [];

  while (T--) {
    const [info, value, ...last] = rest;

    const [N, targetIndex] = info.split(' ');

    const queue = new Queue(N);

    const arr = value.split(' ');

    const target = {
      value: Number(arr[Number(targetIndex)]),
      index: Number(targetIndex),
    };

    for (let i = 0; i < N; i++) {
      queue.push({ value: Number(arr[i]), index: i });
    }

    let cur = 0;

    while (!queue.isEmpty()) {
      if (queue.isBigger()) {
        const popped = queue.pop();

        queue.push(popped);

        continue;
      }

      const front = queue.getFront();

      if (front.value === target.value && front.index === target.index) {
        answer.push(cur + 1);
        break;
      }

      queue.pop();

      cur += 1;
    }

    rest = last;
  }

  return answer.join('\n');
}

// test('예제1', () => {
//   const input = `3
//   1 0
//   5
//   4 2
//   1 2 3 4
//   6 0
//   1 1 9 1 1 1`;

//   const answer = `1
//   2
//   5`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = console.log(solution(input));
