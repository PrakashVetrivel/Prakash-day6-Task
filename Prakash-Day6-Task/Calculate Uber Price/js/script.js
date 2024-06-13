class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        return this.baseFare + (this.costPerKm * distance) + (this.costPerMinute * time);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new UberPriceCalculator(2.5, 1.2, 0.3); // Example rates

    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const distance = parseFloat(document.getElementById('distance').value);
        const time = parseFloat(document.getElementById('time').value);

        if (isNaN(distance) || isNaN(time)) {
            resultDiv.textContent = 'Please enter valid numbers for distance and time.';
            return;
        }

        const price = calculator.calculatePrice(distance, time);
        resultDiv.textContent = `Estimated Price: Rs.${price.toFixed(2)}`;
    });
});
