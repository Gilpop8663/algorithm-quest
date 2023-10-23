const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `1 2`;

    const answer = `yt`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `2 2`;

    const answer = 'yj'
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `3 1`;

    const answer = 'yj'
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
