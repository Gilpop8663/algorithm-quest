const star10Solution = require('./2447');

test('예제1', () => {
  const input = `27`;

  const answer = `***************************
  * ** ** ** ** ** ** ** ** *
  ***************************
  ***   ******   ******   ***
  * *   * ** *   * ** *   * *
  ***   ******   ******   ***
  ***************************
  * ** ** ** ** ** ** ** ** *
  ***************************
  *********         *********
  * ** ** *         * ** ** *
  *********         *********
  ***   ***         ***   ***
  * *   * *         * *   * *
  ***   ***         ***   ***
  *********         *********
  * ** ** *         * ** ** *
  *********         *********
  ***************************
  * ** ** ** ** ** ** ** ** *
  ***************************
  ***   ******   ******   ***
  * *   * ** *   * ** *   * *
  ***   ******   ******   ***
  ***************************
  * ** ** ** ** ** ** ** ** *
  ***************************`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(star10Solution(input)).toEqual(answer);
});

test('예제2', () => {
  const input = `3`;

  const answer = `***
  * *
  ***`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(star10Solution(input)).toBe(answer);
});

test('예제3', () => {
  const input = `9`;

  const answer = `*********
  * ** ** *
  *********
  ***   ***
  * *   * *
  ***   ***
  *********
  * ** ** *
  *********`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(star10Solution(input)).toBe(answer);
});
