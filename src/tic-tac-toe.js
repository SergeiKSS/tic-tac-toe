class TicTacToe {
    constructor() {
        var step, field = [[],[],[]];
        this.step = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
            ];
    }

    getCurrentPlayerSymbol() {
        if (this.step == 'x'){
            return 'x';}
        else{
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null){ 
            this.field[rowIndex][columnIndex] = this.step;
            if (this.step == 'x'){
                this.step = 'o';
            }else{
                this.step = 'x';
            }
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
