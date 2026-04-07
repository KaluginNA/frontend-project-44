#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greetUser } from '../src/cli.js'

const congrats = (name) => {
  console.log(`Congratulations, ${name}!`)
}

const gameover = (name, ans, cor) => {
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${cor}'`)
  console.log(`Let's try again, ${name}!`)
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Алгоритм Евклида для нахождения НОД
const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const correctAnswer = findGCD(num1, num2)

  return {
    question: `${num1} ${num2}`,
    answer: String(correctAnswer),
  }
}

const brainGcd = () => {
  const name = greetUser()
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 0; i < 3; i++) {
    const { question, answer: correctAnswer } = generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      gameover(name, userAnswer, correctAnswer)
      return
    }
  }

  congrats(name)
}

brainGcd()
