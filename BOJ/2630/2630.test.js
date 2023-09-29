const colorPaperCutSolution = require('./2630');

test('예제1', () => {
  const input = `8
  1 1 0 0 0 0 1 1
  1 1 0 0 0 0 1 1
  0 0 0 0 1 1 0 0
  0 0 0 0 1 1 0 0
  1 0 0 0 1 1 1 1
  0 1 0 0 1 1 1 1
  0 0 1 1 1 1 1 1
  0 0 1 1 1 1 1 1`;

  const answer = `9
  7`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(colorPaperCutSolution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `4
  0 0 0 0
  0 0 0 0
  0 0 0 0
  0 0 0 0`;

  const answer = `1
  0`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(colorPaperCutSolution(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `4
  0 0 0 0
  0 0 1 0
  0 0 0 0
  0 0 0 0`;

  const answer = `6
  1`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(colorPaperCutSolution(input)).toEqual(answer);
});
