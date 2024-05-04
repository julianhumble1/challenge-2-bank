import TransactionCreator from "./TransactionCreator.js";

export default class Account {
    #balance = 0;
    #transactionList = [];

    getBalance() {
        return this.#balance;
    };

    getTransactionList() {
        return this.#transactionList;
    }

    addMoney(amount, date = new Date(2000, 0 , 0)) {
        if (amount > 0) {
            const roundedAmount = parseFloat(amount.toFixed(2))
            this.#balance += roundedAmount;
            const newTransaction = TransactionCreator.createCredit(date, amount, this.#balance);
            this.addTransaction(newTransaction);
        }
    };

    withdrawMoney(amount) {
        if (amount > 0 && (this.#balance - amount >=0)) {
            const roundedAmount = parseFloat(amount.toFixed(2))
            this.#balance -= roundedAmount;
        }
    };

    addTransaction(transaction) {
        this.#transactionList.push(transaction);
    }

}