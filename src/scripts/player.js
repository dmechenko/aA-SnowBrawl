import bearBoy from "../assets/BearBoy.png"

class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.keys = [];
        this.char = {
            x: 0,
            y: 0,
            width: 96,
            height: 96,
            frameX: 0,
            frameY: 0,
            speed: 10,
            moving: false
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = bearBoy
        this.animate();
    }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    animate(){
        this.ctx.clearRect(0, 0, this.char.width, this.char.height);
        this.drawSprite(this.spriteSheet, 0, 0, this.char.width, this.char.height, 480, 250, this.char.width, this.char.height)
        requestAnimationFrame(this.animate.bind(this));
    }
}
// A (left) => 65
// S (duck) => 83
// D (right) => 68
// SPACE (jump) => 32

export default Player