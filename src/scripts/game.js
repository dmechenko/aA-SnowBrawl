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
        this.startAnimating(15);
        this.movementController();
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
        requestAnimationFrame(this.animate.bind(this));
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            this.ctx.clearRect(0, 0, 980, 460);
            this.ctx.fillText('SCORE: ' + this.score, 410, 40)
            this.ctx.fillStyle = "#FFFFFF";
            this.player.animate();
            this.createSnowball();
            // this.snowballArray.forEach(snowball => {
            //     snowball.animate();
            // })
            if (this.score % 2 === 0){
                this.snowballArray.forEach(snowball => {
                    snowball.ball.speed
                })
            }
            this.snowball.animate();
            this.player.idleAnimationLogic();
            this.spawnSnowball++
        }
    }

    createSnowball(){
        if (this.spawnSnowball % 50 === 0){
            this.snowballArray.push(new Snowball(this.ctx));
            console.log(this.snowballArray.length);
        }
        for (let i = 0; i < this.snowballArray.length; i++) {
            this.snowballArray[i].animate();
            if (this.snowballArray[i].ball.x > 960){
                this.snowballArray.splice(i, 1);
                this.score++;
            }
            // if (this.utilities.detectCollision(this.player, this.snowballArray[i])){
            //     alert('ya dead kid');
            // }
        }
    }
}

export default SnowBrawl