export default class Account {
    #balance = 0;

    getBalance() {
        return this.#balance;
    };

    addMoney(amount) {
        this.#balance += amount;
    }
}