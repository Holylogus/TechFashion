import { HATTERKEPEK, LANDIINGS, TERMÉKEK } from "./forras.js";
import {
  headerRendezes,
  kiemeltTermékek,
  categorys,
  news,
} from "./altfunctions.js";
import { hatterKezeles } from "./esemenykezeles.js";

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
  news();
}
function footer() {

  
}
