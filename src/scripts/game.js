import Player from "./player";
import Snowball from "./snowball";
import Utilities from "./utilities";

class SnowBrawl {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(this.ctx);
        this.snowball = new Snowball(this.ctx)
        this.fpsInterval = "";
        this.then = "";
        this.startTime = "";
        this.now = "";
        this.then = "";
        this.elapsed = "";
        this.startAnimating(30);
        this.movementController();
    }
//event handler

    movementController(){
        window.addEventListener("keydown", this.inputKeydown.bind(this))
        window.addEventListener("keyup", this.inputKeyup.bind(this))
    }

    inputKeydown(e){
        this.player.onKeydown(e);
        console.log(this.fpsInterval);
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
            this.player.animate();
            this.player.idleAnimationLogic();
        }
    }
}

export default SnowBrawl