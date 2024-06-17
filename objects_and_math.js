function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}


Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited $${amount}. New balance is $${this.balance}.`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
}


Account.prototype.withdraw = function(amount) {
    if (amount > 0) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Successfully withdrew $${amount}. New balance is $${this.balance}.`);
        } else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
}


Account.prototype.calculateInterest = function(rate, years) {
    if (rate > 0 && years > 0) {
        let initialBalance = this.balance;
        let compoundInterest = initialBalance * Math.pow((1 + rate / 100), years);
        let interestEarned = compoundInterest - initialBalance;
        console.log(`Interest earned over ${years} years at ${rate}% rate: $${interestEarned.toFixed(2)}.`);
    } else {
        console.log("Invalid input for rate or years. Both must be greater than zero.");
    }
}


let account1 = new Account(3479, 30000, "Gerardo Ramirez");

console.log(account1); 

account1.deposit(6000);

account1.withdraw(3600);

account1.calculateInterest(5, 3); 
