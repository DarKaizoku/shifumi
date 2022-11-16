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

const IA_CHOICE = ["shi", "fu", "mi"];

shi.addEventListener('click', () => { player.setAttribute("src", "/img/shi.png");
    let rand = Math.floor(Math.random()*IA_CHOICE.length);
    let randIa = IA_CHOICE[rand];
    ia.setAttribute("src", `/img/${randIa}.png`);
});


fu.addEventListener('click', () => { player.setAttribute("src", "/img/fu.png");});


mi.addEventListener('click', () => { player.setAttribute("src", "/img/mi.png");});



