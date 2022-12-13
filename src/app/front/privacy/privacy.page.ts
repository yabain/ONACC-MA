import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController, NavParams } from '@ionic/angular';
// import { LanguageService } from 'src/app/shared/services/user/language/language.service';
// import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-privacy',
  templateUrl: 'privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage {

  constructor(
    private router: Router,
    private location: Location
    // public navCtrl: NavController,
    // public navParams: NavParams,
    // langService: LanguageService,
    // translate: TranslateService,
   ) {
    //  translate.use(langService.getLanguage());
     console.log("privacy Page")
  }
  navigateToRegisterPage() {
    this.router.navigate(['front/signup']);
  }
  
  prviousPage() {
    this.location.back();
  }
}
