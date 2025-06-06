"use strict";

// const shadowOpen = ElementRef.attachShadow({ mode: "open"});
// const shadowClosed = ElementRef.attachShadow({ mode: "closed"});

// j'ai mai un Shadow DOM dans le conteneur .container. Cela permet d’isoler le style et le HTML du reste de la page.
const myelement = document.querySelector("#shadow-element");
myelement.attachShadow({ mode: "open"});
const childNotes = Array.from(myelement.childNodes);
myelement.shadowRoot.append(...childNotes)

const styling = document.createElement("style"); //Ajout de style CSS dans le Shadow DOM
styling.textContent = /* adding CSS */
`
    :host{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 420px;
    margin: 1em;
    padding: 2em;
    border-radius: 14px;
    background: rgb(234 234 234);
    background: #000000d0;
    color: white;

.input > input {
    border: none;
    outline: none;
    padding: 0.3rem;
    border-radius: 18px;
    color: rgb(255 255 255);
    background: #7c7c7c2b;
    font-family: 'Raleway', sans-serif;
}

button.button {
    border: none;
    width: 29px;
    padding: 6px;
    border-radius: 20px;
    background: #7c7c7c2b;
    color: white;
    font-family: 'Raleway', sans-serif;
    transition: (.5s);
}

button.button:focus{
    outline:none;
}

button.button:hover{
    border: 1px solid rgb(122, 112, 112) 
}

.displayWeather{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
img{
display: none;}
}}
`;
myelement.shadowRoot.append(styling)
// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.

//Sélection des éléments pour récupère les éléments HTML dans le Shadow DOM
let button = myelement.shadowRoot.querySelector('.button')
let inputvalue = myelement.shadowRoot.querySelector('.inputValue')
let nameVal = myelement.shadowRoot.querySelector('.name');
let temp = myelement.shadowRoot.querySelector('.temp');
let desc = myelement.shadowRoot.querySelector('.desc');
let img = myelement.shadowRoot.querySelector('img');

// ADDING EVENT LISTENER TO SEARCH BUTTON  
button.addEventListener('click', function(){
    // Fection data from open weather API 
    // fetch pour recupere data à openweathermap api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)/* 
        Une fois les données reçues, on affiche :
        
        La température
        
        La description du temps (ex : "Clear", "Rain")
        
        Et on affiche l’image météo
         */
    .catch(err => alert('Wrong City name')); //Si la ville n’existe pas, une alerte s’affiche : “Wrong City name”

})

// Function to diplay weather on html document
// le displaydata function 
const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`
    img.style.display="block"
}