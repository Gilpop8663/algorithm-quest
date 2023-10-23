const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `4 5
    1 18 2 3 4
    12 17 15 20 5
    11 14 19 13 6
    10 9 16 8 7
    6`;

    const answer = `1 2
    2 2
    4 3
    3 3
    2 3
    2 4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 3
    9 8 1
    4 5 2
    6 3 7
    4`;

    const answer = `1 1
    1 2
    3 3
    3 1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `1 4
    1 2 3 4
    4`;

    const answer = `1 4
    1 3
    1 2
    1 1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
