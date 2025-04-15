"use strict";

class Bouncingballs 

{
    canvas = document.getElementById("my_canvas");
    c = this.canvas.getContext("2d");

    container = {
        x: 0,
        y: 0,
        width: 600,
        height: 300
    };
    circles = [
        {
            x: 60,
            y: 100,
            r: 10,
            vx: 10,
            vy: 9,
            color: 125
        },
        {
            x: 150,
            y: 80,
            r: 20,
            vx: 15,
            vy: 8,
            color: 205
        },
        {
            x: 90,
            y: 150,
            r: 5,
            vx : 5,
            vy: 15,
            color: 25

        },
        {
            x: 100,
            y: 50,
            r: 15,
            vx: 8,
            vy: 10,
            color: 100
        },
        {
            x: 200,
            y: 100,
            r: 25,
            vx: 12,
            vy: 15,
            color: 200
        },
        {
            x: 80,
            y: 120,
            r: 20,
            vx: 15,
            vy: 10,
            color: 125
        },
        {
            x: 100,
            y : 110,
            r: 15,
            vx: 9,
            vy: 11,
            color: 150
        }

    ]
    constructor() 
    {
        this.animate();
    }

    animate(){
        const {container, circles, c} = this;
         //draw the container
        c.fillStyle = "#000000";
        c.fillRect(container.x, container.y, container.width, container.height);

  //loop through the circles array
  for (var i = 0; i < circles.length; i++) {
    //draw the circles
    c.fillStyle = 'hsl(' + circles[i].color++ + ', 100%, 50%)';
    c.beginPath();
    c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
    c.fill()

    // animating the circles
    if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
      circles[i].vx = -circles[i].vx;
    }

    if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
      circles[i].vy = -circles[i].vy;
    }

    circles[i].x += circles[i].vx
    circles[i].y += circles[i].vy
  }

  requestAnimationFrame(this.animate.bind(this));
}

}
new Bouncingballs();







