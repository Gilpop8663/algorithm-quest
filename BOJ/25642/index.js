const input = require('fs').readFileSync(0, 'utf-8').trim();

const func = (attack, shield) => {
  shield += attack;

  if (shield >= 5) return [shield, true];

  return [shield, false];
};

function solution(input) {
  const [info] = input.split('\n').map((item) => item.trim());

  let [yt, yj] = info.split(' ').map((item) => +item);

  for (let i = 0; i < 10; i++) {
    const [shield, isLose] = func(yt, yj);

    yj = shield;
    if (isLose) {
      return 'yt';
    }

    const [ytShield, ytIsLose] = func(yj, yt);

    yt = ytShield;
    if (ytIsLose) {
      return 'yj';
    }
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
