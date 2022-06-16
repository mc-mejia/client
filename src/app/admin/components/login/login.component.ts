import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/users/models/staff';
import { StaffService } from 'src/app/users/services/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  staff: Staff = new Staff();
  error: any = {};

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
  }
  loginSubmit() {
    console.log("Login object" + JSON.stringify(this.staff));
    this.staffService.loginStaff(this.staff).subscribe(
      (res) => {
        console.log(res.token);
        localStorage.setItem('id', res._id);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin/staff']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }

}
