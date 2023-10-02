const soDDuckSoDDuck = require('.');

test('예제1', () => {
  const input = `7
  ststtss`;

  const answer = 2;

  expect(soDDuckSoDDuck(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `8
  ttsststt`;

  const answer = 1;

  expect(soDDuckSoDDuck(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `6
  ssttss`;

  const answer = 0;

  expect(soDDuckSoDDuck(input)).toEqual(answer);
});
