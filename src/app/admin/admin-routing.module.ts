import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';
import { ViewBanksComponent } from './components/view-banks/view-banks.component';
import { ViewProfilesComponent } from './components/view-profiles/view-profiles.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ 
  {
    path:'add',
    component: AddStaffComponent
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'staff',
    component: ViewStaffComponent
  },
  {
    path:'banks',
    component: ViewBanksComponent
  },
  {
    path:'profiles',
    component: ViewProfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
