import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //the first things that get loaded once a user logs in
  //need: service method calls to be updated to call getCustomerAccountById (backend method)
  //      instead of getProfile (mongo backend) and the proper delete methods
  constructor(private router: Router, private profileService: ProfileService) { }

  profile : any = {};
  error: any = {};

  //we want this rest call done instantly
  //1. object created 2. constructor called 3.ngOnInit
  ngOnInit(): void {
    // this.profileService.getProfile().subscribe(
    //   (response)=>{
    //     this.profile = response;
    //   },
    //   (err) =>{
    //     console.log(JSON.stringify(err));
    //     this.error = err.error;
    //     this.profile = null;
    //   }
    //   );

  }

  deleteExperience(expId : string): void{
    // this.profileService.deleteExperience(expId).subscribe(
    //   (res) =>{
    //     console.log(JSON.stringify(res));
    //   },
    //   (err) => {
    //     console.log(JSON.stringify(err));
    //     this.profile = null;
    //   }
    // );
  }

  deleteEducation(eduId : string): void{
    // this.profileService.deleteEducation(eduId).subscribe(
    //   (res) =>{
    //     console.log(JSON.stringify(res));
    //   },
    //   (err) => {
    //     console.log(JSON.stringify(err));
    //     this.profile = null;
    //   }
    // );
  }

  deleteBankAccount(bankId: string): void{
    this.profileService.deleteBank(bankId).subscribe(
      (res) =>{
      
      },
      (err) => {
        this.profile = null;
      }
    )
  }

  deleteBeneficiary(benId: string): void{
    this.profileService.deleteBeneficiary(benId).subscribe(
      (res) => {
        console.log("Deleted " + JSON.stringify(res));
      },
      (err) => {
        this.profile = null;
      }
    )
  }

}
