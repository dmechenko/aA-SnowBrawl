import Game from "./scripts/game";
import Player from "./scripts/player";

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 960;
    canvas.height = 480;
    // backgroundImg.onload = function(){
    //     ctx.drawImage(backgroundImg, 0, 0);
    // }
    const player = new Player();
    console.log(player);
    const game = new Game(ctx, player)
})