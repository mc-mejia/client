import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/profile/model/transaction';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-transactions',
  templateUrl: './display-transactions.component.html',
  styleUrls: ['./display-transactions.component.css']
})
export class DisplayTransactionsComponent implements OnInit {
  //transfer methods in this component were for testing purposes only
  //need: to clean this file up and remove methods that already exist
  //      in create-transaction component
  bankAccount: any = {};
  @Input("profile")
  profile: any;

  transaction: Transaction = new Transaction();

  @Input("transactions")
  transactions: any[] = [];

  @Output('bankId')
  bankId: EventEmitter<string> = new EventEmitter<string>();

  @Output('trans')
  trans: EventEmitter<string> = new EventEmitter<string>();

  error: any = {};
  toDisplay:boolean = false;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    
  }

  toggleDisplay(){
    this.toDisplay = !this.toDisplay;
  }

  createTransactionSubmit(){
    console.log(JSON.stringify(this.transaction));
    this.transaction.date = JSON.stringify(new Date().getDate());
    this.profileService.createTransaction(this.transaction).subscribe(
      (res) => {
        this.updateUserBanks(this.transaction);
        this.trans.emit(JSON.stringify(this.transaction));
      },
      (err) =>{
        if(err.error != null) this.error = err.error;
        else this.error = {};
      }
    );
    
  }

  updateUserBanks(transaction: any){
    var diff: number = +transaction.amount;
    var c = this.profile.banks.find((i: { _id: string; }) => i._id === transaction.bankId);
    console.log("bank:: " + c);
    console.log(c);

    this.bankAccount.balance = "" + (c.balance - diff);
    this.bankAccount._id = c._id;
    this.bankAccount.label = c.label;
    this.bankAccount.type = c.type;

    this.profileService.createBank(this.bankAccount).subscribe(
      (res) =>{
        console.log(JSON.stringify(this.bankAccount));
        this.profileService.deleteBank(c._id).subscribe();
        //window.location.reload();
      },
      (err) => {}
    );
  }

}
