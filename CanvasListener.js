class CanvasListener {
  constructor() {
    this.selectedSpot = null;
  }

  /**
   * Listens for a click in any of the spots where game objects are located 
   */
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
        this.selectedSpot = "PL";
      }
      else if (
        xVal > utils.withGridScaled(7) &&
        xVal < utils.withGridScaled(8) &&
        yVal > utils.withGridScaled(3) &&
        yVal < utils.withGridScaled(4)
      ) {
        this.selectedSpot = "PS1";
      }
      else if (
        xVal > utils.withGridScaled(7) &&
        xVal < utils.withGridScaled(8) &&
        yVal > utils.withGridScaled(5) &&
        yVal < utils.withGridScaled(6)
      ) {
        this.selectedSpot = "PS2";
      }
      else if (
        xVal > utils.withGridScaled(7) &&
        xVal < utils.withGridScaled(8) &&
        yVal > utils.withGridScaled(7) &&
        yVal < utils.withGridScaled(8)
      ) {
        this.selectedSpot = "PS3";
      }
      else if (
        xVal > utils.withGridScaled(4) &&
        xVal < utils.withGridScaled(5) &&
        yVal > utils.withGridScaled(4) &&
        yVal < utils.withGridScaled(5)
      ) {
        this.selectedSpot = "S1";
      }
      else if (
        xVal > utils.withGridScaled(4) &&
        xVal < utils.withGridScaled(5) &&
        yVal > utils.withGridScaled(5) &&
        yVal < utils.withGridScaled(6)
      ) {
        this.selectedSpot = "S2";
      }
      else if (
        xVal > utils.withGridScaled(4) &&
        xVal < utils.withGridScaled(5) &&
        yVal > utils.withGridScaled(6) &&
        yVal < utils.withGridScaled(7)
      ) {
        this.selectedSpot = "S3";
      }
      else if (
        xVal > utils.withGridScaled(3) &&
        xVal < utils.withGridScaled(4) &&
        yVal > utils.withGridScaled(4) &&
        yVal < utils.withGridScaled(5)
      ) {
        this.selectedSpot = "M1";
      }
      else if (
        xVal > utils.withGridScaled(3) &&
        xVal < utils.withGridScaled(4) &&
        yVal > utils.withGridScaled(5) &&
        yVal < utils.withGridScaled(6)
      ) {
        this.selectedSpot = "M2";
      }
      else if (
        xVal > utils.withGridScaled(3) &&
        xVal < utils.withGridScaled(4) &&
        yVal > utils.withGridScaled(6) &&
        yVal < utils.withGridScaled(7)
      ) {
        this.selectedSpot = "M3";
      }
      else if (
        xVal > utils.withGridScaled(1) &&
        xVal < utils.withGridScaled(3) &&
        yVal > utils.withGridScaled(3) &&
        yVal < utils.withGridScaled(5)
      ) {
        this.selectedSpot = "B1";
      }
      else if (
        xVal > utils.withGridScaled(1) &&
        xVal < utils.withGridScaled(3) &&
        yVal > utils.withGridScaled(6) &&
        yVal < utils.withGridScaled(8)
      ) {
        this.selectedSpot = "B2";
      }

    });
  }

  get spot() {
    return this.selectedSpot;
  }
}
