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
let scoreIa = 0;
let round = 0;


let pickIa = '';
let pickPlayer = '';

SCORE_PL.innerHTML = `${scorePl}`;
SCORE_IA.innerHTML = `${scoreIa}`;

const IA_CHOICE = ["shi", "fu", "mi"];

shi.addEventListener('click', () => {
    let pickPlayer = 'shi';
    player.setAttribute("src", "./img/shi.png");
    let rand = Math.floor(Math.random() * IA_CHOICE.length);
    let randIa = IA_CHOICE[rand];
    let pickIa = randIa;
    ia.setAttribute("src", `/img/${randIa}.png`);

    matchVS(pickPlayer, randIa);

    round++;
    end();
    console.log(round);
});


fu.addEventListener('click', () => {
    let pickPlayer = 'fu';
    player.setAttribute("src", "./img/fu.png");
    let result = Math.floor(Math.random() * IA_CHOICE.length);
    let ChoiceIA = IA_CHOICE[result];
    let pickIa = ChoiceIA;
    ia.setAttribute("src", `/img/${ChoiceIA}.png`);

    matchVS(pickPlayer, ChoiceIA);

    round++;
    end();
    console.log(round);
});

mi.addEventListener('click', () => {
    let pickPlayer = 'mi';
    player.setAttribute("src", "./img/mi.png");
    let computerChoice = Math.floor(Math.random() * IA_CHOICE.length);
    let calculator = IA_CHOICE[computerChoice];
    let pickIa = calculator;
    ia.setAttribute("src", `/img/${calculator}.png`);

    matchVS(pickPlayer, calculator);

    round++;
    end();
    console.log(round);
});


function matchVS(pickPlayer, pickIa) {
    let newStr = pickPlayer + pickIa;
    switch (newStr) {
        case pickPlayer + pickPlayer:
            return nulR();
            break;
        case "shifu":
        case "mishi":
        case "fumi":
            return winR();
            break;
        default:
            return loseR();
            //case "mifu" || "shimi" || "fushi": return loseR();
            break;
    };

};


SCORE_PL.innerHTML = `${scorePl}`;
SCORE_IA.innerHTML = `${scoreIa}`;


function winR() {
    scorePl++;
    console.log(scorePl);
    console.log("YOU WIN !!");
    return;
};
function loseR() {
    scoreIa++;
    console.log(scorePl);
    return console.log("YOU LOSE !!")
};
function nulR() { return console.log("EGALITE !!") };


function end() {
    if (round == 3) {
        restart.classList.remove('hidden');
    };
};

/*restart.addEventListener('click', () => {
    scorePl = 0;
    scoreIa = 0;
    player.removeAttribute("src");
    ia.removeAttribute("src");
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