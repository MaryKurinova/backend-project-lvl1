import { gameLogic } from '../index.js';
import getRandomNumber from '../random-number.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;

    default:
      throw new Error(`operation ${a} ${operator} ${b} is not supported`);
  }
};

const getGameData = () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomA} ${randomOperator} ${randomB}`;
  const answer = calculate(randomA, randomB, randomOperator);

  return [question, String(answer)];
};

const brainCalc = () => {
  gameLogic(rules, getGameData);
};

export default brainCalc;
