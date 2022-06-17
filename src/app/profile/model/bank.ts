import { Transaction } from './transaction';

export class Bank {
  accountNumber: number;
  label: string;
  balance: number;
  bankAccountType: string;
  approve: boolean;
  transactions: Transaction[];
}
