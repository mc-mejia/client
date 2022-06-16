import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from '../../model/beneficiary';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
 //Done - Maria
 
  //new service method requires two parameters now
  // need: customerid and beneficiary request body
  beneficiary: any = {};
  id: any = {};
  error: any = {};
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
  }

  createBeneficiarySubmit(){
    this.profileService.createBeneficiary(this.beneficiary, this.id).subscribe(
      (res) => {  
        this.router.navigate(['/dashboard']);
        console.log("Created the beneficiary" + this.beneficiary);
      },
      (err) => {
        this.error = err.error;
      }
    )
  }

}
