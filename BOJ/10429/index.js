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

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const [N, M] = info.split(' ').map((item) => +item);

  const arr = data.map((item) =>
    item.split('').map((item) => {
      if (isNaN(item)) {
        return item;
      }

      return +item;
    })
  );
  const Q = new Queue();

  const answer = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (isNaN(arr[i][j])) continue;

      const visited = Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => false)
      );

      const func = (x, y, sum, pre) => {
        // if (sum < 0) return;
        if (pre.length > M * 2) return;
        const mockPre = [...pre];
        // console.log(x, y, sum, pre);

        const isStr = arr[x][y] === '+' || arr[x][y] === '-';
        if (sum === N && pre.length === M * 2 - 1) {
          // console.log(x, y, sum, pre);
          answer.push(1);
          mockPre.forEach((item) => answer.push(item.join(' ')));

          // console.log(answer.join('\n'));
          return [1, mockPre];
        }

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || ny < 0 || nx >= 3 || ny >= 3) continue;
          const isNxtStr = arr[nx][ny] === '+' || arr[nx][ny] === '-';
          if (isStr === isNxtStr) continue;
          if (visited[nx][ny]) continue;
          const updatedPre = [...mockPre, [nx, ny]];

          if (isNxtStr) {
            visited[nx][ny] = true;
            func(nx, ny, sum, updatedPre);
            visited[nx][ny] = false;
          }

          if (arr[x][y] === '+') {
            visited[nx][ny] = true;
            func(nx, ny, sum + arr[nx][ny], updatedPre);
            visited[nx][ny] = false;
          } else if (arr[x][y] === '-') {
            visited[nx][ny] = true;
            func(nx, ny, sum - arr[nx][ny], updatedPre);
            visited[nx][ny] = false;
          }
        }

        return 0;
      };

      visited[i][j] = true;
      func(i, j, arr[i][j], [[i, j]]);

      // console.log(result);

      if (answer.length > 0) {
        return answer.join('\n');
      }
    }
  }

  return 0;
}

const output = console.log(solution(input));

// module.exports = solution;
