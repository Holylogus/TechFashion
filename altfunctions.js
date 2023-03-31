import { HATTERKEPEK, LANDIINGS, TERMÉKEK, KATEGORIAK } from "./forras.js";

const HEADER = document.querySelector("header");
const ARTICLE = document.querySelector("article")

//Header rendezés
export function headerRendezes(){
    navBar();
    let headerContainer = document.createElement("div")
    headerContainer.classList.add("header-container")
    HEADER.appendChild(headerContainer)
    headerContainer.appendChild(headerMarketing())
    headerContainer.appendChild(headerHatterNav())
 }

function navBar() {
    //Navigációs linkek generálás
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
    iconCart.style.height = "25px"
    CART.appendChild(iconCart);
    console.log("lefutottam")
  }

  
//HEADER - MARKETING SZÖVEG
function headerMarketing(){
    let marketingSzoveg = document.createElement("h1");
    marketingSzoveg.textContent = "A divat és technológia egyesülése";
    let marketingDiv = document.createElement("div")
    marketingDiv.classList.add("marketing")
    marketingDiv.appendChild(marketingSzoveg)
    return marketingDiv
  }

export function headerHatterNav(){
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
 let gombokDiv = document.createElement("div")
gombokDiv.classList.add("hatterkezeles")
gombokDiv.appendChild(backButton)
gombokDiv.appendChild(forwardButton)
 return gombokDiv
}

export function kiemeltTermékek() {
    let KiemeltTermekekContainer = document.createElement("div") 
    KiemeltTermekekContainer.classList.add("kiemeltTermekek-container") 
    ARTICLE.appendChild(KiemeltTermekekContainer)
    KiemeltTermekekContainer.appendChild(felirat())
    KiemeltTermekekContainer.appendChild(productCards())

}

//KIEMELT TERMÉKEK - FELIRAT
function felirat() {   
let kiemeltTermékekTextContainer = document.createElement("div")
let kiemeltTermékek = document.createElement("h1")
kiemeltTermékek.textContent = "Kiemelt Termékek"
kiemeltTermékekTextContainer.appendChild(kiemeltTermékek)
return kiemeltTermékekTextContainer
}

//KIEMELT TERMÉKEK - KÁRTYÁK
function productCards(){
let cards = document.createElement("div")
cards.classList.add("cards")
for (let index = 0; index < TERMÉKEK.length; index++) {
  let cardContainer = document.createElement("div")
  cardContainer.classList.add("productCard")
  let cardImage = document.createElement("div")
  cardImage.classList.add("productImg")
  cardImage.style.height = "300px"
  cardImage.style.width = "100%"
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
return cards
}

//KATEGÓRIÁK
export function categorys() {
    let collections = document.createElement("div")
    collections.classList.add("category")
    ARTICLE.appendChild(collections)
    collections.appendChild(categoryTexts())
    collections.appendChild(categoryCards())
    
}
 

  //Feliratok
  function categoryTexts() {
    let textContainer = document.createElement("div")
    textContainer.classList.add("feliratok")
    let text = document.createElement("h2")
    text.textContent = "Kategóriák"
    let marketingText = document.createElement("p")
    marketingText.textContent = "Napjainkban minden apróságban ott vannak a modern technológia vívmányai. Csak tőled függ, hogy ezeket hogyan hordod"
    textContainer.appendChild(text)
    textContainer.appendChild(marketingText)
    return textContainer
  }

  //Kategriák kártyák
  function categoryCards() {
    let cards = document.createElement("div")
    cards.classList.add("categoryCards")
    for (let index = 0; index < KATEGORIAK.length; index++) {
        let category = document.createElement("div")
        category.classList.add("categoryCard")
        category.style.height = `${KATEGORIAK[index].height}`
        category.style.width = `${KATEGORIAK[index].width}`
        category.style.backgroundImage = `url(${KATEGORIAK[index].src})`     
    let button = document.createElement("button")
    let buttonDiv = document.createElement("div")
    buttonDiv.classList.add("categoryButton")
    button.textContent = `${KATEGORIAK[index].nev}`
    buttonDiv.appendChild(button)
    category.appendChild(buttonDiv)   
    cards.appendChild(category)
    }
    return cards
}

export function news() {
    let newsConainer = document.createElement("div")
    newsConainer.classList.add("newsContainer")
    ARTICLE.appendChild(newsConainer)
    newsConainer.appendChild(newsGenerate())

}

function newsGenerate() {
    let text = document.createElement("h1")
    text.textContent = "A hírek fejlesztés alatt"
    return text
}





  

   