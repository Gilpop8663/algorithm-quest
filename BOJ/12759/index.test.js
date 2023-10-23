const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2
    1 3
    1 1
    3 1
    2 2
    3 3
    2 3
    3 2
    1 2
    2 1`;

    const answer = 2;
    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `1
    1 1
    3 3
    1 2
    3 2
    2 2
    3 1
    3 2
    1 2
    2 1`;

    const answer = 2;
    expect(solution(input)).toEqual(answer);
  });
});
