const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2
    21
    1 2 3 4 5 6
    21
    1 2 3 4 5 7`;

    const answer = `2
    1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
