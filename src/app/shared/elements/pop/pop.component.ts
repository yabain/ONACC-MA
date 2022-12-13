import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {
  constructor(
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());}

  ngOnInit() {
  }

  save() {
  }

}
