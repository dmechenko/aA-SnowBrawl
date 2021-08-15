import bearBoy from "../assets/BearBoy.png"

class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.keys = [];
        this.char = {
            x: 480,
            y: 250,
            width: 96,
            height: 96,
            frameX: 0,
            frameY: 0,
            speed: 2,
            moving: false,
            lives: 3
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = bearBoy
        this.animate();
    }

    drawBearBoy(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    animate(){
        this.ctx.clearRect(0, 0, 960, 480);
        this.drawBearBoy(this.spriteSheet, 0, 0, this.char.width, this.char.height, this.char.x, this.char.y, this.char.width, this.char.height)
        this.move();
        requestAnimationFrame(this.animate.bind(this));
    }

    onKeydown(e){
        this.keys[e.key] = true;
        this.char.moving = true;
        console.log(this.keys);
    }

    onKeyup(e){
        delete this.keys[e.key];
        this.char.moving = false;
    }

    move(){
        // debugger
        if (this.keys["a"]){
            this.char.x -= this.char.speed;
        }
        if (this.keys["d"]){
            this.char.x += this.char.speed;
        }
    }
}
// A (left) => 65
// S (duck) => 83
// D (right) => 68
// SPACE (jump) => 32

export default Player