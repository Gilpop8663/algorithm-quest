const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5 5 2 2 3
    2 2
    3 2
    3 3
    4 1
    1 4`;

    const answer = 6;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `5 5 2 2 4
    2 2
    3 2
    3 3
    1 4
    4 1
    1 4`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `5 5 2 2 4
    2 2
    3 2
    3 3
    1 4
    4 1
    1 4`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제 3', () => {
    const input = `5 5 3 2 3
    2 2
    3 2
    3 3
    3 1
    1 4`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제 4', () => {
    const input = `2 2 1 1 0
    1 1
    2 2`;

    const answer = 2;

    expect(solution(input)).toEqual(answer);
  });

  test('예제 5', () => {
    const input = `4 4 1 1 2
    1 2
    2 1
    1 1
    4 4`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });
});
