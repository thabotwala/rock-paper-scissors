function randomChoice(){
    let num = Math.ceil(Math.random() * 10);
    if(num % 3 == 0){
        return "rock";
    }else if(num % 2 == 0 && num != 6){
        return "paper";
    }else{
        return "scissors";
    }
}
function play(userChoice){
    userChoice = userChoice.toLowerCase()
    cpuChoice = randomChoice();
    switch(userChoice){
        case "rock":
            if(cpuChoice ==  "rock"){
                return "tie";
            }
            else if(cpuChoice ==  "paper"){
                return "Player Wins";
            }
            else if(cpuChoice ==  "scissors"){
                return "Player Wins";
            }
        break;
        case "paper":
            if(cpuChoice ==  "rock"){
                return "Player Lost";
            }
            else if(cpuChoice ==  "paper"){
                return "Tie";
            }
            else if(cpuChoice ==  "scissors"){
                return "Player Lost";
            }
        break;
        case "scissors":
            if(cpuChoice ==  "rock"){
                return "Player Lost";
            }
            else if(cpuChoice ==  "paper"){
                return "Player Wins";
            }
            else if(cpuChoice ==  "scissors"){
                return "Tie";
            }
        break;
    }
    return "";
}
function loop(){
    alert(play());
    should_play_again = prompt("Would you like to play again?")
    should_play_again = should_play_again.toLowerCase();
    if (should_play_again === "no"){
        return;
    }else{
        loop();
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", ()=>{
    const result = play("rock");
    resultDiv = document.createElement("div");
    para = document.createElement("p");
    para.textContent = result;
    resultDiv.appendChild(para);
    document.body.appendChild(resultDiv);
    console.log(result);
});
paper.addEventListener("click", ()=>{
    const result = play("paper");
    resultDiv = document.createElement("div");
    para = document.createElement("p");
    para.textContent = result;
    resultDiv.appendChild(para);
    document.body.appendChild(resultDiv);
    console.log(result);
});
scissors.addEventListener("click", ()=>{
    const result = play("scissors");
    resultDiv = document.createElement("div");
    para = document.createElement("p");
    para.textContent = result;
    resultDiv.appendChild(para);
    document.body.appendChild(resultDiv);
    console.log(result);
});
