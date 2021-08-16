class Utilities {
    constructor(){};
    detectCollision(player, snowball){ 

        if (player.char.spriteSheetY < 14){
            if (player.char.x + 50 > (snowball.ball.x + 50) + snowball.ball.width - 50 ||
            (player.char.x + 50) + player.char.width - 50 < snowball.ball.x + 50||
            player.char.y + 50 > (snowball.ball.y + 50) + snowball.ball.height - 50 ||
            (player.char.y + 50) + player.char.height - 50 < snowball.ball.y + 50){
                return false;
            } else {
                return true;
            }
        } else {
            if (player.char.x + 50 > (snowball.ball.x + 15) + snowball.ball.width - 50 ||
            (player.char.x + 50) + player.char.width - 50 < snowball.ball.x + 50||
            player.char.y + 50 > (snowball.ball.y + 50) + snowball.ball.height - 50 ||
            (player.char.y + 50) + player.char.height - 50 < snowball.ball.y + 50){
                return false;
            } else {
                return true;
            }
        }
    }
}

export default Utilities
