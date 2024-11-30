import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
    deposit(amount: number): void {
      if (this.validateStatus()) {
        if (amount > 0) {
          this.setBalance(this.getBalance() + amount + 10);
          console.log(
            `Depósito de R$${amount.toFixed(2)} realizado com bônus de R$10,00! Saldo atual: R$${this.getBalance().toFixed(2)}`
          );
        } else {
          console.log('O valor do depósito deve ser maior que zero.');
        }
      }
    }
  }
  