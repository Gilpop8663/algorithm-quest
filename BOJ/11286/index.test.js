const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `18
    1
    -1
    0
    0
    0
    1
    1
    -1
    -1
    2
    -2
    0
    0
    0
    0
    0
    0
    0`;

    const answer = `-1
    1
    0
    -1
    -1
    1
    1
    -2
    2
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 2
    1 1
    3 3`;

    const answer = `2`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
