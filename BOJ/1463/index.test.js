const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `10`;

    const answer = 3;

    expect(solution(input)).toEqual(answer);
  });
});
