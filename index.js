// quiz app to know about me, made it for practise only

var readlineSync = require('readline-sync');
console.log('Quick Quiz to know about me!\n');
var userName = readlineSync.question("Hey What is your Name : ");
console.log('Welcome' + " " + userName);

var score = 0;
function play(question, correctAnswer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == correctAnswer) {
    console.log('\tCORRECT');
    score = score + 2;
  }
  else {
    console.log('\tWRONG');
    console.log("Correct Answer is: " + correctAnswer);
    score = score - 1;
  }
  console.log('Your score is  :' + score);
}

console.log('\n----------------\n');
console.log('Lets start the gameplay \nFew Instructions\n1. Type your all the answers in Capital Letters\n2. Good Luck');
console.log('\n----------------\n');
console.log('Current Score:' + score);

//array of objects 
var questions = [
  {
    question: 'Where do I (Raghav) live?: ',
    answer: 'HARYANA'
  },
  {
    question: 'What is my Full Name ?: ',
    answer: 'RAGHAV NAGPAL'
  }
];

//loop around object
for (var i = 0; i < questions.length; i++) {
  var curr = questions[i];
  play(curr.question, curr.answer);
}
console.log('\n----------------\n');
console.log('THANK YOU FOR PLAYING !');
console.log('YOUR SCORED : ' + score);