import getRandomInt from '../utils.js'

const isEven = num => num % 2 === 0

export const generateRound = () => {
  const question = getRandomInt(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return {
    question: question.toString(),
    correctAnswer,
  }
}

export const description = 'Answer "yes" if the number is even, otherwise answer "no".'
