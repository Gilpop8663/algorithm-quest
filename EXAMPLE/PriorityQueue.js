// https://devmill.tistory.com/41

// 방법 1

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
    if (!this.length) return 0;

    const deleted = this.list[1];
    const last = this.list.pop();
    this.length -= 1;

    if (!this.length) return deleted;

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

// 방법 2
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
    if (!this.length) return 0;

    const deleted = this.list[1];
    const last = this.list.pop();
    this.length -= 1;

    if (!this.length) return deleted;

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

// 방법 3

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
