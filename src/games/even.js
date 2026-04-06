import readlineSync from 'readline-sync';
const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i++) {
    let correction = ''
    const Question = Math.floor(Math.random() * 100)
    console.log('Question: '+ Question)
    if(Question % 2 === 0){
        correction = 'yes'
    }
    else{
        correction = 'no'
    }
    const Answer = readlineSync.question('Your answer: ')
    if(Answer !== correction){
        console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${correction}'`)
        console.log(`Let's try again, ${name}!`)
        return 0
    }
    else{
        console.log('Correct!')
    }
    
    


  }
  console.log(`Congratulations, ${name}!`)
}
export default runEvenGame

