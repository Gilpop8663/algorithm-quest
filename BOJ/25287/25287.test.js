const sortNumberSolution = require('.');

test('예제1', () => {
  const input = `5
  1
  1
  2
  2 1
  3
  2 3 1
  5
  5 2 3 4 1
  5
  2 5 3 1 4`;

  const answer = `YES
  YES
  YES
  YES
  NO`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(sortNumberSolution(input)).toEqual(answer);
});
