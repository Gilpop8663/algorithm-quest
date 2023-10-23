class Heap {
  list = [null];

  isEmpty() {
    return this.list.length === 0;
  }

  push(value) {
    this.list.push(value);
    this.pullParentDown(this.list.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;

    const target = this.list[1];
    const lastValue = this.list.pop();

    if (this.isEmpty()) return target;

    const emptyLeaf = this.fillEmptyNodes();
    this.list[emptyLeaf] = lastValue;
    this.pullParentDown(emptyLeaf);

    return target;
  }

  pullParentDown(start) {
    let myPos = start;
    const me = this.list[start];

    while (myPos > 1) {
      const parentPos = Math.floor(myPos / 2);
      const parent = this.list[parentPos];

      if (me <= parent) break;

      this.list[myPos] = parent;
      myPos = parentPos;
    }

    this.list[myPos] = me;
  }

  fillEmptyNodes() {
    let emptyPos = 1;

    while (emptyPos * 2 < this.list.length) {
      const leftChildPos = emptyPos * 2;
      const leftChild = this.list[leftChildPos];

      const rightChildPos = leftChildPos + 1;
      const rightChild = this.list[rightChildPos] ?? [-Infinity];

      if (leftChild > rightChild) {
        this.list[emptyPos] = leftChild;
        emptyPos = leftChildPos;
      } else {
        this.list[emptyPos] = rightChild;
        emptyPos = rightChildPos;
      }
    }

    return emptyPos;
  }
}
