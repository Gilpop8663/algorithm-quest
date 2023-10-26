const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `6 6 16
    0 0 0 0 1 1
    0 0 0 0 0 2
    1 1 1 0 1 0
    0 0 0 0 0 0
    0 1 1 1 1 1
    0 0 0 0 0 0`;

    const answer = 10;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 4 100
    0 0 0 0
    1 1 1 1
    0 0 2 0`;

    const answer = 'Fail';

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `6 6 9
    0 0 0 0 1 1
    0 0 0 0 0 2
    1 1 1 0 1 0
    0 0 0 0 0 0
    0 1 1 1 1 1
    0 0 0 0 0 0`;

    const answer = 'Fail';

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `1 3 3
    0 0 0`;

    const answer = 2;

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `2 3 3
    0 2 1
    0 1 1`;

    const answer = 3;

    expect(solution(input)).toEqual(answer);
  });
});
