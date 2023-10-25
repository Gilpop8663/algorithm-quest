const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3
    8
    0 0
    7 0
    100
    0 0
    30 50
    10
    1 1
    1 1`;

    const answer = `5
    28
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
