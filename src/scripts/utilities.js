class Utilities {
    constructor(){};
    detectCollision(player, snowball){ 
        if (player.char.x + 50 > (snowball.ball.x + 50) + snowball.ball.width - 50 ||
        (player.char.x + 50) + player.char.width - 50 < snowball.ball.x + 50||
        player.char.y + 50 > (snowball.ball.y + 50) + snowball.ball.height - 50 ||
        (player.char.y + 50) + player.char.height - 50 < snowball.ball.y + 50){
                return false;
            } else {
                return true;
            }
    }
}

// (player.char.x + 5 > (snowball.ball.x + 5) + snowball.ball.width - 5 ||
//             (player.char.x + 5) + player.char.width - 5 < snowball.ball.x + 5||
//             player.char.y + 5 > (snowball.ball.y + 5) + snowball.ball.height - 5 ||
//             (player.char.y + 5) + player.char.height - 5 < snowball.ball.y + 5)

export default Utilities
