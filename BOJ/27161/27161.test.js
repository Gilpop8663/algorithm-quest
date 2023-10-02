const crazyTime = require('.');

test('예제1', () => {
  const input = `7
  WATCH 4
  CLOCK 2
  HOURGLASS 3
  CLOCK 5
  HOURGLASS 3
  WATCH 2
  CLOCK 3`;

  const answer = `1 NO
  2 YES
  3 NO
  4 NO
  5 NO
  4 NO
  3 YES`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(crazyTime(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `5
  HOURGLASS 3
  CLOCK 12
  HOURGLASS 12
  WATCH 12
  HOURGLASS 1`;

  const answer = `1 NO
  12 YES
  11 NO
  12 YES
  1 NO`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(crazyTime(input)).toEqual(answer);
});
