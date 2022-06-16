import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/users/models/staff';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

  staffList: any[] = [];
  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.staffService.getStaff().subscribe(
      (res) => {
        this.staffList = res;
        console.log(JSON.stringify(this.staffList));
      }
    );
  }

  deleteStaff(id: any){
    this.staffService.deleteStaff(id).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.ngOnInit();
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    )
  }

}
