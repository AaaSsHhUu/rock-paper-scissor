const icons = document.querySelectorAll(".icons");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let result = document.querySelector(".result");

result.style.opacity = "0";

let arr = ["rock","paper","scissor"];
let compPoints = 0;
let userPoints = 0;

function compChoice(){
    return Math.floor(Math.random()*3);
}

function checkWin(userChoice){
    let compAns = arr[compChoice()];
    
    // Computer wins
    if((userChoice == "rock" && compAns == "paper") || 
        (userChoice == "paper"  && compAns == "scissor") || 
        (userChoice == "scissor" && compAns == "rock")
    ){
        compPoints++;
        comp.innerHTML = `Comp. : ${compPoints}`
        result.innerHTML = "Computer Wins";
        result.style.background = "crimson";
        result.style.opacity ="1";
    }

    // User Wins
    else if ((userChoice == "rock" && compAns == "scissor") ||
            (userChoice == "paper" && compAns == "rock") ||
            (userChoice == "scissor" && compAns == "paper")
    ){
        userPoints++;
        user.innerHTML = `Me : ${userPoints}`;
        result.innerHTML = "You Win";
        result.style.background = "green";
        result.style.opacity ="1";
    }

    // Tie 
    else{
        console.log("Tie");
        result.innerHTML = "Tie";
        result.style.background = "gray";
        result.style.opacity = "1";
    }
}

icons.forEach((icon)=>{
    icon.addEventListener("click", (e)=>{
        checkWin(e.target.className)
    })
})



