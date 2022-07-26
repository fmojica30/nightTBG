class Sprite {
  constructor(config) {
    //Might need to create multiple images for animations 
    this.image = new Image();
    this.image.src = config.imageSrc;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    this.gameObject = config.gameObject;

    this.adjustX = config.adjustX || 0;
    //If sprite is taller than 16px this moves it down to match the tile its supposed to be on
    this.adjustY = config.adjustY || 0;

    //Sprite sheet animation setup
    this.animations = config.animation || {
      "idle": [[0,0], [1,0], [2,0], [3,0]]
    }

    this.currentAnimation = config.currentAnimation || "idle";
    this.currentAnimationFrame = 0;
    this.animationFrameLimit = config.animationFrameLimit || 3;
    this.animationFrameProgress = this.animationFrameLimit;

    //Slow down animation
    //Todo: Make an animation counter so all animation happen at different times
    /*
      ex:
      this.animateCounter = 0;
      this.animateNow = 3;
  
      update() {
        if (this.animateCounter === this.animateNow) {
          this.updateAnimationProgress();
          this.animateCounter = 0;
        } else {
          this.animateCounter += 1;
        }
      }
    */
    this.animateNow = true;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  } 

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    //Downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    //Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  update() {
    if (this.animateNow) {
      this.updateAnimationProgress();
      this.animateNow = false;
    } else {
      this.animateNow = true;
    }
    
  }

  draw(ctx) {
    //Customizations work for 32x32 sprite sheet
    const x = this.gameObject.x - this.adjustX;
    const y = this.gameObject.y + this.adjustY;

    const [frameX, frameY] = this.frame;
    this.isLoaded && ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32 );
  }
}
