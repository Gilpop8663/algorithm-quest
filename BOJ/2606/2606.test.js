const virusDfsSolution = require('.');

test('예제1', () => {
  const input = `7
  6
  1 2
  2 3
  1 5
  5 2
  5 6
  4 7`;

  const answer = 4;

  expect(virusDfsSolution(input)).toBe(answer);
});

test('예제2', () => {
  const input = `6
  5
  1 2
  2 3
  3 4
  4 1
  4 6`;

  const answer = 4;

  expect(virusDfsSolution(input)).toBe(answer);
});

test('예제3', () => {
  const input = `1
  0`;

  const answer = 0;

  expect(virusDfsSolution(input)).toBe(answer);
});
