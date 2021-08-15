import bearBoy from "../assets/BearBoy.png"
import bearBoyIdleRight from "../assets/bearBoyIdleRight.png"
import bearBoyIdleLeft from "../assets/bearBoyIdleLeft.png"
import bearBoyRunRight from "../assets/bearBoyRunRight.png"
import bearBoyRunLeft from "../assets/bearBoyRunLeft.png"


const platform = new Image();
platform.src = "../snowbrawl/src/assets/platform.png"

class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.keys = [];
        this.char = {
            x: 480,
            y: 250,
            width: 96,
            height: 96,
            spriteSheetX: 0,
            spriteSheetY: 0,
            speed: 10,
            moving: false
            // lives: 3
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = bearBoy;

        this.idleRight = new Image();
        this.idleRight.src = bearBoyIdleRight;

        this.idleLeft = new Image();
        this.idleLeft.src = bearBoyIdleLeft;

        this.runRight = new Image();
        this.runRight.src = bearBoyRunRight;

        this.runLeft = new Image();
        this.runLeft.src = bearBoyRunLeft;
        // this.animate();
    }

    drawBearBoy(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    onKeydown(e){
        this.keys[e.key] = true;
        this.char.moving = true;
        console.log(this.keys);
        console.log(this.char.speed);
    }

    onKeyup(e){
        delete this.keys[e.key];
        this.char.moving = false;
        this.char.y = 250;
    }

    move(){
        // debugger
        if (this.keys["a"]&& this.char.x > 180){
            this.char.spriteSheetY = 46;
            while (this.char.spriteSheetY > 46){
                this.char.spriteSheet--
                this.char.spriteSheetY = 46;
            }

            this.char.x -= this.char.speed;
            this.char.moving = true;
        }
        if (this.keys["d"] && this.char.x < 710){
            this.char.spriteSheetY = 9;
        
            this.char.x += this.char.speed;
            this.char.moving = true;
        }
        if (this.keys[" "]){
            this.char.y -= this.char.speed;
            this.char.moving = true;
        }
        if (this.keys["s"] && this.char.spriteSheetY < 28){
            this.char.spriteSheetY = 22;
            this.char.moving = true;
            this.char.y = 255;
        }
        if (this.keys["s"] && this.char.spriteSheetY > 28){
            this.char.spriteSheetY = 35;
            this.char.moving = true;
            this.char.y = 255;
        }
       
    }

    idleAnimationLogic(){
        if (this.char.spriteSheetY < 28 && this.char.moving === false){
            if (this.char.spriteSheetY < 8) this.char.spriteSheetY++
            else this.char.spriteSheetY = 0;
        }
        if (this.char.spriteSheetY > 28 && this.char.moving === false){
            if (this.char.spriteSheetY < 55) this.char.spriteSheetY++;
            else this.char.spriteSheetY = 47;
        }
    }

    animate(){
        this.ctx.clearRect(0, 0, 960, 480);
        this.ctx.drawImage(platform, 230, 327)
        this.drawBearBoy(this.spriteSheet,
            this.char.spriteSheetY * this.char.width,
            this.char.spriteSheetX * this.char.width, 
            this.char.width, 
            this.char.height, 
            this.char.x, 
            this.char.y, 
            this.char.width, 
            this.char.height)
        this.move();
        // requestAnimationFrame(this.animate.bind(this));
    }
}
// A (left) => 65
// S (duck) => 83
// D (right) => 68
// SPACE (jump) => 32
// frames 0-8 are idle animations for right facing
// frames 47-55 are idle animations for left facing

export default Player