import snowball from "../assets/downscaledSnowball.png"

const duckOrNot = [270, 310];
const leftOrRight = [0, 960];

class Snowball {
    constructor(ctx, speed = 5){
        this.ctx = ctx;
        this.ball = {
            x: 0,
            // x: leftOrRight[Math.floor(Math.random() * duckOrNot.length)],
            y: duckOrNot[Math.floor(Math.random() * duckOrNot.length)],
            width: 30,
            height: 30,
            frameX: 0,
            frameY: 0,
            speed: speed,
            moving: false
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = snowball
    }

    drawSnowball(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    letFly(){
        let initialX = this.ball.x
        this.ball.x += this.ball.speed
    }

    animate(){
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