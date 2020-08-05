'use strict';

let counterValue = 0;

let counters = [
    {
        value: 0,
        name: 'counter'
    }
];

const buildCounter = () => {
    let domString = '';
    for (let i = 0; i < counters.length; i++){
        domString += `<div class="counter--card">
                        <h3 class="counter--header">${counters[i].name}</h3>
                        <div class="counter--value value--${[i]}"">${counters[i].value}</div>
                        <div class="counter--buttons">
                            <button id="decrease-${[i]}">Decrease</button>
                            <button id="reset-${[i]}">Reset</button>
                            <button id="increase-${[i]}">Increase</button>
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
            document.querySelector(`.value--${[i]}`).style.color = '#DAA588';
        } else if (counters[i].value < 0) {
            document.querySelector(`.value--${[i]}`).style.color = '#F56960';
        } else if (counters[i].value > 0) {
            document.querySelector(`.value--${[i]}`).style.color = '#9DCBBA';
        }
    }
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

const resetCounter = (e) => {
    const target = e.target.id;
    for (let i = 0; i < counters.length; i++){
        if (target === `reset-${[i]}`){
            counters[i].value = 0;
        }
    }
    init();
}

const addCounter = () => {
    counters.push({value: 0, name: 'counter'})
    init();
}

const buttonEvent = () => {
    for (let i = 0; i < counters.length; i++){ 
    document.querySelector(`#decrease-${[i]}`).addEventListener('click', decreaseCounter);
    document.querySelector(`#increase-${[i]}`).addEventListener('click', increaseCounter);
    document.querySelector(`#reset-${[i]}`).addEventListener('click', resetCounter);
    }
    document.querySelector('#addCounter').addEventListener('click', addCounter);
}

const init = () => {
    buildCounter();
    changeColor();
    buttonEvent();
}

init();