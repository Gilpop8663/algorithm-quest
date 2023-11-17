const input = require('fs').readFileSync(0, 'utf-8').trim();

class Heap {
  list = [null];
  length = 0;

  push(value) {
    this.list.push(value);
    this.length += 1;

    let me = this.length;
    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (this.list[me] >= this.list[parent]) break;

      const tmp = this.list[parent];
      this.list[parent] = this.list[me];
      this.list[me] = tmp;

      me = parent;
    }
  }

  pop() {
    if (this.length === 0) return 0;

    const popped = this.list[1];
    const last = this.list.pop();

    this.length -= 1;

    if (this.length === 0) return popped;

    let me = 1;
    this.list[1] = last;

    while (me * 2 <= this.length) {
      const left = me * 2;
      const right = me * 2 + 1;

      let minChild = left;

      if (right <= this.length && this.list[left] > this.list[right]) {
        minChild = right;
      }

      if (this.list[minChild] >= this.list[me]) break;

      const tmp = this.list[minChild];
      this.list[minChild] = this.list[me];
      this.list[me] = tmp;

      me = minChild;
    }

    return popped;
  }

  top() {
    return this.list[1];
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const arr = data.map((item) => +item);

  const H = new Heap();
  const answer = [];
  arr.forEach((item) => {
    if (item === 0) {
      answer.push(H.pop());
    } else {
      H.push(item);
    }
  });

  // console.log(H);

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
