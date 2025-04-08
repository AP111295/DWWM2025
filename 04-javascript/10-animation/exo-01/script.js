"use strict";

 var string = "DÉVELOPPEUR";
 var array = string.split("");
 var timer;


function frameLooper () {

	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	timer = setTimeout('frameLooper()',70);

}
frameLooper();
/* the text WEB */
var string2 = "WEB";
var array2 = string2.split("");
var timer2;

function text2function() {
   

   if (array2.length > 0) {
       document.getElementById("text2").innerHTML += array2.shift();
   } else {
       clearTimeout(timer2);
           }
   timer2 = setTimeout('text2function()',570);

}
text2function();

/* The text MAURICE */
var string3 = "MAURICE";
var array3 = string3.split("");
var timer3;

function text3function() {
   

   if (array3.length > 0) {
       document.getElementById("text3").innerHTML += array3.shift();
   } else {
       clearTimeout(timer3);
           }
   timer3 = setTimeout('text3function()',70);

}
text3function();

/* The text DOUPONT */
var string4 = "DUPONT";
var array4 = string4.split("");
var timer4;

function text4function() {
   

   if (array4.length > 0) {
       document.getElementById("text4").innerHTML += array4.shift();
   } else {
       clearTimeout(timer4);
           }
   timer4 = setTimeout('text4function()',100);

}
text4function();









