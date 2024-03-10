const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const autoButton = document.querySelector(".auto-button");
//autoButton.onclick=autoPlay();
let [playerPoint,computerPoint] = [0,0]
rockButton.onclick = ()=> {play("rock")};
paperButton.onclick = ()=> {play("paper")};
scissorsButton.onclick = ()=> {play("scissors")};

function play(playerMove){
    computerPlay();
    if(computerMove==="rock" && playerMove!=="rock"){
        playerMove==="paper" ? playerPoint+=1 : computerPoint+=1;
    }else if(computerMove==="paper" && playerMove!=="paper"){
        playerMove==="scissors" ? playerPoint+=1 : computerPoint+=1;
    }else if(computerMove==="scissors" && playerMove!=="scissors"){
        playerMove==="rock" ? playerPoint+=1 : computerPoint+=1;
    }
    playerOptionDisplay(playerMove);
    pointUpdate()
}

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
    document.querySelector(".computer-move .rock").style.display="none";
    document.querySelector(".computer-move .paper").style.display="none";
    document.querySelector(".computer-move .scissors").style.display="none";
    if(computerMove==="rock"){
        document.querySelector(".computer-move .rock").style.display="block";
    }else if(computerMove==="paper"){
        document.querySelector(".computer-move .paper").style.display="block";
    }else if(computerMove==="scissors"){
        document.querySelector(".computer-move .scissors").style.display="block";
    }
}
let playerMove;
function playerOptionDisplay(playerMove){
    document.querySelector(".player-move .rock").style.display="none";
    document.querySelector(".player-move .paper").style.display="none";
    document.querySelector(".player-move .scissors").style.display="none";
    if(playerMove==="rock"){
        document.querySelector(".player-move .rock").style.display="block";
    }else if(playerMove==="paper"){
        document.querySelector(".player-move .paper").style.display="block";
    }else if(playerMove==="scissors"){
        document.querySelector(".player-move .scissors").style.display="block";
    }
}

document.querySelector(".auto-button").onclick = autoPlay;
let autoPlayOn = false;
function autoPlay(){
    if(!autoPlayOn){    
        const auto = setInterval(()=>{play(computerMove);},1000);
        computerPlay();
        auto();
    }else{
        clearInterval(auto);
        autoPlayOn=true;
    }
    
}