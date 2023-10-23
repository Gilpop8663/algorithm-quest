const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const N = Number(input);
  const MAX_NUM = 5_000_001;
  const isPrime = Array.from({ length: MAX_NUM }, () => false);
  let dir = 1;

  for (let i = 2; i <= Math.sqrt(MAX_NUM); i++) {
    if (isPrime[i]) continue;

    for (let j = i * 2; j <= MAX_NUM; j += i) {
      isPrime[j] = true;
    }
  }

  let bNum = 0;
  let lastB = false;
  let firstB = false;
  let sNum = 0;

  isPrime[1] = true;

  /**
   *
   * 문자를 뒤집으면 시간 소요가 많을 것 같음
   * 지금 현재 방향이 앞인지 뒤인지에 따라 다르게 해주면 되지 않을까
   *
   *
   * 방향이 뒤쪽이라면 1, 앞이라면 0
   */
  const func = (num) => {
    /**
     * 소수가 아닌 경우
     */
    if (dir === 1 && isPrime[num]) {
      lastB = true;
      bNum += 1;
      return;
    }

    if (dir === 0 && isPrime[num]) {
      bNum += 1;
      lastB = true;
      return;
    }

    /**
     * 소수인 경우 맨 뒤 B를 없애고, SS를 붙인다. 뒤로 돌린다.
     */
    if (dir === 1 && lastB) {
      lastB = false;
      sNum += 2;
      bNum -= 1;
      dir = 0;
      if (firstB) {
        firstB = false;
        lastB = true;
      }

      return;
    }

    if (dir === 1) {
      lastB = false;
      sNum += 1;
      dir = 0;
      if (firstB) {
        firstB = false;
        lastB = true;
      }
      return;
    }

    if (lastB) {
      lastB = false;
      sNum += 2;
      bNum -= 1;
      dir = 1;

      if (firstB) {
        firstB = false;
        lastB = true;
      }
      return;
    }

    lastB = false;
    sNum += 1;
    dir = 1;
    if (firstB) {
      firstB = false;
      lastB = true;
    }
  };

  for (let i = 1; i <= N; i++) {
    func(i);
  }

  const realAnswer = bNum + ' ' + sNum;

  return realAnswer;
}

const output = console.log(solution(input));

// module.exports = solution;
