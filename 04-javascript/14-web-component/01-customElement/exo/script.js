"use strict";

class starsgrade extends HTMLElement {
    stars = []; // creating a boucle for multiple spans/i , []shorthand for creating an empty array,
    //  an array enables storing a collection of multiple items under a single variable name.

    constructor() {
        super();

        // Create 5 stars
        for (let i = 0; i < 5; i++)  /* here we are creating 5 i/spans which will have each one star, 
         i =0 means the index stars from 0, and its less than 5 counts, i++ means
         in increasing order so basically 0,1,2,3,4 */
            {
            const span = document.createElement("i");
            span.className = "fa-solid fa-star"; // calling the class of the element <rating-stars> selected to contain the span
            this.append(span); // to show span
            this.stars.push(span);
        }

        // Set default stars based on value attribute
        this.setDefaultStars();

        // Set up event listeners for click interaction
        this.addEvent();
    }

    setDefaultStars() // setting the default value of the stars on bases of the value attibute.
    {
        const value = parseInt(this.getAttribute("value")) || 0;
        this.stars.forEach((star, index) => {
            if (index < value) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }

    addEvent() {
        this.stars.forEach((star, index1) => { // adding eventlistener for each stars
            star.addEventListener("click", () => { 
                this.stars.forEach((star, index2) => { 
                    index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
                });
                // Optional: Update value attribute on click if needed
                this.setAttribute("value", index1 + 1);
            });
        });
    }
}

customElements.define("rating-stars", starsgrade); // this is important ----



/* ----------------------Nomral way of doing it ------------------------------ */
//  // Select all elements with the "rating-stars" tag and store them in a NodeList called "stars"
//  const stars = document.querySelectorAll("rating-stars");
//  // Loop through the "stars" NodeList
//  stars.forEach((star, index1) => {
//    // Add an event listener that runs a function when the "click" event is triggered
//    star.addEventListener("click", () => {
//      // Loop through the "stars" NodeList Again
//      stars.forEach((star, index2) => {
//        // Add the "active" class to the clicked star and any stars with a lower index
//        // and remove the "active" class from any stars with a higher index
//        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
//      });
//    });
//  });
