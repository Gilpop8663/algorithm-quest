const input = require('fs').readFileSync(0, 'utf-8').trim();

const deviceNum = [
  //0
  ['###', '#.#', '#.#', '#.#', '###'],

  //1
  ['..#', '..#', '..#', '..#', '..#'],

  //2
  ['###', '..#', '###', '#..', '###'],

  //3
  ['###', '..#', '###', '..#', '###'],

  //4
  ['#.#', '#.#', '###', '#.#', '#.#'],

  //5
  ['###', '#..', '###', '..#', '###'],

  //6
  ['###', '#..', '###', '#.#', '###'],

  //7
  ['###', '..#', '..#', '..#', '..#'],

  //8
  ['###', '#.#', '###', '#.#', '###'],

  //9
  ['###', '#.#', '###', '..#', '###'],
];

const calculateNum = (arr) => {
  const total = [];

  for (let k = 0; k < 10; k++) {
    let count = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] === '#' && arr[i][j] === deviceNum[k][i][j]) {
          count += 1;
        }
      }
    }
    total.push(count);
  }

  const maxNum = Math.max(...total);

  for (let i = 0; i < total.length; i++) {
    if (total[i] === maxNum) {
      return i;
    }
  }
};

function solution(input) {
  const data = input.split('\n').map((item) => item.trim());
  const arr = data.map((item) => item.split(' '));

  const numbers = [];

  for (let j = 0; j < 4; j++) {
    const arrr = [];

    for (let i = 0; i < 5; i++) {
      arrr.push(arr[i][j]);
    }
    numbers.push(arrr);
  }

  const answer = numbers.map((item, index) => {
    if (index === 1) {
      return calculateNum(item) + ':';
    }
    return calculateNum(item);
  });

  return answer.join('');
}

const output = console.log(solution(input));

// module.exports = solution;
