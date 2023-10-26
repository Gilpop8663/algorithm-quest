const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `......
    ......
    ......
    ......
    ......
    ......
    ......
    ......
    .Y....
    .YG...
    RRYG..
    RRYGG.`;

    const answer = 3;

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `......
    ......
    ......
    ......
    ......
    ......
    ......
    ..Y...
    ..Y...
    ..Y...
    Y.Y...
    YYGGGG`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });
});
