// import bearBoy from "src/assets/bearBoySpriteSheetUpdated.png"

const platform = new Image();
platform.src = 'src/assets/newPlatform.png';

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.keys = [];
    this.char = {
      x: 480,
      y: 245,
      width: 116,
      height: 116,
      spriteSheetX: 0,
      spriteSheetY: 0,
      speed: 5,
      moving: false,
      jumping: false,
      frameCount: 0,
      jumpStrength: 50,
      gravity: 2.5,
      // lives: 3
    };

    this.spriteSheet = new Image();
    this.spriteSheet.src = 'src/assets/bearBoySpriteSheetUpdated.png'; //bearBoy;
  }

  drawBearBoy(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  onKeydown(e) {
    this.keys[e.key] = true;
    this.char.moving = true;
    // console.log(this.keys);
  }

  onKeyup(e) {
    delete this.keys[e.key];
    this.char.moving = false;
  }

  move() {
    this.char.moving = false;
    if (this.keys['a'] && this.char.x > 160) {
      if (this.char.frameCount < 10) {
        this.char.frameCount++;
      } else if (this.char.spriteSheetY >= 17) {
        this.char.spriteSheetY--;
        this.char.frameCount = 0;
      } else {
        this.char.spriteSheetY = 17;
        this.char.frameCount = 0;
      }

      this.char.x -= this.char.speed;
      this.char.moving = true;
      //   this.char.jumping = false;
    }
    if (this.keys['d'] && this.char.x < 690) {
      if (this.char.frameCount < 10) {
        this.char.frameCount++;
      } else if (this.char.spriteSheetY <= 10) {
        this.char.spriteSheetY++;
        this.char.frameCount = 0;
      } else {
        this.char.spriteSheetY = 10;
        this.char.frameCount = 0;
      }
      this.char.x += this.char.speed;
      this.char.moving = true;
      //   this.char.jumping = false;
    }

    if (this.keys[' '] && !this.char.jumping) {
      let jump = new Audio('./src/assets/jump2.wav');
      jump.volume = 0.2;
      jump.play();
      this.char.y -= this.char.jumpStrength;
      this.char.jumping = true;
      this.char.moving = true;
      delete this.keys[' '];
    }
    if (!this.keys[' '] && this.char.y < 245) {
      this.char.y += this.char.gravity;
      this.char.moving = true;
      this.char.jumping = true;
    }

    if (this.keys['s'] && this.char.spriteSheetY < 14) {
      this.char.spriteSheetY = 13;
      this.char.moving = true;
      this.char.y = 252;
    }
    if (this.keys['s'] && this.char.spriteSheetY > 13) {
      this.char.spriteSheetY = 14;
      this.char.moving = true;
      this.char.y = 252;
    }
  }

  idleAnimationLogic() {
    if (this.char.spriteSheetY < 14 && this.char.moving === false) {
      if (this.char.frameCount < 10) {
        this.char.frameCount++;
      } else if (this.char.spriteSheetY < 8) {
        this.char.spriteSheetY++;
        this.char.frameCount = 0;
      } else {
        this.char.spriteSheetY = 0;
        this.char.frameCount = 0;
      }
      this.char.y = 245;
    }
    if (this.char.spriteSheetY > 13 && this.char.moving === false) {
      if (this.char.frameCount < 10) {
        this.char.frameCount++;
      } else if (this.char.spriteSheetY < 27) {
        this.char.spriteSheetY++;
        this.char.frameCount = 0;
      } else {
        this.char.spriteSheetY = 19;
        this.char.frameCount = 0;
      }
      this.char.y = 245;
    }
  }

  animate() {
    this.char.y === 245
      ? (this.char.jumping = false)
      : (this.char.jumping = true);
    this.ctx.drawImage(platform, 200, 80);
    this.drawBearBoy(
      this.spriteSheet,
      this.char.spriteSheetY * this.char.width,
      this.char.spriteSheetX * this.char.width,
      this.char.width,
      this.char.height,
      this.char.x,
      this.char.y,
      this.char.width,
      this.char.height
    );
    this.move();
  }
}

export default Player;
