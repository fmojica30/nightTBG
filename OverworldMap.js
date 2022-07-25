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
        //Create a utility by character for moving it up or down b/c not all characters are 16x16
        y: utils.withGrid(4) + 4
      }),
    }
  },
}