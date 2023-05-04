let score = 0;

const board = document.querySelector("#board");

//create a section & give it a class of 'square'
const squaresContainer = document.createElement('section');
squaresContainer.setAttribute('class', 'square');

//append the section to the board div
board.appendChild(squaresContainer);

let clickCount = 0;
let cardClickOne = '';
let cardClickTwo = '';
let prevTarget = null;

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

//for each item in the array - loop through the array and create a div
gameBoard.forEach(item => {
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

    let squareClicked = document.querySelectorAll('.squareclick');
    squareClicked.forEach(card => {
        card.classList.remove('squareclick');
    });
};

//listening for clicks and checking for match

squaresContainer.addEventListener('click', event => {
    const clicked = event.target;
    
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

    function playAgain() {
        window.location.reload();
    } 

//bootstrap modal js
$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })

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


//module.exports = cardArray;