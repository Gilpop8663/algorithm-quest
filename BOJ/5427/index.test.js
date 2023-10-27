const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    4 3
    ####
    #*@.
    ####
    7 6
    ###.###
    #*#.#*#
    #.....#
    #.....#
    #..@..#
    #######
    7 4
    ###.###
    #....*#
    #@....#
    .######
    5 5
    .....
    .***.
    .*@*.
    .***.
    .....
    3 3
    ###
    #@#
    ###`;

    const answer = `2
    5
    IMPOSSIBLE
    IMPOSSIBLE
    IMPOSSIBLE`
      .split('\n')
      .map(item => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
