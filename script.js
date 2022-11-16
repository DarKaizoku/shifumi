const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', printShi );
fu.addEventListener('click', () => console.log('fu'));
mi.addEventListener('click', () => console.log('mi'));

// Pour le reste, a vous de jouer

let scorePl = 0;
let scoreIa = 0;
let pickIa = "fu";
/*
shi.addEventListener('click', () => { player.setAttribute("src", "./img/shi.png");});
fu.addEventListener('click', () => { player.setAttribute("src", "./img/fu.png");});
mi.addEventListener('click', () => { player.setAttribute("src", "./img/mi.png");});
*/
const score_player = document.getElementById('score-player');


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
        score_player.appendChild("scorePl");
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
};