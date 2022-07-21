class OverworldMap {
  constructor(config) {
    this.mapImg = new Image();
    this.mapImg.src = config.mapSrc;
  }

  drawMap(ctx) {
    ctx.drawImage(this.mapImg, 0, 0);
  }
}

window.OverworldMaps = {
  battlefield: {
    mapSrc: "/assets/maps/Battlefield.png",
  },
}