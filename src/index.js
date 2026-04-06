import readlineSync from "readline-sync";

const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
const gameover = (name, ans, cor) => {
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${cor}'`);
  console.log(`Let's try again, ${name}!`);
};
export const random = (range) => Math.floor(Math.random() * range);

export default (desc, game) => {
  const name = greeting();
  console.log(desc);
  for (let i = 0; i < 3; i++) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    let answer = readlineSync.question("Your answer: ");
    if (correctAnswer == answer) {
      console.log("Correct!");
    } else {
      gameover(name, answer, correctAnswer);
      return 0;
    }
  }
  congrats(name);
};