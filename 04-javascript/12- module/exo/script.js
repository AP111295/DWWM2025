"use strict";

/* 
Importe les fonctions de export.js.

Appelle addevent() pour activer la navigation avec les points.

Charge la première image avec toto(), qui importe export.js et exécute showSlides(1). */

import ps, { currentSlide, showSlides, addevent } from "./export.js";

addevent();
toto();

async function toto() 
{
    const dodo = await import("./export.js");
    dodo.default(1);   
}