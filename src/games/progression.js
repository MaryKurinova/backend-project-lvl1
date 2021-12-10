import { gameLogic } from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const getArithmeticProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const current = start + step * i;
    result.push(current);
  }

  return result;
};

const getStringWithHiddenElementFromArray = (arr, index) => {
  const result = arr.slice();
  result[index] = '..';
  return result.join(' ');
};

const getGameData = () => {
  const progressionStart = getRandomNumber();
  const progressionStep = getRandomNumber(1, 10);
  const progression = getArithmeticProgression(
    progressionStart,
    progressionStep,
    progressionLength,
  );
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

  const question = getStringWithHiddenElementFromArray(
    progression,
    hiddenElementIndex,
  );
  const answer = String(progression[hiddenElementIndex]);

  return [question, answer];
};

const brainProgression = () => {
  gameLogic(rules, getGameData);
};

export default brainProgression;
