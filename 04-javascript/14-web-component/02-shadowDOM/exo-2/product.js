"use strict";

class productcard extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open'});
        shadow.innerHTML =
        `       <style>
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
        </style>`
    }
}
customElements.define('product-card', productcard);