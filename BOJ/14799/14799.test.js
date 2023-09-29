const khantoaSolution = require('./14799');

test('예제1', () => {
  const input = `0
  1
  3
  2`;

  const answer = `-
  - -
  - -   - -         - -   - -
  - -   - -`
    .split('\n')
    .map((item) => item.trim())
    .join('\n');

  expect(khantoaSolution(input)).toEqual(answer);
});
