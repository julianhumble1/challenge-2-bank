import Credit from "../src/Credit.js";

describe("Credit Class Tests: ", () => {
    let testCredit;
    let testDate = new Date(2012, 0, 10);
    let testAmount = 1000;
    let testResultingBalance = 1000;
    let preparedDetails;

    afterEach(() => {
        testCredit = undefined;
        preparedDetails = undefined;
    });

    describe("User Story 4: ", () => {
        it("Should create a Credit with the date property passed into it", () => {
            // Arrange
            // Act
            testCredit = new Credit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testCredit.getDate()).toBe(testDate);
        });

        it("Should create a Credit with the amount property passed into it", () => {
            // Arrange
            // Act
            testCredit = new Credit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testCredit.getAmount()).toBe(testAmount);
        });

        it("Should create a Credit with the resultingBalance property passed into it", () => {
            // Arrange
            // Act
            testCredit = new Credit(testDate, testAmount, testResultingBalance);
            // Assert
            expect(testCredit.getResultingBalance()).toBe(testResultingBalance);
        })
    });

    describe("User Story 6: ", () => {
        it("Should return a string in the correct format when prepareTransactionDetails is called", () => {
            // Arrange
            testCredit = new Credit(testDate, testAmount, testResultingBalance);
            let expected = "10/01/2012 || 1000.00 ||        || 1000.00"
            // Act
            preparedDetails = testCredit.prepareTransactionDetails();
            // Assert
            expect(preparedDetails).toBe(expected);
        })
    })
})