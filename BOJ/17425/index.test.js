const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    1
    2
    10
    70
    10000`;

    const answer = `1
    4
    87
    4065
    82256014`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
