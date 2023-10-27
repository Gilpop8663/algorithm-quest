const input = require('fs').readFileSync(0, 'utf-8').trim();

class Human {
  queue = [];
  top = 0;

  constructor(speed) {
    this.speed = speed;
  }

  present = [];

  push(T, M) {
    const backNum = this.getBack();
    if (backNum > T) {
      for (let i = 1; i <= M; i++) {
        const speed = this.speed * i;
        this.queue.push(backNum + speed);
      }
      return;
    }

    for (let i = 0; i < M; i += 1) {
      const speed = this.speed * i;

      this.queue.push(T + speed);
    }
  }

  pop() {
    const popped = this.queue[this.top];

    this.top += 1;

    return popped;
  }

  package(num) {
    if (this.isEmpty()) {
      return -1;
    }

    this.pop();
    this.present.push(num);
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.top];
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === this.top;
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [A, B, N] = info.split(' ').map((item) => +item);

  const arr = data.map((item) => item.split(' '));

  const sQ = new Human(A);
  const jQ = new Human(B);

  /**
   * 파랑색은 상민이
   * 빨간색은 지수
   * 상민이가 지수보다 빠름 ( 동일 시간일 때 )
   * 선물들을 오름차순으로 정렬
   * T는 소요 시간, C는 색, M은 개수
   * 가져오는 시간과 포장을 다 한 시간은 다르다.
   * 가져오는 시간으로 해야함
   */
  for (let i = 0; i < N; i++) {
    const [T, C, M] = arr[i];

    if (C === 'B') {
      sQ.push(Number(T), Number(M));
      continue;
    }

    jQ.push(Number(T), Number(M));
  }

  // console.log(sQ, jQ);
  // time 무슨 시간이냐
  /**
   * time은 현재 시간임.
   */
  let time = 1;
  let presentNum = 1;
  while (!sQ.isEmpty() || !jQ.isEmpty()) {
    let sNum = sQ.getFront();
    let jNum = jQ.getFront();

    /**
     * 현재 시간으로 하고 있음 포장 시간. 포장이 시작한 시간임
     */
    while (sNum <= time) {
      if (sNum === -1) {
        break;
      }

      sQ.package(presentNum);
      presentNum += 1;
      sNum = sQ.getFront();
    }

    while (jNum <= time) {
      if (jNum === -1) {
        break;
      }

      jQ.package(presentNum);
      presentNum += 1;
      jNum = jQ.getFront();
    }

    // time += 1;
    if (sNum === -1) {
      time = jNum;
      continue;
    }

    if (jNum === -1) {
      time = sNum;
      continue;
    }

    time = Math.min(sNum, jNum);
  }

  const answer = [];

  answer.push(sQ.present.length);
  answer.push(sQ.present.join(' '));
  answer.push(jQ.present.length);
  answer.push(jQ.present.join(' '));

  // console.log(jQ, sQ);

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
