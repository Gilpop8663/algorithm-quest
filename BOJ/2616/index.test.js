const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `7
    35 40 50 10 30 45 60
    2`;

    const answer = 240;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `9
    26 6 25 18 18 18 4 44 68
    1`;

    const answer = 138;

    expect(solution(input)).toEqual(answer);
  });
});
