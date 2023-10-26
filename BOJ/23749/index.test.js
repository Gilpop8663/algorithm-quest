const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2
    X O O X`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });
});
