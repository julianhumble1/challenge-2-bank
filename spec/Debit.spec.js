import Debit from "../src/Debit.js"

describe("Debit Class Tests: ", () => {
    let testDebit
    let testDate = new Date(2012, 0, 14);
    let testAmount = 500;
    let testResultingBalance = 2500;
    let preparedDetails;

    afterEach(() => {
        testDebit = undefined;
        preparedDetails = undefined;
    })

    describe("User Story 5: ", () => {
        it("Should create a debit with the date property passed into it", () => {
            // Arrange
            // Act
            testDebit = new Debit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testDebit.getDate()).toBe(testDate);
        });

        it("Should create a debit with the amount property passed into it", () => {
            // Arrange
            // Act
            testDebit = new Debit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testDebit.getAmount()).toBe(testAmount);
        });

        it("Should create a debit with the resultingBalance property passed into it", () => {
            // Arrange
            // Act
            testDebit = new Debit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testDebit.getResultingBalance()).toBe(testResultingBalance);
        })
    })
    describe("User Story 6: ", () => {
        it("Should return a string in the correct format when prepareTransactionDetails is called", () => {
            // Arrange
            testDebit = new Debit(testDate, testAmount, testResultingBalance);
            let expected = "14/01/2012 ||         || 500.00 || 2500.00"
            // Act
            preparedDetails = testDebit.prepareTransactionDetails();
            // Assert
            expect(preparedDetails).toBe(expected);
        })
    })
});