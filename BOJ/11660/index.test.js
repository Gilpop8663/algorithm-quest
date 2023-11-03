const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `8 2
        2 2
  5 5`;

    const answer = `6`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 2
    1 1
    3 3`;

    const answer = `2`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
