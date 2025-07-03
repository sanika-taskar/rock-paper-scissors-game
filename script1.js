let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".rock,.paper,.scissor");
let msg=document.querySelector("#msg");
let users=document.querySelector("#user-score");
let comps=document.querySelector("#comp-score");
let resetBtn=document.querySelector(".reset-btn");

const genCompChoice=()=>{
    const val=["rock","paper","scissor"];
    const ind=Math.floor(Math.random() * 3);//if you want to create the random no in btw particular range then multiply the random function with the last no of the range one greator then it bcz random fun generate only 0 and 1
    return val[ind];
}

const dispUser=(userWin,userchoice,compChoice)=>{
    
    if(userWin){
        userScore++;
        msg.innerText=`you win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
        users.innerText=userScore;

    }else{
        compScore++;
        msg.innerText=`you lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red"
        comps.innerText=compScore;
    }
}

const drawGame=()=>{
    msg.innerText="Game was Draw. try again";
    msg.style.backgroundColor="rgb(54, 53, 52)";
}

const playGame=(userchoice)=>{
    let compChoice=genCompChoice();
    
    if(compChoice == userchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userWin= compChoice==="scissor"?false:true;
        }else{
            userWin= compChoice==="rock"?false:true;
        }
        dispUser(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("class");
        playGame(userchoice);
    })
})

const resetGame=()=>{
    userScore=0;
    compScore=0;
    users.innerText=0;
    comps.innerText=0;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="rgb(54, 53, 52)";
}

resetBtn.addEventListener("click",()=>{
    resetGame();
})