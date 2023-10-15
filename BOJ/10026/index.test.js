const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    RRRBB
    GGBBB
    BBBRR
    BBRRR
    RRRRR`;

    const answer = `4 3`
      .split('\n')
      .map(item => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
