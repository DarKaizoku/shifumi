const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', () => console.log('shi'));
fu.addEventListener('click', () => console.log('fu'));
mi.addEventListener('click', () => console.log('mi'));

// Pour le reste, a vous de jouer

const SCORE_PL = document.getElementById('score-player');
const SCORE_IA = document.getElementById('score-ia');


let scorePl = 0;
let scoreIa = 0;

function winR() { return console.log("YOU WIN !!") };
function loseR() { return console.log("YOU LOSE !!") };
function nulR() { return console.log("EGALITE !!") };

const IA_CHOICE = ["shi", "fu", "mi"];

shi.addEventListener('click', () => {
    player.setAttribute("src", "./img/shi.png");
    let rand = Math.floor(Math.random() * IA_CHOICE.length);
    let randIa = IA_CHOICE[rand];
    ia.setAttribute("src", `/img/${randIa}.png`);
});


fu.addEventListener('click', () => {
    player.setAttribute("src", "./img/fu.png");
    let result = Math.floor(Math.random() * IA_CHOICE.length);
    let ChoiceIA = IA_CHOICE[result];
    ia.setAttribute("src", `/img/${ChoiceIA}.png`);
    fu.addEventListener('click', () => { player.setAttribute("src", "./img/fu.png"); });
});

mi.addEventListener('click', () => {
    player.setAttribute("src", "./img/mi.png");
    let computerChoice = Math.floor(Math.random() * IA_CHOICE.length);
    let calculator = IA_CHOICE[computerChoice];
    ia.setAttribute("src", `/img/${calculator}.png`);
});

SCORE_PL.innerHTML = `${scorePl}`;
SCORE_IA.innerHTML = `${scoreIa}`;














/* const score_player = document.getElementById('score-player');


function printShi (){
    player.setAttribute("src", "./img/shi.png");
    ia.setAttribute('src',`./img/${pickIa}.png`);

    let pickPlayer = "shi";
    

    if (pickPlayer == pickIa) {
        console.log("Egalité");


    }
    else if (pickIa == "fu"){
        console.log("You Win !");
        scorePl++;
        score_player.appendChild(scorePl); 
        console.log(scorePl);
    }
    else{
        console.log("You Lose !!");
        scoreIa++;
        score_player.innerHTML = scoreIa;
    };




    console.log("Gagné");

    const hidden = document.getElementsByClassName('hidden');
    hidden.setAttribute("style","display : initial");
}; */