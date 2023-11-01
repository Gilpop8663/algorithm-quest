const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 *
 * R(빨간색), O(주황색), Y(노란색), G(초록색), B(파란색),
 * I(남색), V(보라색) 순으로 이루어진 문자열이며, 대소문자를 구분하지 않는다.
 *
 */
function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const word = ['r', 'o', 'y', 'g', 'b', 'i', 'v'];
  const upWord = word.map((item) => item.toUpperCase());

  let flag = 0;
  let upFlag = 0;

  [...new Set(data[0].split(''))].forEach((item) => {
    if (word.includes(item)) {
      flag += 1;
    }

    if (upWord.includes(item)) {
      upFlag += 1;
    }
  });

  if (flag === 7 && upFlag === 7) {
    return 'YeS';
  }

  if (flag === 7) {
    return 'yes';
  }

  if (upFlag === 7) {
    return 'YES';
  }

  return 'NO!';

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
