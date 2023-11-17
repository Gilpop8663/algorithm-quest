const input = require("fs").readFileSync(0, "utf-8").trim();

class Heap {
  heap = [null];
  length = 0;

  push(value) {
    this.heap.push(value);
    this.length += 1;

    let me = this.length;

    // console.log(value, this.heap, me);
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

      if (this.heap[me][0] <= this.heap[minChild][0]) break;

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

  const [N, M] = info.split(" ").map((item) => +item);

  const roadData = data.map((item) => item.split(" ").map((item) => +item));

  const adj = Array.from({ length: N + 1 }, () => []);
  let dp = Array.from({ length: N + 1 }, () => Infinity);
  const pre = Array(N + 1).fill(0);
  const check = Array.from({ length: N + 10 }, () =>
    Array.from({ length: N + 10 }, () => false)
  );

  // console.log(arr);

  roadData.forEach((item) => {
    const [A, B, T] = item;
    // 정점 거리
    adj[A].push([B, T]);
    adj[B].push([A, T]);
  });

  dp[1] = 0;
  const H = new Heap();
  H.push([0, 1]);

  while (!H.isEmpty()) {
    const [dist, num] = H.pop();

    if (dp[num] !== dist) continue;

    for (let nxt of adj[num]) {
      const [num2, dist2] = nxt;

      if (dp[num2] <= dp[num] + dist2) continue;
      dp[num2] = dp[num] + dist2;
      pre[num2] = num;
      H.push([dp[num2], num2]);
    }
  }

  const minNum = dp[N];
  let maxNum = 0;

  let st = N;
  let answer = 0;
  while (1) {
    if (st === 1) break;
    const prev = st;
    st = pre[st];
    const next = st;
    // console.log(next, prev, "시작");
    check[next][prev] = true;
    dp = Array.from({ length: N + 1 }, () => Infinity);

    dp[1] = 0;
    H.push([0, 1]);

    while (!H.isEmpty()) {
      const [dist, num] = H.pop();

      if (dp[num] !== dist) continue;

      for (let nxt of adj[num]) {
        const [num2, dist2] = nxt;
        // console.log(num, num2, check[num][num2]);
        if (check[num][num2]) continue;
        if (dp[num2] <= dp[num] + dist2) continue;
        dp[num2] = dp[num] + dist2;
        H.push([dp[num2], num2]);
      }
    }
    // console.log(dp[N]);
    // console.log(dp[N]);
    // answer = Math.max(maxNum - minNum, answer);
    maxNum = Math.max(maxNum, dp[N]);

    check[next][prev] = false;
  }

  // console.log(minNum, maxNum);

  if (maxNum === Infinity) {
    return -1;
  }

  answer = maxNum - minNum;

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
