"use strict";

class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const name = this.getAttribute('name') || 'Nom du produit';
    const description = this.getAttribute('description') || 'Description';
    const price = this.getAttribute('price') || '0.00';
    const image = this.getAttribute('image') || '';

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
