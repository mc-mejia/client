import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-display-bank',
  templateUrl: './display-bank.component.html',
  styleUrls: ['./display-bank.component.css'],
})
export class DisplayBankComponent implements OnInit {
  //this one looks good, no service calls to update

  banks: any = {};

  @Input('profile')
  profile: any;

  @Output('delete')
  bankId: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private staffService: StaffService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.banks);
    this.banks = this.profile.accounts;
    console.log(this.banks);
    // let id: string = localStorage.getItem('id') as string;
    // this.profileService.getBanks(id).subscribe(
    //   (res) => {
    //     this.banks = res;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  deleteBank(id: string): void {
    this.bankId.emit(id);
    console.log(id);
    window.location.reload();
  }
}
