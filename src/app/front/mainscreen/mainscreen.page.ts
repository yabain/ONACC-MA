import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LanguageService } from 'src/app/shared/services/user/user-language.service';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
     langService: LanguageService,
     translate: TranslateService,
    ) {
      translate.use(langService.getLanguage());
      console.log('Venant du service: ', langService.getLanguage());
      // langService.initLanguage();
    if ( this.authService.isLoggedIn == true){
      this.router.navigate(['folder']);
    }
  }

  ngOnInit() {
  }

  loginPage() {
    this.router.navigate(['front/login']);
    // this.route.navigate(['folder/Trash']);
  }

  aboutPage() {
    this.router.navigate(['front/about']);
  }


}
