import { HATTERKEPEK, LANDIINGS, TERMÉKEK } from "./forras.js";
import {
  headerRendezes,
  kiemeltTermékek,
  categorys,
  news,
} from "./altfunctions.js";
import { hatterKezeles,addToCart } from "./esemenykezeles.js";

window.addEventListener("load", init);

const FOOTER = document.querySelector("footer");

function init() {
  header();
  article();
  footer();
}

function header() {
  headerRendezes();
  hatterKezeles();
}

function article() {
  kiemeltTermékek();
  categorys();
  const addCart = document.querySelectorAll(".productCard span")
  addCart.forEach(button => {
    button.addEventListener('click', addToCart);
  });
  news();
}
function footer() {

  
}
