var teamOnePoints = 0;
var teamTwoPoints = 0;

function addPointToTeamOne() {
    teamOnePoints += 1;
    document.getElementById("showPointsOne").innerHTML = teamOnePoints;
}

function addPointToTeamTwo() {
    teamTwoPoints += 1;
    document.getElementById("showPointsTwo").innerHTML = teamTwoPoints;
}
