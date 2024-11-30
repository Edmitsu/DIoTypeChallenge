import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonnusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)

const companyAccount = new CompanyAccount('DIO', 12345);
companyAccount.getLoan(1000); 
companyAccount.withdraw(500); 
companyAccount.getBalance(); 

const bonusAccount = new BonusAccount('Edmilson', 67890);
bonusAccount.deposit(100); 
bonusAccount.withdraw(50); 
bonusAccount.getBalance(); 