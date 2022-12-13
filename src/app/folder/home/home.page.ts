import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NewsService } from 'src/app/shared/services/news/news.service';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from 'src/app/shared/services/user/user-language.service';
import { NewsDetailPage } from '../news/news-detail/news-detail.page';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profilIncomplet = true;
  newsTab!: any[];
  aLaUne!: any[];
  headlines!:  any[];
  dataReturned: any;
  waitingData0 = false; //Wating datas for Heads lines
  waitingData = false; //Wating other datas
  public serverUrl = environment.domainName;

  slidesOptions = {
    slidesPerView: 1.5
  };

  constructor(
    private route: Router,
    private newsService: NewsService,
    langService: LanguageService,
    translate: TranslateService,
    private toaster: ToastrService,
    public modalController: ModalController,
  ) {
    translate.use(langService.getLanguage());

  }

  ngOnInit() {
    this.newsService.getNews(1, 5)
    .then((result) => {
      this.aLaUne = result;
      this.waitingData0 = true;
    })
    .catch((error) => {
      console.error('Erreur: ', error.message);
    });


    this.newsService.getNews(2,5)
    .then((result) => {
      this.newsTab = result;
      this.waitingData = true;
    })
    .catch((error) => {
      console.error('Erreur: ', error.message);
    });
    

    this.countDown();
    if (this.profilIncomplet == true) {
      setTimeout(() => {
        this.refreshNews();
        this.profilIncomplet = false;
      }, 10000);
    }
  }
  
  refreshNews(){
    this.newsService.getNews();
  }

  newsDetails() {
    this.route.navigate(['folder/news/news-details']);
  }

  navigateToNotificationsPage() {
    this.route.navigate(['folder/notifications']);
  }
  navigateToProfilPage() {
    this.route.navigate(['folder/profile']);
  }
  navigateToNews(){
    this.route.navigate(['folder/news']);

  }

  showSuccessToaster() {
    this.toaster.info('Message Info!', 'Title Info!');
  }

  countDown() {
  }

  // Open view modal for news details
  async openModal(
    newsTitle?: string,
    newsPhotoUrl?: string,
    newsDate?: string,
    newsContent?: string,
    newsAutor?: string, 
    newsContentShort?: string) {
    const modal = await this.modalController.create({
      component: NewsDetailPage,
      componentProps: {
        'newsTitle': newsTitle,
        'newsPhotoUrl': newsPhotoUrl,
        'newsDate': newsDate,
        'newsContent': newsContent,
        'newsAutor': newsAutor,
        'newsContentShort': newsContentShort,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  getDateToTime(time: string){
    const data = time.split('T');
    return data[0];
  }

  gethoureToTime(time: string){
    const data = time.split('+');
    return data[1];
  }
}
