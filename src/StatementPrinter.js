export default class StatementPrinter {
    static printStatement(Account) {
        const transactionList = Account.getTransactionList();
        const headings = "date       || credit  || debit  || balance"
        let statement = headings;
        for (let i = transactionList.length - 1; i >= 0; i--) {
            statement += "\n";
            statement += transactionList[i].prepareTransactionDetails();
        }
        return statement;
    }
}