let homeScorePlace = document.getElementById("scored-home")
let guestScorePlace = document.getElementById("scored-guest")

let homeScore = 0
let guestScore = 0

function scored1Home() {
    homeScore += 1
    homeScorePlace.innerText = homeScore
}

function scored2Home() {
    homeScore += 2
    homeScorePlace.innerText = homeScore
}

function scored3Home() {
    homeScore += 3
    homeScorePlace.innerText = homeScore
}

function scored1Guest() {
    guestScore += 1
    guestScorePlace.innerText = guestScore
}

function scored2Guest() {
    guestScore += 2
    guestScorePlace.innerText = guestScore
}

function scored3Guest() {
    guestScore += 3
    guestScorePlace.innerText = guestScore
}

function startNewGame() {
    homeScore = 0
    guestScore = 0
    guestScorePlace.innerText = guestScore
    homeScorePlace.innerText = homeScore
}