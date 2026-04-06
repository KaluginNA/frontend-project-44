#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

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

const generateProgression = () => {

  const length = getRandomNumber(5, 10);

  const start = getRandomNumber(1, 50);

  const step = getRandomNumber(1, 10);
  

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenIndex];
  

  const progressionWithGap = [...progression];
  progressionWithGap[hiddenIndex] = '..';
  
  return {
    question: progressionWithGap.join(' '),
    answer: String(correctAnswer)
  };
};

const brainProgression = () => {
  const name = greetUser();
  console.log('What number is missing in the progression?');
  
  for (let i = 0; i < 3; i++) {
    const { question, answer: correctAnswer } = generateProgression();
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

brainProgression();