const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `11 2
    6+5
    -3-
    8+4`;

    const answer = `1
    0 0
    0 1
    0 2`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `1 3
    6+5
    -3-
    8+4`;

    const answer = `1
    2 2
    2 1
    1 1
    1 0
    0 0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `15 3
6+5
-3-
8+4`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });
});
