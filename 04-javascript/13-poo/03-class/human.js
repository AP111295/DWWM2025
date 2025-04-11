"use strict";

/* 
   Les classes sont des plans de construction pour des objets.
   Certaines classes sont déjà intégré par défaut à JS:
      "Date", "FormData", "IntersectionObserver"......
    
    Mais on peut aussi créer les notres.
      pour cela on utilisera le mot clef "class" suivi du nom que l'on aura choisi
      puis d'accolades "{}"
         * class MaSuperClass{}

    quelques conventions de développement orienté objet :
       - Une classe par fichier.
       - le nom de la classe qui commence par une majuscule.
       - le nom du fichier qui est le meme ou semblable à celui de la classe.

    Pour créer un nouvel objet à partir d'une classe (on parle d'instancier),
      On appellera le nom de la classe suivi de parenthèse et précédé du mot 
      clef "new"
*/

export default class human 
{
     /* 
       Dans une classe Javascript, nous allons trouver 3 types de propriétés (ou methods) :
        - la propriété ou méthode public,
        - la propriété ou méthode privée (précéde d'un "#"),
        - la propriété ou méthode static (précéde du mot clef "static")
     */
    // les propriétés public sont accessible n'importe ou sur l'objet instancié par la classe.
    vivant = true;
    // les propriétés privées sont accessible uniquement à l'interieur de la classe
    #name = {};
    #age;
    // les propriétés statics sont accessible uniquement sur la classe et non sur l'objet instancié.
    static categorie = "Mammifère";
    /**
     * La méthode constructor est une méthode particulière qui est appelée
       automatiquement à chaque fois que l'on instancie un nouvel objet.
     *
     * 
     */ 
    

    constructor(prenom, nom, age)
    {
        console.log("coucou !", prenom, nom, age);
        // this.age = age;
        // this.#name.prenom = prenom;
        // this.#name.nom = nom;
        // ? Je passe mes propriétés à mes setters pour les filtrer
        this.#setAge = age;
        this.setPrenom = prenom;
        this.setNom = nom;
        /* 
           les propriétés privées doivent etre déclarées à l'avance.
           Mais on peut créer une nouvelle propriété public à tout moment
        */
       this.naissance = new Date();
    }
    // exemple de méhode static :
    static description()
    {
        console.log(`un humain est un ${this.categorie}, a généralement une tete, 
        un buste, deux bras et deux jambes`);
    }
    set setPrenom(p)
    {
        this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    }
    set setNom(n)
    {
        this.#name.nom = n.toUpperCase();
    }
    // les setters peuvant aussi etre privées :
    set #setAge(a)
    {
        this.#age = parseInt(a);
    }
    get getFullName()
    {
        return this.#name.prenom +" " + this.#name.nom;
    }
    get getAge()
    {
        return this.#age+ "ans";
    }
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.getAge}.`);
    }
    anniversaire()
    {
        this.#age++;
        this.salutation();
    }
}