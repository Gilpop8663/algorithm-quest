const input = require('fs').readFileSync(0, 'utf-8').trim();

/**
 * 옥수수 밭을 1칸씩 전진해가며 최고의 가치를 얻어야 한다.
 * 모든 칸에서 BFS를 진행해봐야하나요 시간 초과
 * 움직인 칸수가 이동하려는 배열의 칸수보다 크면서 합계가 작다면 움직이지 않고 끝낸다
 * 움직인 칸수가 이동하려는 배열의 칸수보다 작고 합계가
 *
 * 해결방법: 우선순위큐를 이용하여 바깥을 먼저 다 둘러서 보여준 후 최상단의 가치가 높은 값을 K번 빼내서 더하면 된다
 *
 *
 */
class Heap {
  list = [null];

  isEmpty() {
    return this.list.length === 0;
  }

  push(corn, r, c) {
    this.list.push([corn, r, c]);
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
    const [myCorn] = me;

    while (myPos > 1) {
      const parentPos = Math.floor(myPos / 2);
      const parent = this.list[parentPos];
      const [parentCorn] = parent;

      if (myCorn <= parentCorn) break;

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
      const [leftChildCorn] = leftChild;

      const rightChildPos = leftChildPos + 1;
      const rightChild = this.list[rightChildPos] ?? [-Infinity];
      const [rightChildCorn] = rightChild;

      if (leftChildCorn > rightChildCorn) {
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

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = data.map((item) => item.split(' ').map((item) => +item));
  const pq = new Heap();

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j]) continue;

      if (i === 0 || i === N - 1 || j === 0 || j === M - 1) {
        pq.push(arr[i][j], i, j);
        visited[i][j] = true;
      }
    }
  }

  let K = arr.at(-1)[0];

  const answer = [];

  while (K--) {
    const [value, x, y] = pq.pop();

    answer.push(`${x + 1} ${y + 1}`);

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny]) continue;

      pq.push(arr[nx][ny], nx, ny);
      visited[nx][ny] = true;
    }
  }

  return answer.join('\n').trim();
}

const output = console.log(solution(input));

// module.exports = solution;
