const solution = require('.');

test('예제1', () => {
  const input = `9
  push b
  push w
  push b
  push b
  count b
  count w
  pop
  rotate r
  count b`;

  const answer = `3
  1
  2`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `13
  push b
  rotate r
  count b
  rotate r
  push b
  push w
  rotate r
  push b
  push b
  count b
  rotate l
  push b
  count b`;

  const answer = `0
  1
  2`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `6
  rotate r
  push w
  pop
  push b
  count b
  count w`;

  const answer = `0
  0`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});
