"use strict";

import { slider } from "./slider.js";
import { PaintApp } from "./paint.js";
import { JustePrix } from "./price.js";

const appli = document.querySelector('.appli')

document
  .querySelector("#appli")
  .addEventListener("change", function slideshow() {
    if (this.value == "slider") {
      slider.createImage();
    }
    else if(this.value == "paint") {
        PaintApp.painting();
    }
    else if (this.value == "justePrix") {
    //  console.log(JustePrix.guessPrice(50));
    appli.append(JustePrix.createHTML())
      console.log(JustePrix);
    }
  });


