"use strict";
/* 
    le principal ajout de Typescript est dans son nom c'est le typage, c'est à dire que comme dans 
    beaucoup de langage de programmation, on indiquera le type des varibles, paramètre est autres
*/
let mot: string = "bonjour";
let chiffre: number = 5;
let bool: boolean = true;
let nu: null = null;
// Cela empéche une variable de changer de type : 
// mot = 1;

// Ici je crée un tableau ne contenant que des strings
const arr1: string[] = ["truc", "bidule"];

// si je veux qu'une variable ou un tableau contienne n'importe quoi, j'utiliserais "any"
let truc: any = "test";
truc = 5;
const arr2: any[] = ["test", 5, false];

// Pour les objects on pourra indiquer le type de chaque propriété
const person: {prenom: string, age?:number} = {prenom: "Maurice"};
// le "?" indique que la propriété est optionnelle.

// [key: string] indique qu'il peut y avoir des propriété supplémentaires
const person2: {prenom: string, [key:string]: string} = {prenom: "charles", nom: "Dupont", loisir: "Bowling"};

// On pourra aussi utiliser un nom de classe comme type:
const today : Date = new Date();

// Ou bien une fonction :
const salut: Function = function(){};
/* 
   On pourra typer les paramètres et les valeurs de retour d'une fonction.
   le type "void" indique que la fonction ne retourne rien du tout

*/
function clickMe(e: PointerEvent): void
{
    console.log("Merci de cliquer sur", e.target);
    
}
/* 
 Ici une erreur est indiqué car "click" donne un "MouseEvent" et non pas un "pointerevent"
*/
// document.addEventListener("click", clickMe);
document.addEventListener("pointerdown", clickMe);
// Si on n'est pas sur, on peut toujours indiquer le type "event" qui est le parent de tout les évènements.

function tri(tableau: readonly any[]): any[]
{
    // le type "readonly" indique que le paramètre peut etre lu, mais pas modifié
    // tableau.sort();
    // donc je vais créer un nouveau tableau qui lui sera trié
    return [...tableau].sort();
}

// techniquement, si le type n'est pas indiqué, TS le déclarera quand meme :
let a = 5;
// a = "test";

// Mais parfois certaines fonctions ont plusieurs valeurs de retourn possible :
const btn1 = document.querySelector("#compte");
// ici btn1 est possiblement null, je peux éviter cela en ajoutant une condition :
if(btn1)
{
    // Mais ici il indique que "style" n'existe pas sur "Element"
    // btn1.style.color = "red";
    // Effectivement, queryselector indique qu'il retourne un Element et non pas un HTMLElemnt.
}
// Pour éviter ce genre d'erreur, je pourrais changer la valeur de retourn de ma fonction:
// Ici btn2 n'est pas null mais reste un "element"
const btn2 = document.querySelector('#compte')!;

// Ici btn3 est un "HTMLButtonElement" ou "null"
const btn3 = document.querySelector<HTMLButtonElement>('#compte');
// meme résultat que btn4
const btn4 = document.querySelector('#compte') as HTMLButtonElement;

// Si une variable peut contenir plusieurs types, on utilisera "|"

let y : string|number|boolean = 5;
y = "truc";
y = false;