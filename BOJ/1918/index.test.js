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

  test('예제5', () => {
    const input = `(9-(4/2+1))*(5*2-2)`;

    const answer = `942/1+-52*2-*`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제6', () => {
    const input = `A+B`;

    const answer = `AB+`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제7', () => {
    const input = `(A+B)-(A-B)`;

    const answer = `AB+AB--`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제8', () => {
    const input = `A+B+C`;

    const answer = `AB+C+`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제9', () => {
    const input = `A*B*C`;

    const answer = `AB*C*`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제10', () => {
    const input = `A*(B+C)/D`;

    const answer = `ABC+*D/`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제11', () => {
    const input = `A+(B-C)`;

    const answer = `ABC-+`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');
    // const answer = `ABC-D/+`
    //   .split('\n')
    //   .map((item) => item.trim())
    //   .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제12', () => {
    const input = `A+B*C+D`;

    const answer = `ABC*+D+`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
