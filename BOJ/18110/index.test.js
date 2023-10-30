const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    1
    5
    5
    7
    8`;

    const answer = 6;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `10
    1
    13
    12
    15
    3
    16
    13
    12
    14
    15`;

    const answer = 13;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `0
    0`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `0
    0`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `3
    20
    5
    1`;

    const answer = 9;

    expect(solution(input)).toEqual(answer);
  });
});
