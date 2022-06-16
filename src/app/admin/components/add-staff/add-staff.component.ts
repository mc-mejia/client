import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/users/models/register';
import { Staff } from 'src/app/users/models/staff';
import { AuthService } from 'src/app/users/services/auth.service';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  staff: Staff = new Staff();
  constructor(private authService: AuthService, private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
  }

  staffRegisterSubmit(){
    this.staffService.registerStaff(this.staff).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
    this.router.navigate(['/admin/staff']);
  }
  
}
