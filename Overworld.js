class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      //Clearing the canvas for new images
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //Draw map
      this.map.drawMap(this.ctx);

      //Update objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.sprite.update();
      })

      //Drawing objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.sprite.draw(this.ctx);
      });
      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.battlefield);
    this.canvasListener = new CanvasListener();
    this.canvasListener.init();
    this.startGameLoop();
  }
}
