const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `#.# ... ... #..
    #.# ... ... #..
    #.# ### ### ###
    #.# #.. ..# ..#
    ### ### ### ..#`;

    const answer = `02:34`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `### ### ..# ...
    ... #.# #.# #.#
    ### #.# .#. .#.
    #.. #.# ..# ..#
    ### #.# ..# ###`;

    const answer = `20:48`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `#.. #.# #.# .#.
    ..# #.. ... #..
    #.# .## ### .##
    ..# #.# ... ...
    #.# ### ##. ###`;

    const answer = `06:25`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
