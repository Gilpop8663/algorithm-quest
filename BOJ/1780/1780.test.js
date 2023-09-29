const colorPaperSolution = require('./1780');

test('예제1', () => {
  const input = `9
  0 0 0 1 1 1 -1 -1 -1
  0 0 0 1 1 1 -1 -1 -1
  0 0 0 1 1 1 -1 -1 -1
  1 1 1 0 0 0 0 0 0
  1 1 1 0 0 0 0 0 0
  1 1 1 0 0 0 0 0 0
  0 1 -1 0 1 -1 0 1 -1
  0 -1 1 0 1 -1 0 1 -1
  0 1 -1 1 0 -1 0 1 -1`;

  const answer = `10
  12
  11`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(colorPaperSolution(input)).toEqual(answer);
});
