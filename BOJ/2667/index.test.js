const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `7
    0110100
    0110101
    1110101
    0000111
    0100000
    0111110
    0111000`;

    const answer = `3
    7
    8
    9`
      .split('\n')
      .map(item => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
