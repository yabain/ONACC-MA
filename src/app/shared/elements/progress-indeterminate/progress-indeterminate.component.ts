import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/user/user-language.service';

@Component({
  selector: 'app-progress-indeterminate',
  templateUrl: './progress-indeterminate.component.html',
  styleUrls: ['./progress-indeterminate.component.css']
})
export class ProgressIndeterminateComponent implements OnInit {
  @Input() message: String = '';
  constructor(
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage()); }

  ngOnInit(): void {
  }

}
