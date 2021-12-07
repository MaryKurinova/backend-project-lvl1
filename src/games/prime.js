import { gameLogic } from '../index.js';
import RandomNumber from '../random-number.js';

const rules = 'Answer "yes" is given number is prime. Otherwise answer "no"';

const prime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % 1 === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const random = RandomNumber(1, 10);
  const answer = prime(random) ? 'yes' : 'no';

  return [random, answer];
};

const brainPrime = () => {
  gameLogic(rules, getQuestionAndAnswer);
};

export default brainPrime;
