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

  /**
   * 1번
   * b 1점
   * ari 2점
   * c 5점
   * d 5점
   *
   * 2번
   * a 4점
   * b 5점
   * c 2점
   * d 1점
   *
   * 합계
   * a 6점
   * b 5점
   * c 7점
   * d 6점
   */
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

  test('예제3', () => {
    const input = `1 4 1
    ari dd bb cc
    1 10:00 ari wrong`;

    const answer = `ari
    bb
    cc
    dd`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `3 4 4
    ari dd bb cc
    1 10:00 ari wrong
    1 10:01 ari solve
    2 10:00 bb wrong
    2 10:00 bb solve
    `;

    const answer = `ari
    bb
    cc
    dd`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `3 4 4
    bb dd ari cc
    1 10:00 bb wrong
    1 10:00 bb solve
    1 10:00 ari wrong
    1 10:00 ari solve
    `;

    const answer = `ari
    bb
    cc
    dd`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `3 4 0
    1 2 3 4`;

    const answer = `1
    2
    3
    4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
  test('예제6', () => {
    const input = `1 4 8
    aa bb cc dd
    1 10:00 aa wrong
    1 10:01 aa solve
    1 10:00 bb wrong
    1 10:02 bb solve
    1 10:00 cc wrong
    1 10:03 cc solve
    1 10:00 dd wrong
    1 10:04 dd solve`;

    const answer = `aa
    bb
    cc
    dd`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
