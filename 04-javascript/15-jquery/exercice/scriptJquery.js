"use strict";

let idInterval;

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const ul = slider.querySelector("ul");
    const liItems = ul.querySelectorAll("li");
    const checkbox = document.getElementById("checkbox");
    const prevControl = document.querySelector("a.control_prev");
    const nextControl = document.querySelector("a.control_next");

    // Equivalent to: $('#slider ul li:nth-child(odd)').css("background", "#aaa")
    liItems.forEach((li, index) => {
        if ((index + 1) % 2 === 1)
            /* Breakdown: index + 1: Increases the index by 1.
                                % 2: Checks the remainder when dividing by 2.
                              === 1: Checks if the remainder is exactly 1. */ 
            {
            li.style.background = "#aaa";
        }
    });

    // Equivalent to: $('#checkbox').change(function () { ... })
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            idInterval = setInterval(moveRight, 1500);
        } else {
            clearInterval(idInterval);
        }
    });

    // Equivalent to:
    // let slideCount = $('#slider ul li').length;
    // let slideWidth = $('#slider ul li').width();
    // let slideHeight = $('#slider ul li').height();
    // let sliderUlWidth = slideCount * slideWidth;
    const slideCount = liItems.length;
    const slideWidth = liItems[0].offsetWidth;
    const slideHeight = liItems[0].offsetHeight;
    const sliderUlWidth = slideCount * slideWidth;

    // Equivalent to: $('#slider').css({ width, height });
    slider.style.width = `${slideWidth}px`;
    slider.style.height = `${slideHeight}px`;

    // Equivalent to: $('#slider ul').css({ width, marginLeft: -slideWidth });
    ul.style.width = `${sliderUlWidth}px`;
    ul.style.marginLeft = `-${slideWidth}px`;

    // Equivalent to: $('#slider ul li:last-child').prependTo('#slider ul');
    ul.insertBefore(ul.lastElementChild, ul.firstElementChild);

    function moveLeft() {
        ul.style.transition = "margin-left 0.2s";
        ul.style.marginLeft = "0";

        ul.addEventListener("transitionend", function handler() {
            ul.removeEventListener("transitionend", handler);
            ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
            ul.style.transition = "none";
            ul.style.marginLeft = `-${slideWidth}px`;
        });
    }

    function moveRight() {
        ul.style.transition = "margin-left 0.2s";
        ul.style.marginLeft = `-${2 * slideWidth}px`;

        ul.addEventListener("transitionend", function handler() {
            ul.removeEventListener("transitionend", handler);
            ul.appendChild(ul.firstElementChild);
            ul.style.transition = "none";
            ul.style.marginLeft = `-${slideWidth}px`;
        });
    }

    // Equivalent to: $('a.control_prev').click(moveLeft);
    prevControl.addEventListener("click", moveLeft);

    // Equivalent to: $('a.control_next').click(moveRight);
    nextControl.addEventListener("click", moveRight);
});