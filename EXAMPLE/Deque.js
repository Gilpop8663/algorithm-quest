class Deque {
  constructor(size) {
    this.deque = new Array(size * 2);
    this.front = size;
    this.back = size + 1;
  }

  pushFront(value) {
    this.deque[this.front] = value;
    this.front -= 1;
  }

  pushBack(value) {
    this.deque[this.back] = value;
    this.back += 1;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }

    this.front += 1;

    return this.deque[this.front];
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }

    this.back -= 1;

    return this.deque[this.back];
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.deque[this.front + 1];
  }

  getBack() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.deque[this.back - 1];
  }

  getSize() {
    return this.back - this.front - 1;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}
