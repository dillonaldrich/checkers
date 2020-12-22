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

exports.Board = class {


    constructor() {}

    display() {
        for(let i = 0; i < grid.length; i++) {
            var string = '';
            var pieceString = '';
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === null) {
                    string += 'ZZZZZZ';
                    pieceString += 'ZZZZZZ';
                }
                else {
                    if(grid[i][j].getHasPiece())
                    {
                        pieceString += '  ' + grid[i][j].getTeam() + grid[i][j].getTeam() + '  ';
                    }
                    else {
                        pieceString += '      ';
                    }
                    string += '      ';
                    
                }
            }
            console.log(string);
            console.log(pieceString);
            console.log(string);
        }
    }

    readyBoard() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < grid[i].length; j++){
                if(grid[i][j] != null) {
                    grid[i][j].setPiece('B', grid[i][j].getLabel());
                }
            }
        }
        for(var i = grid.length - 1; i > grid.length - 4; i--) {
            for(var j = 0; j < grid[i].length; j++){
                if(grid[i][j] != null) {
                    grid[i][j].setPiece('W', grid[i][j].getLabel());
                }
            }
        }
    }
}