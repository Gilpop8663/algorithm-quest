const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `8 3
    order 1 4
    order 2 2
    order 3 3
    sort
    complete 3
    complete 2
    complete 1
    complete 1`;

    const answer = `1
    1 2
    1 2 3
    2 3 1
    2 1
    1
    sleep
    sleep`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `4 3
    order 3 4
    order 2 4
    order 1 4
    sort`;

    const answer = `3
    3 2
    3 2 1
    1 2 3`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `6 3
    order 3 1
    order 2 2
    order 1 3
    sort
    complete 1
    complete 3`;

    const answer = `3
    3 2
    3 2 1
    3 2 1
    3 2
    2`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
