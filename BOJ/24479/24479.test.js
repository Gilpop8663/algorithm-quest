const basicDfsSolution = require('.');

test('예제1', () => {
  const input = `5 5 1
  1 4
  1 2
  2 3
  2 4
  3 4`;

  const answer = `1
  2
  3
  4
  0`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(basicDfsSolution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `4 4 1
  1 2
  1 3
  1 4
  2 4`;

  const answer = `1
  2
  4
  3`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(basicDfsSolution(input)).toEqual(answer);
});
