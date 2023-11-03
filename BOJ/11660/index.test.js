const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `4 3
    1 2 3 4
    2 3 4 5
    3 4 5 6
    4 5 6 7
    2 2 3 4
    3 4 3 4
    1 1 4 4`;

    const answer = `27
    6
    64`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `2 4
    1 2
    3 4
    1 1 1 1
    1 2 1 2
    2 1 2 1
    2 2 2 2`;

    const answer = `1
    2
    3
    4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
