import StatementPrinter from "../src/StatementPrinter.js";
import Account from "../src/Account.js";

describe("StatementPrinter class tests: ", () => {
    describe("User Story 6: ", () => {
        it("Should produce the correct console output when printStatement() is called", () => {
            // Arrange
            const testAccount = new Account();
            testAccount.addMoney(1000, new Date(2012, 0, 10));
            testAccount.addMoney(2000, new Date(2012, 0, 13));
            testAccount.withdrawMoney(500, new Date(2012, 0, 14));
            let expected = "date       || credit  || debit  || balance" + "\n14/01/2012 ||         || 500.00 || 2500.00" + "\n13/01/2012 || 2000.00 ||        || 3000.00" + "\n10/01/2012 || 1000.00 ||        || 1000.00"

            // Act
            let statement = StatementPrinter.printStatement(testAccount);
            // Assert
            expect(statement).toBe(expected);
        })
    })
})