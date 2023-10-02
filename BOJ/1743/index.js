const input = require('fs').readFileSync(0, 'utf-8').trim();

function foodDodgeDfs(input) {
  const data = input.split('\n').map((item) => item.trim());
  const [info, ...graph] = data;
  const [N, M, K] = info.split(' ').map((item) => Number(item));

  let count = 0;

  const arr = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => false)
  );

  const visited = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => false)
  );

  for (let i = 0; i < K; i++) {
    const [X, Y] = graph[i].split(' ').map((item) => Number(item));
    arr[X][Y] = true;
  }

  let answer = 0;

  const DFS = (x, y) => {
    visited[x][y] = true;
    count++;

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 1 || ny < 1 || nx > N || ny > M) continue;
      if (visited[nx][ny] || arr[nx][ny] === false) continue;

      DFS(nx, ny);
    }
  };

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (arr[i][j] && !visited[i][j]) {
        count = 0;

        DFS(i, j);

        if (answer < count) {
          answer = count;
        }
      }
    }
  }

  return answer;
}

const output = console.log(foodDodgeDfs(input));

// module.exports = foodDodgeDfs;
