const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 3
    1 0 2
    0 0 0
    3 0 0
    2 3 2`;

    const answer = 3;
    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 3
    1 0 2
    0 0 0
    3 0 0
    1 2 2`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });
});
