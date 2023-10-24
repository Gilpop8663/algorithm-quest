const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());
  const [T, N] = info.split(' ').map((item) => +item);

  const logMap = new Map();

  for (let i = 1; i <= N; i++) {
    const userInfo = {
      location: '1',
      weapon: [],
    };

    logMap.set(`${i}`, userInfo);
  }

  const logAnswer = [];

  const userAnswer = new Set();

  for (let i = 0; i < T; i++) {
    const [log, player, action, kind, kind2] = data[i].split(' ');

    const userInfo = logMap.get(player);

    if (action === 'M') {
      logMap.set(player, { ...userInfo, location: kind });
      continue;
    }

    if (action === 'F') {
      if (userInfo.location !== kind) {
        logAnswer.push(log);
      }

      logMap.set(player, {
        ...userInfo,
        weapon: [...userInfo.weapon, kind],
      });
      continue;
    }

    if (action === 'C') {
      const isInclude =
        userInfo.weapon.includes(kind) && userInfo.weapon.includes(kind2);

      if (!isInclude) {
        logAnswer.push(log);
      }
      /**
       * 1개씩만 없애야함
       */
      const removedWeapon = [];
      let isKind = false;
      let isKind2 = false;
      for (let j = 0; j < userInfo.weapon.length; j++) {
        const item = userInfo.weapon[j];

        if (item === kind && !isKind) {
          isKind = true;
          continue;
        }

        if (item === kind2 && !isKind2) {
          isKind2 = true;
          continue;
        }

        removedWeapon.push(item);
      }

      logMap.set(player, { ...userInfo, weapon: removedWeapon });
      continue;
    }

    if (action === 'A') {
      userInfo.location;
      const shieldPlayer = logMap.get(kind);

      if (userInfo.location !== shieldPlayer.location) {
        logAnswer.push(log);
        userAnswer.add(player);
      }

      continue;
    }
  }

  const answer = [];

  answer.push(logAnswer.length);

  answer.push(logAnswer.sort((a, b) => a - b).join(' '));
  const user = [...userAnswer];
  answer.push(user.length);
  answer.push(user.sort((a, b) => a - b).join(' '));

  return answer.filter((item) => item !== '').join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
