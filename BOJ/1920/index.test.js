const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `5
    4 1 5 2 3
    5
    1 3 7 9 5`;

    const answer = `1
    1
    0
    0
    1`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });
});
