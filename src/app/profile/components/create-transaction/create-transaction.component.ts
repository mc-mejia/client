import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateProfile } from '../../model/createprofile';
import { Transaction } from '../../model/transaction';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  profile: any;
  bankAccount: any = {};
  transaction: Transaction = new Transaction();
  error: any = {};

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) =>{
        this.profile = res;
      },
      (err) => {}
    );
  }

  createTransactionSubmit(){
    console.log(JSON.stringify(this.transaction));
    this.transaction.date = JSON.stringify(new Date().getDate());
    this.profileService.createTransaction(this.transaction).subscribe(
      (res) => {
        this.updateUserBanks(this.transaction);
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
        this.router.navigate(['/dashboard']);
      },
      (err) => {}
    );
  }

}
