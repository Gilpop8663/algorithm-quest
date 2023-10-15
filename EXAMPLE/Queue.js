/**
 * 큐 구현 방법 1
 */
class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back += 1;
  }

  pop() {
    if (!this.isEmpty()) {
      return -1;
    }

    const popped = this.queue[this.front];
    this.front += 1;

    return popped;
  }

  getSize() {
    return this.back - this.front;
  }

  isEmpty() {
    return this.getSize() === 0 ? 1 : 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return -1;
    }

    return this.queue[this.front];
  }

  getBack() {
    if (!this.isEmpty()) {
      return -1;
    }

    return this.queue[this.back - 1];
  }
}

/**
 * 큐 구현 방법 2
 * 보다 더 간단하다는 장점이 있는 것 같음
 */
class Queue2 {
  queue = [];
  top = 0;

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    const popped = this.queue[this.top];
    this.top += 1;
    return popped;
  }

  isEmpty() {
    return this.queue.length - this.top === 0;
  }

  getSize() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue.length - this.top;
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.top];
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.queue.length - 1];
  }
}
