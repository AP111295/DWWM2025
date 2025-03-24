"use strict";
/* ---------// form 1--------- */
function validateEmailInput() {
    const emailInput = document.getElementById('emailInput').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
      const emailInputinvalid = document.getElementById('emailInput');
      emailInputinvalid.style.backgroundColor = "pink";
    }
  }

  function validateTeleInput() 
  {
    const teleInput = document.getElementById('teleInput').value;
    const teleFeedback = document.getElementById('teleFeedback');
    const teleRegex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
    console.log("teleRegex");

    if (teleRegex.test(teleInput)){
        teleFeedback.textContent = "";
    }
    else {
        teleFeedback.textContent = "please enter a valid phone number";
        const teleInputInvalid = document.getElementById('teleInput');
        teleInputInvalid.style.backgroundColor = "pink";
    }
  }

/* ---------// form 1--------- */



/* ---------// form 2--------- */


function validateUsername(username) {
    const pattern = /^[a-zA-Z]{2,15}$/;
    const userFeedback = document.getElementById('userFeedback');
    // return pattern.test(username);
    console.log(username);
    
    if (pattern.test(username)){
        userFeedback.textContent = "";
        const usernameinvalid = document.getElementById('username');
        usernameinvalid.style.backgroundColor = "";
    }
    else {
        userFeedback.textContent = "Invalid username";
        const usernameinvalid = document.getElementById('username');
        usernameinvalid.style.backgroundColor = "pink";
    }
}
 /*
      ^ : Start of the string
      [a-zA-Z] : The username must start with a letter (uppercase or lowercase).
      [a-zA-Z0-9_] : The username can contain letters, numbers, and underscores.
      {2,15} : The username must be between 3 and 16 characters long (since the first character is already matched, we use {2,15} for the remaining length).
       $ : End 
*/


// Test cases
// console.log(validateUsername("user123"));
// console.log(validateUsername("_user"));  
// console.log(validateUsername("u"));      
// console.log(validateUsername("user_name123"));
// console.log(validateUsername("user@name")); 


