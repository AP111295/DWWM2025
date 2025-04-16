"use strict";


/* Déclaration de la classe */
/* On crée une nouvelle classe ProductCard qui hérite de HTMLElement */
class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    /* On utilise le Shadow DOM pour encapsuler le HTML/CSS du composant. Cela permet de le protéger du style de la page. */
  }

  connectedCallback() {
    const name = this.getAttribute('name') || 'Nom du produit'; //On récupère les infos données dans la balise HTML :
    const description = this.getAttribute('description') || 'Description'; // Si un attribut est absent, on utilise une valeur par défaut.
    const price = this.getAttribute('price') || '0.00';
    const image = this.getAttribute('image') || '';

    //On écrit le code HTML de la carte directement dans le Shadow DOM avec un peu de CSS pour le style.
    this.shadowRoot.innerHTML =  `       <style>
    body{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: rgb(201, 198, 198);
}
product-card
{
background-color: antiquewhite;
margin-top: 100px;
padding: 50px;
border-radius: 30px;
}
img{
width: 200px;
height: 200px;

}
button{
width:100px;
height: 50px;
color: white;
background-color: black;
border-radius: 5px;
border: none;
}
</style>
      <div class="card">
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>${description}</p>
        <div class="price">${price} €</div>
        <div class="stars">⭐⭐⭐⭐☆</div>
        <button>Ajouter au panier</button>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
// définir un élément