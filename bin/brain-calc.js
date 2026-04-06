#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
import { random } from '../src/index.js';

const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const gameover = (name, ans, cor) => {
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${cor}'`);
  console.log(`Let's try again, ${name}!`);
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[random(operations.length)];
  
  let num1, num2, correctAnswer;
  
  switch (operation) {
    case '+':
      num1 = getRandomNumber(1, 30);
      num2 = getRandomNumber(1, 30);
      correctAnswer = num1 + num2;
      break;
    case '-':
      num1 = getRandomNumber(1, 30);
      num2 = getRandomNumber(1, 30);
      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }
      correctAnswer = num1 - num2;
      break;
    case '*':
      num1 = getRandomNumber(1, 20);
      num2 = getRandomNumber(1, 20);
      correctAnswer = num1 * num2;
      break;
  }
  
  return {
    question: `${num1} ${operation} ${num2}`,
    answer: String(correctAnswer)
  };
};

const brainCalc = () => {
  const name = greetUser();
  console.log('What is the result of the expression?');
  
  for (let i = 0; i < 3; i++) {
    const { question, answer: correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      gameover(name, userAnswer, correctAnswer);
      return;
    }
  }
  
  congrats(name);
};

export default brainCalc;

// Запуск игры
brainCalc();