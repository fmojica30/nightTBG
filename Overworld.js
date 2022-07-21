class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      //Draw map
      this.map.drawMap(this.ctx);
      requestAnimationFrame(() => {
        step();
      });
    }
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.battlefield);
    this.startGameLoop();
  }
}
