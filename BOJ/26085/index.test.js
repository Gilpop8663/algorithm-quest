const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 4
    0 1 0 1
    1 1 0 0
    1 0 1 0`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 3
    0 0 0
    0 0 0
    0 0 0`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `2 2
    1 0
    0 1`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });
});
