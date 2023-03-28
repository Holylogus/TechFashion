import { HATTERKEPEK, LANDIINGS, TERMÉKEK } from "./forras.js";

window.addEventListener("load", init);

const HEADER = document.querySelector("header");
const ARTICLE = document.querySelector("article")

function init() {
  header();
  article();
}

function header() {
  navBar();

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
function navBar() {
  const NAVBAR = document.createElement("div");
  NAVBAR.classList.add("navbar");
  HEADER.appendChild(NAVBAR);
  const LandingPages = document.createElement("ul");
  NAVBAR.appendChild(LandingPages);
  console.log(NAVBAR);
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
  NAVBAR.appendChild(vendor);
  const CART = document.createElement("button");
  CART.textContent = "Kosár";
  NAVBAR.appendChild(CART);
  let iconCart = document.createElement("img");
  iconCart.src = "Icons/cart.png";
  iconCart.alt = "kosár";
  CART.appendChild(iconCart);
}

function article() {

  //KIEMELT TERMÉKEK - FELIRAT
  let articleContainer = document.createElement("div") 
  articleContainer.classList.add("article-container") 
  let kiemeltTermékekContainer = document.createElement("div")
  let kiemeltTermékek = document.createElement("h1")
  kiemeltTermékek.textContent = "Kiemelt Termékek"
  kiemeltTermékekContainer.appendChild(kiemeltTermékek)
  articleContainer.appendChild(kiemeltTermékekContainer)
  ARTICLE.appendChild(articleContainer)

  //KIEMELT TERMÉKEK - KÁRTYÁK
  let cards = document.createElement("div")
  cards.classList.add("cards")
  articleContainer.appendChild(cards)

  for (let index = 0; index < TERMÉKEK.length; index++) {
    let cardContainer = document.createElement("div")
    cardContainer.classList.add("productCard")
    let cardImage = document.createElement("div")
    cardImage.classList.add("productImg")
    cardImage.style.height = "300px"
    cardImage.style.width = "200px"
    cardImage.style.backgroundImage = `url(${TERMÉKEK[index].imgSource})` 
    let cardText = document.createElement("p")
    cardText.textContent = `${TERMÉKEK[index].model} ${TERMÉKEK[index].content}`
    let cardPrice = document.createElement("h3")
    cardPrice.textContent = `${TERMÉKEK[index].price}`
    cardContainer.appendChild(cardImage)
    cardContainer.appendChild(cardText)
    cardContainer.appendChild(cardPrice)
    cards.appendChild(cardContainer)
  }
  articleContainer.appendChild(cards)



}
