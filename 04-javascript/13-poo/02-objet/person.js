"use strict";


/* 
   La programmation orienté objet consite à développer notre code sous formes d'objets.
   la plupart des langages demander à passer par des constructeurs que l'on nomme "class",
   mais en JS, nous allons pouvoir créer notre objet manuellement.
*/

const Person = {
    name: {
        prenom: "Maurice",
        nom: "Dupont"
    },
    age: 54,
    /* 
     Le setter permet de filtré une donnée avant de la sauvegarder dans l'objet.
     Sa déclaration ressemble à une forcément un paramètre.
     Mais son utilisation est faite comme une propriété normale "monObjet.monSetter = mavaleur"
     et non comme une fonction.
    */

    set setAge(a)
    {   
        // this vaut l'objet englobant, danc ici "person"
        this.age = parseInt(a);
    },
    set setNom(n)
    {
        this.name.nom = n.toUpperCase();
    },
    set setPrenom(p)
    {
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    /* 
       Nous avaons aussi les getter qui permettent de récupérer une valeur.
       là aussi la syntaxe ressemble à une fonction mais avec le mot clef "get"
       Ils ne prendrons pas de paramètre.
       Mais ils DEVRONT retourner une valeur.
    */
   get getFullName()
   {
    return `${this.name.prenom} ${this.name.nom}`;
   },
/* 
   Nos objets peuvent aussi contenir des fonctions.
   pour les déclarer, nous n'avons pas besion du mot clef "function".

   ? Pour plus de pécision, en POO on ne parle pas de "fonctions" d'un objet, mais
   de "methode" d'un objet.

   de la meme manière qu'on ne parle pas de "variable" d'un objet
   mais de "propriété" d'un objet.

*/
salutation()
{
    console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.age} ans.`);
    
},
anniversaire()
{
    this.age++;
    this.salutation();
}
}
export {Person};