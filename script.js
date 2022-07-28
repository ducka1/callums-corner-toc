const gameBoard = (() => {
    const btns = document.querySelectorAll('.btn');
    let board = ['', '', '', '', '', '', '', '', ''];

    return {
        btns,
        board,
    };
})();

const cpu = (() => {
    // wip
})();

const Player = (name, mark) => {
    

    return {
        name,
        mark,
    };
};

const game = (() => {
    let player1 = '';
    let player2 = '';

    let tiles = gameBoard.board;
    const gameStatus = document.querySelector('#game-status');

    const displayBoard = (array) => {
        for (let i = 0; i < array.length; i++) {
            gameBoard.btns[i].textContent = tiles[i];
        }
    };

    const newGameBtn = document.querySelector('#new-game');
    newGameBtn.addEventListener('click', () => {
        player1 = Player(document.querySelector('#player1').value, 'X');
        player2 = Player(document.querySelector('#player2').value, 'O');
        gameBoard.btns.forEach((btn) => {
            btn.disabled = false;
        })
        tiles = ['', '', '', '', '', '', '', '', ''];
        displayBoard(tiles);
        gameStatus.textContent = `${player1.name}'s turn`;
    });

    let turn = 'X';
    gameBoard.btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            gameStatus.textContent = '';

            if (tiles[e.target.dataset.pos] !== '') {
                gameStatus.textContent = 'Choose another tile';
            } else if (turn === 'X') {
                tiles[e.target.dataset.pos] = 'X';
                turn = 'O';
                gameStatus.textContent = `${player2.name}'s turn`
                displayBoard(tiles);
                gameOver(tiles);
            } else if (turn === 'O') {
                tiles[e.target.dataset.pos] = 'O';
                turn = 'X';
                gameStatus.textContent = `${player1.name}'s turn`
                displayBoard(tiles);
                gameOver(tiles);
            }
        });
    });

    const gameOver = (array) => {
        if (array[0] === 'X' && array[1] === 'X' && array[2] === 'X' ||     // FIRST ROW
            array[3] === 'X' && array[4] === 'X' && array[5] === 'X' ||     // SECOND ROW
            array[6] === 'X' && array[7] === 'X' && array[8] === 'X' ||     // THIRD ROW
            array[0] === 'X' && array[3] === 'X' && array[6] === 'X' ||     // FIRST COLUMN
            array[1] === 'X' && array[4] === 'X' && array[7] === 'X' ||     // SECOND COLUMN
            array[2] === 'X' && array[5] === 'X' && array[8] === 'X' ||     // THIRD COLUMN
            array[0] === 'X' && array[4] === 'X' && array[8] === 'X' ||     // TOP LEFT - BOTTOM RIGHT DIAGONAL
            array[2] === 'X' && array[4] === 'X' && array[6] === 'X'        // TOP RIGHT - BOTTOM LEFT DIAGONAL
            ) {
                gameStatus.textContent = `${player1.name} wins!`;
                gameBoard.btns.forEach((btn) => {
                    btn.disabled = true;
                })
                turn = 'X';

        } else if (
            array[0] === 'O' && array[1] === 'O' && array[2] === 'O' ||     // FIRST ROW
            array[3] === 'O' && array[4] === 'O' && array[5] === 'O' ||     // SECOND ROW
            array[6] === 'O' && array[7] === 'O' && array[8] === 'O' ||     // THIRD ROW
            array[0] === 'O' && array[3] === 'O' && array[6] === 'O' ||     // FIRST COLUMN
            array[1] === 'O' && array[4] === 'O' && array[7] === 'O' ||     // SECOND COLUMN
            array[2] === 'O' && array[5] === 'O' && array[8] === 'O' ||     // THIRD COLUMN
            array[0] === 'O' && array[4] === 'O' && array[8] === 'O' ||     // TOP LEFT - BOTTOM RIGHT DIAGONAL
            array[2] === 'O' && array[4] === 'O' && array[6] === 'O'        // TOP RIGHT - BOTTOM LEFT DIAGONAL
            ) {
                gameStatus.textContent = `${player2.name} wins!`;
                gameBoard.btns.forEach((btn) => {
                    btn.disabled = true;
                })
                turn = 'X';

        } else if (!array.includes('')) {
                gameStatus.textContent = `It's a tie!`;
                gameBoard.btns.forEach((btn) => {
                    btn.disabled = true;
                })
                turn = 'X';
        }
        
    };
})();