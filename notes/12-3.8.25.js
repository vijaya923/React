import { ATM } from './12-2.8.25.js';
class ExtendedATM extends ATM {
    constructor(accountNo, pin) {
        // Used to call immediate parent class constructor.
        super(accountNo, pin);
        console.log(this.customerInfo);
    }
    deposit(amount) {
        this.customerInfo.currentBalance += amount;
        console.log('Deposit successful. current balance:', this.customerInfo.currentBalance);
    }
}
const customer1 = new ExtendedATM('98785566', 2026);
customer1.withdrawl(2000);
customer1.deposit(5000);
