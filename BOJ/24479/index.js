const input = require('fs').readFileSync(0, 'utf-8').trim() ?? '';

function basicDfsSolution(input) {
  let count = 1;
  const data = input.split('\n').map((item) => item.trim());

  const [N, M, R] = data[0].split(' ').map((item) => Number(item));

  const arr = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);
  const answer = Array(N + 1).fill(0);

  const DFS = (n) => {
    visited[n] = true;
    answer[n] = count;
    count++;

    for (let i = 0; i < arr[n].length; i++) {
      const num = arr[n][i];

      if (visited[num]) continue;

      DFS(num);
    }
  };

  for (let i = 0; i < M; i++) {
    const [U, V] = data[i + 1].split(' ').map((item) => Number(item));

    arr[U].push(V);
    arr[V].push(U);
  }

  arr.forEach((item) => item.sort((a, b) => a - b));

  DFS(R);

  return answer.slice(1).join('\n');
}

const output = console.log(basicDfsSolution(input));

// module.exports = basicDfsSolution;
