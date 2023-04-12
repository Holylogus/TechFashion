import { CART, LANDIINGS, } from "../forras.js";
import { navBar } from "../altfunctions.js";


window.addEventListener("load", init)

const ARTICLE = document.querySelector("article")
const storedCartJSON = localStorage.getItem("cart")
const storedCart = JSON.parse(storedCartJSON)

function init() {
    navBar(LANDIINGS, "TechFashion")
    ARTICLE.appendChild(feliartH2("Kosár tartalma"));
    ARTICLE.appendChild(table(storedCart))
    console.log(storedCart)
}

function feliartH2(text) {
    let szoveg = document.createElement("h2")
    szoveg.textContent = text
    return szoveg
  }

function table(objlist) {
    let table = document.createElement("table")
    let columNames = document.createElement("tr")
    columNames.innerHTML += 
    `<th>Model</th>
    <th>Leírás</th>
    <th>Ár</th>
    <th>Mennyiség</th>
    <th>Kezelés</th>`
    table.appendChild(columNames)
    for (let index = 0; index < objlist.length; index++) {
        let sor = document.createElement("tr")
        for (const key in objlist[index]) {
            let tartalom = document.createElement("th")
            tartalom.textContent = `${objlist[index][key]}`
            sor.appendChild(tartalom)
        }
        let torles = `<th><button>Törlés</button></th>`
        sor.innerHTML += torles
        table.appendChild(sor)
    }
    return table
}