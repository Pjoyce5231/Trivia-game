//variables(create an array with each question having it's own object)
var questionList = [{
        question: "Spongebob lives in a pineapple under the sea.",
        answer: true,
    },
    {
        question: "Squidward owns the Krusty Krab and loves money.",
        answer: false,
    },
    {
        question: "Mr. Krabs plays the clarinet.",
        answer: false,
    },
    {
        question: "Spongebob's favorite activity is Jellyfishing.",
        answer: true,
    },
    {
        question: "Plankton runs the restaurant called the Chum Bucket.",
        answer: true,
    }
];
//create all other variables to reference in js
var chosenQuestion = [];
var randomQuestion = chosenQuestion.question;

var trueButton = $("#true");
var falseButton = $("#false");
var buttonChoice;
// var winCounter = 0;
// var lossCounter = 0;

//create a function that initiates the game
function initiateGame() {
    var pushedQuestion = questionList[Math.floor(Math.random() * questionList.length)];
    console.log(pushedQuestion.question);
    $("#randomQuestion").text(pushedQuestion.question);
    var randomAnswer = pushedQuestion.answer;
    console.log("randomAnswer" + randomAnswer);
};
initiateGame();

//if the true button is pushed and the question is true,
//show an alert saying "Correct"

//if the true button is pushed and the question is false,
//show an alert saying "Incorrect"
function buttonPush() {
    $("#true").on("click", function () {
        buttonChoice = true;
        console.log(buttonChoice);
    });

    $("#false").on("click", function () {
        buttonChoice = false;
        console.log(buttonChoice);
    });
};
buttonPush();
if (buttonChoice === randomAnswer) {
    alert("Correct!");
} else {
    alert("Incorrect!");
}




// initiateGame();
//need one last function in order to restart the game 
//once the question is answered and regenerate new random 
//question








//variables(create an array with each question having it's own object)
// var questionList = ["Spongebob lives in a pineapple under the sea.", "Squidward owns the Krusty Krab and loves money.", "Mr. Krabs plays the clarinet.", "Spongebob's favorite activity is Jellyfishing.", "Plankton runs the restaurant called the Chum Bucket."];
// //variable that will hold the randomly generated question
// var chosenWord = "";
// //generate the variable for where the chosen word will appear (inputString)
// var inputString = [];
// //generate variable for your wins and losses counter 
// var winCounter = 0;
// var lossCounter = 0;




//generate function to initiate the game
//generate random question from questionList

//user guesses true or false

//new question appears on the screen

//after new question appears on the screen, the wins and losses
//will be tracked

// var questions = [{
//         question1: "Who lives in a pineapple under the sea?",
//         answers: [1, 2, 3, 4], //1Sandy, 2Patrick, 3Spongebob, 4Plankton
//         rightAnswer: 3,
//     },
//     {
//         question2: "Who owns the Krusty Krab and loves money?",
//         answers: [1, 2, 3, 4], //1Sandy, 2Mr. Krabs, 3Larry the Lobster, 4Squidward
//         rightAnswer: 2,
//     },
//     {
//         question3: "Who plays the clarinet in the show?",
//         answers: [1, 2, 3, 4], //1squidward ,2gary the snail, 3Mrs. Puff, 4Karen
//         rightAnswer: 1,
//     },
//     {
//         question4: "What is Spongebob's favorite activity?",
//         answers: [1, 2, 3, 4], //1the fry cook games, 2fishing, 3driving, 4Jellyfishing
//         rightAnswer: 4,
//     }
//     {
//         question5: "Who runs the restaurant called the Chum Bucket?",
//         answers: [1, 2, 3, 4], //1sandy, 2Patrick, 3Spongebob, 4Plankton
//         rightAnswer: 4,
//     }
// ]