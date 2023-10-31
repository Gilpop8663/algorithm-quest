const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    1 3 2 -1
    2 4 4 -1
    3 1 2 4 3 -1
    4 2 4 3 3 5 6 -1
    5 4 6 -1`;

    const answer = 11;

    expect(solution(input)).toEqual(answer);
  });
});
