const input = require('fs').readFileSync(0, 'utf-8').trim();

function soDDuckSoDDuck(input) {
  const [N, str] = input.split('\n').map((item) => item.trim());

  const front = str
    .slice(0, str.length / 2)
    .split('')
    .reverse();

  const back = str.slice(Math.round(str.length / 2)).split('');

  const answer = front.reduce((acc, cur, index) => {
    if (cur !== back[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return answer;
}

const output = console.log(soDDuckSoDDuck(input));

// module.exports = soDDuckSoDDuck;
