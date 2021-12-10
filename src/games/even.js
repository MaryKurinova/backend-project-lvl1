import { gameLogic } from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const random = getRandomNumber();
  const answer = isEven(random) ? 'yes' : 'no';

  return [random, answer];
};

const brainEven = () => {
  gameLogic(rules, getGameData);
};

export default brainEven;
