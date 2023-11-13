const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `8 4
    -1
    -1
    1
    1
    1
    1
    -1
    2`;

    const answer = 5;

    expect(solution(input)).toEqual(answer);
  });
});
