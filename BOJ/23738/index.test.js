const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `PECTOPAH`;

    const answer = `ryestoran`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `MOCKBA`;

    const answer = `moskva`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `HET`;

    const answer = `nyet`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `TPAKTOP`;

    const answer = `traktor`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
