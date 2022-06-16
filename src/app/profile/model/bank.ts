import { Transaction } from './transaction';

export class Bank {
  label: string;
  balance: number;
  bankAccountType: string;
  approve: boolean;
  transactions: Transaction[];
}
