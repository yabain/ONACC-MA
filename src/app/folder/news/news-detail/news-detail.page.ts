import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/user/user-language.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  title = '';
  
  newsPhotoUrl: string;
  newsTitle: string;
  newsDate: string;
  newsContent: string;
  newsAutor: string;
  newsContentShort: string;
  
  constructor(
    private router: Router,
    private modalController: ModalController,
    private navParams: NavParams,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());
    }

  ngOnInit() {
    console.table(this.navParams);
    this.newsPhotoUrl = 'http://dev.tilakat.com:8091' + this.navParams.data.newsPhotoUrl;
    console.log('pUrl: ', this.newsPhotoUrl)
    this.newsTitle = this.navParams.data.newsTitle;
    this.newsDate = this.navParams.data.newsDate;
    this.newsContent = this.navParams.data.newsContent;
    this.newsAutor = this.navParams.data.newsAutor;
    this.newsContentShort = this.navParams.data.newsContentShort;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

  navigateToNotificationsPage() {
    this.router.navigate(['folder/notifications']);
  }


}
