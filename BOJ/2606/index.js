const input = require('fs').readFileSync(0, 'utf-8').trim() ?? '';

function virusDfsSolution(input) {
  const data = input.split('\n').map((item) => item.trim());

  const [N, M, ...info] = data;

  const arr = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);
  const answer = Array(N + 1).fill(0);

  const DFS = (n) => {
    let count = 0;
    const stack = [];
    stack.push(n);

    visited[n] = true;

    while (stack.length > 0) {
      const poppedNum = stack.pop();

      count++;
      for (let i = 0; i < arr[poppedNum].length; i++) {
        const num = arr[poppedNum][i];

        if (visited[num]) continue;
        visited[num] = true;
        stack.push(num);
      }
    }

    return count - 1;
  };

  for (let i = 0; i < M; i++) {
    const [U, V] = info[i].split(' ').map((item) => Number(item));

    arr[U].push(V);
    arr[V].push(U);
  }

  return DFS(1);
}

const output = console.log(virusDfsSolution(input));

// module.exports = virusDfsSolution;
