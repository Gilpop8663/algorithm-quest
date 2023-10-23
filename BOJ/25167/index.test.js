const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `2 4 10
    ari betty cugi dori
    1 10:00 ari wrong
    1 10:05 ari solve
    2 10:06 betty solve
    2 10:10 cugi solve
    2 10:15 betty wrong
    1 10:20 cugi wrong
    1 10:26 cugi wrong
    1 10:30 cugi solve
    2 10:35 betty solve
    1 10:40 ari solve`;

    const answer = `ari
    cugi
    betty
    dori`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `2 4 10
    ari betty cugi dori
    1 10:00 ari wrong
    2 10:00 dori wrong
    1 10:15 betty wrong
    2 10:30 dori solve
    1 10:30 betty wrong
    1 11:00 betty solve
    1 12:00 ari solve
    2 13:00 ari wrong
    2 14:00 cugi wrong
    2 15:45 cugi solve`;

    const answer = `ari
    betty
    dori
    cugi`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
