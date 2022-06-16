import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from '../../model/createprofile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  //this component should be good to go
  //need: tests
  
  profile: CreateProfile = new CreateProfile();
  error: any = {};

  constructor(private profileService: ProfileService, private router: Router) { }
  
  ngOnInit(): void {
    
  }

  createProfileSubmit() {
    console.log(JSON.stringify(this.profile));
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        if(err.error !== null) this.error = err.error;
        else this.error = {};
      }
    )
  }

}
