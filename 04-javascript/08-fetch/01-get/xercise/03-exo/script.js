"use strict"

// fetch('https://api.thedogapi.com/v1/images/search')
//    .then(response => response.text())
//    .then(text => console.log(text))

// document.querySelector(".conatiner")


function fetchData() {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output =  document.querySelector(".container")
        display(data[0].url);
        function display(item) {
        output.innerHTML += `<img src="${item}">`
    }
})}

fetchData()

