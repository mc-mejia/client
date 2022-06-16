import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/component/layout/landing/landing.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UsersModule } from './users/users.module';
//module level routing + any component routing from the core/common  modules
//path:will hold the routing name for the module /component
//loadchildren: will load the module dynamiaclly
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule), //to load user module dynamically  ===>()Class.forName() in java
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), //to load user module dynamically  ===>()Class.forName() in java
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule), //to load user module dynamically  ===>()Class.forName() in java
      canActivate: [AuthGuard],
    },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule), //to load user module dynamically  ===>()Class.forName() in java
      canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
