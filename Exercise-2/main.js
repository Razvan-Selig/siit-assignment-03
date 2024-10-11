console.log("The JS file works");


function computerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

function userChoice() {
    
    let userInput =  prompt("Pick rock, paper or scissors: ");
    userInput = userInput.toLowerCase();

    const options = ["rock", "paper", "scissors"];

    while (!options.includes(userInput)) {
        alert("Invalid Input")
        userInput =  prompt("Pick rock, paper or scissors: ");
    } 

    let computerInput = computerChoice()
    console.log("");
    
    console.log(`User choice: ${userInput}`);
    console.log(`Computer's choice: ${computerInput}`);

    detectWiner(userInput, computerInput)
}



function detectWiner(userInput, computerInput) {

    if (userInput === computerInput) {
        console.log("It's a tie");
        
    } else if (
        (userInput == "rock" && computerInput == "scissors") ||
        (userInput == "paper" && computerInput == "rock") ||
        (userInput == "scissors" && computerInput == "paper")
    ) {
        console.log("User wins");
    } else {
        console.log("Computer wins");
    }

}


userChoice()


















