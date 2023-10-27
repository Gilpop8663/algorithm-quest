const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = [];

  const set = new Set();

  for (let i = 0; i < N; i++) {
    arr.push(data[i]);
  }

  for (let j = N; j < N + M; j++) {
    set.add(data[j]);
  }

  arr.sort((a, b) => {
    const [aWord, aExt] = a.split('.');
    const [bWord, bExt] = b.split('.');

    if (aWord === bWord) {
      if (aExt !== bExt && set.has(aExt) && set.has(bExt)) {
        return aExt > bExt ? 1 : -1;
      }

      if (aExt !== bExt && set.has(aExt)) {
        return -1;
      }

      if (aExt !== bExt && set.has(bExt)) {
        return 1;
      }

      return aExt > bExt ? 1 : -1;
    }

    return aWord > bWord ? 1 : -1;
  });

  // console.log(arr, exp);

  const answer = arr;
  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
