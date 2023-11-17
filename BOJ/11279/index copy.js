// const input = require('fs').readFileSync(0, 'utf-8').trim();

/*
넣기
  1. 배열 맨 뒤에 추가
  2. 부모가 본인보다 우선순위가 낮다면 끌어내리기
빼기
  1. 맨 앞 요소 제거
  2. 맨 뒤 요소 제거 후 기억
  3. 맨 앞 요소의 빈 자리를 그 자식들 중 더 큰 애들로 채움
  4. 맨 마지막에 남는 빈 자리에 2번에서 기억한 값 넣기
  5. 4번에서 넣은 자리부터 부모 끌어내리기
*/
class Heap {
  list = [null];
  length = 0;

  push(value) {
    this.list.push(value);
    this.length += 1;
    this.pullParentDown(this.length);
  }

  pop() {
    if (this.length === 0) return 0;

    const deleted = this.list[1];
    const last = this.list.pop();
    this.length -= 1;

    if (this.length === 0) return deleted;

    // 남은 것이 없다면
    const leaf = this.fillEmpty();
    this.list[leaf] = last;
    this.pullParentDown(leaf);

    return deleted;
  }

  pullParentDown(start) {
    let me = start;
    const myValue = this.list[me];

    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (myValue <= this.list[parent]) break;

      this.list[me] = this.list[parent];
      me = parent;
    }

    this.list[me] = myValue;
  }

  fillEmpty() {
    let empty = 1;

    while (empty * 2 <= this.length) {
      const left = empty * 2;
      const right = left + 1;

      const largerChild =
        right > this.length || this.list[left] >= this.list[right]
          ? left
          : right;

      this.list[empty] = this.list[largerChild];
      empty = largerChild;
    }

    return empty;
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
