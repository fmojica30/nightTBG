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
      imageSrc: config.imageSrc || "assets/characters/heros/knightM/knight_m_idle_anim_f0.png"
    });
  }
}