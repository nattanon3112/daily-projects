const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const autoButton = document.querySelector(".auto-button");
//autoButton.onclick=autoPlay();
let [playerPoint,computerPoint] = [0,0]

rockButton.addEventListener("click",()=>{
    playerOptionDisplay("rock");
    computerPlay();
    if(computerMove==="paper"){
        computerPoint+=1;
    }else if(computerMove==="scissors"){
        playerPoint+=1;
    }
    pointUpdate();
})
paperButton.addEventListener("click",()=>{
    playerOptionDisplay("paper");
    computerPlay();
    if(computerMove==="scissors"){
        computerPoint+=1;
    }else if(computerMove==="rock"){
        playerPoint+=1;
    }
    pointUpdate();
})
scissorsButton.addEventListener("click",()=>{
    playerOptionDisplay("scissors");
    computerPlay();
    if(computerMove==="rock"){
        computerPoint+=1;
    }else if(computerMove==="paper"){
        playerPoint+=1;
    }
    pointUpdate();
})

function pointUpdate(){
    document.querySelector(".player-point").innerText=playerPoint;
    document.querySelector(".computer-point").innerText=computerPoint;
}
let computerMove;
function computerPlay(){
    const computerRandom = Math.round(Math.random()*3)
    if(computerRandom==1){
        computerMove = "rock";
    }else if(computerRandom==2){
        computerMove = "paper";
    }else if(computerRandom==3){
        computerMove = "scissors";
    }
    computerOptionDisplay(computerMove);
}


function computerOptionDisplay(computerMove){
    if(computerMove==="rock"){
        document.querySelector(".computer-move .rock").style.display="block";
        document.querySelector(".computer-move .paper").style.display="none";
        document.querySelector(".computer-move .scissors").style.display="none";
    }else if(computerMove==="paper"){
        document.querySelector(".computer-move .rock").style.display="none";
        document.querySelector(".computer-move .paper").style.display="block";
        document.querySelector(".computer-move .scissors").style.display="none";
    }else if(computerMove==="scissors"){
        document.querySelector(".computer-move .rock").style.display="none";
        document.querySelector(".computer-move .paper").style.display="none";
        document.querySelector(".computer-move .scissors").style.display="block";
    }
}
let playerMove;
function playerOptionDisplay(playerMove){
    if(playerMove==="rock"){
        document.querySelector(".player-move .rock").style.display="block";
        document.querySelector(".player-move .paper").style.display="none";
        document.querySelector(".player-move .scissors").style.display="none";
    }else if(playerMove==="paper"){
        document.querySelector(".player-move .rock").style.display="none";
        document.querySelector(".player-move .paper").style.display="block";
        document.querySelector(".player-move .scissors").style.display="none";
    }else if(playerMove==="scissors"){
        document.querySelector(".player-move .rock").style.display="none";
        document.querySelector(".player-move .paper").style.display="none";
        document.querySelector(".player-move .scissors").style.display="block";
    }
}

function autoPlay(){
    const playerRandom = Math.round(Math.random()*3)
    computerPlay()
}