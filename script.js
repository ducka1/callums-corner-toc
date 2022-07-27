const gameBoard = (() => {
    const btns = document.querySelectorAll('.btn');
    const squares = document.querySelectorAll('.square');
    let board = ['', '', '', '', '', '', '', '', ''];

    return {
        btns,
        squares,
        board,
    };
})();

const Player = (name, mark) => {
    

    return {
        name,
        mark,
    };
};

const game = (() => {
    const displayBoard = (array) => {
        for (let i = 0; i < array.length; i++) {
            gameBoard.squares[i].textContent = gameBoard.board[i];
        }
    };
    const player1 = Player('ady', 'X');
    const player2 = Player('lol', 'O');
    let turn = 'X';
    const takeTurn = () => {
        gameBoard.btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (gameBoard.board[e.target.dataset.pos] !== '') {
                    console.log('taken :)');
                } else if (turn === 'X') {
                    gameBoard.board[e.target.dataset.pos] = turn;
                    turn = 'O';
                    displayBoard(gameBoard.board);
                } else if (turn === 'O') {
                    gameBoard.board[e.target.dataset.pos] = turn;
                    turn = 'X';
                    displayBoard(gameBoard.board);
                }
            });
        });
    };
    
    const gameOver = () => {
        const pos = gameBoard.board;
        if (pos[0] && pos[1] && pos[2] === 'X') {
            console.log('omg');
        }
    }

    return {
        player1,
        player2,
        takeTurn,
    };
})();

game.takeTurn();