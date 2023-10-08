const solution = require('.');

test('예제1', () => {
  const input = `105`;

  const answer = 6;

  expect(solution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `506`;

  const answer = 20;

  expect(solution(input)).toEqual(answer);
});
test('예제3', () => {
  const input = `1000000000`;

  const answer = 1;

  expect(solution(input)).toEqual(answer);
});
