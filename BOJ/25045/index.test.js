const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5 5
    6 7 8 9 10
    2 3 4 5 6`;

    const answer = 20;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `5 3
    927291536 144432154 222251432 846751354 648975123
    105423157 28465 1354216`;

    const answer = 2316212175;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `3 3
    10 5 7
    1 3 5`;

    const answer = 13;

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `3 3
    0 0 10
    3 10 10`;

    const answer = 7;

    expect(solution(input)).toEqual(answer);
  });
});
