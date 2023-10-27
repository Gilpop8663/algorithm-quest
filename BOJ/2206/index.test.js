const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `6 4
    0100
    1110
    1000
    0000
    0111
    0000`;

    const answer = 15;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4 4
    0111
    1111
    1111
    1110`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `2 2
    00
    00`;

    const answer = 3;

    expect(solution(input)).toEqual(answer);
  });
});
