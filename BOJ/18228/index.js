const input = require('fs').readFileSync(0, 'utf-8').trim();

function soDDuckSoDDuck(input) {
  const [nn, info] = input.split('\n').map((item) => item.trim());
  const N = Number(nn);
  const arr = info.split(' ').map((item) => Number(item));

  const penguinIndex = arr.findIndex((item) => item === -1);

  let frontAnswer = 2_000_000_000,
    backAnswer = 2_000_000_000;
  for (let i = penguinIndex + 1; i < N; i++) {
    const num = arr[i];
    backAnswer = Math.min(backAnswer, num);
  }

  for (let i = 0; i < penguinIndex; i++) {
    const num = arr[i];
    frontAnswer = Math.min(frontAnswer, num);
  }

  const answer = frontAnswer + backAnswer;

  return answer;
}

const output = console.log(soDDuckSoDDuck(input));

// module.exports = soDDuckSoDDuck;
