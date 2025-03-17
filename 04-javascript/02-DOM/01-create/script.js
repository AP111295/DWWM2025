"use strict";

// log et dir n'ont pas de différence sur firefox
console.log(document.body);
// mais sur chromium cela affiche soit le html soit l'objet javascript
// createElement permet de créer un élément HTML

// console.dir(document.body);


const span1 = document.createElement("span");
// textcontent est une des propriétés permettent de changer le texte d'un élément html
span1.textContent = 'coucou';

console.log(span1);

// appendchild ajoute à la fin de l'élément qui le précède, l'élément mis en paramètre.
// (ici on ajoute notre span à la fin du body)
document.body.appendChild(span1);
// prepend permet de placer un élément HTML au début de son parent.
// *Si on tente d'ajouter un élément HTML qui est déjà présent, il
// sera juste déplacé.
document.body.prepend(span1);
// append fonctionne comme appendchild, mais peut prendre plusieurs
// paramètres et accept aussi du texte
document.body.append(span1);

span1.innerHTML = "<b>COUCOU mais en gras</b>";
// innerHTML gère les balise HTML alors que textcontent.
span1.textContent = "<b>COUCOU mais en gras</b>";
// Pour des raisons de sécurité, si des informations textuellees
// viennent des utilisateurs, il faudra privilégié "textcontent"

/* Affiche le texte avec les indentations et sauts à la ligne */
console.log(document.body.textContent);
/* Affiche toute les balise et code html */
console.log(document.body.innerHTML);
/* Affiche le texte sans indentations et sauts à la ligne supplémentaires */
console.log(document.body.innerText);

document.body.textContent = "";

const h = document.createElement("header");
const m = document.createElement("main");
const f = document.createElement("footer");

h.innerHTML = "<h1>Super site en JS</h1>";
f.innerHTML = /* html */ `<ul><li>Menu 1</li></ul><ul><li>Menu 2</li></ul><ul><li>Menu 3</li></ul>`;
if(document.body)
{
    /* Si le Css indique des règles pour des éléments qui n'existent pas au chargement
    de la page. Les nouveaux élémnets prendrons bien en compte le css lors de leurs de
    leur ajout */
    document.body.append(h, m, f);
}

for(let i = 0; i < 5; i++)
{
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.A similique itaque, perspiciatis ea minima dolor iste, officiis, labore dignissimos deserunt quibusdam.Veniam, eaque facere cupiditate aperiam qui ducimus numquam incidunt";
    m.append(p);
}

/* Excersise */
const p = document.createElement("div");
/* i have named my element p and div is the element i want to make */
console.log(p);
p.innerHTML = "<h2>Santé</h2><p>Mangez 5 fruits et légumes par jour, les produits laiters sont nos amis pour la vie, ne mangez ni trop gras ni trop sucré, ni trop salé, l'abus d'alcool est dangereux por la santé</p>";
document.body.appendChild(p);

const button1 = document.createElement("button");
console.log(button1);
button1.innerHTML = "<p>tchin tchin !</p>";


const button2 = document.createElement("button");
console.log(button2);
button2.innerHTML = "<p>le gras c'est la vie </p>";

if(p)
{
    p.append(button1, button2);
}