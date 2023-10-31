const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `3
    3
    ENTJ INTP ESFJ
    4
    ESFP ESFP ESFP ESFP
    5
    INFP INFP ESTP ESTJ ISTJ`;

    const answer = `8
    0
    4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `1
    5
    INFP INFP ESTP ESTJ ISTJ`;

    const answer = `4`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
