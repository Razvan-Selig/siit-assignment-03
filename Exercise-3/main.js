console.log("The JS file works");

const htmlComputerElement = document.querySelector("#computer-choice")
const htmlUserElement = document.querySelector("#user-choice")
const htmlWinnerElement = document.querySelector("#round-result")


function computerChoice() {
    const options = ["rock", "paper", "scissors"]
    let randomOption = Math.floor(Math.random() * options.length)

    htmlComputerElement.textContent = `${options[randomOption]}`
    return options[randomOption]

    
}


function userChoice() {
    
    const options = ["rock", "paper", "scissors"]
    
    let userInput =  prompt("Pick rock, paper or scissors: ")
    userInput = userInput.toLowerCase()


    while (!options.includes(userInput)) {
        alert("Invalid Input")
        userInput =  prompt("Pick rock, paper or scissors: ")
        userInput = userInput.toLowerCase()
    } 

    htmlUserElement.textContent = `${userInput}`

    let computerInput = computerChoice()

    detectWiner(userInput, computerInput)

}



function detectWiner(userInput, computerInput) {

    if (userInput === computerInput) {
        htmlWinnerElement.textContent = `It's a tie`
    } else if (
        (userInput == "rock" && computerInput == "scissors") ||
        (userInput == "paper" && computerInput == "rock") ||
        (userInput == "scissors" && computerInput == "paper") 
    ) {
        htmlWinnerElement.textContent = `User wins`
    } else {
        htmlWinnerElement.textContent = `Computer wins`
    }

}

