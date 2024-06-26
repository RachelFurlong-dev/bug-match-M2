let score = 0;
let clickCount = 0;
let cardClickOne = '';
let cardClickTwo = '';
let prevTarget = null;
//define game variables
let gameStarted = false;
let gameOver = false;
let timerInterval;
let timerDuration = 60; //60 seconds
let quitBtn = document.getElementById("quit-btn");

 //reload game
 function playAgain() {
    window.location.reload();
}

quitBtn.addEventListener("click", playAgain);

document.getElementById("start-btn").style.display = "block";
document.getElementById("quit-btn").style.display = "none";

function endGame() {
	gameStarted = false;
	gameOver = true;
    playAgain();
	clearInterval(timerInterval); //stop timer
	document.getElementById("start-btn").style.display = "block";
	document.getElementById("quit-btn").style.display = "none";
	if(score === 8) {
		alert("Well done you won!");
	} else {
		alert("Better luck next time");
	}
}

function startTimer() {
    let timer = timerDuration;
    // Update the timer display every second
    timerInterval = setInterval(function() {
        // Update UI to display remaining time
        document.getElementById("timerDisplay").textContent = timer;
        // Decrement the timer
        timer--;
        // Check if the timer has reached zero
        if (timer < 0 || score === 8) {
            endGame(); // End the game if the timer runs out or 8 cards match
        }
    }, 1000);
}

function startGame() {
    gameStarted = true; //initialise game variables
    gameOver = false;
    startTimer();
    document.getElementById("start-btn").style.display="none";//hide start button
    document.getElementById("quit-btn").style.display="block";//show reset button
}

//add event listener to start button
document.getElementById("start-btn"). addEventListener("click", () => {
    if (!gameStarted) {
        startGame();
    }
    console.log("started game");
});

///////////////Boardgame functionality////////////////

const board = document.querySelector("#board");

//create a section & give it a class of 'square'
const squaresContainer = document.createElement('section');
squaresContainer.setAttribute('class', 'square');

//append the section to the board div
board.appendChild(squaresContainer);

const cardArray = [
{
    name: 'robot 1', 
    img: 'assets/img/alien-insect-robot.png',
},
{
    name: 'robot 2',
    img: 'assets/img/alien-insect-robot2.png',
},
{
    name: 'robot 3',
    img: 'assets/img/blue-insect-robot.png',
},
{
    name: 'robot 4', 
    img: 'assets/img/green-insect-robot.png',
},
{
    name: 'robot 5',
    img: 'assets/img/orange-insect-robot.png',
},
{
    name: 'robot 6',
    img: 'assets/img/pink-insect-robot.png',
},
{
    name: 'robot 7',
    img: 'assets/img/reddish-insect-robot.png',
},
{
    name: 'robot 8',
    img: 'assets/img/white-insect-robot7.png',
}
];

//duplicate the cardArray and assign to variable gameBoard
let gameBoard = cardArray.concat(cardArray);
gameBoard = gameBoard.sort(() => Math.random() - 0.5);

//for each item in the array - loop through the array and create a div
gameBoard.forEach((item) => {
const card = document.createElement('div'); 

//add card css style to div
card.classList.add('card');

//add a data attribute of name to the div
card.dataset.name = item.name;

//add front and back elements

let front = document.createElement('div');
front.classList.add('front');

let back = document.createElement('div');
back.classList.add('back');

//add the background image to the div
back.style.backgroundImage = `url(${item.img})`;

squaresContainer.appendChild(card);
card.appendChild(front);
card.appendChild(back);

});

const isMatch = () => {
 //checking for a match function
    let squareClicked = document.querySelectorAll('.squareclick');
    squareClicked.forEach((card) => {
      card.classList.add('ismatch');
    });
    score ++;
    showScore();
  };

  function showScore() {
    document.getElementById('score').innerText = score;
  }

// reset cards
const resetCard = () => {
    cardClickOne = '';
    cardClickTwo = '';
    clickCount = 0;
    prevTarget = null;

    let squareClicked = document.querySelectorAll('.squareclick');
    squareClicked.forEach((card) => {
        card.classList.remove('squareclick');
    });
};

//listening for clicks and checking for match

//credit: used ChatGPT to solve how to disable the deck before startGame
squaresContainer.addEventListener('click', event => {
    // Check if the game has started
    if (!gameStarted) {
        return; // Exit the event listener if the game hasn't started
    }
    const clicked = event.target;
//credit: Code for listening for clicks & matches taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and adapted slightly for the needs of this project   
    if (clicked.nodeName === 'SECTION' ||
        clicked === prevTarget || 
        clicked.parentNode.classList.contains('squareclick') || 
        clicked.parentNode.classList.contains('ismatch')){
        return;
    }

    if (clickCount < 2) {
        clickCount++; 
        if (clickCount === 1){
            cardClickOne = clicked.parentNode.dataset.name;
            console.log('choice one');
            clicked.parentNode.classList.add('squareclick');
        } else {
            cardClickTwo = clicked.parentNode.dataset.name;
            console.log('choice two');
            clicked.parentNode.classList.add('squareclick');
        }
        if (cardClickOne !== '' && cardClickTwo !== '') {
            if (cardClickOne === cardClickTwo) {
              console.log('its a match');
              setTimeout(isMatch, 800);
              setTimeout(resetCard, 800);
            } 
              setTimeout(resetCard, 800);
          }
          prevTarget = clicked;
        }
    });

//bootstrap modal js
$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus');
  });

//connect contact form in modal to EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

//Get the values from the form
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;

//send the email using EmailJS
emailjs.send('service_kckkvte', 'egxz2hd', {
  from_name: name,
  from_email: email,
  message: message
}).then(function(response) {
  alert("Your message has been sent - we will reply soon!");
  console.log('SUCCESS!', response.status, response.text);
  $('#contact-modal').modal('hide');
},  function(error) {
    console.log('FAILED...', error);
});

//Clear the form fields
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
});

//change theme background
const images = ["url('assets/img/spider.jpg')", "url('assets/img/bee.jpg')", "url('assets/img/ladybug.jpg')", "url('assets/img/moths.jpg')"];
let currentIndex = 0;

document.getElementById('mybtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = images[currentIndex];
});
//Copyright credit
//Get current year
const currentYear =  new Date().getFullYear();
//update html document with the current year
document.getElementById('currentYear').textContent = currentYear;

//module.exports = cardArray;