var cells = document.querySelectorAll( '.game__cell' );
var gameStatusEl = document.querySelector( '.game__status' );
var gameRestartBtn = document.querySelector( '.game__restart' );
var gameUndoBtn = document.querySelector( '.game__undo' );

var gameStarted = false;
var cellState = [
    '', '', '',
    '', '', '',
    '', '', '',
];
var nextPlayer = 'X';
var winningStates = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
];

function showNextTurnMsg() {
    gameStatusEl.innerText = 'Next turn: ' + nextPlayer;
}

function start() {
    console.log( 'game on' );
    gameStarted = true;
    cellState = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    nextPlayer = 'X';
    showNextTurnMsg();
    cells.forEach(function( cell ) {
        cell.innerText = '';
    });
}

function isGameOver() {
    // has a player won?
    for( let i = 0; i < winningStates.length; i++ ) {
        // winningState = [ 0, 1, 2 ]
        var winningState = winningStates[i];
        var x = winningState[0]; // 0
        var y = winningState[1]; // 1
        var z = winningState[2]; // 2

        if( cellState[x] !== '' && cellState[x] === cellState[y] && cellState[y] === cellState[z] ) {
            gameStatusEl.innerText = cellState[x] + ' won!';
            return true;
        }
    }

    // is game drawn?
    if( cellState.includes( '' ) === false ) {
        gameStatusEl.innerText = 'Game drawn';
        return true;
    }

    return false;
}

function onCellClick() {
    console.log('cell was clicked');
    console.log(this);

    if(gameStarted) {
        var cell = this;
        var idx = cell.getAttribute( 'data-cell-index' );
        console.log( idx );

        if(cellState[idx] !== '') {
            alert('Cell already taken');
            return;
        }

        cellState[idx] = nextPlayer;
        cell.innerText = nextPlayer;

        if(isGameOver()) {
            gameStarted = false;
            return;
        }

        nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
        showNextTurnMsg();
    }
}

gameRestartBtn.addEventListener( 'click', start );

// cells.addEventListener will not work since cells is like an array and not a DOM node (object) itself
cells.forEach(function(cell) {
    // for event handlers (onCellClick), the "this" is the element on which the event (here 'click') occurs
    cell.addEventListener('click', onCellClick)
});