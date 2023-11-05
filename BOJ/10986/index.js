const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = data[0].split(' ').map((item) => +item);

  const mod = Array.from({ length: N + 1 }, () => 0);
  const cnt = Array.from({ length: 1001 }, () => 0);

  for (let i = 0; i < N; i++) {
    mod[i] = ((mod[i - 1] ?? 0) + arr[i]) % M;
  }

  let answer = 0;
  // 1, 000, 000;

  /**
   *  (S[j] - s[i]) % M = 0
   *  S[j] % M = S[i] % M
   *  dp[i] % M 의 개수가 같은 것을 구하면 된다.
   */

  // console.log(mod);

  // console.log(mod);
  for (let i = 0; i < N; i++) {
    cnt[mod[i]] += 1;
  }

  for (let i = 0; i < M; i++) {
    // console.log(cnt[i]);
    answer += (cnt[i] / 2) * (cnt[i] - 1); // 조합 공식
  }
  // console.log(dp, mod, cnt);

  // console.log(answer);
  answer += cnt[0];

  // console.log(dp, mod);

  return answer.toString();
}

const output = console.log(solution(input));

// module.exports = solution;
