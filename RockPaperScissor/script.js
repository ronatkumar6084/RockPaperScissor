let userScore=0;
let compScore=0;

let msg= document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');
const choices=document.querySelectorAll('.choice');
let btn=document.querySelector('#reset');

const genCompChoice = ()=>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game Was Draw! Play Again";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log('userChoice= ',userChoice);
const compChoice = genCompChoice();
    console.log('compChoice= ',compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
      let userWin=true; 
      if(userChoice ==="rock"){
        //paper,scissor
        userWin = compChoice==="scissor" ? true : false;
      } else if(userChoice==="paper"){
        //rock,scissor
        userWin = compChoice==="rock" ? true : false;
      }else{
        //rock,paper
       userWin = compChoice==="paper" ? true : false;
      }
      showWinner(userWin,userChoice,compChoice);
    }
};
 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

// document.getElementById("reset").onclick = function() {
//     document.getElementById("user-score").innerHTML=0;
//     document.getElementById("comp-score").innerHTML=0;
//   };