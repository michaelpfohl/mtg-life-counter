'use strict';

let counters = [
    {
        value: 20,
        name: 'player'
    }
];

let format = 'standard';

const buildCounter = () => {
    let domString = '';
    for (let i = 0; i < counters.length; i++){
        domString += `<div class="counter--card">
                        <h3 class="counter--header">${counters[i].name}</h3>
                        <div class="counter--value value--${[i]}"">${counters[i].value}</div>
                        <div class="counter--buttons">
                            <button id="decrease-by-5-${[i]}">-5</button>
                            <button id="decrease-${[i]}">-1</button>
                            <button id="reset-${[i]}">Reset</button>
                            <button id="increase-${[i]}">+1</button>
                            <button id="increase-by-5-${[i]}">+5</button>
                        </div>
                        <div class="player--button">
                            <input type="text" class="name--input" id="name-input-${[i]}" placeholder="Player Name">
                            <button class="name--button" id="player-${[i]}">Submit Name</button>
                        </div>
                        <div id="name-input-${[i]}">
                        </div>
                    </div>`;
    }
    printToDom('counterContainer', domString);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const changeColor = () => {
    for (let i = 0; i < counters.length; i++){
        if (counters[i].value === 0) {
            document.querySelector(`.value--${[i]}`).style.color = '#fff';
        } else if (counters[i].value < 0) {
            document.querySelector(`.value--${[i]}`).style.color = '#8a0005';
        } else if (counters[i].value > 0) {
            document.querySelector(`.value--${[i]}`).style.color = '#008a29';
        }
    }
}

const decreaseBy5 = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `decrease-by-5-${[i]}`){
            counters[i].value -= 5;
        }
    }
    init();
}

const decreaseCounter = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `decrease-${[i]}`){
            counters[i].value -= 1;
        }
    }
    init();
}

const increaseCounter = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `increase-${[i]}`){
            counters[i].value += 1;
        }
    }
    init();
}

const increaseBy5 = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `increase-by-5-${[i]}`){
            counters[i].value += 5;
        }
    }
    init();
}

const resetCounter = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `reset-${[i]}` && format === 'standard'){
            counters[i].value = 20;
        } else if (target === `reset-${[i]}` && format === 'commander'){
            counters[i].value = 40;
        }
    }
    init();
}

const addCounter = () => {
    counters.push({value: 20, name: 'player'})
    init();
}

const commanderMode = () => {
    for (let i = 0; i < counters.length; i++){
        counters[i].value = 40;
        format = 'commander';
    }
    init();
}

const standardMode = () => {
    for (let i = 0; i < counters.length; i++){
        counters[i].value = 20;
        format = 'standard';
    }
    init();
}

const changeName = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `player-${[i]}`){
            const name = document.querySelector(`#name-input-${[i]}`).value;
            counters[i].name = name;
        }
    }
    init();
}

const buttonEvent = () => {
    for (let i = 0; i < counters.length; i++){ 
    document.querySelector(`#decrease-by-5-${[i]}`).addEventListener('click', decreaseBy5);
    document.querySelector(`#decrease-${[i]}`).addEventListener('click', decreaseCounter);
    document.querySelector(`#increase-${[i]}`).addEventListener('click', increaseCounter);
    document.querySelector(`#increase-by-5-${[i]}`).addEventListener('click', increaseBy5);
    document.querySelector(`#reset-${[i]}`).addEventListener('click', resetCounter);
    document.querySelector(`#player-${[i]}`).addEventListener('click', changeName);
    }
    document.querySelector('#addCounter').addEventListener('click', addCounter);
    document.querySelector('#commander').addEventListener('click', commanderMode);
    document.querySelector('#standard').addEventListener('click', standardMode);
}

const init = () => {
    buildCounter();
    changeColor();
    buttonEvent();
}

init();