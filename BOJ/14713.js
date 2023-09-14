const input = require('fs').readFileSync(0, 'utf-8');

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

function solution(input) {
  const data = input.split('\n').map(item => item.trim());

  const N = Number(data[0]);

  const queueList = [];

  let birdWord = 0;

  for (let i = 0; i < N; i++) {
    const wordList = data[i + 1].split(' ');
    const M = wordList.length;
    birdWord += M;
    const queue = new Queue(M);
    for (let j = 0; j < M; j++) {
      queue.push(wordList[j]);
    }

    queueList.push(queue);
  }

  const receiveList = data.at(-1).trim().split(' ');

  let flag = false;

  for (let k = 0; k < receiveList.length; k++) {
    const word = receiveList[k];
    let found = false;

    for (let i = 0; i < queueList.length; i++) {
      const queue = queueList[i];

      if (queue.getFront() === word) {
        flag = true;
        queue.pop();
        break;
      }

      found = false;
    }

    if (found === false) {
      flag = false;
      break;
    }
  }

  const isExistWord = queueList.some(queue => !queue.isEmpty());

  if (isExistWord || receiveList.length !== birdWord) {
    flag = false;
  }

  return flag ? 'Possible' : 'Impossible';
}

// test('예제1', () => {
//   const input = `3
//   i want to see you
//   next week
//   good luck
//   i want next good luck week to see you`;

//   const answer = `Possible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제2', () => {
//   const input = `2
//   i found
//   an interesting cave
//   i found an cave interesting`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제3', () => {
//   const input = `2
//   please
//   be careful
//   pen pineapple apple pen`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제4', () => {
//   const input = `2
//   please
//   be careful
//   please`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제5', () => {
//   const input = `2
//   please
//   be careful
//   please be careful Yes`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제6', () => {
//   const input = `2
//   ab cd
//   ef gh ij
//   ab ef gh ij`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제7', () => {
//   const input = `2
//   ab cd
//   ef gh ij
//   ab`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제8', () => {
//   const input = `2
//   a b c d ef
//   g h j
//   a b c d g h ef j`;

//   const answer = `Possible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제9', () => {
//   const input = `2
//   asdas
//   dd
//   dd asdas`;

//   const answer = `Possible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제10', () => {
//   const input = `2
//   dd
//   asdas
//   asdas dd`;

//   const answer = `Possible`;

//   expect(solution(input)).toEqual(answer);
// });

// test('예제11', () => {
//   const input = `2
//   a
//   b
//   a`;

//   const answer = `Impossible`;

//   expect(solution(input)).toEqual(answer);
// });

const output = console.log(solution(input));
