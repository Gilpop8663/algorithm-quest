const input = require('fs').readFileSync(0, 'utf-8').trim();

const getArm = (arr, heart, N, dir) => {
  /**
   * 왼쪽
   */
  let count = 0;
  const [x, y] = heart;
  if (dir === 1) {
    for (let i = y - 1; i >= 0; i--) {
      if (arr[x][i] !== '*') {
        break;
      }
      count += 1;
    }
  }

  /**
   * 오른쪽
   */
  if (dir === 2) {
    for (let i = y + 1; i < N; i++) {
      if (arr[x][i] !== '*') {
        break;
      }
      count += 1;
    }
  }

  /**
   * 허리
   */
  if (dir === 3) {
    let stX, stY;
    for (let i = x + 1; i < N; i++) {
      if (arr[i][y] !== '*') {
        break;
      }
      stX = i;
      count += 1;
    }
    stY = y;

    return [count, stX, stY];
  }

  return count;
};

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;

  const arr = data.map((item) => item.split(''));

  let stX = 0;
  let stY = 0;

  for (let i = 0; i < N; i++) {
    if (stX !== 0 || stY !== 0) break;
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === '*') {
        stX = i;
        stY = j;
        break;
      }
    }
  }

  const heart = [];
  heart.push(stX + 1);
  heart.push(stY);

  const left = getArm(arr, heart, N, 1);
  const right = getArm(arr, heart, N, 2);
  const center = getArm(arr, heart, N, 3);

  // console.log(left, right, center);
  const [centerCount, cX, cY] = center;

  const leftLeg = getArm(arr, [cX, cY - 1], N, 3);
  const rightLeg = getArm(arr, [cX, cY + 1], N, 3);

  heart[0]++;
  heart[1]++;

  const answer =
    heart.join(' ') +
    '\n' +
    [left, right, center[0], leftLeg[0], rightLeg[0]].join(' ');

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
