import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about/about.page';
import { FogotpasswordPage } from './auth/fogotpassword/fogotpassword.page';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { MainscreenPage } from './mainscreen/mainscreen.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    pathMatch: 'full',
    component: MainscreenPage
  },
   {
     path: 'login',
     pathMatch: 'full',
     component: LoginPage
   },
   {
     path: 'signup',
     pathMatch: 'full',
     component: SignupPage
   },
   {
     path: 'fogotpassword',
     pathMatch: 'full',
     component: FogotpasswordPage
   },
   {
     path: 'about',
     pathMatch: 'full',
     component: AboutPage
   },
   {
     path:'**',
     redirectTo: 'main'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
