const soDDuckSoDDuck = require('.');

test('예제1', () => {
  const input = `5
  7 -1 6 2 5`;

  const answer = 9;

  expect(soDDuckSoDDuck(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `8
  5 2 -1 9 9 9 9 1`;

  const answer = 3;

  expect(soDDuckSoDDuck(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `7
  321 -1 88 777 105 456 88`;

  const answer = 409;

  expect(soDDuckSoDDuck(input)).toEqual(answer);
});
