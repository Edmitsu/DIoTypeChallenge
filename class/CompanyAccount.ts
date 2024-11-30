import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      if (amount > 0) {
        this.setBalance(this.getBalance() + amount);
        console.log(`Empréstimo de R$${amount.toFixed(2)} realizado com sucesso! Saldo atual: R$${this.getBalance().toFixed(2)}`);
      } else {
        console.log('O valor do empréstimo deve ser maior que zero.');
      }
    }
  }
}
