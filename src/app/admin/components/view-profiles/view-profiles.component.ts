import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {

  profiles : any = {};

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileService.getAll().subscribe(
      (res) => {
        this.profiles = res;
      }
    )
  }

  deleteUser(id: any){
    this.profileService.deleteUser(id).subscribe();
  }

}
