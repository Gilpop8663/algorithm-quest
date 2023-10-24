const input = require('fs').readFileSync(0, 'utf-8').trim();

const getTimeNumber = (str) => {
  const [hour, minute] = str.split(':').map((item) => +item);

  return hour * 60 + minute;
};

function solution(input) {
  const [info, names, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M, P] = info.split(' ').map((item) => +item);

  const nameArr = names.split(' ');

  const arr = data.map((item) => item.split(' '));

  const mapData = new Map();

  const INIT_TIME = 1000000000;
  const nameData = nameArr.map((item) => {
    return {
      name: item,
      time: INIT_TIME,
      isSolved: false,
      score: M + 1,
    };
  });

  const allNameData = Array.from({ length: N + 1 }, () =>
    JSON.parse(JSON.stringify(nameData))
  );

  for (let i = 0; i < P; i++) {
    const [num, time, name, isSolve] = arr[i];

    const timeNumber = getTimeNumber(time);
    if (
      getTimeNumber('10:00') > timeNumber ||
      getTimeNumber('21:59') < timeNumber
    )
      continue;

    const key = `${num} ${name}`;
    const findData = allNameData[num].find((item) => item.name === name);

    if (findData.isSolved === true) continue;

    if (isSolve === 'solve' && !mapData.has(key)) {
      findData.score = M + 1;
      findData.isSolved = true;
      continue;
    }

    if (isSolve === 'wrong' && !mapData.has(key)) {
      mapData.set(key, time);
      findData.score = M;
      continue;
    }

    if (isSolve === 'solve' && mapData.has(key)) {
      const prevTime = mapData.get(key);
      const curTime = time;
      findData.time = getTimeNumber(curTime) - getTimeNumber(prevTime);

      findData.isSolved = true;
    }
  }

  for (let i = 1; i <= N; i++) {
    allNameData[i].sort((itemA, itemB) => {
      if (itemA.time !== itemB.time) return itemA.time - itemB.time;

      return itemA.name.localeCompare(itemB.name);
    });
  }

  for (let i = 1; i <= N; i++) {
    const findData = allNameData[i];

    let grade = 1;

    for (let j = 0; j < M; j++) {
      if (findData[j].time !== INIT_TIME) {
        findData[j].score = grade++;
      }
    }
  }

  const answerData = nameArr.map((item) => {
    return { name: item, score: 0 };
  });

  for (let i = 1; i <= N; i++) {
    const findData = allNameData[i];

    findData.forEach((item) => {
      const findArr = answerData.find((answer) => answer.name === item.name);

      findArr.score += item.score;
    });
  }

  const answer = [];

  answerData.sort((itemA, itemB) => {
    if (itemA.score !== itemB.score) return itemA.score - itemB.score;

    return itemA.name.localeCompare(itemB.name);
  });

  return answerData
    .map((item) => item.name)
    .join('\n')
    .trim();
}

const output = console.log(solution(input));

// module.exports = solution;
