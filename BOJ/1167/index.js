const input = require('fs').readFileSync(0, 'utf-8').trim();

let V, K, line, visited;

let answer = 0;

const DFS = (num, sum) => {
  visited[num] = true;

  if (sum > answer) {
    answer = sum;
    K = num;
  }

  // console.log(sum);

  for (let i = 0; i < line[num].length; i++) {
    const [nxt, dist] = line[num][i];
    if (visited[nxt]) continue;

    visited[nxt] = true;
    DFS(nxt, sum + dist);
    visited[nxt] = false;
  }
};

/**
 *
 * 지름 구하는 방법
 * 1 => 3 = 2
 * 2 => 4 = 4
 * 4 => 2 = 2
 * 5 => 4 = 6
 *
 */
function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  V = +info;

  const arr = data.map((item) => item.split(' '));

  visited = Array.from({ length: V + 1 }, () => false);

  line = Array.from({ length: V + 1 }, () => []);

  arr.forEach((item) => {
    const [N, ...info] = item;

    let i = 0;

    while (1) {
      const num = Number(info[i]);
      if (num === -1) break;

      const dist = Number(info[i + 1]);
      line[N].push([num, dist]);

      i += 2;
    }
  });

  // console.log(line);

  for (let i = 1; i <= V; i++) {
    if (visited[i]) continue;
    if (line[i].length !== 1) continue;
    DFS(i, 0);
    break;
  }

  for (let i = 0; i <= V; i++) {
    visited[i] = false;
  }
  answer = 0;
  DFS(K, 0);

  // console.log(answer, K);

  // console.log(answer, K);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
