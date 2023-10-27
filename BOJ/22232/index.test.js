const solution = require('.');

describe('예제', () => {
  test('예제1', () => {
    const input = `5 3
    abc.jpeg
    abc.jpg
    foo.yolo
    bar.cpp
    bar.maltise
    jpg
    cpp
    maltise`;

    const answer = `abc.jpg
    abc.jpeg
    bar.cpp
    bar.maltise
    foo.yolo`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제2', () => {
    const input = `5 1
    vvv.busan
    dongdaegu.miryang
    gupo.busan
    train1225.mugunghwa
    trainer.jpg
    jpg`;

    const answer = `dongdaegu.miryang
    gupo.busan
    train1225.mugunghwa
    trainer.jpg
    vvv.busan`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제3', () => {
    const input = `5 1
    aaa.eee
    aaa.ccc
    aaa.aaa
    aaa.ddd
    aaa.bbb
    aaa`;

    const answer = `aaa.aaa
    aaa.bbb
    aaa.ccc
    aaa.ddd
    aaa.eee`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });

  test('예제4', () => {
    const input = `2 2
    aa.dd
    aa.cc
    cc
    dd`;

    const answer = `aa.cc
    aa.dd`
      .split('\n')
      .map((item) => item.trim())
      .join('\n');

    expect(solution(input)).toEqual(answer);
  });
});
