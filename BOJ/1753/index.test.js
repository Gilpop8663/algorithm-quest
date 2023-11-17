const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `5 6
    1
    5 1 1
    1 2 2
    1 3 3
    2 3 4
    2 4 5
    3 4 6`;

    const answer = `0
    2
    3
    7
    INF`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });

  test("예제2", () => {
    const input = `4 3
    1
    1 2 10
    2 3 10
    3 4 10`;

    const answer = `0
    10
    20
    30`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });
});
