export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit(amount: number): void {
    if(this.validateStatus()){
      if (amount > 0) {
        this.balance += amount;
        console.log(`Depósito de R$${amount.toFixed(2)} realizado com sucesso! Saldo atual: R$${this.balance.toFixed(2)}`);
      } else {
        console.log('O valor do depósito deve ser maior que zero.');
      }
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        if (this.balance >= amount) {
          this.balance -= amount;
          console.log(`Saque de R$${amount.toFixed(2)} realizado com sucesso! Saldo atual: R$${this.balance.toFixed(2)}`);
        } else {
          console.log('Saldo insuficiente para realizar o saque.');
        }
      } else {
        console.log('O valor do saque deve ser maior que zero.');
      }
    }
  }

  getBalance = (): number => {
    console.log(this.balance)
    return this.balance;
  }

  protected setBalance(value: number): void {
    this.balance = value; 
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
