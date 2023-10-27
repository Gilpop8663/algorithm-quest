const input = require('fs').readFileSync(0, 'utf-8').trim();

// 아래, 오른쪽, 위, 왼쪽
const dx = [1, 0, -1, 0, 1, 1, -1, -1];
const dy = [0, 1, 0, -1, 1, -1, 1, -1];

let N;

const visited = Array.from({ length: 15 }, () =>
  Array.from({ length: 15 }, () => false)
);

let arr;

class Human {
  x = 0;
  y = 0;
  dir = 0;

  move() {
    const nx = this.x + dx[this.dir];
    const ny = this.y + dy[this.dir];
    if (nx < 0 || ny < 0 || nx >= N || ny >= N) return;
    if (arr[nx][ny] === 'S') {
      for (let k = 0; k < 8; k++) {
        const NX = nx + dx[k];
        const NY = ny + dy[k];
        if (NX < 0 || NY < 0 || NX >= N || NY >= N) continue;
        visited[NX][NY] = true;
      }
      visited[nx][ny] = true;
    }

    this.x = nx;
    this.y = ny;
  }

  isZombie(x, y) {
    // console.log(x, y, this.x, this.y, !visited[this.x][this.y]);
    return this.x === x && this.y === y && !visited[this.x][this.y];
  }

  turnLeft() {
    if (this.dir === 3) {
      this.dir = 0;
      return;
    }

    this.dir += 1;
  }

  turnRight() {
    if (this.dir === 0) {
      this.dir = 3;
      return;
    }

    this.dir -= 1;
  }
}

class Zombie {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dir = 0;
  }

  move() {
    const nx = this.x + dx[this.dir];
    const ny = this.y + dy[this.dir];

    if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
      this.turnAround();
      return;
    }

    this.x = nx;
    this.y = ny;
  }

  turnAround() {
    if (this.dir === 0) {
      this.dir = 2;
      return;
    }

    this.dir = 0;
  }

  isZombie(x, y) {
    return x === this.x && y === this.y && !visited[x][y];
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  N = +info;

  /**
   * 불 켜진 곳
   */

  const words = data[0].split('');

  arr = data.slice(1).map((item) => item.split(''));

  const zombieList = [];
  const ari = new Human();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 'Z') {
        zombieList.push(new Zombie(i, j));
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word === 'F') {
      ari.move();
    }

    if (word === 'R') {
      ari.turnRight();
    }

    if (word === 'L') {
      ari.turnLeft();
    }

    for (let j = 0; j < zombieList.length; j++) {
      // console.log(ari.isZombie(zombieList[j].x, zombieList[j].y));
      if (ari.isZombie(zombieList[j].x, zombieList[j].y)) {
        return 'Aaaaaah!';
      }
    }

    zombieList.forEach((item) => item.move());

    for (let j = 0; j < zombieList.length; j++) {
      if (zombieList[j].isZombie(ari.x, ari.y)) return 'Aaaaaah!';
    }
  }

  return 'Phew...';

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
