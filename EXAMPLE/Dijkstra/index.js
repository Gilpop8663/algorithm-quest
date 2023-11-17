const input = require("fs").readFileSync(0, "utf-8").trim();

class Heap {
  // 거리 정점
  heap = [null];
  length = 0;

  push(value) {
    this.heap.push(value);
    this.length += 1;

    let me = this.length;

    while (me > 1) {
      const parent = Math.floor(me / 2);

      if (this.heap[parent][0] <= this.heap[me][0]) break;

      const tmp = this.heap[parent];
      this.heap[parent] = this.heap[me];
      this.heap[me] = tmp;

      me = parent;
    }
  }

  pop() {
    if (this.length === 0) return 0;

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

      if (right <= this.length && this.heap[left][0] > this.heap[right][0]) {
        minChild = right;
      }

      if (this.heap[minChild][0] >= this.heap[me][0]) break;

      const tmp = this.heap[minChild];
      this.heap[minChild] = this.heap[me];
      this.heap[me] = tmp;

      me = minChild;
    }

    return popped;
  }

  isEmpty() {
    return this.length === 0;
  }
}

function solution(input) {
  const [info, ...data] = input.split("\n").map((item) => item.trim());

  const [V, E] = info.split(" ").map((item) => +item);

  const dataa = data.map((item) => item.split(" ").map((item) => +item));

  const K = dataa[0][0];

  const arr = dataa.slice(1);

  const MAX_NUM = Infinity;

  const dp = Array(V + 1).fill(MAX_NUM);

  const adj = Array.from({ length: V + 1 }, () => []);

  arr.forEach((item) => {
    const [U, V, W] = item;

    // 가는 곳, 가중치
    adj[U].push([V, W]);
  });

  // console.log(arr);

  // console.log(V, E, K, arr);

  const H = new Heap();

  // 거리 , 정점
  dp[K] = 0;
  H.push([dp[K], K]);

  while (!H.isEmpty()) {
    const [dist, num] = H.pop();
    // console.log(dist, num, adj[num], dp[num]);
    if (dp[num] !== dist) continue;

    for (let nxt of adj[num]) {
      // console.log(nxt);
      const [V, W] = nxt;
      if (dp[V] <= dp[num] + W) continue;
      dp[V] = dp[num] + W;
      H.push([dp[V], V]);
    }
  }

  const answer = [];

  for (let i = 1; i <= V; i++) {
    if (dp[i] === MAX_NUM) {
      answer.push("INF");
    } else {
      answer.push(dp[i]);
    }
  }

  // console.log(answer);

  return answer.join("\n");
}

const output = console.log(solution(input));

// module.exports = solution;
