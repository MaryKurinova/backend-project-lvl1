import { gameLogic } from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisior = (a, b) => {
  for (let i = Math.min(a, b); i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
};

const getGameData = () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const question = `${randomA} ${randomB}`;
  const answer = String(getGreatestCommonDivisior(randomA, randomB));

  return [question, answer];
};

const brainGreatestCommonDivisiorGame = () => {
  gameLogic(rules, getGameData);
};

export default brainGreatestCommonDivisiorGame;
