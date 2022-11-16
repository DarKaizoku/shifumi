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

function printShi (){
    var img = document.createElement('img');
    img.src ="./img/shi.png";

    player.setAttribute("url",img);




    console.log("Gagné");

    var hidden = document.getElementsByClassName('hidden');
    hidden.setAttribute("style","display : initial");
};