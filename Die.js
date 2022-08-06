class Die {
	constructor(config) {
		this.id = 'die';

		this.currentNumber = config.currentNumber || 1;
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.sprite = new Sprite({
			gameObject: this,
			imageSrc: config.imageSrc || "assets/dice/dieSheet.png",
			adjustX: config.adjustX || 0,
			adjustY: config.adjustY || 0,
			currentAnimation: 'die',
			currentAnimationFrame: this.currentNumber -1,
			animateNow: false,
		});
	}


	/**
	 * updateFaceValue updates the @currentAnimationFrame in the
	 * created sprite object to reflect the current value of die
	 */
	updateFaceValue() {
		switch (this.currentNumber) {
			case 1:
				this.sprite.currentAnimationFrame = 0;
				break;
			case 2:
				this.sprite.currentAnimationFrame = 1;
				break;
			case 3:
				this.sprite.currentAnimationFrame = 2;
				break;
			case 4:
				this.sprite.currentAnimationFrame = 3;
				break;
			case 5:
				this.sprite.currentAnimationFrame = 4;
				break;
			case 6:
				this.sprite.currentAnimationFrame = 5;
				break;
		}
	}

/**
 * rollDie changes the @currentNumber to random number
 * and then updates the value printed on screen by calling
 * @updateFaceValue
 */
	rollDie() {
		animateNow = 1;
		this.currentNumber = Math.floor(Math.random() * 6) + 1;
		animateNow = false;
		updateFaceValue();
	}
}
