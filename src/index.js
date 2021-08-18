import SnowBrawl from "./scripts/game";
import Player from "./scripts/player";
import Snowball from "./scripts/snowball"

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 960;
    canvas.height = 480;

    let game = new SnowBrawl(ctx);

    window.addEventListener('keydown', function(e){
        if (e.key === "Enter"){
            game.startGame();
            let inst = document.getElementById('instructions');
            inst.classList.add('hidden');
        }   
    })

    const snowCanvas = document.getElementById("snowflakes");
    const snowctx = snowCanvas.getContext("2d");
    snowCanvas.width = 960;
    snowCanvas.height = 480;

    const amountSnowflakes = 250;
    let snowFlakes = [];

    function random(min, max){
        return min + Math.random() * (max - min + 1); //picks random number between min and max
    }

    function addToSnowflakes(){
        for (let i = 0; i < amountSnowflakes; i++) {
            snowFlakes.push({ // add n snowflakes as objects with properties
                x: Math.random() * snowCanvas.width, //random x coordinate based on canvas width
                y: Math.random() * snowCanvas.height, //random y coordinate based on canvas height
                opacity: Math.random(), //random opacity between 0 and 1
                xVelocity: random(-10, 10), //random x velocity using previously defined function
                yVelocity: random(-10, 10), //random y velocity using previously defined function
                radius: random(1, 5) //random radius of snowflake
            })
        }
    }

    function letItSnow(){
        for (let i = 0; i < snowFlakes.length; i++) {
            const gradient = snowctx.createRadialGradient( 
                snowFlakes[i].x, //start x
                snowFlakes[i].y, //start y
                0, //radius at start of circle
                snowFlakes[i].x, //end x
                snowFlakes[i].y, //end y
                snowFlakes[i].radius //radius at end of circle
            );
            gradient.addColorStop(0, "rgba(255, 255, 255," + snowFlakes[i].opacity + ")") //white
            gradient.addColorStop(0.5, "rgba(166, 255, 254," + snowFlakes[i].opacity + ")") //teal-white
            gradient.addColorStop(1, "rgba(207, 255, 255," + snowFlakes[i].opacity + ")") //lighter teal
            snowctx.beginPath();
            snowctx.arc(
                snowFlakes[i].x,
                snowFlakes[i].y,
                snowFlakes[i].radius,
                0,
                Math.PI * 2,
                true
            );
            snowctx.fillStyle = gradient;
            snowctx.fill();
        }
    }

    function snowFall(){
        for (let i = 0; i < snowFlakes.length; i++){
            snowFlakes[i].x += snowFlakes[i].xVelocity; //increment x axis by velocity
            snowFlakes[i].y += snowFlakes[i].yVelocity; //increment y axis by velocity
            if (snowFlakes[i].y > snowCanvas.height){
                snowFlakes[i].x = Math.random() * snowCanvas.width; //reset the x axis of the snowflake to another random spot
                snowFlakes[i].y = -50 //reset the y axis to be slightly off screen 
            }
        }
    }

    function updateSnowFall(){
        snowctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height)
        letItSnow();
        snowFall();
    }

    setInterval(updateSnowFall, 50);
    addToSnowflakes();
})

