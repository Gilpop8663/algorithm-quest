const solution = require('.');

test('예제1', () => {
  const input = `1 5
  ABCDE
  AABBCCDDEE`;

  const answer = `Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `1 5
  ABCDE
  AABBCCDDEF`;

  const answer = `Not Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `2 2
  AB
  CD
  AABB
  CCDD`;

  const answer = `Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제4', () => {
  const input = `1
  A
  B`;

  const answer = `Not Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제5', () => {
  const input = `2 2
  AB
  BA
  AABB
  ABBA`;

  const answer = `Not Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제6', () => {
  const input = `3 4
  ABBA
  BABB
  ECDE
  AABBBBAA
  BBAABBBB
  EECCDDEE`;

  const answer = `Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});

test('예제7', () => {
  const input = `2 1
  A
  B
  BB
  BB`;

  const answer = `Not Eyfa`
    .split('\n')
    .map(item => item.trim())
    .join('\n');

  expect(solution(input)).toEqual(answer);
});
