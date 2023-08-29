const input = require('fs').readFileSync(0, 'utf-8');

class Stack {
  #arr = [];

  push(x) {
    this.#arr.push(x);
  }

  pop() {
    if (this.empty() === 1) {
      return -1;
    }

    return this.#arr.pop();
  }

  size() {
    return this.#arr.length;
  }

  empty() {
    return this.#arr.length === 0 ? 1 : 0;
  }

  top() {
    if (this.empty() === 1) {
      return -1;
    }

    return this.#arr[this.size() - 1];
  }
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  const [N, ...arr] = data;

  const stack = new Stack();
  let answer = '';

  for (const item of arr) {
    const word = item.split(' ')[0];
    const number = item.split(' ')[1];

    if (word === 'top') {
      answer += stack.top() + '\n';
    }

    if (word === 'push') {
      stack.push(Number(number));
    }

    if (word === 'size') {
      answer += stack.size() + '\n';
    }

    if (word === 'empty') {
      answer += stack.empty() + '\n';
    }

    if (word === 'pop') {
      answer += stack.pop() + '\n';
    }
  }

  console.log(answer);
  return answer.trim();
}

// test('예제1', () => {
//   const input = `14
// push 1
// push 2
// top
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// top`;

//   const answer = `2
// 2
// 0
// 2
// 1
// -1
// 0
// 1
// -1
// 0
// 3`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `7
//       pop
//       top
//       push 123
//       top
//       pop
//       top
//       pop`;

//   const answer = `-1
// -1
// 123
// 123
// -1
// -1`;

//   expect(solution(input)).toEqual(answer);
// });

const output = solution(input);
