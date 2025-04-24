"use strict";

type Chaussette = string;
// type Chaussette = string|number;

interface Point
{
    x: number;
    y: number;
    get(): number;
}
// On peut ajouter de nouveaux éléments à une interface.
interface Point
{
    z: number;
}
interface Document 
{
    chaussette: string;
}
document.chaussette
// Pour utiliser une interface, on utilisera "implements"
class Point3D implements Point 
{
    x = 0;
    y = 1;
    z = 2;
    get()
    {
        return this.x;
    }
}
function show(p: Point){}
show(new Point3D());