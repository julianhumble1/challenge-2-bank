import TransactionCreator from "../src/TransactionCreator.js";
import Credit from "../src/Credit.js"
import Debit from "../src/Debit.js"

describe("TransactionCreator class tests: ", () => {
    let testCredit;
    let testDebit;
    let testDate = new Date(2000, 0, 0);
    let testAmount = 10;
    let testResultingBalance = 10;

    afterEach(() => {
        testCredit = undefined;
        testDebit = undefined;
    });
    
    describe("User Story 4: ", () => {
        it("should create an instance of type Credit when createCredit() is called", () => {
            // Arrange
            // Act
            testCredit = TransactionCreator.createCredit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testCredit).toBeInstanceOf(Credit);

        });

    });
    describe("User Story 5: ", () => {
        it("should create an instance of type Debit when createDebit is called", () => {
            // Assert
            // Act
            testDebit = TransactionCreator.createDebit(testDate, testAmount, testResultingBalance);
            // Arrange
            expect(testDebit).toBeInstanceOf(Debit);
        })
    });
});