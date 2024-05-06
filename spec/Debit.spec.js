import Debit from "../src/Debit.js"

describe("Debit Class Tests: ", () => {
    let testDebit
    let testDate = new Date(2000, 0, 0);
    let testAmount = 10;
    let testResultingBalance = 10;

    afterEach(() => {
        testDebit = undefined;
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
        })
    })
});