const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3
    10
    20
    40`;

    const answer = 100;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3
    30
    30
    40
    10`;

    const answer = 220;

    expect(solution(input)).toEqual(answer);
  });
});
