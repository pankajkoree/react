class Accout {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return  `Deposit amount = ${this.#balance}`
    } else {
      return "Amount should be greter than zero";
    }
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > 0) {
      if (this.#balance >= withdrawAmount) {
        this.#balance -= withdrawAmount;
        return `withdraw amount = ${withdrawAmount} , remaining balance = ${this.#balance}`
      } else {
        return "Insufficient balance";
      }
    } else {
      return "Withdraw Amount should be greter than zero";
    }
  }
}

const bank = new Accout()

console.log(bank.deposit(5000));

console.log(bank.withdraw(6000));

console.log(bank.withdraw(2000));

console.log(bank.deposit(1000));