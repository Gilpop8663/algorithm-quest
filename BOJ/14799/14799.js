const input = require('fs').readFileSync(0, 'utf-8').trim();

function khantoaSolution(input) {
  const data = input.split('\n').map((item) => Number(item));

  const answer = [];

  const answerFunc = (value) => {
    if (value === 1) {
      return '-';
    }

    return (
      answerFunc(value / 3) + ' '.repeat(value / 3) + answerFunc(value / 3)
    );
  };

  data.forEach((item) => {
    let num = 1;
    for (let i = 0; i < item; i++) {
      num *= 3;
    }

    answer.push(answerFunc(num));
  });

  return answer.join('\n');
}

const output = console.log(khantoaSolution(input));

// module.exports = khantoaSolution;
