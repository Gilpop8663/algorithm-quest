const input = require("fs").readFileSync(0, "utf-8").trim();

class Heap {
  heap = [null];
  length = 0;

  push(value) {
    this.heap.push(value);
    this.length += 1;

    let me = this.length;

    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (this.heap[parent] > this.heap[me]) break;

      const tmp = this.heap[parent];

      this.heap[parent] = this.heap[me];
      this.heap[me] = tmp;

      me = parent;
    }
  }

  pop() {
    if (this.length === 0) return 0;

    const popped = this.heap[1];
    const last = this.heap.pop();

    this.length -= 1;

    if (this.length === 0) return popped;

    let me = 1;
    this.heap[1] = last;

    while (me * 2 <= this.length) {
      const left = me * 2;
      const right = left + 1;

      let minChild = left;

      if (right <= this.length && this.heap[left] < this.heap[right]) {
        minChild = right;
      }

      if (this.heap[minChild] <= this.heap[me]) break;

      const tmp = this.heap[minChild];
      this.heap[minChild] = this.heap[me];
      this.heap[me] = tmp;

      me = minChild;
    }

    return popped;
  }

  isEmpty() {
    return this.length === 0;
  }

  getFront() {
    return this.heap[1];
  }

  getSize() {
    return this.length;
  }
}

function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());
  const [N, K] = info.split(" ");

  const answer = [];

  const dataa = data.map((item) => item.split(" ").map((item) => +item));

  const visited = Array.from({ length: 100001 }, () => []);
  const dp = Array.from({ length: 100001 }, () => []);

  const arr1 = dataa[0];
  const arr2 = dataa[1];

  const H = new Heap();
  const H2 = new Heap();
  const dict = new Map();

  for (let i = 0; i < N; i++) {
    visited[arr1[i]].push(arr2[i]);
  }

  for (let i = 1; i <= N; i++) {
    visited[i].sort((a, b) => a - b);

    for (let j = 0; j < visited[i].length; j++) {
      dp[j + 1].push(visited[i][j]);
    }
  }

  let sum = 0;
  let count = 0;
  // console.log(count);

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      sum += dp[i][j];
      H.push(dp[i][j]);

      if (H.getSize() > K) {
        // console.log(sum, H.getFront(), H);
        sum -= H.pop();
      }
    }

    if (H.getSize() < K) {
      answer.push(-1);
    } else {
      answer.push(sum);
    }
  }

  return answer.join(" ");
}

const output = console.log(solution(input));

// module.exports = solution;
