const solution = require('.');

test('예제1', () => {
  const input = `6 5
  1 2
  2 5
  5 1
  3 4
  4 6`;

  const answer = 2;

  expect(solution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `6 8
  1 2
  2 5
  5 1
  3 4
  4 6
  5 4
  2 4
  2 3`;

  const answer = 1;

  expect(solution(input)).toEqual(answer);
});
