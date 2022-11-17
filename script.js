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
const restart = document.getElementById('restart');

let scorePl = 0;
let scoreIa = 2;
let round = 0;


SCORE_PL.textContent = `${scorePl}`;
SCORE_IA.textContent = `${scoreIa}`;

const IA_CHOICE = ["shi", "fu", "mi"];

shi.addEventListener('click', clickShi);

function clickShi() {
    player.setAttribute("src", "./img/shi.png");
    let rand = Math.floor(Math.random() * IA_CHOICE.length);
    let randIa = IA_CHOICE[rand];
    ia.setAttribute("src", `/img/${randIa}.png`);
    round++;
    end();
    console.log(round);
    return round;
}

fu.addEventListener('click', clickFu);

function clickFu() {
    player.setAttribute("src", "./img/fu.png");
    let result = Math.floor(Math.random() * IA_CHOICE.length);
    let ChoiceIA = IA_CHOICE[result];
    ia.setAttribute("src", `/img/${ChoiceIA}.png`);
    round++;
    end();
    console.log(round);
    return round;
}

mi.addEventListener('click', clickMi);

function clickMi(){
    player.setAttribute("src", "./img/mi.png");
    let computerChoice = Math.floor(Math.random() * IA_CHOICE.length);
    let calculator = IA_CHOICE[computerChoice];
    ia.setAttribute("src", `/img/${calculator}.png`);
    round++;
    end();
    console.log(round);
    return round;
};

SCORE_PL.textContent = `${scorePl}`;
SCORE_IA.textContent = `${scoreIa}`;


function winR() {
    scorePl++;
    console.log("YOU WIN !!");
};
function loseR() {
    scoreIa++;
    console.log("YOU LOSE !!")
};
function nulR() {console.log("EGALITE !!") };

function end() {
if (round == 3) {
    restart.classList.remove('hidden');
    shi.removeEventListener('click', clickShi);
    fu.removeEventListener('click', clickFu);
    mi.removeEventListener('click', clickMi);
};}


restart.addEventListener('click', () => {
    SCORE_PL.textContent= 0;
    SCORE_IA.textContent= 0;
    player.removeAttribute("src");
    ia.removeAttribute("src");
    shi.addEventListener('click', clickShi);
    fu.addEventListener('click', clickFu);
    mi.addEventListener('click', clickMi);
    round = 0;
    restart.classList.add('hidden');
});












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


/* function printMi () {

player.setAttribute("src", "./img/mi.png");
ia.setAttribute("src", `/img/${calculator}.png`);

let pickPlayer= "mi";


if (pickPlayer==pickIa) {
    console.log("égalité");
} else if {


}





} */