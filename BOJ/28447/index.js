const input = require('fs').readFileSync(0, 'utf-8').trim();

let comb = [];
let arr, N, K;

const combi = (selectIndex, arr) => {
  if (arr.length === K) {
    // console.log(arr);
    comb.push(arr);
    return;
  }
  // console.log(num, arr);

  for (let i = selectIndex + 1; i < N; i++) {
    combi(i, [...arr, i]);
  }
};

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [n, k] = info.split(' ').map((item) => +item);

  N = n;

  K = k;

  /**
   * N은 전체 개수, K는 뽑고자 하는 개수
   */
  combi(-1, []);

  // console.log(comb);

  arr = data.map((item) => item.split(' ').map((item) => +item));

  let answer = -1000000;

  comb.forEach((item) => {
    let tmp = 0;
    for (let i = 0; i < K; i++) {
      for (let j = i + 1; j < K; j++) {
        if (i === j) continue;
        const first = item[i];
        const second = item[j];
        // console.log(first, second);
        // console.log(arr[first][second]);
        tmp += arr[first][second];
      }
    }

    answer = Math.max(answer, tmp);
  });

  if (K === 1) {
    return 0;
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
