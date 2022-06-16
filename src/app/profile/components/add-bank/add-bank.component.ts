import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../../model/bank';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
    //new service method requires two parameters now
  // need: customerid and bank request body
  
  bank: any = {};
  error : any = {};
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  createBankSubmit(){
    console.log(this.bank);
    this.profileService.createBank(this.bank).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (err) =>{
        this.error = err.error;
      }
    )
  }

}
