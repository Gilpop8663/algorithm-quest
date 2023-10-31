const input = require('fs').readFileSync(0, 'utf-8').trim();

const cal = (str, str2) => {
  let count = 0;

  for (let i = 0; i < 4; i++) {
    // console.log(str[i], str2[i]);
    if (str[i] !== str2[i]) count += 1;
  }

  return count;
};

/**
 *
 *
 * INFP ENTJ
 * 10만 곱하기 10만 100,0000,0000 벌써 백억임
 *
 */
function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const T = +info;

  const answer = [];

  for (let i = 0; i < T * 2; i += 2) {
    const N = +data[i];
    const arr = data[i + 1].split(' ');
    // console.log(arr);

    const word = new Map();
    for (let k = 0; k < N; k++) {
      if (word.has(arr[k])) {
        word.set(arr[k], word.get(arr[k]) + 1);
        continue;
      }

      word.set(arr[k], 1);
    }

    const newArr = [];
    const wordList =
      'ISTJ, ISFJ, INFJ, INTJ, ISTP, ISFP, INFP, INTP, ESTP, ESFP, ENFP, ENTP, ESTJ, ESFJ, ENFJ, ENTJ'
        .split(',')
        .map((item) => item.trim());
    // console.log(wordList);
    for (let k = 0; k < 16; k++) {
      const str = wordList[k];
      if (word.has(str)) {
        const num = word.get(str);
        // console.log(str, num);

        for (let l = 0; l < Math.min(3, num); l++) {
          // console.log('영기기');
          newArr.push(str);
        }
      }
    }

    // console.log(newArr);

    const M = newArr.length;
    let tmp = 1000000;

    for (let j = 0; j < M; j++) {
      for (let k = 0; k < M; k++) {
        if (k == j) continue;
        for (let l = 0; l < M; l++) {
          if (l == k || l == j) continue;

          // console.log(arr[j], arr[k], arr[l]);
          const num =
            cal(arr[j], arr[k]) + cal(arr[k], arr[l]) + cal(arr[l], arr[j]);
          tmp = Math.min(tmp, num);
        }
      }
    }

    answer.push(tmp);
  }
  // console.log(answer);

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
