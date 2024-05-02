import Account from "../src/Account.js";

describe("Account Class Tests: ", () => {
    let testAccount;

    beforeEach(() => {
        testAccount = new Account();
    });
    describe("User Story 1: ", () => {

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
    
        it("Should not change the balance when null is added", () => {
            // Arrange
            // Act
            testAccount.addMoney(null);
            // Assert
            expect(testAccount.getBalance()).toBe(0);
        });

        it("Should round a number of more than 2 decimal places down to 2 dp before adding it to the balance", () => {
            // Arrange
            // Act
            testAccount.addMoney(10.111);
            // Assert
            expect(testAccount.getBalance()).toBe(10.11);
        });
    });

    describe("User Story 2: ", () => {
        it("Should have a balance that decreases by exactly the amount withdrawn when the starting balance is positive", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.withdrawMoney(5);
            // Assert
            expect(testAccount.getBalance()).toBe(5);
        });

        it("Should have a balance that stays the same when 0 is withdrawn", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.withdrawMoney(0);
            // Assert
            expect(testAccount.getBalance()).toBe(10);
        });

        it("Should have a balance that stays the same when a negative number is withdrawn", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.withdrawMoney(-10);
            // Assert
            expect(testAccount.getBalance()).toBe(10);
        });
    });
});