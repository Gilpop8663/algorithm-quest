const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [T, ...data] = input.split('\n').map((item) => item.trim());
  const answer = [];
  for (let i = 0; i < Number(T) * 2; i += 2) {
    const N = +data[i];
    let arr = data[i + 1].split(' ').map((item) => +item);

    let count = 1;

    while (1) {
      const pigs = arr.reduce((acc, cur) => {
        return acc + cur;
      }, 0);

      if (pigs > N) break;

      count += 1;

      arr = arr.map((item, index) => {
        const before = index === 0 ? 5 : index - 1;
        const next = index === 5 ? 0 : index + 1;
        const front = (index + 3) % 6;
        return arr[before] + arr[next] + arr[front] + item;
      });
    }

    answer.push(count);
  }

  return answer.join('\n');
}

const output = console.log(solution(input));

// module.exports = solution;
