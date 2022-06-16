import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from '../profile/profile-routing.module';
import { ProfileService } from '../profile/services/profile.service';
import { httpInterceptors } from '../shared/interceptors';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';
import { ProfileModule } from '../profile/profile.module';
import { AuthService } from '../users/services/auth.service';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewBanksComponent } from './components/view-banks/view-banks.component';
import { ViewProfilesComponent } from './components/view-profiles/view-profiles.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AddStaffComponent,
    ViewStaffComponent,
    ViewBanksComponent,
    ViewProfilesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, HttpClientModule,FormsModule, AdminRoutingModule,
    ProfileRoutingModule
  ],
  providers: [
    AuthService, ProfileService, httpInterceptors
  ]
})
export class AdminModule { }
