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

    prepareDateForPrint(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (`${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year} `);
    };

    prepareAmountForPrint() {
        return ` ${this.getAmount().toFixed(2)} `
    }

    prepareBalanceForPrint() {
        return ` ${this.getResultingBalance().toFixed(2)}`;
    }
}