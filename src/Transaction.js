export default class Transaction {
    #date;
    #amount;
    #resultingBalance;

    constructor(date, amount, resultingBalance) {
        this.#date = date;
        this.#amount = amount;
        this.#resultingBalance = resultingBalance;
    }
    
    getDate() {
        return this.#date;
    };

    getAmount() {
        return this.#amount;
    };

    getResultingBalance() {
        return this.#resultingBalance;
    }
}