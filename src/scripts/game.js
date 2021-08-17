import Player from "./player";
import Snowball from "./snowball";
import Utilities from "./utilities";

class SnowBrawl {
    constructor(ctx){
        this.ctx = ctx;
        this.ctx.font = 'small-caps bold 36px Calibri'
        this.snowballArray = [];
        this.player = new Player(this.ctx);
        this.snowball = new Snowball(this.ctx)
        this.utilities = new Utilities();
        this.fpsInterval = "";
        this.then = "";
        this.startTime = "";
        this.now = "";
        this.then = "";
        this.elapsed = "";
        this.spawnSnowball = 0;
        this.score = 0;
        this.difficulty = 5;
        this.gameOver = false;
        this.movementController();
        this.startAnimating(60);
    }

    movementController(){
        window.addEventListener("keydown", this.inputKeydown.bind(this))
        window.addEventListener("keyup", this.inputKeyup.bind(this))
    }

    inputKeydown(e){
        this.player.onKeydown(e);
    }

    inputKeyup(e){
        this.player.onKeyup(e);
    }

    startAnimating(fps){
        this.fpsInterval = 1000/fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    }

    animate(){
        if (this.gameOver){
            this.ctx.fillStyle = "#FF0000";
            this.ctx.font = 'small-caps bold 72px Calibri'
            this.ctx.fillText('get fucked kid', 300, 150)
            return;
        }
        requestAnimationFrame(this.animate.bind(this));
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            this.ctx.clearRect(0, 0, 980, 460);
            this.ctx.fillStyle = "#FFFFFF";
            this.ctx.fillText('SCORE: ' + this.score, 410, 40)
            this.player.animate();
            this.createSnowball();
            this.player.idleAnimationLogic();
            this.spawnSnowball++
        }
    }

    createSnowball(){
        if (this.spawnSnowball % 100 === 0){
            this.difficulty++;
            this.snowballArray.push(new Snowball(this.ctx, this.difficulty + 0.25));
            console.log(this.snowballArray.length);
        }
        for (let i = 0; i < this.snowballArray.length; i++) {
            this.snowballArray[i].animate();
            if (this.utilities.detectCollision(this.player, this.snowballArray[i])){
                this.gameOver = true;
            }
            if (this.snowballArray[i].ball.x > 960 && this.snowballArray[i].initialX === 0){
                this.snowballArray.splice(i, 1);
                this.score++;
            } else if (this.snowballArray[i].ball.x < 0 && this.snowballArray[i].initialX === 960){
                this.snowballArray.splice(i, 1);
                this.score++;
            }
        }
    }
}

export default SnowBrawl