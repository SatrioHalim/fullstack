let BtnRandom = document.getElementById('btnRandom');
console.log(BtnRandom);
let BtnRed = document.getElementById('btnRed');
let BtnGreen = document.getElementById('btnGreen');
let btnBlue = document.getElementById('btnBlue');

function BtnRandomHandler(){
    let colors = [
        "crimson",
        "green",
        "cadetblue"
    ]
    let number = Math.floor(Math.random()*colors.length);
    console.log(colors[number]);
    let Body = document.querySelector('body');
    Body.style.backgroundColor = colors[number];
}

function BtnRedHandler(){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'crimson';
}
function BtnBlueHandler(){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'cadetblue';
}
function BtnGreenHandler(){
    let Body = document.querySelector('body');
    Body.style.backgroundColor = 'green';
}

BtnRandom.addEventListener('click', BtnRandomHandler);
BtnRed.addEventListener('click', BtnRedHandler);
btnBlue.addEventListener('click', BtnBlueHandler);
BtnGreen.addEventListener('click', BtnGreenHandler);