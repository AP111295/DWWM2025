import Dev from "./dev.js";
import H from "./human.js";

const monHumain = new H("Maurice", "Dupont", 54);
const monHumain2 = new H("Pierre", "Fontaine", 78);
const monDev = new Dev("Jean", "Bernard", 34, ["html", "css","javascript"]);


console.log(monDev);
monDev.salutation();


console.log(monHumain, monHumain.vivant, H.categorie, H.vivant);

// monHumain.description();
H.description();
monHumain.salutation();
monHumain2.anniversaire();

const maDate = new Date();
// now() est une méthode static, elle existe sur la classe date
console.log(Date.now());
// mais pas sur l'objet instancié par Date.
// console.log(maDate.now());


