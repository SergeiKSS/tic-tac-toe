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
        if (this.getWinner()!=null || this.noMoreTurns()){
            return true;
        }
        return false;
    }

    getWinner() {
        var win = 'x',
            count = 0;
            //горизонтали и вертикали
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field.length; j++) {
                if (this.field[i][j]==win){
                    count++;
                } 
            }
            if (count == this.field.length){
                return win;
            }
            count = 0;
        }
        for (var j = 0; j < this.field.length; j++) {
            for (var i = 0; i < this.field.length; i++) {
                if (this.field[i][j]==win){
                    count++;
                } 
            }
            if (count == this.field.length){
                return win;
            }
            count = 0;
        }
        //диагонали
        for (var i = 0; i < this.field.length; i++) {
            if (this.field[i][i]==win) {
                count++;
            }
        }
        if (count == this.field.length){
                return win;
            }
        count = 0;
        var j = 0;
        for (var i = this.field.length-1; i >= 0; i--) {
            if (this.field[j][i]==win) {
                count++;};
            j++;
        }
        if (count == this.field.length){
                return win;
            }
        count = 0;

        win = 'o';
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field.length; j++) {
                if (this.field[i][j]==win){
                    count++;
                } 
            }
            if (count == this.field.length){
                return win;
            }
            count = 0;
        }
        for (var j = 0; j < this.field.length; j++) {
            for (var i = 0; i < this.field.length; i++) {
                if (this.field[i][j]==win){
                    count++;
                } 
            }
            if (count == this.field.length){
                return win;
            }
            count = 0;
        }
        //диагонали
        for (var i = 0; i < this.field.length; i++) {
            if (this.field[i][i]==win) {
                count++;
            }
        }
        if (count == this.field.length){
                return win;
            }
        count = 0;
        var j = 0;
        for (var i = this.field.length-1; i >= 0; i--) {
            if (this.field[j][i]==win) {
                count++;};
            j++;
        }
        if (count == this.field.length){
                return win;
            }
        count = 0;

        return null;

    }

    noMoreTurns() {
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field.length; j++) {
                if (this.field[i][j]==null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() != null || this.isFinished()==false) {return false;};
        if (this.getWinner() == null && this.isFinished()==true) {return true;};
    }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
