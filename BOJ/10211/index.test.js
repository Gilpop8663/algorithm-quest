const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `2
    5
    1 2 3 4 5
    5
    2 1 -2 3 -5`;

    const answer = `15
    4`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });

  test("예제2", () => {
    const input = `1
    5
   -5 4 -3 2 5`;

    const answer = `8`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });
});
