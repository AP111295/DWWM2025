"use strict";
// Je selectionne ma checkbox
const dark = document.querySelector('#darkTheme');

dark.addEventListener("input", changeTheme);

function changeTheme()
{
    // ? Solution 1 : Changer la classe du body
    document.body.classList.toggle("dark", dark.checked);
    if(dark.checked)
    {
        /* 
            localStorage et sessionStorage fonctionnent exactement de la même façon. Même fonctionnalités et propriétés.
            La seule différence est le temps de stockage.
                localStorage garde l'information jusqu'à ce qu'on décide de la supprimer.
                sessionStorage garde l'information pour la session, donc jusqu'à ce qu'on ferme le navigateur.

            setItem permet de sauvegarder une information,
            seul des strings peuvent être sauvegarder.
                Le premier paramètre est un nom qui servira à retrouver l'information.
                Le second est l'information à stocker.
        */
        localStorage.setItem("theme", "dark");
    }else
    {
        // removeItem permet de supprimer un élément du storage, il prendra en paramètre, la clef de l'élément à supprimer.
        localStorage.removeItem("theme");
    }
    // ? Solution 2 : changer les variables du css 
    if(dark.checked)
    {
        // console.log(document, document.documentElement);
        
        // document.documentElement.style.setProperty("--fond", "#333");
        // document.documentElement.style.setProperty("--text", "antiquewhite");
    }else
    {
        // document.documentElement.style.setProperty("--fond", "");
        // document.documentElement.style.setProperty("--text", "");
    }
}
// getItem permet de récupérer un élément dans le storage. il prend en paramètre la clef de l'élément à récupérer. (si il ne trouve rien, il retourne "null")
dark.checked = localStorage.getItem("theme") === "dark";
// ma fonction changeTheme change le thème selon si la case est coché ou non.
changeTheme();


sessionStorage.setItem("salutation", "Bonjours tous le monde !");
localStorage.setItem("salutation", "Bonjours tous le monde !");

// clear supprime toute les informations stocker dans le storage.
sessionStorage.clear();

/* ------EX 1------- */

const optiontheme = document.querySelector('#themes');
// this is how you declare a value attribute ('[value="rose"]')
const rose = document.querySelector('[value="rose"]') 
const bleu = document.querySelector('[value="bleu"]')
const tortue = document.querySelector('[value="tortue"]')
const randColor = document.querySelector(".randColor")
// random
randColor.addEventListener("click", setRandColor)

optiontheme.addEventListener("change", settheme);

function settheme()
{
    document.body.classList.remove("rose", "bleu", "tortue") // this is to avoid the formation of value list in console. and then it will only take one value at a time.
    if(rose.selected){
        document.body.classList.toggle("rose", rose.selected);
        localStorage.setItem("themes", "rose");
    }

    else if(bleu.selected){
        document.body.classList.toggle("bleu", bleu.selected);
        localStorage.setItem("themes", "bleu");
    }
    else if(tortue.selected){
        document.body.classList.toggle("tortue", tortue.selected);
        localStorage.setItem("themes", "tortue");
    }
    // random
    else if(optiontheme.value == random){

    }
}
rose.selected = localStorage.getItem("themes") === "rose";
bleu.selected = localStorage.getItem("themes") === "bleu";
tortue.selected = localStorage.getItem("themes") === "tortue";
console.log("themes");
settheme();
sessionStorage.clear();
// random
// console.log(randColor);

function setRandColor() 
{
    var r= Math.floor(Math.random()*255) // 255 is the total value of rgb each color of red, green , blue.
    var g= Math.floor(Math.random()*255)
    var b= Math.floor(Math.random()*255)

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    localStorage.setItem("themes", "setrandcolor");
}
