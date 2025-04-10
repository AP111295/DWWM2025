"use strict";

const JustePrix = { targetPrice: Math.floor(Math.random() * 100) + 1, attempts: 5,
    createHTML()
    {
        const div = document.createElement('div');
        const body = document.querySelector('body');
        div.style.width = "700px";
        div.style.margin = "auto";
        div.textContent = "Devinez le prix entre 1 et 100";
        div.style.textAlign = "center";
        div.style.border = "2px solid lightblue";
        div.style.padding = "30px";
        const input = document.createElement('input');
        input.style.margin = "10px";
        input.style.border = "2px solid lightblue";
        const button = document.createElement('button');
        const p = document.createElement('p')
        button.textContent = "Deviner";
        button.style.color = "white";
        button.style.padding ="10px";
        button.style.backgroundColor = "#007bff";
        button.style.border = "#007bff";
        button.style.borderRadius = "4px";
        /* ------this is one way of adding css, here you can just write the css code in style.css  ------ */
        // const style = document.createElement("link");
        // style.href = "./price.css"
        // style.rel ="stylesheet";

        /* this is another way of adding css code to js here you can write the css code */
        const style = document.createElement("style");
        style.textContent = `
            body{
                background-color: beige;
            }
        `;
        document.head.append(style);
        /* this is to show all the elements created on the screen */
        div.appendChild(input)
        div.appendChild(button)
        div.appendChild(p)
        button.addEventListener('click', ()=> {
            const message = this.guessPrice(input.value)
            p.textContent = message
        }) 
        return div
    },
    guessPrice: function(userGuess) {
        this.attempts++;
        if (userGuess > this.targetPrice) {
            return "C'est moins !";
        } else if (userGuess < this.targetPrice) {
            return "C'est plus !";
        } else {
            return `Bravo ! Vous avez trouvé le juste prix en ${this.attempts} essais.`;
        }
    },
    resetGame: function() {
        this.targetPrice = Math.floor(math.random()* 100) + 1;
        this.attempts = 0;
    }
};
  
  

export{JustePrix};    