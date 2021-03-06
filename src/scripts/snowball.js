// import snowball from "src/assets/downscaledSnowball.png"

const duckOrNot = [270, 310];
const leftOrRight = [0, 960];

class Snowball {
    constructor(ctx, speed = 5){
        this.ctx = ctx;
        this.ball = {
            x: leftOrRight[Math.floor(Math.random() * duckOrNot.length)],
            y: duckOrNot[Math.floor(Math.random() * duckOrNot.length)],
            // add snowballs coming from the top later on
            width: 30,
            height: 30,
            frameX: 0,
            frameY: 0,
            speed: speed,
            moving: false
        };
        
        this.initialX = this.ball.x

        this.spriteSheet = new Image();
        this.spriteSheet.src = "src/assets/downscaledSnowball.png" //snowball
    }

    drawSnowball(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    letFlyRight(){
        this.ball.x += this.ball.speed
    }

    letFlyLeft(){
        this.ball.x -= this.ball.speed
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
        if (this.initialX === 0) this.letFlyRight();
        else this.letFlyLeft();
    }

}

export default Snowball