export default class StatementPrinter {
    static printStatement(account) {
        const transactionList = account.getTransactionList();
        const headings = "date       || credit  || debit  || balance"
        let statement = headings;
        for (let i = transactionList.length - 1; i >= 0; i--) {
            statement += "\n";
            statement += transactionList[i].prepareTransactionDetails();
        }
        return statement;
    }
}