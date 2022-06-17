import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css'],
})
export class ViewProfilesComponent implements OnInit {
  //need: to update service calls
  profiles: any = {};

  constructor(
    private profileService: ProfileService,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.staffService.getAllCustomers().subscribe((res) => {
      this.profiles = res;
    });
  }

  toggleCustomer(customer: any) {
    this.staffService.toggleCustomer(customer).subscribe(
      (res) => {
        console.log('Customer toggled');
        console.log(customer);
        // this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // deleteUser(id: any){
  //   this.profileService.deleteUser(id).subscribe();
  // }
}
