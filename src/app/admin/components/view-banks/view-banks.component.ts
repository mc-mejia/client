import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-view-banks',
  templateUrl: './view-banks.component.html',
  styleUrls: ['./view-banks.component.css']
})
export class ViewBanksComponent implements OnInit {

  banks: any = {}

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileService.getBanks().subscribe(
      (res) =>{
        console.log(JSON.stringify(res));
        this.banks = res;
        console.log(JSON.stringify(this.banks));
      },
      (err) =>{
        console.log(err.console.error());
        
      }
    );
  }

  toggleBank(id: any){

  }

}
