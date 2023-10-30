const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 5
    OOOPO
    OIOOX
    OOOXP`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 3
    IOX
    OXP
    XPP`;

    const answer = `TT`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
