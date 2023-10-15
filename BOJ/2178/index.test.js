const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `4 6
    101111
    101010
    101011
    111011`;

    const answer = 15;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4 6
    110110
    110110
    111111
    111101`;

    const answer = 9;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `2 25
    1011101110111011101110111
    1110111011101110111011101`;

    const answer = 38;

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `7 7
    1011111
    1110001
    1000001
    1000001
    1000001
    1000001
    1111111`;

    const answer = 13;

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `2 2
    11
    11`;

    const answer = 3;

    expect(solution(input)).toEqual(answer);
  });

  test('예제6', () => {
    const input = `2 3
    111
    111`;

    const answer = 4;

    expect(solution(input)).toEqual(answer);
  });

  test('예제7', () => {
    const input = `3 5
    10111
    10101
    11101`;

    const answer = 11;

    expect(solution(input)).toEqual(answer);
  });
});
