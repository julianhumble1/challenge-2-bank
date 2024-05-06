import Transaction from "./Transaction.js";

export default class Credit extends Transaction {
    prepareTransactionDetails() {
        const dateForPrint = this.prepareDateForPrint(this.getDate());
        const amountForPrint = this.prepareAmountForPrint(this.getAmount());
        const balanceForPrint = this.prepareBalanceForPrint(this.getResultingBalance());
        return `${dateForPrint}||${amountForPrint}||        ||${balanceForPrint}`;
    };

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