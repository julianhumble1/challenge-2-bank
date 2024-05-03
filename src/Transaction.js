export default class Transaction {
    #date;
    #amount;
    
    constructor(date, amount) {
        this.#date = date;
        this.#amount = amount;
    }
    
    getDate() {
        return this.#date;
    };

    getAmount() {
        return this.#amount;
    }
}