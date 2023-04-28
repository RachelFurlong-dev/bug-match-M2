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
let delay = 800;

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

//add the background image to the div
card.style.backgroundImage = `url(${item.img})`;

squaresContainer.appendChild(card);
});

//checking for a match function

const isMatch = () => {
    let squareclicked = document.querySelectorAll('.squareclick')
    squareclicked.forEach((card) => {
      card.classList.add('ismatch')
    });
  };

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
    
    if (clicked.nodeName === 'SECTION' || clicked === prevTarget){
        return
    }

    if (clickCount < 2) {
        clickCount++; 
        if(clickCount === 1){
            cardClickOne = clicked.dataset.name;
            clicked.classList.add('squareclick')
        }else {
            cardClickTwo = clicked.dataset.name;
            clicked.classList.add('squareclick')
        }
        if (cardClickOne !== '' && cardClickTwo !== '') {
            if (cardClickOne === cardClickTwo) {
              setTimeout(isMatch, delay)
            }
            setTimeout(resetCard, delay)
          }
          prevTarget = clicked;
        }
    });


