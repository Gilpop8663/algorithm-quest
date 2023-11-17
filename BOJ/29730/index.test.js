const solution = require(".");

describe("예제", () => {
  test("예제1", () => {
    const input = `3
    boj.kr/1307
    study gc
    read book`;

    const answer = `study gc
    read book
    boj.kr/1307`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });

  test("예제2", () => {
    const input = `3
    boj.kr/1307
    bc
    cb`;

    const answer = `bc
    cb
    boj.kr/1307`
      .split("\n")
      .map((item) => item.trim())
      .join("\n");

    expect(solution(input)).toEqual(answer);
  });
});
