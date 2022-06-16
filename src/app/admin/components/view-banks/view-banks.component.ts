import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { StaffService } from 'src/app/users/services/staff.service';
@Component({
  selector: 'app-view-banks',
  templateUrl: './view-banks.component.html',
  styleUrls: ['./view-banks.component.css'],
})
export class ViewBanksComponent implements OnInit {
  //need: to update service calls
  banks: any = {};

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.staffService.getUnapprovedBankAccounts().subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.banks = res;
        console.log(JSON.stringify(this.banks));
      },
      (err) => {
        console.log(err.console.error());
      }
    );
  }

  toggleBank(bankAccount: any) {
    this.staffService.approveBankAccount(bankAccount).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.banks = res;
        console.log(JSON.stringify(this.banks));
      },
      (err) => {
        console.log(err.console.error());
      }
    );
  }
}
