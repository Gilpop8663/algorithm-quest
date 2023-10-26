const input = require('fs').readFileSync(0, 'utf-8').trim();

class Queue {
  queue = [];
  top = 0;

  push(value) {
    this.queue.push(value);
  }

  pop() {
    const popped = this.queue[this.top];

    this.top += 1;

    return popped;
  }

  isEmpty() {
    return this.queue.length === this.top;
  }
}

const dx = [1, 0, -1, 0, 1, 1, -1, -1];
const dy = [0, 1, 0, -1, 1, -1, 1, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M, K] = info.split(' ').map((item) => +item);

  const arr = [];

  const words = [];

  for (let i = 0; i < N; i++) {
    arr.push(data[i].split(''));
  }

  const wordMap = new Map();

  for (let i = N; i < N + K; i++) {
    words.push(data[i]);
    wordMap.set(data[i], 0);
  }

  const func = (xN, yN) => {
    const Q = new Queue();
    const visited = Array.from({ length: N + 1 }, () =>
      Array.from({ length: M + 1 }, () =>
        Array.from({ length: 9 }, () => false)
      )
    );

    for (let i = 0; i < 8; i++) {
      // visited[xN][yN][][i] = true;
      // Q.push([xN, yN, i, arr[xN][yN]]);
    }
    Q.push([xN, yN, arr[xN][yN]]);

    while (!Q.isEmpty()) {
      const [x, y, word] = Q.pop();

      if (word.length > 5) continue;

      // if (word === 'aaaaaaa') {
      //   console.log(x, y);
      // }

      if (wordMap.has(word)) {
        const num = wordMap.get(word);
        wordMap.set(word, num + 1);
      }

      for (let k = 0; k < 8; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx === -1) {
          nx = N - 1;
        }

        if (nx === N) {
          nx = 0;
        }

        if (ny === -1) {
          ny = M - 1;
        }

        if (ny === M) {
          ny = 0;
        }

        Q.push([nx, ny, word + arr[nx][ny]]);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      func(i, j);
    }
  }

  const answer = words
    .map((item) => {
      return wordMap.get(item);
    })
    .join('\n');

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
