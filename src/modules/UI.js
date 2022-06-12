import board from './Storage.js';
import Board from './Board.js'

export default class UI {
    static loadHomepage(){
        UI.drawBoard();
        const player = setInterval(() => {
            board.stepForward();
            UI.drawBoard();
        }, 200);
        board.stepForward();
        console.log(board.getBoard());
    }

    static drawBoard(){
        const boardElem = document.querySelector('.board');
        const boolBoard = board.getBoard();

        // clear old board
        boardElem.textContent = '';

        boolBoard.forEach(row => {
            row.forEach(col => {
                const newBoardPiece = document.createElement('div');
                if(col){
                    newBoardPiece.classList.add('alive');
                }else{
                    newBoardPiece.classList.add('dead');
                }
                boardElem.appendChild(newBoardPiece);
            });
        });
    }
}