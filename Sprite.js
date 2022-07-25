class Sprite {
  constructor(config) {
    //Might need to create multiple images for animations 
    this.image = new Image();
    this.image.src = config.imageSrc;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x;
    const y = this.gameObject.y;
    this.isLoaded && ctx.drawImage(this.image, x, y);
  }
}
