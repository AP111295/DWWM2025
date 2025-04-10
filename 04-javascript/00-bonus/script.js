"use script"

const btn = document.querySelector('#btn');
const backside = document.querySelector('.card__wrapper');
const text = document.querySelector('.text');
const textCard = document.querySelector('.card__side h2');
console.log(backside);
console.log('input');

var entryCount = 0;
var entryLimit = 7; // this is the limited of input entries selected.
var random = Math.floor(Math.random()*100) // this is to declare a random number to be selcted by the console.

textCard.textContent = random; // this is for the random number chosen to appear inside the card.
console.log(random);

// else if (entryCount > entryLimit){
//     text.textContent = "vous avez essayé au maximum 7 fois"
//     backside.style.animation = "rotate 2s forwards";}


// adding eventlistener
const input = document.querySelector('input');

btn.addEventListener('click', function correctinput() {
    entryCount++
    if (input.value == random)// == means if the value is equal to random value selected by the console.  the .value represents the what value the input consists. 
    {
        // alert ("Vous avez trouvé unne bonne réponse");
        text.textContent = "Vous avez trouvé unne bonne réponse"
        backside.style.animation = "rotate 2s forwards";
    } else if (entryCount > entryLimit) // if the no. of entries done is more than the limited set then this action will be displayed. 
        {
            text.textContent = "vous avez essayé au maximum 7 fois"
            backside.style.animation = "rotate 2s forwards";}
    else if (input.value > random) {
    //    alert ("cest plus petit que($)");
    text.textContent = `Cest plus petit que ${input.value}`;
    } else {
    //    alert ("cest plus grand que($)");
       text.textContent = `Cest plus grand que ${input.value}`;
    //    text.textContent = "cest plus grand que " + input.value;
   }
  });
  // this to return the page to its original state
  const refreshBtn = document.querySelector('.restart');
  function handleClick() {
    window.location.reload();
  }
  refreshBtn.addEventListener("click", handleClick);
  
  






