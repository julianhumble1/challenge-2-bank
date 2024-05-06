import Account from "./Account.js"
import StatementPrinter from "./StatementPrinter.js";

const myAccount = new Account();

myAccount.addMoney(1000, new Date(2012, 0, 10));
myAccount.addMoney(2000, new Date(2012, 0, 13));
myAccount.withdrawMoney(500, new Date(2012, 0, 14));

console.log(StatementPrinter.printStatement(myAccount));