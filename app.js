import { renderGoblin } from './game-utils.js';
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHpEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

let defeatedGoblinsCount = 0;
let playerHp = (1);
let goblins = [
    { id: 1, name: 'Blake', hp: Math.ceil(Math.random () * 5,) },
    { id: 2, name: 'Boss', hp: Math.ceil(Math.random () * 10,) }
]; 
let currentId = 3;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (playerHp <= 0) return;
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
    if (playerHp <= 0) return;
    if (goblinData.hp <= 0) return;
    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('you hit' + goblinData.name);
    } else {
        alert('you tired to hit' + goblinData.name + 'but you missed');
    }
    if (Math.random () < 0.5){
        playerHp--;
        alert(goblinData.name + 'hit you!');
    } else {
        alert(goblinData.name + 'tried to hit you but missed!');
    }
    if (goblinData.hp === 0){
        defeatedGoblinsCount++;
    }
    if (playerHp === 0) {
        adventurerImgEl.classList.add('game-over');
        alert('Game Over You Died!!!');
    }


    adventurerHpEl.textContent = playerHp;
    defeatedNumberEl.textContent = defeatedGoblinsCount;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';
}
function displayGoblins(){
    goblinListEl.textContent = '' ;

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
         
           
        });

        
        goblinListEl.append(goblinEl);
    }

}

displayGoblins();
