class Die {
	constructor(config) {
		this.id = 'die';

		this.currentNumber = 6;
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.sprite = new Sprite({
			gameObject: this,
			imageSrc: config.imageSrc || 'assets/dice/die-six.png',
			adjustX: config.adjustX || 0,
			adjustY: config.adjustY || 0,
			animateNow: config.animateNow || 1,
			currentAnimation: config.currentAnimation || 'die',
		});
	}

	/* Updates the face value on screen 
    Need to fix face value method as it parses through 'dieSheet'
    */
	updateFaceValue() {
		switch (this.currentNumber) {
			case 1:
				this.sprite.imageSrc = 'assets/dice/die-six.png';
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
		}
	}

	rollDie() {
		this.currentNumber = Math.floor(Math.random() * 6) + 1;
		updateFaceValue();
	}
}
