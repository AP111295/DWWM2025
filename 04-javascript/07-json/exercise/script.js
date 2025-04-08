"use strict"

/*
1. Create a to-do list. Each time the add button is pressed,
a new item is created in the list.
This item must contain the value of the input and a cross.
We'll use this opportunity to clear the input.
2. Clicking on an item in the list will add a class that will
strike the item out.
3. Clicking on the cross will delete the item in question.
4. Save the list to local storage.
5. Display the saved list when the page loads.
6. Edit the list when you check or delete an item.
Bonus: Use drag and drop to move our items within the list. Remember to save the items you move.
*/
showResult();
function showResult() {
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
// e.preventDefault(); // Prevent HTML refresh
const formData = new FormData(form); // Converts to array of arrays
const obj = Object.fromEntries(formData); // Array of arrays to object
console.log(obj);
});
}
