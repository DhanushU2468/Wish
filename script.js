for(let i=0;i<200;i++){

let star=document.createElement('div');

star.className='star';

star.style.left=Math.random()*100+'vw';

star.style.top=Math.random()*100+'vh';

document.getElementById('stars').appendChild(star);

}

function toggleMusic(){

const music=document.getElementById('bgMusic');

if(music.paused)
music.play();
else
music.pause();

}

document.addEventListener('mousemove',e=>{

let heart=document.createElement('div');

heart.className='cursor-heart';

heart.innerHTML='❤️';

heart.style.left=e.clientX+'px';

heart.style.top=e.clientY+'px';

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),1000);

});

setInterval(()=>{

let heart=document.createElement('div');

heart.className='heart';

heart.innerHTML='💖';

heart.style.left=Math.random()*100+'vw';

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},700);

let value=0;

let meter=setInterval(()=>{

value++;

document.querySelector('.fill').style.width=value+'%';

document.getElementById('loveText').innerHTML=value+'%';

if(value>=100){

document.getElementById('loveText').innerHTML='Infinity ❤️';

clearInterval(meter);

}

},50);

const msg=`

Varsha,

In a world full of people,
my heart somehow found its way to you.

Every smile of yours brightens my day.
Every conversation becomes a memory.
Every moment feels special.

Thank you for being part of my life.

Forever Yours,
Karthik ❤️

`;

let started=false;

function openLetter(){

if(started) return;

started=true;

document.getElementById('letter').style.display='block';

for(let i=0;i<60;i++){

let fire=document.createElement('div');

fire.className='firework';

fire.innerHTML='✨';

fire.style.left='50vw';

fire.style.top='50vh';

fire.style.setProperty('--x',Math.random());

fire.style.setProperty('--y',Math.random());

document.body.appendChild(fire);

setTimeout(()=>fire.remove(),1500);

}

let box=document.getElementById('letter');

let i=0;

let typing=setInterval(()=>{

box.innerHTML+=msg[i]==='\n'
?'<br>'
:msg[i];

i++;

if(i>=msg.length)
clearInterval(typing);

},35);

}
