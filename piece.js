var team, place;

exports.Piece = class {

    constructor(team, place) {
        this.team = team;
        this.place = place;
    }

    getTeam() {
        return team;
    }

    getPlace() {
        return place;
    }

}