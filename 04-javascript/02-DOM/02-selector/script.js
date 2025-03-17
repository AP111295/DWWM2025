"use strict";

const lis = document.getElementsByTagName("li");
/* on obtient un objet "HTMLCollection" contenant toutes les balise demandées.
   ici j'ai cherché dans tout mon document, mais il est possible de préciser 
   une recherche dans un élément précise.
   Imagions que j'ai une variable "footer" qui contaient mon footer, je peux écrire :
   footer.getElementsByTagName("li"); */

console.log(lis);

/* 
   ! Attention, je ne peux pas modifier touts les li d'un seul coup,
   Il me faudra préciser lequel je modifie:
*/

lis.textContent = "Coucou";
/* Ceci fonctionnera : */
lis[0].textContent = "Coucou";



/* getElementByClassName */

const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps,p1);


/* getElementById */
/* Selectionne un élément HTML via son Id. Un id devant etre unique, 
   ici pas de htmlcollection, mais directment l'élément html */
const h1 = document.getElementById("mainTitle");
console.log(h1);

/* 
    Prend en paramètre, les meme selecteurs qu'en css.
    il selectionnera le premier élément correspondant à 
    ce selecteur.
*/
const p2 = document.querySelector(".march2");
/* 
    const p2 = document.querySelector(".main > p:nth-of-type(2)");
*/
/* 
    const p2 = document.querySelector("body main p.marche2.step");
*/
console.log(p2);

/* 
    Fonctionne comme le queryselector mais ne s'arretera pas au premier résultat, 
    il rangera la totalité des balise correspondante dans un tableau nommé "Nodelist"
*/

const lis2 = document.querySelectorAll("footer li");
console.log(lis2);

/* On peut préciser la recherche à un élément plutot qu'au document en entier */
const header = document.querySelector('header');
const h = header.querySelector('h1');

/*  ?  Selectors bonus : */
/* Selectionne l'élément HTML suivant (ici le main) */
console.log(header.nextElementSibling);
/* Sélectionne ce qui suis (isi du text consistant à un saut  à la ligne et de l'indentation) */
console.log(header.nextSibling);
/* On trouvera aussi "previousElementSibling" */
console.log(header.previousElementSibling);
/* retourne un objet HTMLcollection contenant tous les enfants */
console.log(header.children);
/* retourne le parent de l'élément. */
console.log(lis[2].parentElement);
/* retourne le parent le plus proche qui correspond au selecteur CSS */
// console;log(lis[2].closest("footer"));

/* Déplacer ou supprimer. */
/* Si je demande d'ajouter un élément deja present, il sera déplacer : */
// header.append(lis[2]);
// retirer l'element indiqué :
// lis[2].remove();
/* si l'élément est présent directent en variable ou dans une nodelist, il sera toujours présent.
   mais dans un HTMLcollection, il sera retiré. */
console.log(lis2, lis);
// il existe une autre facon de retirer :
// header.removeChild(h);
// Dans le header, je retire mon h1


// ------------EXO 1 ---------------
// Déplacer la modale dans le body. Celle ci est déjà présente, mais le CSS la cache. Il faudra la déplacer sans modifier le CSS
const aside = document.querySelector("aside div");
// defining 'aside'and selecting the element "aside div"
document.body.append(aside);
console.log(aside);
// ----------- EXO 2 ---------------
// modifier le texte des 3 li du footer, si possible avec une boucle.

const li = document.querySelector("footer ul li");
   li.textContent = "Hello";
const li2  = document.querySelector("footer ul li:nth-child(2)");
li2.textContent = "Bonjour";
const li3  = document.querySelector("footer ul li:nth-child(3)");
li3.textContent = "Namaste"; 
console.log(li)
//li2 is the name given to select the li:nth-child(2) 


/* way-2
const ligroup = document.querySelectorAll("footer ul li");
 ligroup[0].textContent = "test1";
 ligroup[1].textContent = "test2";
 ligroup[2].textContent = "test3"; */

// ------------ EXO 3 --------------
// Remplacer le texte des paragraphes pair.

const p = document.querySelector(".marche1");
p.textContent = "Ca Va ?";





