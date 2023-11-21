const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `6 7 3
    .......
    ...O...
    ....O..
    .......
    OO.....
    OO.....`;

    const answer = `OOO.OOO
    OO...OO
    OOO...O
    ..OO.OO
    ...OOOO
    ...OOOO`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `6 7 4
    .......
    ...O...
    ....O..
    .......
    OO.....
    OO.....`;

    const answer = `OOOOOOO
    OOOOOOO
    OOOOOOO
    OOOOOOO
    OOOOOOO
    OOOOOOO`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `6 7 5
    .......
    ...O...
    ....O..
    .......
    OO.....
    OO.....`;

    const answer = `.......
    ...O...
    ....O..
    .......
    OO.....
    OO.....`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
