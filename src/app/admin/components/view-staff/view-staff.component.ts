import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/users/models/staff';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  //done, Maria

  staffList: any[] = [];
  error: any = {};
  constructor(private staffService: StaffService, private router: Router) {}

  ngOnInit(): void {
    this.staffService.getStaff().subscribe((res) => {
      this.staffList = res;
      console.log(JSON.stringify(this.staffList));
    });
  }

  toggleStaff(staff: any) {
    //TODO
    this.staffService.toggleStaff(staff).subscribe(
      (res) => {
        console.log('Staff toggled');
        // this.ngOnInit();
      },
      (err) => {
        this.error = err;
        console.log(JSON.stringify(this.error));
      }
    );
  }
}
