const input = require('fs').readFileSync(0, 'utf-8').trim();

class Queue {
  constructor() {
    this.queue = Array(500_001).fill(0);
    this.front = 0;
    this.back = 0;
    /**
     * 0은 뒤 > 앞 (가로)
     * 1은 앞 > 뒤 (세로)  0의 반시계 방향
     * 2은 앞 > 뒤 (가로)
     * 3은 뒤 > 앞 (세로) 0의 시계 방향
     */
    this.dir = 0;
    this.ball = 0;
    this.wall = 0;
  }

  isEmpty() {
    return this.front === this.back;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const kind = this.checkFront();

    if (kind === 1) {
      this.ball -= 1;
    } else {
      this.wall -= 1;
    }

    this.front += 1;
    this.checkGravity();
  }

  push(command) {
    if (command === 'b' && this.isPushBall()) {
      this.ball += 1;
      this.queue[this.back] = 1; // 공
      this.back += 1;
    }

    if (command === 'w') {
      this.wall += 1;
      this.queue[this.back] = 2; // 가림막
      this.back += 1;
    }
  }

  isPushBall() {
    if (this.dir === 1) {
      return false;
    }

    if (this.dir === 3) {
      return this.checkFront() === 2; // 맨 앞에 가림막이 있다면 공을 넣음
    }

    return true;
  }

  checkGravity() {
    if (this.dir === 1) {
      while (this.checkBack() !== 2 && !this.isEmpty()) {
        this.ball -= 1;
        this.back -= 1;
      }
    }

    if (this.dir === 3) {
      while (this.checkFront() !== 2 && !this.isEmpty()) {
        this.ball -= 1;
        this.front += 1;
      }
    }
  }

  printQueue() {
    console.log('볼 개수', this.count('b'));
    console.log('벽 개수', this.count('w'));
    console.log(this.queue.slice(this.front, this.back));
  }

  checkFront() {
    return this.queue[this.front];
  }

  checkBack() {
    return this.queue[this.back - 1];
  }

  rotate(command) {
    if (command === 'l') {
      this.dir = (this.dir + 1) % 4;
      this.checkGravity();
    }

    if (command === 'r' && this.dir === 0) {
      this.dir = 3;
      this.checkGravity();
      return;
    }

    if (command === 'r') {
      this.dir -= 1;
      this.checkGravity();
    }
  }

  count(command) {
    if (command === 'b') {
      return this.ball;
    }

    if (command === 'w') {
      return this.wall;
    }
  }
}

function solution(input) {
  const [N, ...data] = input.split('\n').map(item => item.trim());

  const queue = new Queue();

  const answer = [];

  for (let i = 0; i < Number(N); i++) {
    const [command, dir] = data[i].split(' ');

    if (command === 'push') {
      queue.push(dir);
    }

    if (command === 'pop') {
      queue.pop();
    }

    if (command === 'rotate') {
      queue.rotate(dir);
    }

    if (command === 'count') {
      answer.push(queue.count(dir));
    }
  }

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
