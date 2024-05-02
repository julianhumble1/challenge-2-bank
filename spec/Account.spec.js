import Account from "../src/Account.js";

describe("Account Class Tests", () => {
    it("Should have a balance initialised to 0", () => {
        // Arrange

        // Act
        let testAccount = new Account();
        // Assert
        expect(testAccount.getBalance()).toBe(0);
    })
});