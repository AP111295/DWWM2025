"use strict";



const fields = [ 
  { label: 'Nom', type: 'text', name: 'nom' }, 
  { label: 'Email', type: 'email', name: 'email' }, 
  { label: 'Message', type: 'textarea', name: 'message' } 
];

//This array contains metadata to build form inputs.


const form = document.getElementById('dynamicForm');
const template = document.getElementById('fieldTemplate');

//Gets references to the form and the template from the DOM.


fields.forEach(field => {
  const clone = template.content.cloneNode(true);

//We clone the template content for each field.


const label = clone.querySelector('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

//Sets the label text and links it to the input via the for attribute.


let input;
  if (field.type === 'textarea') {
    input = document.createElement('textarea');
  } else {
    input = document.createElement('input');
    input.type = field.type;
  }

//Depending on the type, we create either an <input> or a <textarea> element.

input.name = field.name;
  input.id = field.name;

//Assigns identifiers and names to each input.


clone.querySelector('.field').appendChild(input);
  form.appendChild(clone);
});

//Adds the input to the cloned template, then inserts the result into the form.



