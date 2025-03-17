

// card guess
const screen1 = document.querySelector(".screen1")
// card hits
const screen2 = document.querySelector(".screen2")

// card try button
const btnTry = document.querySelector("#btnTry")
// card button play again
const btnAgain = document.querySelector("#btnAgain")

// generate random number between one and ten
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events 

// get the try button interaction
btnTry.addEventListener('click', handleTryClick)
// get the play again button interaction
btnAgain.addEventListener('click', handleResetClick)
// get the enter interaction
document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

//  Callback function
function handleTryClick(event) {
    // block the form's default event
    event.preventDefault()

    // get the value of the input
    const inputNumber = document.querySelector("#inputNumber")

    // compares the input collector number with the generated number
    if (Number(inputNumber.value) == randomNumber) {
        // event to display the card
        toggleScreen()
        // if true returns a message
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
    // clears the input number
    inputNumber.value = ""
    // adds another number to the attempt counter
    xAttempts++
}
// game reset event
function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

// event to hide / hide the card
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
