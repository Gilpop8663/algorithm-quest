const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5 3
    5 4 3 2 1
    1 3
    2 4
    5 5`;

    const answer = `12
    9
    1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
