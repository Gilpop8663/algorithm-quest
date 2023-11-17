const solution = require('./index copy');

describe('예제', () => {
  test('예제1', () => {
    const input = `13
    0
    1
    2
    0
    0
    3
    2
    1
    0
    0
    0
    0
    0`;

    const answer = `0
    2
    1
    3
    2
    1
    0
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
