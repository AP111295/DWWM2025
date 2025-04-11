"use strict";

import human from "./human";

/* 
    Le mot clef "extends" permet l'héritage d'une classe.
    Cela permet à ma nouvele classe d'obtenir presque tout les 
    propriétés et méthodes se son parent.

    seul les propriétés et méthodes privées ne sont pas héritées..
*/

export default class Dev extends human
{
    constructor(prenom, nom, age, techniques)
    { 
        /* 
           Si l'on modifie le constructor d'une classe qui a hérité,
           Il faut appeler la fonction "super()".
           Elle appellera le constructor du parent, de ce fait, il 
           faudra lui donner les paramètres attendu par le parent.
        */
        super(prenom, nom, age);
        // console.log(this.#age);
        this.settechniques = techniques;
    }
    set settechniques(t)
    {
        if(Array.isArray(t))
        {
            this.tech = t;
        }
        else
        {
            this.tech = [t];
        }
    }
    get getTechniques()
    {
        return this.tech.join(", ");
    }
    /* 
       Si je nomme une méthode comme celle du parent.
       Celle du parent sera oubliée et il prendra la nouvelle méthode
       définie :
    */
   salutation()
   {
    // Optionnellement je pourrais 
    // choisir d'appler aussi la méthode du parent avant de la méécrire :
    super.salutation();
    console.log(`je maitrise ${this.getTechniques}.`);
   }


}