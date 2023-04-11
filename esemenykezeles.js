 import { HATTERKEPEK, CART, TERMÉKEK } from "./forras.js";
 import { headerHatterNav } from "./altfunctions.js";

 const HEADER = document.querySelector("header");
 
 //HATTERKEP KEZELÉS
 export function hatterKezeles() {
    let backButton = document.querySelector(".back")
    let forwardButton = document.querySelector(".forward")
    let hatterkepAktualisIndex = 0;
    HEADER.style.backgroundImage = `url("${HATTERKEPEK[hatterkepAktualisIndex]}")`;
    backButton.addEventListener("click", function () {
    hatterkepAktualisIndex = (hatterkepAktualisIndex - 1) % HATTERKEPEK.length;
    if (hatterkepAktualisIndex < 0) {
        hatterkepAktualisIndex = HATTERKEPEK.length - 1;
    }
    HEADER.style.backgroundImage = `url("${HATTERKEPEK[hatterkepAktualisIndex]}")`;
    });
    forwardButton.addEventListener("click", function () {
    hatterkepAktualisIndex = (hatterkepAktualisIndex + 1) % HATTERKEPEK.length;
    HEADER.style.backgroundImage = `url("${HATTERKEPEK[hatterkepAktualisIndex]}")`;
    });
 }
 

 export function addToCart(event){
    const productId = event.target.id;
    console.log(productId)
    for (let index = 0; index < TERMÉKEK.length; index++) {
        if (TERMÉKEK[index].model == productId) {
            CART.push(TERMÉKEK[index])           
        }    
    }
    console.log(CART)
 }