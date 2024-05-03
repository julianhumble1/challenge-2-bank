import TransactionCreator from "../src/TransactionCreator.js";
import Credit from "../src/Credit.js"

describe("TransactionCreator class tests: ", () => {
    let testCredit;
    let testDate = new Date(2000, 0, 0);
    let testAmount = 10;
    let testResultingBalance = 10;
    afterEach(() => {
        testCredit = undefined;
        testDate = undefined;
        testAmount = undefined;
        testResultingBalance = undefined;
    })
    describe("User Story 4: ", () => {
        it("should create an instance of type Credit when createCredit() is called", () => {
            // Arrange
            // Act
            testCredit = TransactionCreator.createCredit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testCredit).toBeInstanceOf(Credit);

        });

    })
})