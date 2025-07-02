/* 
1. Create a bank account class: Write a BankAccount class with the following properties: 
    -accountNumber: string
    -blance: number (private) The class should have methods
    
    deposit(amount: number): void, (to add to blance)
    withdraw(amount: number): void (to subtract from blance)
    getBalance(): number (to return the current balance)
*/

class BankAccount {
    private balance: number;

    constructor(public accountNumber: string, initialBalance: number) {
        this.balance = initialBalance
    }

    deposit(amount: number): void{
        this.balance += amount 
    }

    witdrow(amount: number) : void {
        if (amount > this.balance) {
            throw new Error('Insufficient balance')
        }
        this.balance -= amount;
    }

    getBalance():number {
        return this.balance
    }
}


const myAccount = new BankAccount('abd1234gh', 1000);
// console.log(myAccount.getBalance());
myAccount.deposit(5000);
// console.log(myAccount.getBalance());
myAccount.witdrow(2600);
// console.log(myAccount.getBalance());



/* 
2. Create a Employee class with inheritans Defile an employee class with proparty name and selary.Create a subClass Manager that add a deparment peoparty. Both classes should have a GetDetails method that returns a string with the employee's details
*/


class Employee {
    readonly username: string = 'hi12';
    constructor(public name: string , public salary: number){}

    getDetails():string{
        return `Employee ${this.name}, Salary : ${this.salary}`
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number,public deparment: string){
        super(name , salary);
    }

    getDetails(): string {
        return `Menager ${this.name} Salary : ${this.salary} , Deparment: ${this.deparment} `
    }
}


const emp = new Employee('Umayer', 15000);
const mgr = new Manager('Xyz', 60000,'IT');

// console.log(emp.getDetails());
console.log(mgr.getDetails());
