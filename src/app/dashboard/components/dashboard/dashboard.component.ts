import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { Transaction } from 'src/app/profile/model/transaction';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //DONE Maria

  //the first things that get loaded once a user logs in
  //need: service method calls to be updated to call getCustomerAccountById (backend method)
  //      instead of getProfile (mongo backend) and the proper delete methods
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private staffService: StaffService
  ) {}

  id: any = {};
  profile: CreateProfile = new CreateProfile();
  error: any = {};
  transactions: Transaction[] = [];

  //we want this rest call done instantly
  //1. object created 2. constructor called 3.ngOnInit
  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.staffService.getCustomerById(this.id).subscribe(
      (response) => {
        this.profile = response as CreateProfile;
        this.loadTransactions();
        console.log('transactions loaded::');
        console.log(this.transactions);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
        this.profile = new CreateProfile();
      }
    );
    console.log(JSON.stringify(this.profile));
  }

  deleteBeneficiary(benId: string): void {
    this.profileService.deleteBeneficiary(benId).subscribe(
      (res) => {
        console.log('Deleted ' + JSON.stringify(res));
      },
      (err) => {
        this.profile = new CreateProfile();
      }
    );
  }

  loadTransactions(): void {
    console.log(JSON.stringify(this.profile.accounts));
    this.profile.accounts.forEach((account) => {
      account.transactions.forEach((transaction) => {
        this.transactions.push(transaction);
      });
    });
  }
}
