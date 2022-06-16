import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../../model/education';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  education: Education = new Education();
  error : any ={};
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {

  }

  createEducationSubmit(){
    // this.profileService.createEducation(this.education).subscribe(
    //   (res) => {
    //     this.router.navigate(['/dashboard']);
    //   },
    //   (err) => {
    //     this.error = err.error;
    //   }
    // )
  }
}
