const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `6 4
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 1`;

    const answer = 8;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `6 4
    0 -1 0 0 0 0
    -1 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 1`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `6 4
    1 -1 0 0 0 0
    0 -1 0 0 0 0
    0 0 0 0 -1 0
    0 0 0 0 -1 1`;

    const answer = 6;

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `5 5
    -1 1 0 0 0
    0 -1 -1 -1 0
    0 -1 -1 -1 0
    0 -1 -1 -1 0
    0 0 0 0 0`;

    const answer = 14;

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `2 2
1 -1
-1 1`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });
});
