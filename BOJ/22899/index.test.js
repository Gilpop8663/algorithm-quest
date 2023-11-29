const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `6 3
    1 1 1 2 2 2
    1 2 3 7 8 9`;

    const answer = `-1 10 6 6 6 6`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });
});
