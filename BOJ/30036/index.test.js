const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 4 12
    RGB
    .@..
    .##.
    .##.
    ....
    jJRRJjjDDjDJ`;

    const answer = `....
    .RB.
    .BB.
    ...@`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `7 5 17
    UTILCUP
    .@...
    .#.#.
    ...#.
    ##.##
    ##...
    JjjUUJRJLLJJjjjjJ`;

    const answer = `@....
    .U.U.
    ...#.
    UU.##
    U#...`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `4 2 10
    ABCD
    @#
    ##
    JJJJDJjjjJ`;

    const answer = `@B
    BB`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `1 2 4
    AB
    @#
    ##
    JJjJ`;

    const answer = `@A
    A#`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `3 3 8
    ABC
    @..
    ...
    .#.
    RDLUjjjJ`;

    const answer = `@..
    ...
    .A.`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
