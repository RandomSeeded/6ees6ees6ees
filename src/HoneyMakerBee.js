import Bee from './Bee'

class HoneyMakerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.makeHoney = () => {
      this.honeyPot++;
    }
    this.giveHoney = () => {
      if (this.honeyPot > 0) {
        this.honeyPot--;
      }
    }
  }
};

export default HoneyMakerBee;
