// Write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        const fare = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute);
        return fare.toFixed(2); // Keep the result rounded to two decimal places
    }
}

const uberCalculator = new UberPriceCalculator(2.5, 1.5, 0.2);

const distance = 10; // in miles
const time = 15; // in minutes

const totalPrice = uberCalculator.calculatePrice(distance, time);

console.log(`Uber Price: $${totalPrice}`);
