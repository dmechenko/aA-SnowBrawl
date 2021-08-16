import snowball from "../assets/downscaledSnowball.png"

class Snowball {
    constructor(ctx){
        this.ctx = ctx;
        this.ball = {
            x: 0,
            y: 270,
            width: 30,
            height: 30,
            frameX: 0,
            frameY: 0,
            speed: 15,
            moving: false
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = snowball
        // this.animate();
    }

    drawSnowball(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    letFly(){
        this.ball.x += this.ball.speed
    }

    animate(){
        // this.ctx.clearRect(0, 0, this.ball.width, this.ball.height);
        this.drawSnowball(this.spriteSheet, 
            // this.ball.spriteSheetY * this.ball.width, 
            // this.ball.spriteSheetX * this.ball.width, 
            0,
            0,
            this.ball.width, 
            this.ball.height, 
            this.ball.x, 
            this.ball.y, 
            this.ball.width, 
            this.ball.height
            )
        this.letFly();
    }

}

export default Snowball