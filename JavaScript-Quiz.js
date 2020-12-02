var readlineSync = require("readline-sync");
const chalk = require('chalk');
var userName = readlineSync.question("Enter your name ? ");

console.log(chalk.green("Welcome "+ userName +" Let's Play JS Quiz"));

var score = 0;

function start(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.greenBright("You are Right "));
    score= score + 1;
  }
  else{
    console.log(chalk.redBright(" Wrong, Nice Try !!"));
    score = score - 1;
  }
  console.log(chalk.green("Current score is : ",score));
  console.log(chalk.gray("----------------------"));
}

var questions = [
  {
    question:`JavaScript is 
    a. Single-threaded
    b. Multi-threaded \n `,
    answer:"a",
  },
  {
    question: `________ maintains the order of execution context 
    a. Stack
    b. Call Stack \n`,
    answer : "b",
  },
  {
    question: `JS is executed is how many phases
    a. 1
    b. 2 \n`,
    answer : "b",
  },
  {
    question:`Are Let And Const Hoisted
    a. TRUE
    b. FALSE \n`,
    answer:"a",
  },
  {
    question : `Is Memory allocated for the keyword Undefined
    a. YES, Memory is allocated
    b. NO, Memory is not allocated \n`,
    answer:"a",
  }


]

for(var i = 0;i<questions.length;i++){
  var currentquestion = questions[i];
  start(chalk.blue(currentquestion.question),currentquestion.answer);
}

console.log(chalk.green("Your total Score is :",score));
