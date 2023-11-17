const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2 2
    3 5
    2 9`;

    const answer = `2 3 5 9`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `2 1
    4 7
    1`;

    const answer = `1 4 7`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4 3
2 3 5 9
1 4 7`;

    const answer = `1 2 3 4 5 7 9`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
