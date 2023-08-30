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
  const answer = [];

  for (const words of data) {
    const stack = new Stack();

    if (words === '.') {
      break;
    }

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (word === '(' || word === '[') {
        stack.push(word);
        continue;
      }

      if (word === ')' && stack.top() === '(') {
        stack.pop();
        continue;
      }

      if (word === ']' && stack.top() === '[') {
        stack.pop();
        continue;
      }

      if (word === ')' || word === ']') {
        stack.push(word);
        break;
      }
    }

    if (stack.empty()) {
      answer.push('yes');
    } else {
      answer.push('no');
    }
  }
  const answerString = answer.join('\n');

  console.log(answerString);

  return answerString;
}

// test('예제1', () => {
//   const input = `So when I die (the [first] I will see in (heaven) is a score list).
// [ first in ] ( first out ).
// Half Moon tonight (At least it is better than no Moon at all].
// A rope may form )( a trail in a maze.
// Help( I[m being held prisoner in a fortune cookie factory)].
// ([ (([( [ ] ) ( ) (( ))] )) ]).
//  .
// .`;

//   const answer = `yes
//   yes
//   no
//   no
//   no
//   yes
//   yes`
//     .split('\n')
//     .map((item) => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `  dd
// (
// []
// )
// ([([[()]])])
// asdasdasdasdsafweiohfoaiwegfoiaweugfaweiufgw'9 ( !!!![])
// )))))(((((
//    .
// .`;

//   const answer = `yes
//   no
//   yes
//   no
//   yes
//   yes
//   no
//   yes`
//     .split('\n')
//     .map((item) => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = solution(input);
