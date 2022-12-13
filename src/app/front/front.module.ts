import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from './auth/login/login.page';
import { FogotpasswordPage } from './auth/fogotpassword/fogotpassword.page';
import { SignupPage } from './auth/signup/signup.page';
import { ProgressIndeterminateModule } from '../shared/elements/progress-indeterminate/progress-indeterminate.module';
import { MainscreenPage } from './mainscreen/mainscreen.page';
import { ModalComponent } from '../shared/elements/modal/modal.component';
import { AboutPage } from './about/about.page';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
    FogotpasswordPage,
    AboutPage,
    MainscreenPage,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FrontRoutingModule,
    IonicModule,
    HttpClientModule,
    ProgressIndeterminateModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      // defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FrontModule { }
