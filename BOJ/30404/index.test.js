const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 3
    1 3 7`;

    const answer = 2;

    expect(solution(input)).toEqual(answer);
  });
});
