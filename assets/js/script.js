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
    img: 'img/white-insect-robot.png',
}
];
