const shi = document.getElementById("shi");
const fu = document.getElementById("fu");
const mi = document.getElementById("mi");
const player = document.getElementById("player");
const ia = document.getElementById("ia");
const command = document.getElementById("command");

//shi.addEventListener('click', () => console.log('shi'));
//fu.addEventListener('click', () => console.log('fu'));
//mi.addEventListener('click', () => console.log('mi'));

// Pour le reste, a vous de jouer

const SCORE_PL = document.getElementById("score-player");
const SCORE_IA = document.getElementById("score-ia");
const restart = document.getElementById("restart");

let scorePl = 0;
let scoreIa = 0;
let round = 0;
let pickIa = "";
let pickPlayer = "";
let randIa = "";

const IA_CHOICE = ["shi", "fu", "mi"];

function addEvents() {
  shi.addEventListener("click", clickShi);
  fu.addEventListener("click", clickFu);
  mi.addEventListener("click", clickMi);
}

addEvents();

function randomIa() {
  let rand = Math.floor(Math.random() * IA_CHOICE.length);
  randIa = IA_CHOICE[rand];
  ia.setAttribute("src", `./img/${randIa}.png`);
  console.log(`L'ordinateur fait ${randIa} !`);
}

function playerChoice(pChoice) {
  player.setAttribute("src", `./img/${pChoice}.png`);
}

function clickShi() {
  let pickPlayer = "shi";
  playerChoice("shi");
  console.log("Tu fais shi !");
  randomIa();
  matchVS(pickPlayer, randIa);
  round++;
  end();
  console.log(`Player : ${scorePl}  IA : ${scoreIa}`);
}

function clickFu() {
  playerChoice("fu");
  let pickPlayer = "fu";
  console.log("Tu fais fu !");
  randomIa();
  matchVS(pickPlayer, randIa);
  round++;
  end();
  console.log(`Player : ${scorePl}  IA : ${scoreIa}`);
}

function clickMi() {
  playerChoice("mi");
  let pickPlayer = "mi";
  console.log("Tu fais mi !");
  randomIa();
  matchVS(pickPlayer, randIa);
  round++;
  end();
  console.log(`Player : ${scorePl}  IA : ${scoreIa}`);
}

function matchVS(pickPlayer, pickIa) {
  let newStr = pickPlayer + pickIa;
  switch (newStr) {
    case pickPlayer + pickPlayer:
      return nulR();
    //break ;
    case "shifu":
    case "mishi":
    case "fumi":
      return winR();
    //break;
    default:
      return loseR();
    //case "mifu" || "shimi" || "fushi": return loseR();
    //break;
  }
}

function winR() {
  scorePl++;
  console.log("1 point pour toi !");
  SCORE_PL.textContent = `${scorePl}`;
  //return;
}

function loseR() {
  scoreIa++;
  console.log("1 point pour l'ordinateur !");
  SCORE_IA.textContent = `${scoreIa}`;
  //return;
}

function nulR() {
  console.log("Egalité !");
}

function end() {
  if (round == 3) {
    restart.classList.remove("hidden");
    shi.removeEventListener("click", clickShi);
    fu.removeEventListener("click", clickFu);
    mi.removeEventListener("click", clickMi);
    resultats();
    console.log("Veux-tu rejouer ?");
  }
}

function resultats() {
  if (scorePl > scoreIa) {
    console.log("Victoire !");
  }
  if (scorePl < scoreIa) {
    console.log("Défaite !");
  }
  if (scorePl == scoreIa) {
    console.log("Egalité !");
  }
}

// Autre solution :

/* switch (true) {
  case scorePl > scoreIa:
    console.log("Victoire !");
    break;
  case scorePl < scoreIa:
    console.log("Défaite !");
    break;
  default:
    console.log("Egalité !");
    break;
} */

restart.addEventListener("click", () => {
  scorePl = 0;
  scoreIa = 0;
  round = 0;
  displayReset();
  addEvents();
  console.log("Let's go again !");
});

function displayReset() {
  restart.classList.add("hidden");
  SCORE_PL.textContent = 0;
  SCORE_IA.textContent = 0;
  player.removeAttribute("src");
  ia.removeAttribute("src");
}
