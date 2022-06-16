import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Beneficiary } from 'src/app/profile/model/beneficiary';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-ben',
  templateUrl: './display-ben.component.html',
  styleUrls: ['./display-ben.component.css']
})
export class DisplayBenComponent implements OnInit {
  //this one looks good, no service calls to update


  @Input("ben") public ben: any;

  @Input("profile")
  profile: CreateProfile = new CreateProfile();


  @Output('benId')
  benId: EventEmitter<string>= new EventEmitter<string>();

  constructor(private profileService: ProfileService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.ben = this.profile.ben;
    
  }

  deleteBeneficiary(id: string):void{
    this.benId.emit(id);
    window.location.reload();
  }



}
