export default class Board {
    constructor(rows, cols) {
        this.boolBoard = [];
        for(let row = 0; row < rows; row++){
            const tempNewArr = [];
            for(let col = 0; col < cols; col++){
                tempNewArr.push(this.determineInitLife());
            }
            this.boolBoard.push(tempNewArr);
        }
    }

    getBoard(){
        return this.boolBoard;
    }

    stepForward(){
        const neigborArr = this.getNeighborArr();
        const newArr = [];
        for(let checkRow = 0; checkRow < this.boolBoard.length; checkRow++){
            let tempNewArr = [];
            for(let checkCol = 0; checkCol < this.boolBoard[checkRow].length; checkCol++){
                if(this.boolBoard[checkRow][checkCol]){ // if the cell is currently alive;
                    if(neigborArr[checkRow][checkCol] == 2 || neigborArr[checkRow][checkCol] == 3){
                        tempNewArr.push(true); // alive with two or 3 neighbors, survives
                    }else{
                        tempNewArr.push(false); // alive with too many/few neighbors, dies
                    }
                }else{ // if the cell is currently dead
                    if(neigborArr[checkRow][checkCol] == 3){
                        tempNewArr.push(true); // dead with three neighbors, comes alive
                    }else{
                        tempNewArr.push(false); // dead with !3 neighbors, stays dead
                    }
                }
            }
            newArr.push(tempNewArr);
        }        
        this.boolBoard = newArr;
    }

    getNeighborArr(){
        const ret = [];
        for(let row = 0; row < this.boolBoard.length; row++){
            const tempNewArr = [];
            for(let col = 0; col < this.boolBoard[row].length; col++){
                tempNewArr.push(this.getNeighbors(row, col));
            }
            ret.push(tempNewArr);
        }
        return ret;
    }

    getNeighbors(row, col){
        let ret = 0;
        // loop through the 9x9 surrounding the cell passed in
        for(let checkRow = row-1; checkRow < row+2; checkRow++){
            for(let checkCol = col-1; checkCol < col+2; checkCol++){
                // is in bounds
                if(checkRow < this.boolBoard.length && checkRow >= 0 &&
                    checkCol < this.boolBoard[checkRow].length && checkCol >= 0){
                        // isn't the cell itself
                        if(!(checkRow == row && checkCol == col)){
                            if(this.boolBoard[checkRow][checkCol]){
                                ret++;
                            }
                        }
                }
            }
        }
        return ret;
    }

    determineInitLife(){
        if(Math.random() > .7){
            return true;
        }else{
            return false;
        }
    }
}