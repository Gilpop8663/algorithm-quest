const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `7 6
    ######
    #W#.##
    #.+++#
    #.####
    #+..##
    #.####
    ######`;

    const answer = `######
    #W#P##
    #.+++#
    #.####
    #+PP##
    #.####
    ######`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `8 6
    ######
    #.#.##
    #.++.#
    ##.#W#
    #+++W#
    ###.##
    #.++.#
    ######`;

    const answer = `######
    #.#P##
    #.++.#
    ##P#W#
    #+++W#
    ###P##
    #P++P#
    ######`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `3 4
    ####
    #W.#
    ####`;

    const answer = `####
    #W.#
    ####`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `5 7
    #######
    #..+..#
    ###+###
    #+W.++#
    #######`;

    const answer = `#######
    #..+..#
    ###+###
    #+W.++#
    #######`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `10 7
    #######
    #..+..#
    ###+###
    #+W+++#
    #+++#.#
    ##++++#
    ###.###
    #+++++#
    #.#+#.#
    #######`;

    const answer = `#######
    #..+..#
    ###+###
    #+W+++#
    #+++#.#
    ##++++#
    ###.###
    #+++++#
    #P#+#P#
    #######`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
