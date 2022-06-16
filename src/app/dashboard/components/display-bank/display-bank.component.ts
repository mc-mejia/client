import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { ProfileService } from 'src/app/profile/services/profile.service';


@Component({
  selector: 'app-display-bank',
  templateUrl: './display-bank.component.html',
  styleUrls: ['./display-bank.component.css']
})
export class DisplayBankComponent implements OnInit {
    //this one looks good, no service calls to update
    
  @Input("banks")
  banks: any[] = [];

  @Input("profile")
  profile: any;

  @Output('delete')
  bankId: EventEmitter<string> = new EventEmitter<string>();

  
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.banks = this.profile.banks;
   
  }

  deleteBank(id: string): void{
    this.bankId.emit(id);
    console.log(id);
    window.location.reload();
  }


}
