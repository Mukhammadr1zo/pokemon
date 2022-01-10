let elList = document.querySelector(".pokemon__list");

for (let pokemon of pokemons) {
  // CREATE
  let newItem = document.createElement("li");
  let newCard = document.createElement("div");
  let newImage = document.createElement("img");
  let newCardBody = document.createElement("div");
  let newCardTitleBody = document.createElement("div");
  let newCardTitle = document.createElement("h5");
  let newImageFav = document.createElement("img");
  let newCardDesc = document.createElement("p");
  let newCardMass = document.createElement("h5");
  let newCardAge = document.createElement("h5");

  //   CLASS
  newItem.setAttribute("class", "pokemon__item");
  newCard.setAttribute(
    "class",
    "pokemon__card bg-light border-1 rounded border border-dark "
  );
  newImage.setAttribute(
    "class",
    "pokemon__img border-bottom border-1 border-dark"
  );
  newImage.setAttribute("src", pokemon.img);
  newCardBody.setAttribute("class", "pokemon__title");
  newCardTitleBody.setAttribute("class", "d-flex justify-content-between");
  newCardTitle.setAttribute("class", "poko__title");
  newImageFav.setAttribute("class", "fav-img");
  newImageFav.setAttribute("src", "./images/heart.svg");
  newCardDesc.setAttribute("class", "pokemon__desc");
  newCardMass.setAttribute("class", "d-inline-block");
  newCardAge.setAttribute("class", "d-inline-block ms-4");

  //   TEXTCONTENT
  newCardTitle.textContent = pokemon.name;
  newCardDesc.textContent = pokemon.type;
  newCardMass.textContent = pokemon.weight;
  newCardAge.textContent = pokemon.candy_count;

  //   APPENDCHILD
  elList.appendChild(newItem);
  newItem.appendChild(newCard);
  newCard.appendChild(newImage);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardTitleBody);
  newCardTitleBody.appendChild(newCardTitle);
  newCardTitleBody.appendChild(newImageFav);
  newCardBody.appendChild(newCardDesc);
  newCardBody.appendChild(newCardMass);
  newCardBody.appendChild(newCardAge);
}
