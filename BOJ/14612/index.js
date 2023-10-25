const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());
  const [N, M] = info.split(' ').map((item) => +item);

  let answer = '';
  let post = [];

  for (let i = 0; i < N; i++) {
    const [action, kind, kind2] = data[i].split(' ');

    if (action === 'order') {
      post.push([Number(kind), Number(kind2)]);

      answer += post.map((item) => item[0]).join(' ') + '\n';
    }

    if (action === 'sort') {
      if (post.length === 0) {
        answer += 'sleep' + '\n';
        continue;
      }

      post.sort((a, b) => {
        if (a[1] !== b[1]) {
          return a[1] - b[1];
        }

        return a[0] - b[0];
      });

      answer += post.map((item) => item[0]).join(' ') + '\n';
    }

    if (action === 'complete') {
      post = post.filter((item) => item[0] !== Number(kind));

      if (post.length === 0) {
        answer += 'sleep' + '\n';
        continue;
      }
      answer += post.map((item) => item[0]).join(' ') + '\n';
    }
  }

  return answer.trim();
}

const output = console.log(solution(input));

// module.exports = solution;
