const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `6 7
    1 2 1
    1 4 3
    3 6 1
    4 5 1
    2 3 2
    3 4 1
    5 6 2`;

    const answer = 2;

    expect(solution(input)).toEqual(answer);
  });

  test("예제2", () => {
    const input = `8 11
    1 2 1
    1 5 8
    1 7 9
    2 5 2
    3 4 4
    3 6 3
    3 8 5
    4 6 10
    4 8 11
    5 6 6
    5 7 7`;

    const answer = -1;

    expect(solution(input)).toEqual(answer);
  });

  test("예제3", () => {
    const input = `3 3
    1 2 1
    2 3 2
    1 3 4`;

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });
});
