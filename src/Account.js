export default class Account {
    #balance = 0;

    getBalance() {
        return this.#balance;
    };

    addMoney(amount) {
        (amount >= 0) && (this.#balance += amount);
    }
}