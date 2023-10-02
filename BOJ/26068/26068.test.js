const chickenDance = require('.');

test('예제1', () => {
  const input = `3
  D-86
  D-8
  D-6`;

  const answer = 3;

  expect(chickenDance(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `4
  D-98
  D-5
  D-94
  D-2`;

  const answer = 2;

  expect(chickenDance(input)).toEqual(answer);
});
