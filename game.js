let start=false;
userSeq=[];
gameSeq=[];
let level=0;
let btn=["yellow","red","green","blue"];
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
         radbtn();
    }
});
 
let h3=document.querySelector("h3");

function radbtn(){
    userSeq=[];
level++;
h3.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let color=btn[randomIdx];
    gameSeq.push(color);
    console.log(gameSeq); 
    let btnn=document.querySelector(`.${color}`);
    flash(btnn);
}
function flash(butt){
    // console.log("flashes btn is ",butt);
    butt.classList.add("flash");
    setTimeout(function(){
        butt.classList.remove("flash");
    },250);
}
 
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(radbtn,1000);
        }
    } else{
        h3.innerHTML=`Game over! Your score is ${level} <br> Press key to play again`;
        reset();
    }
}

function btnPress(){
    let btn=this;
    flash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btno of allbtn){
    btno.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}