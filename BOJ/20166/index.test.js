const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3 3 2
    aaa
    aba
    aaa
    aa
    bb`;

    const answer = `56
    0`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `3 4 3
    abcb
    bcaa
    abac
    aba
    abc
    cab`;

    const answer = `66
    32
    38`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `1 1 1
    a
    a`;

    const answer = `1`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `3 3 1
    abc
    abc
    abc
    abc`;

    const answer = `27`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `3 4 1
    abcb
    bcaa
    abac
    aba`;

    const answer = `66`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제6', () => {
    const input = `3 4 2
    abcb
    bcaa
    abac
    aba
    aba`;

    const answer = `66
    66`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제7', () => {
    const input = `10 10 1
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaaaaaaa
    aaaaa`;

    const answer = `409600`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제8', () => {
    const input = `5 5 1
    aaaaa
    aaaaa
    aaaaa
    aaaaa
    aaaaa
    aaaaa`;

    const answer = `102400`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
