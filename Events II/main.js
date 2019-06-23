let box = document.createElement("div")

let clickMe = document.querySelector("#some-id")

box.setAttribute("class","box")

clickMe.onclick = function() {
    box.innerHTML = `I'm alive!`
}

document.querySelector("#some-id").appendChild(box)