const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `10 2
    3 -2 -4 -9 0 3 7 13 8 -3`;

    const answer = 21;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `10 5
    3 -2 -4 -9 0 3 7 13 8 -3`;

    const answer = 31;

    expect(solution(input)).toEqual(answer);
  });
});
