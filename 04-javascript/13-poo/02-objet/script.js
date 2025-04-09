"use strict";
import { Person } from "./person.js";

console.log(Person);

Person.age = "chaussette";
Person.setAge = "chaussette";
Person.setNom = "fonTaine";
Person.setPrenom = "piErre" 
// console.log(Person);
console.log(Person.getFullName);
// ! et non pas :
// console.log(Person.getfullname());
Person.setAge = 54;
Person.salutation();
Person.anniversaire();

