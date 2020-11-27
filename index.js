//libraries included
const chalk = require('chalk');
const readlineSync = require('readline-sync');

//taking username as input
var username = readlineSync.question(chalk.yellowBright("Hello Buddy! What is your Name? "));

//general instructions
console.log(chalk.yellow("\nHey " + chalk.underline(username) + "!!! I have some GK questions for you."));
console.log( chalk.yellow( "Let's test your GK knowledge :x \n" ));

console.log(chalk.bgRed("Instructions :- "));
console.log("1. There are total 5 questions in the quiz.\n2. Give your answers in form of 1, 2, 3 or 4 \n3. Each correct answer earns you one positive score\n4. There is no negative marking.\n  ");

//store questions
var questionOne = {
  question : "Which city is the capital of INDIA?",
  options: "1. Jaipur\n2. Surat\n3. Amsterdam\n4. Delhi\n",
  answer: "4"
}

var questionTwo = {
  question : "Which is the national sport of INDIA?",
  options: "1. Hide-n-Seek\n2. Cricket\n3. Hockey\n4. Chess\n",
  answer: "3"
}

var questionThree = {
  question : "Who will be the Prime Minister of India in 2025?",
  options: "1. Yogi Baba\n2. Modi Ji\n3. Pappu\n4. Prefer Not to Say\n",
  answer: "2"
}

var questionFour = {
  question : "Where is the Temple of Rats(Karni Mata Temple) located?",
  options: "1. Maharashtra\n2. Varanasi\n3. Ayodhya\n4. Bikaner\n",
  answer: "4"
}

var questionFive = {
  question : "Which is the official language of China?",
  options: "1. Mandarin\n2. Korean\n3. Chinese\n4. English\n",
  answer: "1"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var score = 0 ;
const highscore = 5;

//function  to play the quiz
function play(question, answer)
{
  if(question.answer === answer)
  {
    score++;
    console.log(chalk.green("Yay! You are correct\n"));
  }
  else
  {
    console.log(chalk.red("Oops!!!!!!! You missed it :(\n"));
  }
}

for(var i = 0; i < questions.length; i++)
{
  console.log(chalk.redBright( "--> " + questions[i].question));
  var userAnswer = readlineSync.question(questions[i].options);

  play(questions[i], userAnswer);
  console.log("Your updated score is "+ chalk.white.bold(score));
  console.log(chalk.bold("------------------------------------------\n"));
}

//ending information
console.log(chalk.bold("--------------------------------------------------"));
console.log(chalk.white.italic.underline.bold("Hey! "+ username + " your final score is " + score));
if(score >= highscore)
  console.log(chalk.bgBlueBright.black("Congrats! You have beaten the high score...Kudos :) "));
console.log(chalk.bold("---------------------------------------------------\n"));

console.log(chalk.bgRed("Top Scorers :-") + "\nLokesh    "+highscore+"\nRakesh    "+highscore);
console.log(username+"    "+score);
