class CanvasListener {
  constructor() {
    this.selectedSpot = [];
  }

  init() {
    var canvas = document.getElementById("gameContainer");
    canvas.addEventListener("click", (event) => {
      const rect = canvas.getBoundingClientRect();
      var xVal = event.clientX - rect.left;
      var yVal = event.clientY - rect.top;

      if (
        xVal > utils.withGridScaled(5) &&
        xVal < utils.withGridScaled(6) &&
        yVal > utils.withGridScaled(5) &&
        yVal < utils.withGridScaled(6)
      ) {
        this.selectedSpot = "partyLeader";
      }
    });
  }

  get spot() {
    return this.selectedSpot;
  }
}
