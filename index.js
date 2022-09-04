import chalk from "chalk";
import readlinesync from 'readline-sync'
// var playerScore = 0
// var playerName = ""

// var playerChoice = "Yes"
//0 - New Player 1 - Existing player
var highScores = [
  {
    "Name": "Asish",
    "Score": 9
  },
  {
    "Name": "Subhasish",
    "Score": 8
  },
  {
    "Name": "Vishal",
    "Score": 7
  }

]
function WelcomeScreen() {

  console.log(chalk.blue('Welcome player \n'))
  var playerName = readlinesync.question("Please enter your name \n");
  console.log(chalk.blueBright('Welcome ' + playerName))
  var playerChoice = readlinesync.question(chalk.red("Enter 1 to begin game and 2 to view current highest scores and 3 to exit the game \n"))
  if (playerChoice == 2) {
    showLeaderBoard()
  } else if (playerChoice == 1) {
    playGame(playerName)
  }
  else {
    return
  }
}
function showLeaderBoard() {
  for (var i = 0; i < highScores.length; i++) {
    console.log(chalk.magentaBright(i + 1 + " " + highScores[i].Name + " - " + highScores[i].Score))
  }
}
function playGame(playerName) {
  var score = Play()
  checkHighScores(playerName, score)


}

//List of Questions
function Play() {
  var score = 0;
  console.log("Starting quiz......\n")
  var questions = [

    {//1
      "question": "Who is my favorite Superhero?\n",
      "options": ["1. The Flash", "2. Batman", "3. Iron man", "4. The Hulk"],
      "correctAnswer": "1. The Flash",

    },
    {//2
      "question": "What is my favorite comfort food?\n",
      "options": ["1. Instant ramen ", "2. Cupcakes ", "3. Pizza ", "4. Noodles"],
      "correctAnswer": "1. Instant ramen "
    },
    {//3
      "question": "What is my favorite thing to do while bored?\n",
      "options": ["1. Listening to music ", "2. Playing videogames ", "3. Going on long drives ", "4. Reading books "],
      "correctAnswer": "2. Playing videogames "
    },
    {//4
      "question": "What is my favorite single player videogame?\n",
      "options": ["1. GTA V ", "2. Elden Ring ", "3. Mortal Kombat ", "4.The Witcher"],
      "correctAnswer": "2. Elden Ring "
    },
    {//5
      "question": "what is my favorite programming language?\n",
      "options": ["1. Go ", "2. C# ", "3. Ruby ", "4. Java"],
      "correctAnswer": "2. C# "
    },
    {//6
      "question": "what is my favorite Multiplayer game?\n",
      "options": ["1. Valorant ", "2. Rocket League ", "3. GTA Online ", "4. Apex"],
      "correctAnswer": "2. Rocket League "
    },
    {//7
      "question": "what is my favorite tech company?\n",
      "options": ["1. Apple ", "2. Samsung ", "3. Sony ", "4. Google"],
      "correctAnswer": "3. Sony "
    },
    {//8
      "question": "What is my favorite sitcom show?\n",
      "options": ["1. FRIENDS ", "2. Man With a Plan ", "3. Two and a Half Men ", "4. Big Bang Theory"],
      "correctAnswer": "1. FRIENDS "
    },
    {//9
      "question": "Who is my favorite Artist?\n",
      "options": ["1. Charlie Puth ", "2. The Weeknd ", "3. Taylor Swift ", "4. NF"],
      "correctAnswer": "2. The Weeknd "
    },
    {//10
      "question": "What type of a person I am? A dog person or a cat person?\n",
      "options": ["1. Dog person ", "2. Cat person"],
      "correctAnswer": "2. Cat person"
    },


  ]
  console.log("Your current Score is " + score);

  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    console.log(...questions[i].options)
    console.log()
    var userAnswer = readlinesync.question("Pick between [1-4] - ")
    if (questions[i].options[userAnswer - 1] == questions[i].correctAnswer) {
      console.log()
      score++
      console.log(chalk.green("Correct Answer!"))
      console.log()
      console.log(chalk.yellowBright("Your score is " + score))
      console.log("--------------------------\n")
    }
    else {
      console.log()
      console.log(chalk.red('Wrong Answer'))
      console.log()
      console.log(chalk.yellowBright("Your score is " + score))
      console.log("--------------------------\n")
    }
  }

  return score;

}

function checkHighScores(playerName, score) {
  var [currentMaxScore, currentMaxScorerName, index] = getCurrentHighScore()

  if (score > currentMaxScore) {
    console.log(chalk.green('Congratulations!!' + playerName + ' You beat ' + currentMaxScorerName + " to have the highest score in the game.\n"))
    highScores[index].Name = playerName
    highScores[index].Score = score
    showLeaderBoard()
    console.log(chalk.redBright("Please contact the admin to permanetly update the leaderboard with your new score.\n"))
    console.log("Thank you for playing.")
  }
  else {
    console.log(chalk.blueBright("Your final Score is " + score))
    console.log(chalk.blue("Thank you for playing."))
  }
}

function getCurrentHighScore() {
  var highscore = highScores[0].Score
  var name = highScores[0].Name
  var index = 0
  for (var i = 0; i < highScores.length; i++) {
    if (highScores[i].Score > highscore) {
      highscore = highScores[i].Score
      name = highScores[i].Name
      index = i
    }
  }
  return [highscore, name, index]
}

WelcomeScreen()















