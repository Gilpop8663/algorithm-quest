const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `4
    0 1 1 0
    1 2 3 4
    3
    2 4 7`;

    const answer = `4 1 2`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });

  test("예제2", () => {
    const input = `5
    1 1 1 1 1
    1 2 3 4 5
    3
    1 3 5`;

    const answer = `1 3 5`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });
});
