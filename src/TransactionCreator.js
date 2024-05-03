import Credit from "./Credit.js";

export default class TransactionCreator {
    
    static createCredit(date, amount, resultingBalance) {
        return new Credit(date, amount, resultingBalance);
    }
}