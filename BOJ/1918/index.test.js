const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `A*(B+C)`;

    const answer = `ABC+*`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `A+B`;

    const answer = `AB+`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `A+B*C`;

    const answer = `ABC*+`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `A+B*C-D/E`;

    const answer = `ABC*+DE/-`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
