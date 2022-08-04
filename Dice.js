class Dice extends GameObject {
    constructor(config){
        super(config);
        this.currentNumber = 1;
    }

    rollDie (){
        this.currentNumber = Math.floor(Math.random()*6)+1;
    }

    currentValue (){
        switch(1){
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
        }
    }
}