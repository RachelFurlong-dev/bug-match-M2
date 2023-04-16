const board = document.querySelector("#board");

//create a section & give it a class of 'square'
const squaresContainer = document.createElement('section');
squaresContainer.setAttribute('class', 'square');

//append the section to the board div
board.appendChild(squaresContainer);

const cardArray = [
{
    name: 'robot 1', 
    img: 'img/alien-insect-robot.png',
},
{
    name: 'robot 2', 
    img: 'img/alien-insect-robot2.png',
},
{
    name: 'robot 3', 
    img: 'img/blue-insect-robot.png',
},
{
    name: 'robot 4', 
    img: 'img/green-insect-robot.png',
},
{
    name: 'robot 5', 
    img: 'img/orange-insect-robot.png',
},
{
    name: 'robot 6', 
    img: 'img/pink-insect-robot.png',
},
{
    name: 'robot 7', 
    img: 'img/reddish-insect-robot.png',
},
{
    name: 'robot 8', 
    img: 'img/white-insect-robot7.png',
}
];

//for each item in the array - loop through the array and create a div
cardArray.forEach(item => {
    const card = document.createElement('div'); 

//add card css style to div
card.classList.add('card');

//add a data attribute of name to the div
card.dataset.name = item.name;

//add the background image to the div
card.style.backgroundImage = `url(${item.img})`;

//add the div to the layout
squaresContainer.appendChild(card);

});