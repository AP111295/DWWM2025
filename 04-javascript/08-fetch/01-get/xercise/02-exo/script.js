"use strict"
const url = "./exo2.json"; // ces étapes permettent de récupérer des informations à partir du fichier json
let jsonM1, jsonM2, jsonM3, jsonM4
fetch(url).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            jsonM1 = data.memberinfo.mem1
            jsonM2 = data.memberinfo.mem2
            jsonM3 = data.memberinfo.mem3
            jsonM4 = data.memberinfo.mem4
            console.log(jsonM1);
            
        })
    }
})
document.querySelector('#info').addEventListener("change", function(){
    if(this.value == "mm"){
        const hero = document.querySelector(".hero1");
        // hero.innerHTML = ""
        let html = "<ul>"; // let the html string start with <ul>
        hero.style.border = "1px solid black"
        hero.style.width = "400px"
        for (let key in jsonM1){
            // console.log(key);
            if(typeof jsonM1[key] != "object") // making the condition to select the object in jsonM1
            {
                html += `<li>${jsonM1[key]}</li>`; // so let the html string be a list which starts and end with <li></li>
            }
            else
            {
                html += '<li><ul>'
                for (let power of jsonM1[key]) // power is the list object
                {
                    // console.log(power);
                    html += `<li>${power}</li>`;
                }
                html += '</ul></li>'
            }

        }
        html += "</ul>" // let the html string end with <ul>
        hero.innerHTML = html
    }
    else if(this.value == "mu"){
        const hero2 = document.querySelector(".hero2");
        // hero2.innerHTML = ""
        let html = "<ul>";
        hero2.style.border = "1px solid black"
        hero2.style.width = "400px"
        for (let key in jsonM2){
            // console.log(key);
            // hero2.innerHTML += jsonM2[key]+ "<br>"
            if(typeof jsonM2[key] != "object"){
                html += `<li>${jsonM2[key]}</li>`;
            }
            else{
                html += '<li><ul>'
                for (let power of jsonM2[key])
                {
                    html += `<li>${power}</li>`;
                }
                html += '</ul></li>'
            }
        }
        html += "</ul>"
        hero2.innerHTML = html
    }
    else if(this.value == "ef"){
        const hero3 = document.querySelector(".hero3");
        // hero3.innerHTML = ""
        let html = "<ul>";
        hero3.style.border = "1px solid black"
        hero3.style.width = "400px"
        for (let key in jsonM3){
            // console.log(key);
            // hero2.innerHTML += jsonM2[key]+ "<br>"
            if(typeof jsonM3[key] != "object"){
                html += `<li>${jsonM3[key]}</li>`;
            }
            else{
                html += '<li><ul>'
                for (let power of jsonM3[key])
                {
                    html += `<li>${power}</li>`;
                }
                html += '</ul></li>'
            }
        }
        html += "</ul>"
        hero3.innerHTML = html
    }
    else if(this.value == "sm"){
        const hero4 = document.querySelector(".hero4");
        // hero4.innerHTML = ""
        let html = "<ul>"; // let the html string start with <ul>
        hero4.style.border = "1px solid black"
        hero4.style.width = "400px"
        for (let key in jsonM4){
            // console.log(key);
            // hero4.innerHTML += jsonM2[key]+ "<br>"
            if(typeof jsonM4[key] != "object"){
                html += `<li>${jsonM4[key]}</li>`;
            }
            else{
                html += '<li><ul>'
                for (let power of jsonM4[key])
                {
                    html += `<li>${power}</li>`;
                }
                html += '</ul></li>'
            }
        }
        html += "</ul>" // let the html string end with <ul>
        hero4.innerHTML = html
    }
})