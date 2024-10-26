const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn =  document.querySelector('#reset-btn');
let playCount = 5;
let playerScore = 0;
let cpuScore = 0;
let ties = 0;
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
                return "Tie";
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
}/**
 * @param string
 * @returns String
 */
function game(type){
    if(playCount <= 0)
    {
        if(playerScore < cpuScore){
            alert(`Player Lost ${5 - playerScore - ties} / 5 games and Tied ${ties} games`);
            return "";
        }
        else if(playerScore > cpuScore)
        {
            alert(`Player Won ${5 - cpuScore - ties} / 5 games and Tied ${ties} games`);
            return "";
        }
    }
    const result = play(type);
    resultDiv = document.createElement("div");
    para = document.createElement("p");
    para.textContent = result;
    resultDiv.appendChild(para);
    --playCount;
    document.body.appendChild(resultDiv);
    playerScore += result == 'Player Wins' ? 1 : 0;
    cpuScore += result == 'Player Lost' ? 1 : 0;
    ties += result == 'Tie' ? 1 : 0;
    return result;
}

rockBtn.addEventListener("click", ()=>{ game('rock'); });
paperBtn.addEventListener("click", ()=>{ game('paper'); });
scissorsBtn.addEventListener("click", ()=>{ game('scissors'); });
resetBtn.addEventListener("click", ()=>{ location.replace(location.href)});