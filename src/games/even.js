import { gameLogic } from '../index.js';
import RandomNumber from '../random-number.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const random = RandomNumber();
  const answer = isEven(random) ? 'yes' : 'no';

  return [random, answer];
};

const brainEven = () => {
  gameLogic(gameRules, getQuestionAndAnswer);
};

export default brainEven;
