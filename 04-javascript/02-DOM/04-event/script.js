"use strict";
function test(event)
{
    console.log("coucou", event);
}
const h1 = document.querySelector('header > h1');
/* pour ajouter un écouter d'événement, nous avons deux possibilités :
   soit elementHTML.addEventListner("nomEvent", function)
   soit elementHTML.onNomevnt = fonction 
   le nim des évènement sont toujours en minuscule.
   pour retirer un évènement, on pourra utiliser :
     elementhTML.removeEventlistener("nomevent, fonction);
     eleùentHTML.onNomEvent = "";
     
   les écouteurs d'évènement passent toujours en paramètre de la fonction callback, un objet correspondant
   à m'évènement écouté. On pourra y récupérer plusieurs informations correspondant à
   cet évènement.
   par 
   
   
     
     */

h1.addEventListener("click", test);
h1.onclick = test;
h1.removeEventListener("click", test);
h1.onclick = "";
