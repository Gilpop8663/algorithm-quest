const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 7
    32 62
    42 68
    12 98
    95 13
    97 25
    93 37
    79 27
    75 19
    49 47
    67 17`;

    const answer = 3;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4 9
    8 52
    6 80
    26 42
    2 72
    51 19
    39 11
    37 29
    81 3
    59 5
    79 23
    53 7
    43 33
    77 21`;

    const answer = 5;

    expect(solution(input)).toEqual(answer);
  });
});
