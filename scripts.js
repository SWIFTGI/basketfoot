var teamOnePoints = 0;
var teamTwoPoints = 0;
var darkModeOn = false;

document.getElementById("showDarkModeToggle").innerHTML = 'Off';

function addPointToTeamOne() {
    teamOnePoints += 1;
    document.getElementById("showPointsOne").innerHTML = teamOnePoints;
}

function addPointToTeamTwo() {
    teamTwoPoints += 1;
    document.getElementById("showPointsTwo").innerHTML = teamTwoPoints;
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (darkModeOn == true) {
        darkModeOn = false;
        document.getElementById("showDarkModeToggle").innerHTML = 'Off';
    } else {
        darkModeOn = true;
        document.getElementById("showDarkModeToggle").innerHTML = 'On';
    }
}

function changeNameTeamOne() {
    var inputValue = document.getElementById("textInputOne").value;
    var container = document.getElementById("inputContainerOne");
    var teamName = document.getElementById("teamNameOne");

    if (inputValue.trim() !== "") {
        teamName.innerText = inputValue;
        container.style.display = "none";
    } else {
        alert("Please enter some text.");
    }
}

function changeNameTeamTwo() {
    var inputValue = document.getElementById("textInputTwo").value;
    var container = document.getElementById("inputContainerTwo");
    var teamName = document.getElementById("teamNameTwo");

    if (inputValue.trim() !== "") {
        teamName.innerText = inputValue;
        container.style.display = "none";
    } else {
        alert("Please enter some text.");
    }
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (darkModeOn == true) {
        darkModeOn = false;
        document.getElementById("showDarkModeToggle").innerHTML = 'Off';
    } else {
        darkModeOn = true;
        document.getElementById("showDarkModeToggle").innerHTML = 'On';
    }
}

function changeNameTeamOne() {
    var inputValue = document.getElementById("textInputOne").value;
    var container = document.getElementById("inputContainerOne");
    var teamName = document.getElementById("teamNameOne");

    if (inputValue.trim() !== "") {
        teamName.innerText = inputValue;
        container.style.display = "none";
    } else {
        alert("Please enter some text.");
    }
}

function changeNameTeamTwo() {
    var inputValue = document.getElementById("textInputTwo").value;
    var container = document.getElementById("inputContainerTwo");
    var teamName = document.getElementById("teamNameTwo");

    if (inputValue.trim() !== "") {
        teamName.innerText = inputValue;
        container.style.display = "none";
    } else {
        alert("Please enter some text.");
    }
}

function removePointTeamOne(){
    teamTwoPoints -= 1;
    document.getElementById("showPointsOne").innerHTML = teamOnePoints;   
}

function removePointTeamTwo(){
    teamTwoPoints -= 1;
    document.getElementById("showPointsTwo").innerHTML = teamTwoPoints;
}
