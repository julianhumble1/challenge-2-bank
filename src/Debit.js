import Transaction from "./Transaction.js";

export default class Debit extends Transaction {
    prepareTransactionDetails() {
        const dateForPrint = this.prepareDateForPrint(this.getDate());
        const amountForPrint = this.prepareAmountForPrint(this.getAmount());
        const balanceForPrint = this.prepareBalanceForPrint(this.getResultingBalance());
        return `${dateForPrint}||         ||${amountForPrint}||${balanceForPrint}`;
    }
}