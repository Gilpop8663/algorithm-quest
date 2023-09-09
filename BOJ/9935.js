const input = require('fs').readFileSync(0, 'utf-8');

class Stack {
  constructor() {
    this.arr = [];
  }

  push(x) {
    this.arr.push(x);
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  empty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());
  const [str, bomb] = data;

  const arr = new Stack();

  for (const word of str) {
    arr.push(word);

    if (word === bomb.at(-1)) {
      if (arr.size() < bomb.length) continue;

      let stackWord = '';

      for (let i = 0; i < bomb.length; i++) {
        stackWord = arr.pop() + stackWord;
      }

      if (stackWord === bomb) {
        continue;
      }

      for (const sw of stackWord) {
        arr.push(sw);
      }

      continue;
    }
  }

  let answer = [];

  while (!arr.empty()) {
    answer.push(arr.pop());
  }

  let stringAnswer = answer.reverse().join('');

  if (answer.length === 0) {
    stringAnswer = 'FRULA';
    console.log(stringAnswer);

    return stringAnswer;
  }

  console.log(stringAnswer);

  return stringAnswer;
}

// test('예제1', () => {
//   const input = `mirkovC4nizCC44
//   C4`;

//   const answer = `mirkovniz`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `12ab112ab2ab
//   12ab`;

//   const answer = `FRULA`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `AABCBABCBABCCABCC
//   ABC`;

//   const answer = `ABBCC`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = solution(input);
