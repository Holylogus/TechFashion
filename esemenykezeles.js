 import { HATTERKEPEK } from "./forras.js";
 import { headerHatterNav } from "./altfunctions.js";

 const HEADER = document.querySelector("header");
 
 //HATTERKEP KEZELÉS
 export function hatterKezeles(backgroundDiv) {
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