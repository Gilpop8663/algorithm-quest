const input = require('fs').readFileSync(0, 'utf-8').trim();

class Heap {
  heap = [[null, null]];
  length = 0;

  push(value) {
    this.heap.push([value, Math.abs(value)]);
    this.length += 1;

    let me = this.length;

    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (this.heap[parent][1] < this.heap[me][1]) break;

      if (
        this.heap[parent][1] === this.heap[me][1] &&
        this.heap[parent][0] <= this.heap[me][0]
      )
        break;

      [this.heap[parent], this.heap[me]] = [this.heap[me], this.heap[parent]];

      me = parent;
    }
  }

  pop() {
    if (this.length === 0) return [0, 0];

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
      if (right <= this.length && this.heap[left][1] > this.heap[right][1]) {
        minChild = right;
      }
      if (
        right <= this.length &&
        this.heap[left][1] === this.heap[right][1] &&
        this.heap[left][0] > this.heap[right][0]
      ) {
        minChild = right;
      }

      if (this.heap[me][1] < this.heap[minChild][1]) break;
      if (
        this.heap[me][1] === this.heap[minChild][1] &&
        this.heap[me][0] <= this.heap[minChild][0]
      )
        break;

      const tmp = this.heap[me];
      this.heap[me] = this.heap[minChild];
      this.heap[minChild] = tmp;

      me = minChild;
    }

    return popped;
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const arr = data.map((item) => +item);

  const H = new Heap();
  const answer = [];
  arr.forEach((item) => {
    // console.log(H);
    if (item === 0) {
      answer.push(H.pop()[0]);
    } else {
      H.push(item);
    }
  });

  // console.log(answer);

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
