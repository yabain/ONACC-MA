import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/user/user-language.service';

@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.page.html',
  styleUrls: ['./previsions.page.scss'],
})
export class PrevisionsPage implements OnInit {
  title = 'Prévisions';

  constructor(private router: Router,
    langService: LanguageService,
    translate: TranslateService,
  ) {
    translate.use(langService.getLanguage()); }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }
  navigateToNotificationsPage() {
    this.router.navigate(['folder/notifications']);
  }

}
