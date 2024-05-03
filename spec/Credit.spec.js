import Credit from "../src/Credit.js";

describe("Credit Class Tests: ", () => {
    let testCredit;
    let testDate = new Date(2000, 0, 0);
    let testAmount = 10;
    let testResultingBalance = 10;

    afterEach(() => {
        testCredit = undefined;
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
    })
})