function computerPlay(){
    let pick = ['rock','scissors','paper'];
    let random = Math.round(Math.random() * 2);
    return pick[random];
}

function playRound(playerSelection, computerSelection){

    return playerSelection === 'rock' && computerSelection === 'paper'
    ? 'You lose, paper beats rock'
    : playerSelection === 'paper' && computerSelection === 'rock'
    ? 'You win, paper beats rock'
    : playerSelection === 'scissors' && computerSelection === 'rock'
    ? 'You lose, rock beats scissors'
    : playerSelection === 'rock' && computerSelection === 'scissors'
    ? 'You win, rock beats scissors'
    : playerSelection === 'paper' && computerSelection === 'scissors'
    ? 'You lose, scissors beats paper'
    : playerSelection === 'scissors' && computerSelection === 'paper'
    ? 'You win, scissors beats paper'
    : `${playerSelection} vs ${computerSelection}, Stalemate!`

}

function game(){

    for(let i=0; i <= 4; i++){
        const playerSelection = window.prompt('pick scissors, paper or rock: ').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()


