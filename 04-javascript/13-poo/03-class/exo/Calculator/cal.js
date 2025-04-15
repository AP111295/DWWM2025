"user strict";

class Calculator
{
    screen = document.querySelector('.screen');
    buttons = document.querySelectorAll('.btn');
    clear = document.querySelector('.btn-clear');
    equal = document.querySelector('.btn-equal');
    nmb1 = ""
    nmb2 = ""
    sign = ""
    constructor()
    {
        this.addButtonsEvent();
        this.addEqualEvent();
        this.addClearEvent();
    }

    addButtonsEvent()
    {
        const {screen, buttons} = this;
        const calc = this;
        buttons.forEach(function(button) {  /* selecting all the btn */
            button.addEventListener('click', function(e) {
                let value = e.target.dataset.num; /* let value = e.target.dataset.num;: 
                Retrieves the value of the data-num attribute of the clicked button and
                assigns it to the value variable. */
                if (value !== undefined) {
                    screen.value += value;
                    if(value === ".")
                    {

                    }
                    else if(isNaN(value))
                    {
                        if(!calc.sign)
                        {
                            calc.sign = value
                        }
                    }
                    else
                    {
                        if(calc.sign)
                        {
                            calc.nmb2 += value;
                        }
                        else
                        {
                            calc.nmb1 += value;
                        }
                    }
                }
                console.log(calc.nmb1, calc.sign, calc.nmb2);
                
            });
        });
    }
    addEqualEvent()
    {
        const {equal, screen} = this;
        const calc = this;
        equal.addEventListener('click', function(e) {
            if (screen.value === '') {/* Checks if the screen is empty.if it is the display 
                "please enter" */
                screen.value = "Please enter";
            } else {
                try {
                    /* let answer = eval(screen.value); *//*  If the screen is not empty, tries to evaluate 
                    the arithmetic expression. */
                    let answer;
                    switch(calc.sign)
                    {
                        case "+":
                            answer = parseInt(calc.nmb1) + parseInt(calc.nmb2);
                            break;
                        case "-":
                            answer = calc.nmb1 - calc.nmb2;
                            break;
                        case "/":
                            answer = calc.nmb1 / calc.nmb2;
                            break;
                        case "*":
                            answer = calc.nmb1 * calc.nmb2;
                            break;
                    }
                    calc.sign = "";
                    calc.nmb1 = "";
                    calc.nmb2 = "";
                    screen.value = answer; /*  Sets the screen value to the result of the evaluation. */
                } catch (error) {
                    screen.value = "Error"; /* If there is an error during the evaluation 
                    (e.g., syntax error), sets the screen value to "Error". */
                }
            }
        });
    }
    addClearEvent()
    {
        const {clear, screen} = this;
        clear.addEventListener('click', function(e) {
            screen.value = ""; /* Clears the screen by setting its value to an empty string. */
        });
    }
}
new Calculator();





/*------------ this this without the class and constructor------------ */


/* (function() { ... })();: This is an Immediately Invoked Function Expression 
(IIFE). It runs immediately after it's defined. It's used to create a
 private scope to avoid polluting the global namespace. */

// (function() {
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button) {  /* selecting all the btn */
//         button.addEventListener('click', function(e) {
//             let value = e.target.dataset.num; /* let value = e.target.dataset.num;: 
//             Retrieves the value of the data-num attribute of the clicked button and
//             assigns it to the value variable. */
//             if (value !== undefined) {
//                 /* if (value !== undefined) { screen.value += value; }: 
//                 If the value is defined (not undefined), it appends the value 
//                 to the current value of the screen input field. This builds the
//                 arithmetic expression on the screen as the user clicks buttons. */
//                 screen.value += value;
//             }
//         });
//     });

//     equal.addEventListener('click', function(e) {
//         if (screen.value === '') {/* Checks if the screen is empty.if it is the display 
//             "please enter" */
//             screen.value = "Please enter";
//         } else {
//             try {
//                 let answer = eval(screen.value);/*  If the screen is not empty, tries to evaluate 
//                 the arithmetic expression. */
//                 screen.value = answer; /*  Sets the screen value to the result of the evaluation. */
//             } catch (error) {
//                 screen.value = "Error"; /* If there is an error during the evaluation 
//                 (e.g., syntax error), sets the screen value to "Error". */
//             }
//         }
//     });

//     clear.addEventListener('click', function(e) {
//         screen.value = ""; /* Clears the screen by setting its value to an empty string. */
//     });
// })(); 


/* })();Ends the IIFE, which executes the function immediately after defining it. */

