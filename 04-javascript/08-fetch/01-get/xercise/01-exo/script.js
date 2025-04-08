

/*--------This is how to french data from json----------*/
const url = "./exo.json";
let jsonFR, jsonEN, jsonHi
  fetch(url).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            jsonFR = data.language.française
            jsonEN = data.language.english
            jsonHi = data.language.हिन्दी
        })
    }
  })

  document.querySelector('#language').addEventListener("change", function() {

    if (this.value == "fr") {
      // change all text to french
      for (let key in jsonFR) {
        document.querySelector(key).textContent = jsonFR[key]
      }
      console.log('jsonFR');
    } else if (this.value == "en") {
      // change all text to en
      for (let key in jsonEN) {
        console.log(key);
        
        document.querySelector(key).textContent = jsonEN[key]
      }
      console.log('jsonEN');
    }
    else if (this.value == "hi") {
        // change all text to hindi
        for (let key in jsonHi) {
            
          document.querySelector(key).textContent = jsonHi[key]
      
        }
        console.log('jsonHi');
    }
  });