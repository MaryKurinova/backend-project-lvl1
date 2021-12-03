import { gameLogic } from '../index.js';
import RandomNumber from '../random-number.js';

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

const getQuestionAndAnswer = () => {
  const randomA = RandomNumber();
  const randomB = RandomNumber();
  const randomOperator = operators[RandomNumber(0, operators.length - 1)];
  const question = `${randomA} ${randomOperator} ${randomB}`;
  const answer = calculate(randomA, randomB, randomOperator);

  return [question, String(answer)];
};

const brainCalc = () => {
  gameLogic(rules, getQuestionAndAnswer);
};

export default brainCalc;
