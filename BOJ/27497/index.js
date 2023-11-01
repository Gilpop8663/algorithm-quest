const input = require('fs').readFileSync(0, 'utf-8').trim();

class Deque {
  constructor(size) {
    this.deque = Array.from({ length: size * 2 + 1 }, () => 0);
    this.front = size;
    this.back = size + 1;
  }

  pushBack(value) {
    this.deque[this.back] = value;
    this.back += 1;
  }

  pushFront(value) {
    this.deque[this.front] = value;

    this.front -= 1;
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }

    const popped = this.deque[this.back - 1];

    this.back -= 1;

    return popped;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }
    const popped = this.deque[this.front + 1];

    this.front += 1;

    return popped;
  }

  getFront() {
    return this.deque[this.front + 1];
  }

  getBack() {
    return this.deque[this.back - 1];
  }

  isEmpty() {
    return this.back - this.front - 1 === 0;
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data.map((item) => item.split(' '));

  const answer = [];

  const deque = new Deque(N);

  arr.forEach((item, index) => {
    const [command, word] = item;

    if (command === '1') {
      deque.pushBack({ text: word, index });
    }

    if (command === '2') {
      deque.pushFront({ text: word, index });
    }

    if (command === '3') {
      // console.log(deque.getFront(), deque.getBack());
      if (deque.getFront().index > deque.getBack().index) {
        const num = deque.popFront();
        if (num === -1) {
          deque.popBack();
        }
        return;
      }

      const num = deque.popBack();

      if (num === -1) {
        deque.popFront();
      }
    }
  });

  let str = '';
  // console.log(deque, deque.isEmpty());
  while (!deque.isEmpty()) {
    const { text } = deque.popFront();

    str += text;
  }

  // console.log(deque);
  if (str === '') {
    return '0';
  }

  // console.log(str, answer);

  return str;
}

const output = console.log(solution(input));

// module.exports = solution;
