const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `11
    IamIronMan.`;

    const answer = `IamIronMan.`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `26
    And,IamIronMan.IamIronMan.`;

    const answer = `And,IamIron...IamIronMan.`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `29
    IamInevitable.And,IamIronMan.`;

    const answer = `IamInevit......amIronMan.`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
