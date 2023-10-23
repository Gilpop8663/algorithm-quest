const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 *
 * 10  5 7
 * 1  5 3
 * 최대의 만족도는 5 7 10
 * 1 3 5
 * 작은순으로 했을 떄 4 4 5 13 음 ? 동일하다
 * 9 4 0 13
 *
 * 0 0 0 0 10
 * 10 10 10 1
 * 10 - 1 이 최대 만족도임
 *
 * 1 2 3 4 5
 * 5 5 5 3 4
 * 3 4
 * 5 - 3
 * 4 - 4
 * 동일함
 *
 * 각 자 작은순으로 정렬 후 큰 수부터 빼보자
 *
 */
function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = data[0]
    .split(' ')
    .map((item) => +item)
    .sort((a, b) => a - b);

  const brr = data[1]
    .split(' ')
    .map((item) => +item)
    .sort((a, b) => a - b);

  let answer = 0;

  const minNum = Math.min(arr.length, brr.length);

  if (minNum === arr.length) {
    for (let i = N - 1; i >= 0; i--) {
      const aNum = arr[i];
      const bNum = brr[N - i - 1];

      if (aNum <= bNum) continue;

      answer += arr[i] - brr[N - i - 1];
    }
  } else {
    for (let i = 0; i < M; i++) {
      const aNum = arr[N - i - 1];
      const bNum = brr[i];

      if (aNum <= bNum) continue;

      answer += arr[N - i - 1] - brr[i];
    }
  }

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
