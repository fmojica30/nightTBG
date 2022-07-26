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
        adjustX: 8,
        adjustY: 4
      }),
    }
  },
}