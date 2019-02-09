var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board"); // Get the first element in the document with that class name
var result = document.querySelector(".result > h2");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
var restartGame = document.getElementById("btnRestartGame");


function getComputerChoice() // getting a random computer choice
{
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter)
{
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
    
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result.innerHTML = convertToWord(user)+"(User)"+ " beats " + convertToWord(computer)+"(Computer)" + ".You Win , Computer Looses !!";
}
function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(user)+"(User)" + " loses to " + convertToWord(computer)+"(Computer)" + ".You Loose , Computer Wins !!";
}
function draw(user, computer){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(user)+"(User)" + " draws " + convertToWord(computer)+"(Computer)" + ".Its a draw !!";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice)
        {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice,computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice,computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice,computerChoice);
                break;
        }
}

function main(){
       rock_div.addEventListener('click',function(){
        game("r");
    })
        paper_div.addEventListener('click',function(){
        game("p");
    })
        scissor_div.addEventListener('click',function(){
        game("s");
    })  
}

main();

    
function restartGameFunc()
{    userScore_span = 0;
     computerScore_span = 0;
}
