class Dice extends GameObject {
    constructor(config){
        super(config);
        this.currentNumber = 1;
    }

    rollDie (){
        this.currentNumber = Math.floor(Math.random()*6)+1;
    }

}