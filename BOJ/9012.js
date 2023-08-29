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

function solution2(input) {
  const data = input.split('\n').map(item => item.trim());
  const caseCount = Number(data[0]);

  const answer = [];

  for (let i = 1; i <= caseCount; i += 1) {
    const cases = data[i];
    const stack = [];
    let result = 'YES';

    for (let j = 0; j < cases.length; j += 1) {
      if (cases[j] === '(') {
        stack.push(1);
      } else {
        if (!stack.pop()) {
          result = 'NO';
          break;
        }
      }
    }

    if (stack.length !== 0) {
      result = 'NO';
    }

    // answer.push(result);

    console.log(result);
  }

  return answer.join('\n');
}

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  const [N, ...arr] = data;
  let answer = [];

  for (const item of arr) {
    let result = 'NO';
    const words = item.split('');
    const stack = new Stack();

    for (const word of words) {
      if (word === ')' && stack.top() === '(') {
        stack.pop();
        continue;
      }

      stack.push(word);
    }

    if (stack.empty()) {
      result = 'YES';
      answer.push('YES');
    } else {
      answer.push('NO');
    }
    console.log(result);
  }

  //   console.log(answer.join('\n'));

  return answer.join('\n');
}

// test('예제1', () => {
//   const input = `6
//   (())())
//   (((()())()
//   (()())((()))
//   ((()()(()))(((())))()
//   ()()()()(()()())()
//   (()((())()(`;

//   const answer = `NO
//   NO
//   YES
//   NO
//   YES
//   NO`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `3
//   ((
//   ))
//   ())(()`;

//   const answer = `NO
//   NO
//   NO`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제3', () => {
//   const input = `11
//   ()
//   (
//   (())((())))
//   )
//   ((((())(())())))
//   ((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))
//   (((())))(())))(((())
//   ()()()()(()()())()
//   )(
//     ((()))()
//     ())()(()`;

//   const answer = `YES
//   NO
//   NO
//   NO
//   YES
//   YES
//   NO
//   YES
//   NO
//   YES
//   NO`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제4', () => {
//   const input = `7
//   (
//     ()
//     )(
//     ())
//     )()
//     ())()
//     )()(`;

//   const answer = `NO
//   YES
//   NO
//   NO
//   NO
//   NO
//   NO`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제5', () => {
//   const input = `13
//   ()())(()
// ())())())())())())
// (()()
// ()(
// ()((((((((((((((((
// ))((
// ((
// )()
// ())(()
// )))))(((((
// ())(()
// ((
//     ))((`;

//   const answer = `NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO
//   NO`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = solution(input);
