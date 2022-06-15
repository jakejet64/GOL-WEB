import Board from './Board.js';

export default class UI {
    static board = new Board(50, Math.round(window.innerWidth / (window.innerHeight / 50)));
    static rowColLock = true;
    static playbackSpeed = (1050 - 475);
    static timer = setInterval(() => {
        this.board.stepForward();
        UI.drawBoard();
    }, this.playbackSpeed);
    static playing = true;

    static loadHomepage(){
        UI.adjustCSSRowsCols();
        UI.addWindowResizeEventListener();
        UI.drawBoard();
        UI.addPlaybackMenuListeners();
        UI.addResizeMenuListeners();
    }

    static addResizeMenuListeners(){
        // open the resize menu
        document.querySelector('.openResizeMenu .open').addEventListener('click', () => {
            document.querySelector('.openResizeMenu .open').classList.add('inactive');
            document.querySelector('.openResizeMenu .close').classList.remove('inactive');
            document.querySelector('.resizeMenu').classList.add('open');
        });
        // close the resize menu
        document.querySelector('.openResizeMenu .close').addEventListener('click', () => {
            document.querySelector('.openResizeMenu .close').classList.add('inactive');
            document.querySelector('.openResizeMenu .open').classList.remove('inactive');
            document.querySelector('.resizeMenu').classList.remove('open');
        });
        // lock rows & columns
        document.querySelector(".locked .lockOpen").addEventListener('click', () => {
            document.querySelector(".locked .lockOpen").classList.add('inactive');
            document.querySelector(".locked .lockClosed").classList.remove('inactive');
            document.querySelectorAll(".colIcon, .cols").forEach(element => element.classList.add("grayedOut"));
            this.rowColLock = true;
            UI.lockBoard();
        });
        // unlock rows & columns
        document.querySelector(".locked .lockClosed").addEventListener('click', () => {
            document.querySelector(".locked .lockClosed").classList.add('inactive');
            document.querySelector(".locked .lockOpen").classList.remove('inactive');
            document.querySelectorAll(".colIcon, .cols").forEach(element => element.classList.remove("grayedOut"));
            this.rowColLock = false;
        });
        // row sizing adjustment
        document.querySelector('input[name="rows"]').addEventListener('input', (e) => {
            const newRows = (160 - e.target.value);
            if(this.rowColLock){
                this.board = new Board(newRows, 1);
                UI.lockBoard();
            }else{
                UI.updateRows(newRows);
            }
        });
        // col sizing adjustment
        document.querySelector('input[name="cols"]').addEventListener('input', (e) => {
            if(!this.rowColLock){
                UI.updateCols(160 - e.target.value);
            }
        });
    }

    static updateCols(newCols) {
        if(this.playing){
            UI.pause();
            this.board = new Board(this.board.getRows(), newCols);
            UI.adjustCSSRowsCols();
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new Board(this.board.getRows(), newCols);
            UI.adjustCSSRowsCols();
            UI.drawBoard();
        }
    }

    static updateRows(newRows) {
        if(this.playing){
            UI.pause();
            this.board = new Board(newRows, this.board.getCols());
            UI.adjustCSSRowsCols();
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new Board(newRows, this.board.getCols());
            UI.adjustCSSRowsCols();
            UI.drawBoard();
        }
    }

    static lockBoard() {
        if(this.playing){
            UI.pause();
            this.board = new Board(this.board.getRows(), Math.round(window.innerWidth / (window.innerHeight / this.board.getRows())));
            UI.adjustCSSRowsCols();
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new Board(this.board.getRows(), Math.round(window.innerWidth / (window.innerHeight / this.board.getRows())));
            UI.adjustCSSRowsCols();
            UI.drawBoard();
        }
    }

    static adjustCSSRowsCols() {
        const root = document.documentElement;
        root.style.setProperty('--rows', this.board.getRows());
        root.style.setProperty('--cols', this.board.getCols());
    }

    static addWindowResizeEventListener() {
        window.addEventListener('resize', () => {
            if(this.rowColLock){
                UI.lockBoard();
            }
        });
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
            this.playbackSpeed = (1050 - this.playbackSpeed);
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