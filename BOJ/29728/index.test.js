const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `1`;

    const answer = `1 0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  /**
   * 1 B
   * 2 SS
   * 3 SSS
   */
  test('예제2', () => {
    const input = `3`;

    const answer = '0 3'
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  /**
   * 1 B
   * 2 SS
   * 3 SSS
   * 4 SSSB
   * 5 SSSSS
   * 6 SSSSSB
   * 7 SSSSSSS
   */
  test('예제3', () => {
    const input = `7`;

    const answer = '0 7'
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
