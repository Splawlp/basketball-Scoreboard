let homeScorePlace = document.getElementById("scored-home")
let guestScorePlace = document.getElementById("scored-guest")

let homeScore = 0
let guestScore = 0

document.getElementById("home-1").addEventListener("click", () => {
    homeScore += 1
    homeScorePlace.innerText = homeScore
})

document.getElementById("home-2").addEventListener("click", () => {
    homeScore += 2
    homeScorePlace.innerText = homeScore
})

document.getElementById("home-3").addEventListener("click", () => {
    homeScore += 3
    homeScorePlace.innerText = homeScore
})

document.getElementById("guest-1").addEventListener("click", () => {
    guestScore += 1
    guestScorePlace.innerText = guestScore
})

document.getElementById("guest-2").addEventListener("click", () => {
    guestScore += 2
    guestScorePlace.innerText = guestScore
})

document.getElementById("guest-3").addEventListener("click", () => {
    guestScore += 3
    guestScorePlace.innerText = guestScore
})

document.getElementById("new-game").addEventListener("click", () => {
    homeScore = 0
    guestScore = 0
    homeScorePlace.innerText = homeScore
    guestScorePlace.innerText = guestScore
})
