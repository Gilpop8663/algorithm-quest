const input = require('fs').readFileSync(0, 'utf-8').trim();

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const dir = ['D', 'R', 'U', 'L'];

function solution(input) {
  const [info, word, ...data] = input.split('\n').map((item) => item.trim());

  const [I, N, K] = info.split(' ').map((item) => +item);

  let rX = 0;
  let rY = 0;

  const arr = [];
  for (let i = 0; i < N; i++) {
    const ss = data[i].split('');
    arr.push(ss);
    for (let j = 0; j < N; j++) {
      if (ss[j] === '@') {
        rX = i;
        rY = j;
      }
    }
  }

  class Robot {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.ink = 0;
      this.jumpCount = 0;
    }

    move(action) {
      for (let i = 0; i < 4; i++) {
        if (dir[i] === action) {
          const nx = this.x + dx[i];
          const ny = this.y + dy[i];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) return;
          if (arr[nx][ny] !== '.') return;
          arr[this.x][this.y] = '.';
          this.x = nx;
          this.y = ny;
          arr[nx][ny] = '@';
        }
      }
    }

    fill() {
      this.ink += 1;
    }

    jump() {
      const C = this.ink;
      const curWord = word[this.jumpCount % word.length];
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          const dist = Math.abs(this.x - i) + Math.abs(this.y - j);
          if (dist > C) continue;
          if (arr[i][j] !== '.' && arr[i][j] !== '@') {
            arr[i][j] = curWord;
          }
        }
      }

      this.jumpCount += 1;
      this.ink = 0;
    }
  }

  const robot = new Robot(rX, rY);

  const command = data.at(-1);

  for (let i = 0; i < K; i++) {
    const wordd = command[i];
    if (wordd === 'j') {
      robot.fill();
      continue;
    }
    if (wordd === 'J') {
      robot.jump();
      continue;
    }
    robot.move(wordd);
  }

  const answer = arr
    .map((item) => item.join(''))
    .join('\n')
    .trim();

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
