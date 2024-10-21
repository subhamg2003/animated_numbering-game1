var hitrn= 0;
function getNewHit(){
     hitrn = Math.floor(Math.random()*20)+1;
    document.querySelector("#hitval").textContent = hitrn
}

function makebubble(){
    var number = "";

for (var i = 1; i<=152; i++){
    var random = Math.floor(Math.random()*20)+1
    number += `<div class="bubble">${random}</div>`;
}

document.querySelector("#pbtm").innerHTML = number;
}
var timer = 30;
var timing ;
function runtimer(){
    var timing = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timing);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !!!</h1>`;
        }
    },1000);
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    maxscore();
    getNewHit();
    makebubble();
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
    }    
});

 var highvalue = 0;
function maxscore(){
    if(score > highvalue){
        highvalue = score;
        document.querySelector("#highval").textContent = highvalue;
    }
};


function start() {
    document.querySelector("#restart").addEventListener("click", function () {
        clearInterval(timing); 
        score = 0;
        timer = 30;
        document.querySelector("#scoreval").textContent = score; 
        document.querySelector("#timerval").textContent = timer;
        getNewHit(); 
        makebubble(); 
         runtimer(); 
    });
}


runtimer();
getNewHit();
makebubble();
start();






