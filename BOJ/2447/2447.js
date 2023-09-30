const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 * 
 * value는 3 x%3===1, y%3 ===1
(0,0) (0,1) (0,2)
(1,0) (1,1) (1,2)
(2,0) (2,1) (2,2)


 
*
value = 9의 경우

(x/3) %3===1 , (y/3) %3 ===1

(3,3) (3,4) (3,5)
(4,3) (4,4) (4,5)
(5,3) (5,4) (5,5)



 */

const solution = (x, y, value) => {
  const num = Math.pow(3, value);

  if (Math.floor(x / num) % 3 === 1 && Math.floor(y / num) % 3 === 1) {
    return ' ';
  }

  if (value === 0) {
    return '*';
  }

  let answer = '';

  answer = solution(x, y, value - 1);

  return answer;
};

function star10Solution(input) {
  const num = Number(input);

  let count = 0;

  for (let i = 0; i < 8; i++) {
    if (Math.pow(3, count) === num) break;

    count++;
  }

  let answer = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      answer += solution(i, j, count);
    }
    answer += '\n';
  }

  return answer.trim();
}

const output = console.log(star10Solution(input));

// module.exports = star10Solution;
