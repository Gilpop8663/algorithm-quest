const birdSolution = require('./14713');

test('예제1', () => {});

test('예제2', () => {
  const input = `2
  i found
  an interesting cave
  i found an cave interesting`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제3', () => {
  const input = `2
  please
  be careful
  pen pineapple apple pen`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제4', () => {
  const input = `2
  please
  be careful
  please`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제5', () => {
  const input = `2
  please
  be careful
  please be careful Yes`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제6', () => {
  const input = `2
  ab cd
  ef gh ij
  ab ef gh ij`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제7', () => {
  const input = `2
  ab cd
  ef gh ij
  ab`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제8', () => {
  const input = `2
  a b c d ef
  g h j
  a b c d g h ef j`;

  const answer = `Possible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제9', () => {
  const input = `2
  asdas
  dd
  dd asdas`;

  const answer = `Possible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제10', () => {
  const input = `2
  dd
  asdas
  asdas dd`;

  const answer = `Possible`;

  expect(birdSolution(input)).toEqual(answer);
});

test('예제11', () => {
  const input = `2
  a
  b
  a`;

  const answer = `Impossible`;

  expect(birdSolution(input)).toEqual(answer);
});
