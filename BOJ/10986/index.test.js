const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5 3
    1 2 3 1 2`;

    const answer = '7';

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `2 2
    2 2`;

    const answer = '3';

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `5 3
    0 0 0 0 0`;

    const answer = '15';

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `5 3
   4 4 4 4 4`;

    const answer = '3';

    expect(solution(input)).toEqual(answer);
  });

  test('예제5', () => {
    const input = `1 2
    0`;

    const answer = '1';

    expect(solution(input)).toEqual(answer);
  });
});
