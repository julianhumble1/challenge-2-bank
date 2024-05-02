import Account from "../src/Account.js";

describe("Account Class Tests: ", () => {
    describe("User Story 1: ", () => {
        let testAccount;

        beforeEach(() => {
            testAccount = new Account();
        });

        it("Should have a balance initialised to 0", () => {
            // Arrange
            // Act
            // Assert
            expect(testAccount.getBalance()).toBe(0);
        });

        it("Should have a balance equal to the amount deposited when the initial balance is 0", () => {
            // Arrange
            // Act
            testAccount.addMoney(10);
            // Assert
            expect(testAccount.getBalance()).toBe(10);
        });

        it("Should have a balance increase by the amount deposited when the initial balance is positive", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.addMoney(20);
            // Assert
            expect(testAccount.getBalance()).toBe(30);
        });

        it("Should have a balance that stays the same when 0 is added", () => {
            // Arrange
            // Act
            testAccount.addMoney(0);
            // Assert
            expect(testAccount.getBalance()).toBe(0);
        });

        it("Should have a balance that stays the same when a negative number is added", () => {
            // Arrange
            // Act
            testAccount.addMoney(-10);
            // Assert
            expect(testAccount.getBalance()).toBe(0);
        });
    
    })
});