"use strict";

function birthday(age: number|string): string
{
    // age++;
    // le narrowing est le fait de resserrer les possibilités
    if(typeof age === "number")
    {
        // Ici age ne peut etre qu'un nombre
        age++;
    }
    else
    {
        // Ici il ne peut etre qu'un string
        age = parseInt(age)+1;
    }
    return age+ "ans";
}

function chaussette (droite: string|boolean, gauche:string|number): void
{
    if(droite === gauche)
    {
        // Ici la seule possibilité pour que ce soit égale, c'est que les deux soit de type string
        console.log("vous avez une paire !", droite, gauche);
        
    }
}