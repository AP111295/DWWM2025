"use strict";

/* 
   Lorsque nous codons en JS nous somme par défaut dans l'objet window
*/
console.log(window, parseInt("45"), window.parseInt("45"), window.fetch(""));

/* 
   Le mot clef "this" représente par défaut, l'objet dans lequel nous nous trouvons.
   donc ici, il vaut l'objet window :
*/
console.log(this);

function showthis()
{
    console.log(this);
}
/* 
   Dans une fonction appelé ainsi, 
   "this" vaudra "undefined" si "use strict" est utilisé
   sinon il vaudra encore une fois "window"
*/
showthis();
/* 
   Mais "this" ne sera que rarement utilisé dans ces cas là.
   on va commencer à le voir utiliser dans le cas des eventlistner.
   Dans ces cas là, il vaudra l'élément HTML sur lequel est placé 
   l'écouteur d'événement
*/
document.body.addEventListener("click", showthis);
/* 
   Cela différe de "event.target" qui lui retourne l'élément HTML sur
   lequel l'événement a eu lieu,
   ce qui dans le cas d'un clique, peut grandement varier :
*/
document.body.addEventListener("click", function(){
    console.log(this, e.target);
})
/* 
   ! Attention, dans le cas d'une fonction fléché , la valeur de this change.
   il devient égale à l'objet englobant, (ici window)
*/
document.body.addEventListener("click", ()=>{
    console.log("fléché", this);
})

document.body.click();
/* 
   La méthode ".bind()", cette méthode crée une copie d'un fonction, mais dans laquelle, 
   la valeur de "this" aura changé.
   Dans cette copie, "this" prendra comme valeur, le paramètre de "bind"
*/
const bindedthis = showthis.bind("coucou tout le monde !");
bindedthis();

const span = document.querySelector("span");
document.body.addEventListener("click", showthis.bind(span));
document.body.click();