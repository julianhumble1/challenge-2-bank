export default class Account {
    #balance = 0;

    getBalance() {
        return this.#balance;
    };

    addMoney(amount) {
        if (amount > 0) {
            const roundedAmount = parseFloat(amount.toFixed(2))
            this.#balance += roundedAmount;
        }
    };

    withdrawMoney(amount) {
        if (amount > 0) {
            const roundedAmount = parseFloat(amount.toFixed(2))
            this.#balance -= roundedAmount;
        }
    }
}