// const input = require('fs').readFileSync(0, 'utf-8').trim();

/*
넣기
  1. 배열 맨 뒤에 추가
  2. 부모가 본인보다 우선순위가 낮다면 끌어내리기
빼기
  1. 맨 앞 요소 제거
  2. 맨 뒤 요소 제거 후 맨 앞자리에 삽입
  3. 맨 앞 요소부터 본인 자식들 중 본인보다 우선순위가 높은 게 있다면 끌어올리기
*/
class Heap {
  list = [null];
  length = 0;

  push(value) {
    this.list.push(value);
    this.length += 1;

    let me = this.length;

    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (value <= this.list[parent]) break;

      this.list[me] = this.list[parent];
      me = parent;
    }

    this.list[me] = value;
  }

  pop() {
    if (this.length === 0) return 0;

    const deleted = this.list[1];
    const last = this.list.pop();
    this.length -= 1;

    if (this.length === 0) return deleted;

    let me = 1;

    while (me * 2 <= this.length) {
      const left = me * 2;
      const right = left + 1;

      const largerChild =
        right > this.length || this.list[left] >= this.list[right]
          ? left
          : right;

      if (last >= this.list[largerChild]) break;

      this.list[me] = this.list[largerChild];
      me = largerChild;
    }

    this.list[me] = last;

    return deleted;
  }
}

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const arr = data.map((item) => +item);
  const answer = [];
  const H = new Heap();
  arr.forEach((item) => {
    if (item === 0) {
      answer.push(H.pop());
    } else {
      H.push(item);
    }
  });

  return answer.join('\n');
}

// const output = console.log(solution(input));

module.exports = solution;
