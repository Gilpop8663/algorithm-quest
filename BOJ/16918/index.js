const input = require('fs').readFileSync(0, 'utf-8').trim();

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M, T] = info.split(' ').map((item) => +item);

  const arr = data.map((item) => item.split(''));

  const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  const tmp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const word = arr[i][j];
      if (word === 'O') {
        dp[i][j] = 2;
      }
    }
  }

  let time = T - 1;

  while (time--) {
    // 설치
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (dp[i][j] === 0) {
          dp[i][j] = 4;
        }
      }
    }

    // 시간 지나고 터진다면 응응

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (dp[i][j] > 0) {
          dp[i][j]--;
        }
      }
    }

    // 임시 배열.

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        tmp[i][j] = dp[i][j];
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (dp[i][j] !== 0) continue;

        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

          tmp[nx][ny] = 0;
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        dp[i][j] = tmp[i][j];
      }
    }

    // console.log(time, '시간');
  }

  const answer = [];

  for (let i = 0; i < N; i++) {
    let str = '';
    for (let j = 0; j < M; j++) {
      if (dp[i][j] > 0) {
        str += 'O';
      } else {
        str += '.';
      }
    }
    answer.push(str);
  }

  // console.log(answer.join('\n'));

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
