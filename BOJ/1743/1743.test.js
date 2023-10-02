const foodDodgeDfs = require('.');

test('예제1', () => {
  const input = `3 4 5
  3 2
  2 2
  3 1
  2 3
  1 1`;

  const answer = 4;

  expect(foodDodgeDfs(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `3 3 1
  2 2`;

  const answer = 1;

  expect(foodDodgeDfs(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `3 4 9
  1 1
  2 1
  3 1
  3 2
  3 3
  3 4
  2 4
  1 4
  1 3`;

  const answer = 9;

  expect(foodDodgeDfs(input)).toEqual(answer);
});
