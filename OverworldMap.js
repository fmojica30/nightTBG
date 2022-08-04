class OverworldMap {
  constructor(config) {
    this.mapImg = new Image();
    this.mapImg.src = config.mapSrc;
    this.gameObjects = config.gameObjects;
  }

  drawMap(ctx) {
    ctx.drawImage(this.mapImg, 0, 0);
  }
}

window.OverworldMaps = {
  battlefield: {
    mapSrc: "/assets/maps/Battlefield.png",
    gameObjects: {
      partyLeader1: new GameObject({
        x: utils.withGrid(5),
        y: utils.withGrid(4),
        adjustX: -8,
        adjustY: 0,
        currentAnimation: "selected"
      }),
      hero1: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(2),
        adjustX: -8,
        adjustY: 0,
        imageSrc: "assets/characters/heros/bandit/banditIdle.png"
      }),
      hero2: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(4),
        adjustX: -8,
        adjustY: 0,
        imageSrc: "assets/characters/heros/bishop/bishop.png"
      }),
      demon: new GameObject({
        x: utils.withGrid(11),
        y: utils.withGrid(4),
        adjustX: -8,
        adjustY: 8,
        imageSrc: "assets/characters/monsters/bigDemon/bigDemonIdle.png",
        animateNow: 3
      }),
      die1: new Dice({
        x: utils.withGrid(7),
        y: utils.withGrid(.5),
      }),
      die2: new Dice({
        x: utils.withGrid(8.5),
        y: utils.withGrid(.5),
        imageSrc: "assets/dice/die-two.png",
      }),
    }
  },
}