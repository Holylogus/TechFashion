import { HATTERKEPEK } from "./forras.js";
import { LANDIINGS } from "./forras.js";

window.addEventListener("load", init);

const HEADER = document.querySelector("header");

function init() {
  Header();
}

function Header() {
  NavBar();

  //MARKETING
  let marketingSzoveg = document.createElement("h1");
  marketingSzoveg.textContent = "A divat és technológia egyesülése";
  let marketingDiv = document.createElement("div")
  marketingDiv.classList.add("marketing")
  marketingDiv.appendChild(marketingSzoveg)



  //HATTERKEP KEZELÉS + GOMBOK
  let backButton = document.createElement("button");
  backButton.classList.add("back")
  let backButtonIcon = document.createElement("img");
  backButtonIcon.src = "Icons/arrow_back_FILL0_wght400_GRAD0_opsz48.png";
  let forwardButton = document.createElement("button");
  forwardButton.classList.add("forward")
  let forwardButtonIcon = document.createElement("img");
  forwardButtonIcon.src = "Icons/arrow_forward_FILL0_wght400_GRAD0_opsz48.png";
  backButton.appendChild(backButtonIcon);
  forwardButton.appendChild(forwardButtonIcon);
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
let gombokDiv = document.createElement("div")
gombokDiv.classList.add("hatterkezeles")
gombokDiv.appendChild(backButton)
gombokDiv.appendChild(forwardButton)

  //Header rendezés
  let headerContainer = document.createElement("div")
  headerContainer.classList.add("header-container")
  HEADER.appendChild(headerContainer)
  headerContainer.appendChild(marketingDiv)
  headerContainer.appendChild(gombokDiv)


}
function NavBar() {
  const Navbar = document.createElement("div");
  Navbar.classList.add("navbar");
  HEADER.appendChild(Navbar);
  const LandingPages = document.createElement("ul");
  Navbar.appendChild(LandingPages);
  console.log(Navbar);
  for (let index = 0; index < LANDIINGS.length; index++) {
    let liElements = document.createElement("li");
    LandingPages.appendChild(liElements);
    let links = document.createElement("a");
    links.href = LANDIINGS[index].source;
    links.textContent = LANDIINGS[index].szoveg;
    liElements.appendChild(links);
  }
  let vendor = document.createElement("h1");
  vendor.textContent = "TechFashion";
  Navbar.appendChild(vendor);
  const Cart = document.createElement("button");
  Cart.textContent = "Kosár";
  Navbar.appendChild(Cart);
  let iconCart = document.createElement("img");
  iconCart.src = "Icons/cart.png";
  iconCart.alt = "kosár";
  Cart.appendChild(iconCart);
}
