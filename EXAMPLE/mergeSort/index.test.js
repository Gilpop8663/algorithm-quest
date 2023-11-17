const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `-6 4 7 4 3 2 1 7 9`;

    const answer = `-6 1 2 3 4 4 7 7 9`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `-1000 1 4 6000 4000 300200 10020 30 -1 0`;

    const answer = `-1000 -1 0 1 4 30 4000 6000 10020 300200`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
