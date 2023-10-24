const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `7 20
    1 11 M 13
    2 13 M 15
    3 11 F 13
    4 11 M 3
    5 11 F 3
    6 11 C 3 13
    7 13 A 11`;

    const answer = `1
    7
    1
    13`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `8 15
    1 10 M 13
    2 13 M 15
    3 10 F 13
    4 10 M 3
    5 1 M 15
    6 10 F 3
    7 10 C 3 13
    8 1 A 13`;

    const answer = `0
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `11 7
1 2 A 6
2 7 F 2
3 1 M 43
4 1 F 43
5 1 C 43 1
6 5 C 1 2
7 4 F 1
8 4 M 5
9 4 F 5
10 4 C 1 5
11 4 C 1 5`;

    const answer = `4
    2 5 6 11
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
