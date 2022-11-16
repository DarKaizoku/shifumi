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

shi.addEventListener('click', () => { player.setAttribute("src", "./img/shi.png");});
fu.addEventListener('click', () => { player.setAttribute("src", "./img/fu.png");});
mi.addEventListener('click', () => { player.setAttribute("src", "./img/mi.png");});

/*function printShi (){
    var img = document.createElement('img');
    img.src ="./img/shi.png";

    player.setAttribute("src",img);




    console.log("Gagné");

    var hidden = document.getElementsByClassName('hidden');
    hidden.setAttribute("style","display : initial");
};