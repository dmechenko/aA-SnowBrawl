import Player from "./player";
import Snowball from "./snowball";
import Utilities from "./utilities";

class SnowBrawl {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(this.ctx);
        this.snowball = new Snowball(this.ctx)
        this.movementController();
    }
//event handler

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
}

export default SnowBrawl