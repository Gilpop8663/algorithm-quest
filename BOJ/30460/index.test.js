const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3
    -2 0 1`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4
    1 2 3 4`;

    const answer = 20;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `5
    -1 -2 -3 -4 -5`;

    const answer = -15;

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `9
    -2 10 2 -7 9 1 -2 -3 4`;

    const answer = 34;

    expect(solution(input)).toEqual(answer);
  });
});
