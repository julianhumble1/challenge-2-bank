import Credit from "./Credit.js";
import Debit from "./Debit.js"

export default class TransactionCreator {
    
    static createCredit(date, amount, resultingBalance) {
        return new Credit(date, amount, resultingBalance);
    };

    static createDebit(date, amount, resultingBalance) {
        return new Debit(date, amount, resultingBalance);
    }
}