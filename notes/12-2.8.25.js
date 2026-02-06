const customers = [
    {
        id: 1,
        name: "Jyothi",
        accountNo: '98785566',
        pin: 2026,
        currentBalance: 9000,
        transactions: []
    }, {
        id: 2,
        name: "Anu",
        accountNo: '123456',
        pin: 1234,
        currentBalance: 5000,
        transactions: []
    }
];
export class ATM {
    constructor(accountNo, pin) {
        this.validateAccountNoAndPin(accountNo, pin);
    }
    validateAccountNoAndPin(accountNo, pin) {
        const filteredCustomer = customers.find((customer) => customer.accountNo === accountNo && customer.pin === pin);
        if (filteredCustomer) {
            console.log('validated account details successfully');
            this.customerInfo = filteredCustomer;
        }
        else {
            console.log('incorrect account no or pin');
        }
    }
    getCurrentBalace() {
        console.log('Current Balance:', this.customerInfo.currentBalance);
    }
    withdrawl(amount) {
        if (amount <= this.customerInfo.currentBalance) {
            this.customerInfo.currentBalance -= amount;
            this.customerInfo.transactions.push({ type: 'withdrawl', amount: amount });
            console.log('withdrawl successful. New balance:', this.customerInfo.currentBalance);
        }
        else {
            console.log('insufficient funds to withdraw the amount');
        }
    }
}
const customer1 = new ATM('98785566', 2026);
customer1.getCurrentBalace();
customer1.withdrawl(5000);
