const input = require('fs').readFileSync(0, 'utf-8').trim();
class Queue {
  constructor(size) {
    const num = Number(size);
    this.queue = new Array(num);
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const popped = this.queue[this.front];
    this.front += 1;

    return popped;
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.front];
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.back - 1];
  }

  size() {
    return this.back - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

function birdSolution(input) {
  const data = input.split('\n').map((item) => item.trim());

  const N = Number(data[0]);

  const queueList = [];

  let birdWord = 0;

  for (let i = 0; i < N; i++) {
    const wordList = data[i + 1].trim().split(' ');

    const M = wordList.length;
    birdWord += M;

    const queue = new Queue(M);
    for (let j = 0; j < M; j++) {
      queue.push(wordList[j]);
    }

    queueList.push(queue);
  }

  const receiveList = data.at(-1).trim().split(' ');

  if (receiveList.length !== birdWord) {
    return 'Impossible';
  }

  const answerFlag = receiveList
    .map((item) => {
      for (let i = 0; i < queueList.length; i++) {
        const queue = queueList[i];

        if (queue.getFront() === item) {
          queue.pop();
          return true;
        }
      }

      return false;
    })
    .every((x) => x);

  const isExistWord = queueList.some((queue) => !queue.isEmpty());

  if (isExistWord) {
    return 'Impossible';
  }

  return answerFlag ? 'Possible' : 'Impossible';
}

const output = console.log(birdSolution(input));

module.exports = birdSolution;
