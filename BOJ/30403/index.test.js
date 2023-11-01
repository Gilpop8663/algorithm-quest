const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `7
    roygbiv`;

    const answer = `yes`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
