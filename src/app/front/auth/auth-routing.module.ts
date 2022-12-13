import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FogotpasswordPage } from './fogotpassword/fogotpassword.page';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full',
  },
   {
     path: 'login',
     pathMatch: 'full',
     component:LoginPage
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
     path:'**',
     redirectTo: 'login'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
