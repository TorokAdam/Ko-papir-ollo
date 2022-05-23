const choices = document.querySelectorAll( "selection" );
Array.from( choices ).forEach( choice => choice.addEventListener( 'click', playGame ) );
let round = 1;
let scoreboard = {
    playerScore: 0,
    computerScore: 0,

    wins: 0,
    draws: 0,
    lose: 0
};

const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

function playGame( humanChoice ) {
    aiChoice = getComputerChoice();
    getResult( humanChoice, aiChoice );

}

function getComputerChoice() {
    var choices = [ "paper", "rock", "scissors" ];
    var what = Math.floor( Math.random() * 3 );

    return choices[ what ];
}
function getResult( humanChoice, aiChoice ) {

    let isComputerWinner = isWinner( aiChoice, humanChoice );
    let isHumanWinner = isWinner( humanChoice, aiChoice );


    if ( isHumanWinner === 1 && isComputerWinner === 0 ) {
        win();
    } else if ( isHumanWinner === 0 && isComputerWinner === 1 ) {
        lost();
    } else {
        draw();
    }

    setScoreBoard();
}

function isWinner( player1, plyer2 ) {
    return SELECTIONS.find( e => e.name === player1 && e.beats === plyer2 ) ? 1 : 0;
}

function win() {
    scoreboard.playerScore++;
    scoreboard.wins++;

    // document.querySelectorAll( "selection" ).forEach( e => e.classList.add( "winner" ) );
    // document.querySelectorAll( "selection" ).forEach( e => e.classList.remove( "loser" ) );
    // document.querySelectorAll( "selection" ).forEach( e => e.classList.remove( "stalemate" ) );

    var list;
    list = document.querySelectorAll( "selection" );
    for ( var i = 0; i < list.length; ++i ) {
        list[ i ].classList.add( 'winner' );
    }

}
function lost() {
    scoreboard.computerScore++;
    scoreboard.lose++;

    // document.querySelectorAll( "selection" ).forEach( e => e.classList.remove( "winner" ) );
    // document.querySelectorAll( "selection" ).forEach( e => e.classList.add( "loser" ) );
    // document.querySelectorAll( "selection" ).forEach( e => e.classList.remove( "stalemate" ) );
}

function draw() {
    scoreboard.computerScore++;
    scoreboard.playerScore++;
    scoreboard.draws++;

    // document.querySelectorAll( "selection" ).forEach( e => e.classList.remove( "winner" ) );
    // document.querySelectorAll( "selection" ).forEach( e => e.classList.remove( "loser" ) );
    // document.querySelectorAll( "selection" ).forEach( e => e.classList.add( "stalemate" ) );
}

function setScoreBoard() {
    document.getElementById( "playerScore" ).innerText = scoreboard.playerScore;
    document.getElementById( "computerScore" ).innerText = scoreboard.computerScore;
    document.getElementById( "win" ).innerText = scoreboard.wins;
    document.getElementById( "lose" ).innerText = scoreboard.lose;
    document.getElementById( "draw" ).innerText = scoreboard.draws;
    round++;
    document.getElementById( "round" ).innerText = round;
}