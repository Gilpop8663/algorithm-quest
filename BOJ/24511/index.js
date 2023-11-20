const input = require("fs").readFileSync(0, "utf-8").trim();

class Deque {
  constructor(size) {
    this.deque = Array.from({ length: 2 * size + 1 }, () => 0);
    this.front = size;
    this.back = size + 1;
  }

  pushFront(value) {
    this.deque[this.front] = value;
    this.front -= 1;
  }

  popFront() {
    this.front += 1;

    return this.deque[this.front];
  }

  pushBack(value) {
    this.deque[this.back] = value;
    this.back += 1;
  }

  popBack() {
    this.back -= 1;

    return this.deque[this.back];
  }
}

function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());

  const N = +info;

  const dataa = data.map((item) => item.split(" ").map((item) => +item));

  const arr1 = dataa[0];
  const arr2 = dataa[1];

  const dp = [];

  const D = new Deque(N);

  for (let i = 0; i < N; i++) {
    // stack;
    if (arr1[i] === 1) {
    } else {
      D.pushBack(arr2[i]);
    }
  }

  const M = dataa[2];
  const C = dataa[3];

  const answer = [];

  const isQueue = arr1.some((item) => item === 0);

  // console.log(isQueue);

  if (!isQueue) {
    for (let i = 0; i < M; i++) {
      answer.push(C[i]);
      // console.log(C[i]);
    }
  } else {
    for (let i = 0; i < M; i++) {
      let num = C[i];

      D.pushFront(num);
      const num2 = D.popBack();

      answer.push(num2);
    }
  }

  return answer.join(" ");
}

const output = console.log(solution(input));

// module.exports = solution;
