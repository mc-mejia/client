import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { Register } from '../../models/register';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //ngModel: 2 way binding
  register: CreateProfile = new CreateProfile();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.router.navigate(['/users/login']);
    });
  }
}
