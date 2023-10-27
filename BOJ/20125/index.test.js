const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5
    _____
    __*__
    _***_
    __*__
    _*_*_`;

    const answer = `3 3
    1 1 1 1 1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `10
    __________
    _____*____
    __******__
    _____*____
    _____*____
    _____*____
    ____*_*___
    ____*_____
    ____*_____
    ____*_____`;

    const answer = `3 6
    3 2 3 4 1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `9
    ____*____
    *********
    ____*____
    ____*____
    ____*____
    ___*_*___
    ___*_*___
    ___*_*___
    ___*_*___`;

    const answer = `2 5
    4 4 3 4 4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
