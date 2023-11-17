const input = require('fs').readFileSync(0, 'utf-8').trim();

class Heap {
  heap = [null];
  length = 0;

  push(value) {
    this.heap.push(value);
    this.length += 1;

    let me = this.length;

    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (this.heap[parent] <= this.heap[me]) break;

      [this.heap[parent], this.heap[me]] = [this.heap[me], this.heap[parent]];

      me = parent;
    }
  }

  pop() {
    if (this.length === 0) return 0;

    const popped = this.heap[1];
    const last = this.heap.pop();
    this.length -= 1;

    if (this.isEmpty()) return popped;

    let me = 1;
    this.heap[1] = last;

    while (me * 2 <= this.length) {
      const left = me * 2;
      const right = left + 1;

      let minChild = left;

      if (right <= this.length && this.heap[left] > this.heap[right]) {
        minChild = right;
      }

      if (this.heap[minChild] >= this.heap[me]) break;

      [this.heap[minChild], this.heap[me]] = [
        this.heap[me],
        this.heap[minChild],
      ];

      me = minChild;
    }

    return popped;
  }

  isEmpty() {
    return this.length === 0;
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const arr = data.map((item) => +item);

  const H = new Heap();

  if (arr.length === 1) return 0;

  // H.push(0);

  arr.forEach((item) => {
    H.push(item);
  });

  let answer = 0;

  // console.log(H);

  while (!H.isEmpty()) {
    const num = H.pop();
    const num2 = H.pop();
    const sum = num + num2;
    answer += sum;

    // console.log(num, num2);

    if (H.isEmpty()) break;
    H.push(sum);
  }

  // console.log(answer);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
