var newPieces = require('./piece');
var lable, hasPiece, team;

exports.Space = class {

    constructor(label, hasPiece) {
        this.label = label;
        this.hasPiece = hasPiece;
    }

    getLabel() {
        return this.label;
    }

    getHasPiece() {
        return this.hasPiece;
    }

    getTeam() {
        return this.team;
    }

    setPiece(team, label) {
        var name = team + label;
        name = new newPieces.Piece(team, label);
        this.hasPiece = true;
        this.team = team;
    }
}