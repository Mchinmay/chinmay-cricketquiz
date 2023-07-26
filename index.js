var readLineSync = require("readline-sync");
var score = 0;

//start
console.log (`DYK VIRAT - \n\nThe former captain of the Indian national team, King Kohli’s all-rounder qua-lities have won millions of hearts on-field and off-field. Most of us know about his remarkable journey and victories. If you are a true King Kohli fan,this quiz is for you.\n`);

var nextLine = readLineSync.question("click enter to continue......");
console.log()

//forming questions
var questionSet = [{
  question : "1 .What is Virat Kohli’s wife's first name?\n > ",
  answer : "anushka"
}, 
{
  question : "2 .What is the nickname of Virat Kohli in the world of cricket?\n > ",
  answer : "king kohli"
},
{
  question : "3 .What is Virat Kohli's ODI Jersey Number?\n > ",
  answer : "18"
},
{
  question : "5 .Which one of the national award(mirabai chanu khelratna award) has Virat Kohli been honoured with?\n > ",
  answer : "arjuna"
}, 
{
  question : "6 .Is Kohli vegan? true or false?\n > ",
  answer : "true"
}];

//function for welcoming user -
 function welcomeUser (){
   var parName = readLineSync.question("Enter Name >>> ");
   console.log(" WELCOME " + parName + " FIND YOUR FIRST QUESTION BELOW -")  
 };

//processing playing
function testVirat(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer===answer) {
    console.log("you're right ")
    score = score + 1;
  }
  else
  {
    console.log("oops' you're wrong ")
  }
  console.log("current score: ", score);
  console.log("-------------")
}

// game presenting
function game() {
  for (var i=0; i<questionSet.length; i++) {
    var currentQuestion = questionSet[i];
    testVirat(currentQuestion.question, currentQuestion.answer)
    console.log(currentQuestion.answer + " is right answer!!!")
     var end = "Thanks for participation!!!!";
     console.log(end);

  }
}

console.log("\n")
welcomeUser();
console.log("(provide answers in small case wherever applicable, thanks. GAME ON");
console.log("\n")
game();

//test first branch
 
