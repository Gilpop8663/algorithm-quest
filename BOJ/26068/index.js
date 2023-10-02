const input = require('fs').readFileSync(0, 'utf-8').trim() ?? '';

function chickenDance(input) {
  const [N, ...arr] = input.split('\n').map((item) => item.trim());

  const answer = arr.reduce((acc, cur) => {
    cur = cur.replace('D-', '');
    const num = Number(cur);

    if (num <= 90) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return answer;
}

const output = console.log(chickenDance(input));

module.exports = chickenDance;
