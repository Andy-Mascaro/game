import { renderGoblin } from './game-utils.js';
const defeatedNumberEl = document.getElementById('defeated-number');
const adventurerHpEl = document.getElementById('adventurer-hp');
const adventurerImgEl = document.getElementById('adventurer-img');
const form = document.getElementById('form');
const goblinListEl = document.getElementById('goblins');

let defeatedGoblinsCount = 0;
let playerHp = Math.ceil(Math.random () * 10);
let goblins = [
    { id: 1, name: 'Blake', hp: Math.ceil(Math.random () * 5,) },
    { id: 2, name: 'Boss', hp: Math.ceil(Math.random () * 10,) }
]; 
let currentId = 3;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random () * 5),
    };
    currentId++;

    goblins.push(newGoblin);

    displayGoblins();

});


function goblinClickHandler(goblinData) {
    if (goblinData.hp < 0) return;
    if (Math.random() < .33) {
        goblinData.hp--;
        alert('you hit' + goblinData.name);
    } else {
        alert('you tired to hit' + goblinData.name + 'but you missed');
    }
    if (goblinData.hp === 0){
        defeatedGoblinsCount++;
    }
    if (playerHp === 0) {
        adventurerImgEl.classList.add('game-over-you-died');
        alert('Game Over You Died!!!');
    }
}

adventurerHpEl.textContent = playerHp;
defeatedNumberEl.textContent = defeatedGoblinsCount;

const hpEl = document.getElementById(`goblin-hp-${'goblinData.id'}`);
hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
faceEl.textContent = goblinData.hp > 0 ? 'need goblin face' : 'need dead goblin';

function displayGoblins(){
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
      const goblinEl = renderGoblin('goblin');

      goblinEl.addEventListener('click', () => {
       goblinClickHandler('goblin');

       });

}









// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
