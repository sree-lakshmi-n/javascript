class Accounts {
  #movement = [];
  #pin;
  constructor(custName, IFSC, balance, pin) {
    this.custName = custName;
    this.IFSC = IFSC;
    this.balance = balance;
    this.#pin = pin;
  }
  deposit(amount) {
    this.balance += amount;
    this.#movement.push(amount);
  }
  withdraw(amount) {
    this.balance += amount;
    this.#movement.push(-amount);
  }
  #checkBalance(amount) {
    return this.balance;
  }
  requestLoan(amount) {
    if (this.#checkBalance(amount)) {
      this.deposit(amount);
      console.log("Loan approved");
      console.log(this.#movement);
      return this;
    }
  }
}
const jane = new Accounts("Jane Doe", 000001001234, 10000, 1234);
console.log(jane.requestLoan(23).requestLoan(180));
