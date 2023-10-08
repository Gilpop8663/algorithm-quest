const input = require('fs').readFileSync(0, 'utf-8').trim();

const convertNumber = (total, num) => {
  return total - num + 1;
};

const getNextNum = (total, curNum, nextNum) => {
  const next = convertNumber(total, nextNum);

  const minNext = Math.min(next, nextNum);

  const maxNext = Math.max(next, nextNum);

  if (curNum <= minNext) {
    return minNext;
  }

  return maxNext;
};

function sortNumberSolution(input) {
  const [ttt, ...arr] = input.split('\n').map(item => item.trim());
  const T = Number(ttt);

  const answer = [];

  for (let i = 0; i < T; i++) {
    const n = Number(arr[i * 2]);
    const data = arr[i * 2 + 1].split(' ').map(item => Number(item));

    let flag = false;
    let curNum = Math.min(data[0], convertNumber(n, data[0]));

    for (let j = 0; j < n - 1; j++) {
      const num = curNum;
      const nextNum = data[j + 1];

      const realNextNum = getNextNum(n, num, nextNum);

      if (curNum > realNextNum) {
        flag = true;
        break;
      }

      curNum = realNextNum;
    }

    if (flag === true) {
      answer.push('NO');
    } else {
      answer.push('YES');
    }
  }

  return answer.join('\n');
}

const output = console.log(sortNumberSolution(input));

// module.exports = sortNumberSolution;
