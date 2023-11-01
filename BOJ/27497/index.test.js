const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    1 a
    2 b
    1 c
    3
    3`;

    const answer = `a`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `9
    1 c
    2 n
    1 h
    1 o
    2 i
    1 R
    3
    2 S
    1 n`;

    const answer = `Sinchon`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `7
    2 Y
    3
    1 R
    3
    3
    2 n
    2 O`;

    const answer = `On`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `11
    1 u
    3
    2 z
    3
    1 s
    2 A
    3
    1 a
    3
    3
    3`;

    const answer = `0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
