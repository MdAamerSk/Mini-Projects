let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
 
// 1) keypress -> game start
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started= true;
        levelUp();
    }
});

// 2)
function gameflash(btn){
    btn.classList.add("flash"); // css .flash
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){ 
    btn.classList.add("userflash"); // css .flash
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
     h2.innerText =`level ${level}`;
     let randIdx =Math.floor(Math.random()* 4);
     let randColor = btns[randIdx];
     let randbtn= document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="#0f172a";
        },200);
        reset();
    }
}

function btnPress(){
    console.log(this); 
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
     started=false;
     gameSeq=[];
     userSeq=[];
     level=0;
}
