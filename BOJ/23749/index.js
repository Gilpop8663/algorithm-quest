const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const playGame = (card) => {
    return card.reduce(
      (acc, item, index) => {
        if (index % 2 === 0 && item === 'O') {
          return [acc[0] + 1, acc[1]];
        }
        if (index % 2 === 1 && item === 'O') {
          return [acc[0], acc[1] + 1];
        }

        return acc;
      },
      [0, 0]
    );
  };

  const modifyCard = (card, cardIndex) => {
    const newCard = [...card];
    const popped = newCard[cardIndex];
    newCard.splice(cardIndex, 1);

    newCard.unshift(popped);

    return newCard;
  };

  let answer = 10000;

  const comb = (arr, count) => {
    const result = playGame(arr);
    if (result[0] > result[1]) {
      answer = Math.min(count, answer);
      return;
    }

    if (count === N) {
      return;
    }

    let card = [...arr];
    for (let i = 0; i < N * 2; i++) {
      card = modifyCard(arr, i);
      comb(card, count + 1);
    }
  };

  const N = +info;

  const arr = data[0].split(' ');

  comb(arr, 0);

  return answer;
}

const output = console.log(solution(input));

// module.exports = solution;
