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

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const generateQuestion = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return {
    question: String(number),
    answer: correctAnswer,
  }
}

const brainPrime = () => {
  const name = greetUser()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    const { question, answer: correctAnswer } = generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!')
    }
    else {
      gameover(name, userAnswer, correctAnswer)
      return
    }
  }

  congrats(name)
}

brainPrime()
