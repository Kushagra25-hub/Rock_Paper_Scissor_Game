let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const getComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3); 
    return options[randIdx];    
}

const drawGame=()=>{
    // console.log("Game was draw.");
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor=" #081b31";

}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose");
        msg.innerText=`You lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("User choice =", userChoice);
    //To generate the computer choice
    const compChoice= getComputerChoice();
    // console.log("Comp Choice =",compChoice);
    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //Scissor or paper 
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //Rock or scissor
            userWin=compChoice==="scissor"? false : true;
        }
        else{
            //Rock or paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log(userChoice,"Choice was clicked");
        playGame(userChoice);
    })
})