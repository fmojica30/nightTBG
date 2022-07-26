class GameObject {
  constructor(config) {
    this.id = null;

    //To identify for player one or two
    this.playerId = null;
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      imageSrc: config.imageSrc || "assets/characters/heros/knightM/knightM.png",
      adjustX: config.adjustX || 0,
      adjustY: config.adjustY || 0,
      animateNow: config.animateNow || 1
    });

  }

  
}