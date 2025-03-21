"use script";

const secondhand = document.querySelector('.secondhand');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

function setDate() {
    // the "Date" D has to be uppercase 
    const now = new Date();
      // the "getSecond" S has to be uppercase 
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360);
    secondhand.style.transform = `rotate(${secondsDegree}deg)`;
 

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60)*6);
    minutes.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
    hours.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);