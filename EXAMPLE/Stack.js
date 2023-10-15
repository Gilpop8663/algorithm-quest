/**
 * 스택 구현 방법 1
 */
class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.topIndex = -1;
  }

  push(value) {
    this.topIndex += 1;
    this.stack[this.topIndex] = value;
  }

  pop() {
    if (this.topIndex === -1) {
      return -1;
    }

    const popped = this.stack[this.topIndex];
    this.topIndex -= 1;

    return popped;
  }

  getSize() {
    return this.topIndex + 1;
  }

  isEmpty() {
    return this.topIndex === -1;
  }

  getTop() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.stack[this.topIndex];
  }
}

/**
 * 스택 구현 방법 2
 * javascript의 배열은 스택 자료구조이기에 간단하게 활용 가능하다
 */
class Stack {
  stack = [];

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const popped = this.stack.pop();

    return popped;
  }

  getSize() {
    return this.stack.length - 1;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getTop() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.stack[this.getSize()];
  }
}
