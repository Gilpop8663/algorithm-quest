const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5 17`;

    const answer = 4;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `100 0`;

    const answer = 100;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `100 200`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `0 100000`;

    const answer = 22;

    expect(solution(input)).toEqual(answer);
  });
});
