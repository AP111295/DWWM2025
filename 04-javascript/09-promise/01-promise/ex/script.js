"use script";

function sort(array) 
{ return new Promise((resolve, reject) => 
    { if (array.some(item => typeof item !== typeof array[0])) 
        { reject("Error, incompatible type."); } 
        // this is a compare function
    else { resolve(array.sort((a, b) => a - b)); } }); }

const a1 = [3, 12, 45, 4, 70]; 
const a2 = [3, "12", 45, 4, 70];

sort(a1)
     .then(array => console.log(array))
     .catch(e => console.error(e)); 
sort(a2)
    .then(array => console.log(array))
    .catch(e => console.error(e));


/* traffic lights */

function()

