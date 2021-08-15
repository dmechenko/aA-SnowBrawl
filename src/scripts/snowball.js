import snowball from "../assets/Snowball.png"

class Snowball {
    constructor(ctx){
        this.ctx = ctx;
        this.char = {
            x: 0,
            y: 0,
            width: 170,
            height: 170,
            frameX: 0,
            frameY: 0,
            speed: 10,
            moving: false
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = snowball
        // this.animate();
    }

    drawSnowball(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    // animate(){
    //     this.ctx.clearRect(0, 0, this.char.width, this.char.height);
    //     this.drawSprite(this.spriteSheet, 0, 0, this.char.width, this.char.height, 460, 270, this.char.width / 6, this.char.height / 6)
    //     requestAnimationFrame(this.animate.bind(this));
    // }

}

export default Snowball