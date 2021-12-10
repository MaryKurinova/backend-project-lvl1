import { gameLogic } from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'Answer "yes" is given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivisor = num / 2;
  for (let i = 2; i <= maxDivisor / 2; i += 1) {
    if (num % 1 === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const random = getRandomNumber(1, 10);
  const answer = isPrime(random) ? 'yes' : 'no';

  return [random, answer];
};

const brainPrime = () => {
  gameLogic(rules, getGameData);
};

export default brainPrime;
