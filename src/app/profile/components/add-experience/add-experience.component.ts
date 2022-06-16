import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from '../../model/experience';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  experience: Experience = new Experience();
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  createExperienceSubmit(){
    // this.profileService.createExperience(this.experience).subscribe(
    //   (res) => {
    //     this.router.navigate(['/dashboard']);
    //   },
    //   (err) => {
    //     this.error = err.error;
    //   }
    // )
  }

}
