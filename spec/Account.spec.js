import Account from "../src/Account.js";
// import TransactionCreator from "../src/TransactionCreator.js";

describe("Account Class Tests: ", () => {
    let testAccount;
    let testDate;
    let finalElementIndex
    let expected;

    beforeEach(() => {
        testAccount = new Account();
        expected = undefined;
        testDate = undefined;
        finalElementIndex = undefined;
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

        it("Should have a balance that stays the same when a null value is withdrawn", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.withdrawMoney(null);
            // Assert
            expect(testAccount.getBalance()).toBe(10);
        });

        it("Should round a number down to 2 decimal places before withdrawing it", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.withdrawMoney(5.555);
            // Assert
            expect(testAccount.getBalance()).toBe(4.45);
        });
    });

    describe("User Story 3: ", () => {

        it("Should have a balance that stays the same if I attempt to withdraw from an empty account", () => {
            // Arrange
            // Act 
            testAccount.withdrawMoney(10);
            // Assert
            expect(testAccount.getBalance()).toBe(0);
        });

        it("Should have a balance that stays the same if the initial balance is positive but we try to withdraw more than the balance", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act 
            testAccount.withdrawMoney(15);
            // Assert
            expect(testAccount.getBalance()).toBe(10);
        });
    });

    describe("User Story 4: ", () => {
        xit("Should call createCredit() when money is successfully added", () => {
            //! Unable to successfully write this test using spy objects
            // // Arrange
            // spyOn(TransactionCreator.prototype, "createCredit");
            // // Act 
            // testAccount.addMoney(10);
            
            // // Assert
            // expect(TransactionCreator.prototype.createCredit).toHaveBeenCalled();
        });

        it("Should call addTransaction() when money is successfully added", () => {
            // Arrange
            spyOn(testAccount, "addTransaction");
            // Act
            testDate = new Date(2024, 5, 4);
            testAccount.addMoney(10, testDate);
            // Assert
            expect(testAccount.addTransaction).toHaveBeenCalled();
        });

        it("Should increase the length of the account's transactionList by 1 when money is successfully added", () => {
            // Arrange
            expected = testAccount.getTransactionList().length + 1;
            // Act 
            testAccount.addMoney(10);
            // Assert
            expect(testAccount.getTransactionList().length).toBe(expected);
        })

        xit("Should make the TransactionList's final element be an object of type Credit when money is successfully added", () => {
            //! Unable to successfully write this test using spy objects

            // Arrange
            // let testCredit = { date: new Date(2000, 0, 0), amount: 10, resultingBalance: 10 };
            // let creditSpy = jasmine.createSpyObj("Credit", [], ["date", "amount", "resultingBalance"]);
            // creditSpy.date = new Date(2000, 0, 1);
            // creditSpy.amount = 10;
            // creditSpy.resultingBalance = 10;
            // // Act 
            // testAccount.addMoney(10);
            // // Assert
            // expect(testAccount.getTransactionList()[0]).toEqual(creditSpy);
            // // console.log(testCredit);
            // console.log(creditSpy.date);
            // console.log(creditSpy.amount);
            // console.log(creditSpy.resultingBalance);
            // console.log(testAccount.getTransactionList()[0].getDate());
            // console.log(testAccount.getTransactionList()[0].getAmount());
            // console.log(testAccount.getTransactionList()[0].getResultingBalance());

        });

        it("Should add an object with the expected date property to the end of the account's transactionList", () => {
            // Arrange
            testDate = new Date(2024, 5, 5);
            // Act 
            testAccount.addMoney(10, testDate);
            // Assert
            finalElementIndex = testAccount.getTransactionList().length - 1;
            expect(testAccount.getTransactionList()[finalElementIndex].getDate()).toBe(testDate);
        });

        it("Should add an object with the expected amount property to the end of the account's transactionList", () => {
            // Arrange
            // Act 
            testAccount.addMoney(10);
            // Assert
            finalElementIndex = testAccount.getTransactionList().length - 1;
            expect(testAccount.getTransactionList()[finalElementIndex].getAmount()).toBe(10);
            
        });

        it("Should add an object with the expected resultingBalance property to the end of the account's transactionList", () => {
            // Arrange
            // Act 
            testAccount.addMoney(10);
            // Assert
            finalElementIndex = testAccount.getTransactionList().length - 1;
            expect(testAccount.getTransactionList()[finalElementIndex].getResultingBalance()).toBe(10);
        });
    });
    describe("User Story 5: ", () => {
        xit("Should call createCredit() when money is successfully added", () => {
            //! Unable to successfully write this test using spy objects
        });

        it("Should call addTransaction() when money is successfully withdrawn", () => {
            // Arrange
            testAccount.addMoney(10);
            spyOn(testAccount, "addTransaction");
            // Act
            testDate = new Date(2024, 5, 4);
            testAccount.withdrawMoney(10, testDate);
            // Assert
            expect(testAccount.addTransaction).toHaveBeenCalled();
        });

        it("Should increase the length of the account's transactionList by 1 when money is successfully withdrawn", () => {
            // Arrange
            testAccount.addMoney(10);
            expected = testAccount.getTransactionList().length + 1;
            // Act 
            testAccount.withdrawMoney(10);
            // Assert
            expect(testAccount.getTransactionList().length).toBe(expected);
        })

        xit("Should make the TransactionList's final element be an object of type Debit when money is successfully withdrawn", () => {
            //! Unable to successfully write this test using spy objects
        });

        it("Should add an object with the expected date property to the end of the account's transactionList", () => {
            // Arrange
            testDate = new Date(2024, 5, 5);
            testAccount.addMoney(10);
            // Act 
            testAccount.withdrawMoney(10, testDate);
            // Assert
            finalElementIndex = testAccount.getTransactionList().length - 1;
            expect(testAccount.getTransactionList()[finalElementIndex].getDate()).toBe(testDate);
        });

        it("Should add an object with the expected amount property to the end of the account's transactionList", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act
            testAccount.withdrawMoney(4);
            // Assert
            finalElementIndex = testAccount.getTransactionList().length - 1;
            expect(testAccount.getTransactionList()[finalElementIndex].getAmount()).toBe(4);
            
        });

        it("Should add an object with the expected resultingBalance property to the end of the account's transactionList", () => {
            // Arrange
            testAccount.addMoney(10);
            // Act 
            testAccount.withdrawMoney(4);
            // Assert
            finalElementIndex = testAccount.getTransactionList().length - 1;
            expect(testAccount.getTransactionList()[finalElementIndex].getResultingBalance()).toBe(6);
        });
    })
});