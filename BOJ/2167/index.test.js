const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2 3
    1 2 4
    8 16 32
    3
    1 1 2 3
    1 2 1 2
    1 3 2 3`;

    const answer = `63
    2
    36`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
