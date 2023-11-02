const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `4 3
    0 1 2 3
    1 0 -2 6
    2 -2 0 5
    3 6 5 0`;

    const answer = 10;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4 1
    0 1 2 3
    1 0 -2 6
    2 -2 0 5
    3 6 5 0`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });
});
