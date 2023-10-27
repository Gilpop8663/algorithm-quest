const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    1 4 5 2 3`;

    const answer = `YES`
      .split('\n')
      .map(item => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `5
    3 1 5 2 4`;

    const answer = `NO`
      .split('\n')
      .map(item => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
