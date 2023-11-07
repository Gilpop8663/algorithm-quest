const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `9
    4
    1 3
    1 5
    3
    2
    5
    2
    2
    5`;

    const answer = `1
    2
    5
    3
    3
    -1
    -1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
