// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) //true
// console.log(3 <= 2)   //false

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
// 1. Create a variable called isAlive and assign it to true
// 2. Flip its value to false in the appropriate code block
// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out
// 3. Log it out!
// 1. Store the message-el paragraph in a variable called messageEl
// 2. Display the message in the messageEl using messageEl.textContent
// 2. Store the sum paragraph in a variable called sumEl
// 3. Render the sum on the page using this format -> "Sum: NUMBER"
// 2. Store the cards paragraph in a variable called cardsEl
// 3. Render the cards on the page using this format -> "Cards: 10 4"
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
// 1. Create a card variable, and hard code its value to a number (2-11)
// 2. Add the new card to the sum variable
// 3. Call startGame()
// Create a new function called startGame() that calls renderGame()
// 1. Create a new array - cards - that contains firstCard and secondCard
// 2. Refer to the cards array when rendering out the cards
// Push the card to the cards array
// Create a for loop that renders out all the cards instead of just two
// Create a function, getRandomCard(), that always returns the number 5
// 2. Create the player object. Give it two keys, name and chips, and set their values
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
// 4. Render the player's name and chips in playerEl


let player = {
    name: "Camila",
    chips: 200}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    if (!isAlive && player.chips >= 20 && player.chips <= 300){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()  
    }
    else if (player.chips >= 300) {
        return playerEl.textContent = "WINER"
    }
    else if(player.chips < 20) { 
    playerEl.textContent = "LOSER"
    }
}

function getRandomCard() {
    let pickRandomCard = Math.floor( Math.random()*13) + 1
    if ( pickRandomCard > 10) {
        return 10
    }
    else if ( pickRandomCard === 1) {
        return 11
    }
    else {
        return pickRandomCard
    }
}

function renderGame() {
    sumEl.textContent ="Sum: " + sum
    cardsEl.textContent = "Cards: "
    
    for ( let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true
        isAlive = false
        player.chips += 10
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false
        player.chips -= 20
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
    if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}