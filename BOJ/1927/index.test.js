const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `9
    0
    12345678
    1
    2
    0
    0
    0
    0
    32`;

    const answer = `0
    1
    2
    12345678
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `6
    -1000
    1000
    -2000
    2000
    0
    0
    0
    0
    0`;

    const answer = `-2000
    -1000
    1000
    2000
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `6
    1000
    2000
    0
    0
    0`;

    const answer = `1000
    2000
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
