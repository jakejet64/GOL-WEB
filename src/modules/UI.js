import Board from './Board.js';

export default class UI {
    static board = new Board(100, 50);
    static playbackSpeed = 300;
    static timer = setInterval(() => {
        this.board.stepForward();
        UI.drawBoard();
    }, this.playbackSpeed);
    static playing = true;

    static loadHomepage(){
        UI.drawBoard();
        UI.addPlaybackMenuListeners();
    }

    static addPlaybackMenuListeners(){
        document.querySelector('.play').addEventListener('click', () => {
            document.querySelector('.play').classList.add('inactive');
            document.querySelector('.pause').classList.remove('inactive');
            UI.play();
        });

        document.querySelector('.pause').addEventListener('click', () => {
            document.querySelector('.pause').classList.add('inactive');
            document.querySelector('.play').classList.remove('inactive');
            UI.pause();
        });

        document.querySelector('input[name="playbackSpeed"]').addEventListener('input', (e) => {
            this.playbackSpeed = (e.target.value);
            if(this.playing){
                UI.pause();
                UI.play();
            }
        });


    }

    static play() {
        this.timer = setInterval(() => {
            this.board.stepForward();
            UI.drawBoard();
        }, this.playbackSpeed);
        this.playing = true;
    }

    static pause() {
        clearInterval(this.timer);
        this.playing = false;
    }

    static drawBoard(){
        const boardElem = document.querySelector('.board');
        const boolBoard = this.board.getBoard();

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