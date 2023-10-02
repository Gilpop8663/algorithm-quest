const input = require('fs').readFileSync(0, 'utf-8').trim();

function crazyTime(input) {
  const [N, ...info] = input.split('\n').map((item) => item.trim());

  const arr = info.map((item) => item.split(' '));

  let timer = 1;
  let dir = true;

  const answer = arr.map((item) => {
    const [kind, tt] = item;
    const time = Number(tt);

    const prevTime = timer;

    if (prevTime === time && kind === 'HOURGLASS') {
      if (!dir) {
        timer = timer - 1 === 0 ? 12 : timer - 1;
      } else {
        timer = timer + 1 === 13 ? 1 : timer + 1;
      }

      return `${prevTime} NO`;
    }

    if (kind === 'HOURGLASS') {
      dir = !dir;
    }

    if (!dir) {
      timer = timer - 1 === 0 ? 12 : timer - 1;
    } else {
      timer = timer + 1 === 13 ? 1 : timer + 1;
    }

    return `${prevTime} ${prevTime === time ? 'YES' : 'NO'}`;
  });

  return answer.join('\n');
}

const output = console.log(crazyTime(input));

// module.exports = crazyTime;
