var newSpaces = require('./space');
var newPieces = require('./piece');
var grid = [[null, new newSpaces.Space('b8', false), null, new newSpaces.Space('d8', false), null, new newSpaces.Space('f8', false), null, new newSpaces.Space('h8', false)], 
            [new newSpaces.Space('a7', false), null, new newSpaces.Space('c7', false), null, new newSpaces.Space('e7', false), null, new newSpaces.Space('g7', false), null],
            [null, new newSpaces.Space('b6', false), null, new newSpaces.Space('d6', false), null, new newSpaces.Space('f6', false), null, new newSpaces.Space('h8', false)],
            [new newSpaces.Space('a5', false), null, new newSpaces.Space('c5', false), null, new newSpaces.Space('e5', false), null, new newSpaces.Space('g5', false), null],
            [null, new newSpaces.Space('b4', false), null, new newSpaces.Space('d4', false), null, new newSpaces.Space('f4', false), null, new newSpaces.Space('h4', false)],
            [new newSpaces.Space('a3', false), null, new newSpaces.Space('c3', false), null, new newSpaces.Space('e3', false), null, new newSpaces.Space('g3', false), null],
            [null, new newSpaces.Space('b2', false), null, new newSpaces.Space('d2', false), null, new newSpaces.Space('f2', false), null, new newSpaces.Space('h2', false)],
            [new newSpaces.Space('a1', false), null, new newSpaces.Space('c1', false), null, new newSpaces.Space('e1', false), null, new newSpaces.Space('g1', false), null]];

var gridLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var whiteRem, blackRem, move;

exports.Board = class {


    constructor() {}

    display() {
        var string;
        console.log();
        console.log('Black Pieces Remaining: ' + blackRem + '\tWhite Pieces Remaining: ' + whiteRem);
        console.log();
        for(let i = 0; i < grid.length; i++) {
            string = '';
            var pieceString = '';
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === null) {
                    string += 'ZZZZZZ';
                    pieceString += 'ZZZZZZ';
                }
                else {
                    if(grid[i][j].getHasPiece()) {
                        pieceString += '  ' + grid[i][j].getTeam() + grid[i][j].getTeam() + '  ';
                    }
                    else {
                        pieceString += '      ';
                    }
                    string += '      ';
                    
                }
            }
            pieceString += '  ' + (8 - i);
            console.log(string);
            console.log(pieceString);
            console.log(string);
        }
        string = '';
        console.log();
        for(var i = 0; i < gridLetters.length; i++) {
            string += '  ' + gridLetters[i] + '   ';
        }
        console.log(string);
        console.log(move + "'s Move");
    }

    readyBoard() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < grid[i].length; j++){
                if(grid[i][j] != null) {
                    grid[i][j].setPiece('B', grid[i][j].getLabel());
                }
            }
        }
        for(var i = -1 + grid.length; i > -4 + grid.length; i--) {
            for(var j = 0; j < grid[i].length; j++){
                if(grid[i][j] != null) {
                    grid[i][j].setPiece('W', grid[i][j].getLabel());
                }
            }
        }
        whiteRem = 12;
        blackRem = 12;
        move = 'White';
    }
}