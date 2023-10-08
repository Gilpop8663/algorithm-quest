const DabbabaChess = require('.');

test('예제1', () => {
  const input = `8 2
  2 2
  5 5`;

  const answer = 6;

  expect(DabbabaChess(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `3 2
  1 1
  3 3`;

  const answer = 2;

  expect(DabbabaChess(input)).toEqual(answer);
});
test('예제3', () => {
  const input = `3 4
  1 1
  1 3
  3 1
  3 3`;

  const answer = 0;

  expect(DabbabaChess(input)).toEqual(answer);
});

test('예제4', () => {
  const input = `3 4
  1 1
  1 2
  2 1
  2 2`;

  const answer = 4;

  expect(DabbabaChess(input)).toEqual(answer);
});

test('예제5', () => {
  const input = `100000 5
  3234 58944
  34214 3231
  1 100000
  86 4733
  5437 2932`;

  const answer = 18;

  expect(DabbabaChess(input)).toEqual(answer);
});
