const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `10
    20
    30
    40
    50
    60
    70
    80
    90
    100`;

    const answer = 100;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `1
    2
    3
    5
    8
    13
    21
    34
    55
    89`;

    const answer = 87;

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `40
    40
    40
    40
    40
    40
    40
    40
    40
    40`;

    const answer = 120;

    expect(solution(input)).toEqual(answer);
  });
});
