class CanvasListener {
  constructor(config) {
    this.selectedSpot = null;
    this.map = config.map;
  }

  init() {
    var canvas = document.getElementById("gameContainer");
    canvas.addEventListener("click", function (event) {
      const rect = canvas.getBoundingClientRect();
      var xVal = event.clientX - rect.left;
      var yVal = event.clientY - rect.top;
      console.log(xVal, yVal);

      if (
        xVal > utils.withGridScaled(5) &&
        xVal < utils.withGridScaled(6) &&
        yVal > utils.withGridScaled(5) &&
        yVal < utils.withGridScaled(6)
      ) {
        console.log("Party Leader");
      }
    });
  }

  get selectedSpot() {
    return this.selectedSpot;
  }

  set selectedSpot(arg) {
    this.selectedSport = arg;
  }
}
