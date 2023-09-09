const input = require('fs').readFileSync(0, 'utf-8');

function solution(input) {
  const data = Number(input);

  const MAX_NUM = 1_000_000_000;
  let answer;

  if (data === 1) {
    return '4';
  }

  if (data * 2 < MAX_NUM) {
    answer = data * 2;
    return String(answer);
  }

  return String(MAX_NUM);
}

// test('예제1', () => {
//   const input = `5`;

//   const answer = `10`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `6`;

//   const answer = `12`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

// test('예제3', () => {
//   const input = `1`;

//   const answer = `4`
//     .split('\n')
//     .map(item => item.trim())
//     .join('\n');

//   expect(solution(input)).toEqual(answer);
// });

const output = console.log(solution(input));
