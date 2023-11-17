const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `4
    1 3 2 2`;

    const answer = 4;

    expect(solution(input)).toEqual(answer);
  });

  test("예제2", () => {
    const input = `5
    2 4 3 5 5`;

    const answer = 8;

    expect(solution(input)).toEqual(answer);
  });

  test("예제3", () => {
    const input = `5
    1 1 0 1 1`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });
});
