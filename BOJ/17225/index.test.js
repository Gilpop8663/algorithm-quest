const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `0 0 3
    1 B 3
    4 R 2
    7 R 2`;

    const answer = `3
    1 2 3
    4
    4 5 6 7`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `2 3 4
    1 B 3
    4 R 2
    6 B 2
    12 R 1`;

    const answer = `5
    1 2 4 5 7
    3
    3 6 8`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `200 300 2
    1 B 7
    4 R 5`;

    /**
     * 1 3 5 6 8 10 11
     * 2 4 7 9 12
     * 1 201 401 601 801 1001 1201
     * 4 304 604 904 1201
     */
    const answer = `7
    1 3 5 6 8 10 11
    5
    2 4 7 9 12`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `300 300 2
    1 B 3
    2 R 2`;

    const answer = `3
    1 3 5
    2
    2 4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `5 1 2
    1 B 3
    2 R 10`;

    /**
     * 1 6 11
     * 2 3 4 5 6 7 8 9 10 11
     */
    const answer = `3
    1 6 12
    10
    2 3 4 5 7 8 9 10 11 13`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `5 1 2
    1 B 3
    2 R 10`;

    /**
     * 1 6 11
     * 2 3 4 5 6 7 8 9 10 11
     */
    const answer = `3
    1 6 12
    10
    2 3 4 5 7 8 9 10 11 13`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제6', () => {
    const input = `101 300 3
    1 B 2
    2 R 2
    102 R 2
    302 B 1`;

    /**
     * 1 6 11
     * 2 3 4 5 6 7 8 9 10 11
     */
    const answer = `2
    1 3
    4
    2 4 5 6`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
