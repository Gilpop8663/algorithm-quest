const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `11
    FFFFFFRLRL
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    SOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    ZOOOOOOOOOO`;

    const answer = `Phew...`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `11
    FFFFFFRLRL
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    OOOOOOOOOOO
    ZOOOOOOOOOO`;

    const answer = `Aaaaaah!`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
