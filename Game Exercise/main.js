// ************************************
// ************spot check 1************
// ************************************

// let down = document.getElementById("down")
// const playingField = document.getElementById("playing-field")
// console.log(playingField.style.backgroundColor)

// ************************************
// ************spot check 2************
// ************************************

// let ball = document.querySelector("#block")
// ball.style.backgroundColor = "yellow"


// ************************************
// ************spot check 3************
// ************************************

// const moveRight = function() {
//     const block = document.querySelector("#block")
//     let left = parseInt(block.style.left || 0)
//     left += 15
//     block.style.left = left + "px"
// }

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

header.setAttribute("class", "my-header")

const subheader = document.createElement("h2")
subheader.innerHTML = "That's right!"
subheader.setAttribute("class","my-subheader")
document.body.appendChild(subheader)

const changeBoxClr = function () {
    let box = document.getElementById("playing-field")
    box.style.backgroundColor = "#8e44ad"
}

let arrows = document.querySelectorAll(".arrow")

for (let arrow of arrows) {
    console.log(arrow)
}

let upArrow = arrows[0]
let leftArrow = arrows[1]
let rightArrow = arrows[2]
let downArrow = arrows[3]

let circle = document.querySelector("#block.centered")

rightArrow.onclick = function () {
    let left = parseInt(circle.style.left) || 0
    left += 15
    circle.style.left = left + "px"
}

leftArrow.onclick = function () {
    let left = parseInt(circle.style.left) || 0
    left -= 15
    circle.style.left = left + "px"
}

upArrow.onclick = function () {
    let top = parseInt(circle.style.top) || 0
    top -= 15
    circle.style.top = top + "px"
}


downArrow.onclick = function () {
    let top = parseInt(circle.style.top) || 0
    top += 15
    circle.style.top = top + "px"
}

