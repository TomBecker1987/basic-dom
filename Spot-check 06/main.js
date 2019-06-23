
let cities = ["Milano","Tel-Aviv","London","Haifa"]

let hCityList = document.querySelector("ol#cities")

for (let index in cities) {
    node = document.createElement("li")
    textNode = document.createTextNode(cities[index])
    node.appendChild(textNode)
    hCityList.appendChild(node)
    // node.style.display = "none"
}

let num = 0;

let hCities = document.querySelectorAll("li")

hCities[0].style.display = "block"

let turnOn = function () {
    // e.preventDefault()
    hCities[num+1].style.display = "block"
    num++
}

console.log(hCities)