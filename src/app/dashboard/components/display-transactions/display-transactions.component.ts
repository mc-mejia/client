import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { Transaction } from 'src/app/profile/model/transaction';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-display-transactions',
  templateUrl: './display-transactions.component.html',
  styleUrls: ['./display-transactions.component.css'],
})
export class DisplayTransactionsComponent implements OnInit {
  //Done - Maria

  //transfer methods in this component were for testing purposes only
  //need: to clean this file up and remove methods that already exist
  //      in create-transaction component

  id: any = {};
  @Input('profile')
  profile: CreateProfile;

  @Input('transactions')
  transactions: any[] = [];

  error: any = {};
  toDisplay: boolean = false;

  constructor(
    private profileService: ProfileService,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    //this.loadTransactions();
    // this.staffService.getCustomerById(this.id).subscribe(
    //   (res) => {
    //     this.profile = res;
    //     this.transactions = this.profile.transactions;
    //   },
    //   (err) =>{
    //     if(err.error != null) this.error = err.error;
    //     else this.error = {};
    //   }
    // )
  }

  toggleDisplay() {
    this.toDisplay = !this.toDisplay;
  }

  loadTransactions(): void {
    console.log(JSON.stringify(this.profile.accounts));
    this.profile.accounts.forEach((account) => {
      account.transactions.forEach((transaction) => {
        this.transactions.push(transaction);
      });
    });
  }

  // createTransactionSubmit(){
  //   console.log(JSON.stringify(this.transaction));
  //   this.transaction.date = JSON.stringify(new Date().getDate());
  //   this.profileService.createTransaction(this.transaction).subscribe(
  //     (res) => {
  //       this.updateUserBanks(this.transaction);
  //       this.trans.emit(JSON.stringify(this.transaction));
  //     },
  // (err) =>{
  //   if(err.error != null) this.error = err.error;
  //   else this.error = {};
  // }
  //   );

  // }

  // updateUserBanks(transaction: any){
  //   var diff: number = +transaction.amount;
  //   var c = this.profile.banks.find((i: { _id: string; }) => i._id === transaction.bankId);
  //   console.log("bank:: " + c);
  //   console.log(c);

  //   this.bankAccount.balance = "" + (c.balance - diff);
  //   this.bankAccount._id = c._id;
  //   this.bankAccount.label = c.label;
  //   this.bankAccount.type = c.type;

  //   this.profileService.createBank(this.bankAccount).subscribe(
  //     (res) =>{
  //       console.log(JSON.stringify(this.bankAccount));
  //       this.profileService.deleteBank(c._id).subscribe();
  //       //window.location.reload();
  //     },
  //     (err) => {}
  //   );
  // }
}
