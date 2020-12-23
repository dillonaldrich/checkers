var newBoard = require('./board');
var newSpaces = require('./space');
var newPieces = require('./piece');

async function main() {
    play = new newBoard.Board()
    play.readyBoard();
    play.display();
}

main();
