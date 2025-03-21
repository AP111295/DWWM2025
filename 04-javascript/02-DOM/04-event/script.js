"use strict";

function test(event)
{
    console.log("Coucou", event);    
}

const h1 = document.querySelector('header > h1');
/* 
    Pour ajouter un écouteur d'évènement, nous avons deux possibilités :
    Soit elementHTML.addEventListener("nomEvent", fonction)
    Soit elementHTML.onNomEvent = fonction

    Le nom des évènements sont toujours en minuscule.

    Pour retirer un évènement, on pourra utiliser :
        elementHTML.removeEventListener("nomEvent", fonction);
        elementHTML.onNomEvent = "";

    Les écouteurs d'évènement passent toujours en paramètre de la fonction callback, un objet correspondant à l'évènement écouté.
    On pourra y récupérer plusieurs informations correspondant à cet évènement.
    Par exemple sur un clique, la position de la souris, l'élément cliqué...
*/
h1.addEventListener("click", test);

h1.onclick = test;

h1.removeEventListener("click", test);

h1.onclick = "";
/* 
    Si une fonction anonyme est placé en paramètre d'un addEventListener.
    Il n'est pas possible d'utiliser "removeEventListener"
*/
h1.addEventListener("click", function(e) 
{
    let r = Math.floor(Math.random()*360);
    /* 
        le ".target" de l'objet "Event" permet de récupérer la cible de l'évènement.
        Attention, pour un click, la cible est l'élément cliqué.
        Si il y avait un span dans mon H1, si je clique dessus, la ligne suivante s'appliquerait au span et non au H1
    */
    e.target.style.transform = `rotate(${r}deg)`;
    // h1.style.transform = `rotate(${r}deg)`;
    /* 
        this, représente par défaut, l'élément HTML sur lequel a été placé l'écouteur d'évènement, ici H1.
        !attention, this ne fonctionne pas, si il est dans une fonction fléché ()=>{}
    */
    // this.style.transform = `rotate(${r}deg)`;
});
/* 
    Il est possible d'ajouter autant d'écouteur d'évènement sur un même évènement que l'on souhaite avec addEventListener.
    Par contre, avec ".onclick", on ne peut mettre qu'une seule fonction
*/
// ? Input et change event
/* 
    Lorsque vous créer votre code, la première chose à faire, est de réfléchir à quel sont les éléments avec lesquels vous allez interragir, et de les sélectionner
*/
const input1 = document.querySelector('.div1 input');
const btn1 = document.querySelector('.div1 button');

/* 
    Ensuite je peux penser à quels sont les types d'évènements que je souhaite écouter.
    Par exemple ici, je veux écouter le fait que l'utilisateur tape dans l'input.
    Deux choix possible ici, l'évènement "input" ou l'évènement "change"

    "input" se déclenchera à chaque touche entré (dans le cas d'un champ textuel)
    "change" se déclenchera une fois le champ validé (lorsqu'on le quitte)
*/
input1.addEventListener("input", e=>{
// input1.addEventListener("change", e=>{
    console.log(e.target.value, input1.value, this.value);  
    if(e.target.value != "")
    {
        btn1.textContent = e.target.value;
    }
    else
    {
        btn1.textContent = "Clique moi !";
    }
});
// ? Options supplémentaires
/* 
    l'option "once" permet que l'écouteur d'évènement ne se déclenche qu'une seule fois.
*/
btn1.addEventListener("click", ()=>{h1.textContent = input1.value}, {once: true});

const div4 = document.querySelector('.div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');
/* 
    Si plusieurs écouteurs d'évènements doivent être déclenché par une même action.
    Ce sera d'abbord l'enfant le plus profond puis cela remontera jusqu'au parent le plus élevé

    Le navigateur va d'abbord capturer pour lister les évènements qui doivent se déclencher, du parent vers l'enfant.
    Puis remonter en déclenchant les évènements.

    On peut indiquer au navigateur d'activer un évènement lors de la phase de capture avec l'option "capture: true"
*/
div4.addEventListener("click", ()=>{console.log("div4")}, {capture: true});
gp.addEventListener("click", ()=>{console.log("gp")});
pa.addEventListener("click", (event)=>{
    console.log("pa");
    // permet de stopper la suite d'évènement ici.
    event.stopPropagation();
});
en.addEventListener("click", ()=>{console.log("en")});

const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", event=>{
    /* 
        preventDefault() permet d'annuler l'effet par défaut d'un évènement.
        le changement de page d'un lien, la soumission d'un formulaire...
    */
    event.preventDefault();
    // console.log("Coucou le monde !");    
});

/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans l'input de la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/
const div2 = document.getElementsByClassName("div2")[0];
const input2 = div2.getElementsByTagName("input")[0];
const button2 = div2.getElementsByTagName("button")[0];
console.log(div2, input2, button2);

input2.addEventListener("change", function(e){

  button2.style.color = input2.value;
});

button2.addEventListener("click", function(e){

  button2.style.background = input2.value;
})

/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/
const div3 = document.getElementsByClassName("div3")[0];
const button3 = div3.getElementsByTagName("button")[0];
const modal = document.getElementsByClassName("modal")[0];
const firstbutton = document.querySelector(".modal button:first-of-type");
console.log(div3, button3, modal, firstbutton);

button3.addEventListener("click", function(e){
  modal.style.display = "grid";
})

firstbutton.addEventListener("click", function(e){
  modal.style.display = "none";
})
/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
const ul = document.getElementsByTagName("ul")[0];
const lis = ul.querySelectorAll("li");
console.log(ul, lis);

function double(li)
{
  li.addEventListener("click",function(e)
  {
   li.style.fontSize = "32px"
  });
  li.addEventListener("dblclick",function(e)
  {
   li.style.fontSize = "16px"
  });
}
lis.forEach(double);

/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/
const footer = document.getElementsByTagName("footer");
const span = document.getElementsByTagName("span");
console.log(footer, span);

function enter()
{
  span.addEventListener("mouseenter", function(e){
    span.style.height = "100px"

  })
}
function leave()
{
  span.addEventListener("mouseleave", function(e){
    span.style.height = "18px"
  })
}