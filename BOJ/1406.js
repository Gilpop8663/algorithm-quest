let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

class Stack {
  constructor() {
    this.arr = [];
  }

  push(x) {
    this.arr.push(x);
  }

  pop() {
    if (this.empty()) return;

    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  empty() {
    return this.arr.length === 0;
  }
}

function solution(input) {
  const data = input.split('\n');

  const words = data[0];

  const N = Number(data[1]);

  const leftStack = new Stack();
  const rightStack = new Stack();

  for (let i = 0; i < words.length; i++) {
    leftStack.push(words[i]);
  }

  const arr = data.slice(2, 2 + N).map((item) => item.trim());

  for (let i = 0; i < N; i++) {
    const command = arr[i].split(' ');

    if (command[0] === 'L') {
      const word = leftStack.pop();

      if (!word) continue;

      rightStack.push(word);
      // 왼쪽
    }

    if (command[0] === 'D') {
      const word = rightStack.pop();

      if (!word) continue;

      leftStack.push(word);
      // 오른쪽
    }

    if (command[0] === 'B') {
      leftStack.pop();
      // 삭제
    }

    if (command[0] === 'P') {
      const word = command[1];
      leftStack.push(word);
      // 추가
    }
  }

  const answer = [];

  while (!rightStack.empty()) {
    const word = rightStack.pop();
    leftStack.push(word);
  }

  while (!leftStack.empty()) {
    const word = leftStack.pop();
    answer.push(word);
  }

  const answerString = answer.reverse().join('');

  console.log(answerString);

  return answerString;
}

// test('예제1', () => {
//   const input = `abcd
//   3
//   P x
//   L
//   P y`;

//   const answer = `abcdyx`
//     .split('\n')
//     .map((item) => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `abc
//   9
//   L
//   L
//   L
//   L
//   L
//   P x
//   L
//   B
//   P y`;

//   const answer = `yxabc`
//     .split('\n')
//     .map((item) => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제3', () => {
//   const input = `dmih
//   11
//   B
//   B
//   P x
//   L
//   B
//   B
//   B
//   P y
//   D
//   D
//   P z`;

//   const answer = `yxz`
//     .split('\n')
//     .map((item) => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = solution(input);
