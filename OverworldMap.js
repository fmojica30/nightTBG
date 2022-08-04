class OverworldMap {
  constructor(config) {
    this.mapImg = new Image();
    this.mapImg.src = config.mapSrc;
    this.gameObjects = config.gameObjects;
    this.player1boardLocations = {
      partyLeader: {
        xMin: utils.withGridScaled(5),
        xMax: utils.withGridScaled(6),
        yMin: utils.withGridScaled(5),
        yMax: utils.withGridScaled(6)
      }

    }
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
        x: utils.withGrid(7),
        y: utils.withGrid(2),
        adjustX: -8,
        adjustY: 0,
        imageSrc: "assets/characters/heros/bandit/banditIdle.png"
      }),
      hero2: new GameObject({
        x: utils.withGrid(7),
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
    }
  },
}