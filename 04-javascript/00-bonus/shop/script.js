"use strict";

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));


  [
    {
      "id": 0,
      "title": "string",
      "price": 0.1,
      "description": "string",
      "category": "string",
      "image": "http://example.com"
    }
  ]