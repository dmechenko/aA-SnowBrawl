// import bearBoy from "../assets/BearBoy.png"
// import bearBoyIdleRight from "../assets/bearBoyIdleRight.png"
// import bearBoyIdleLeft from "../assets/bearBoyIdleLeft.png"
// import bearBoyRunRight from "../assets/bearBoyRunRight.png"
// import bearBoyRunLeft from "../assets/bearBoyRunLeft.png"
import bearBoy from "../assets/bearBoySpriteSheetUpdated.png"


const platform = new Image();
platform.src = "../snowbrawl/src/assets/newPlatform.png"

class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.keys = [];
        this.char = {
            x: 480,
            y: 250,
            width: 116,
            height: 116,
            spriteSheetX: 0,
            spriteSheetY: 0,
            speed: 10,
            moving: false
            // lives: 3
        };

        this.spriteSheet = new Image();
        this.spriteSheet.src = bearBoy;
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
        if (this.keys["a"] && this.char.x > 160){
            if (this.char.spriteSheetY >= 17) this.char.spriteSheetY--
            else this.char.spriteSheetY = 17;
     
            this.char.x -= this.char.speed;
            this.char.moving = true;
        }
        if (this.keys["d"] && this.char.x < 690){
            if (this.char.spriteSheetY <= 10) this.char.spriteSheetY++
            else this.char.spriteSheetY = 10;
        
            this.char.x += this.char.speed;
            this.char.moving = true;
        }
        if (this.keys[" "]){
            this.char.y -= this.char.speed;
            this.char.moving = true;
        }
        if (this.keys["s"] && this.char.spriteSheetY < 14){
            this.char.spriteSheetY = 13;
            this.char.moving = true;
            this.char.y = 255;
        }
        if (this.keys["s"] && this.char.spriteSheetY > 13){
            this.char.spriteSheetY = 14;
            this.char.moving = true;
            this.char.y = 255;
        }
       
    }

    idleAnimationLogic(){
        if (this.char.spriteSheetY < 14 && this.char.moving === false){
            if (this.char.spriteSheetY < 8) this.char.spriteSheetY++
            else this.char.spriteSheetY = 0;
        }
        if (this.char.spriteSheetY > 13 && this.char.moving === false){
            if (this.char.spriteSheetY < 27) this.char.spriteSheetY++;
            else this.char.spriteSheetY = 19;
        }
    }

    animate(){
        this.ctx.clearRect(0, 0, 960, 480);
        this.ctx.drawImage(platform, 200, 85)
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
    }
}

export default Player