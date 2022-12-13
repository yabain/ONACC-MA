import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared/services/news/news.service';
import { Location } from '@angular/common';
import { NewsDetailPage } from '../news-detail/news-detail.page';
import { ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  title = 'Actualité';
  newsTab!: any[];
  waitingData = true;
  dataReturned: any;
  pageNumber = 1;
  prevDisabeled = true;

  constructor(private router: Router,
    private newsService: NewsService,
    private location: Location,
    private toaster: ToastrService,
    public modalController: ModalController,
  ) {
    if (this.pageNumber > 1) {
      this.prevDisabeled = false;
    } else if (this.pageNumber <= 1) {
      this.pageNumber = 1;
      this.prevDisabeled = true;
    } else {
      this.prevDisabeled = true;
    }
  }

  ngOnInit() {
    if (this.pageNumber > 1) {
      this.prevDisabeled = false;
    } else if (this.pageNumber <= 1) {
      this.pageNumber = 1;
      this.prevDisabeled = true;
    } else {
      this.prevDisabeled = true;
    }

    this.waitingData = true;
    this.newsService.getNews(1, 10)
      .then((result) => {
        this.newsTab = result;
        this.waitingData = false;
      })
      .catch((error) => {
        console.error('Erreur: ', error.message);
      });
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }
  prviousPage() {
    this.location.back();
  }
  navigateToNotificationsPage() {
    this.router.navigate(['folder/notifications']);
  }
  refreshNews() {
    this.newsService.getNews();
  }


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
      }
    });

    return await modal.present();
  }

  nextPage() {
    console.log('nextPage: ',);
    this.waitingData = true;
    this.pageNumber += 1;
    this.newsService.getNews(this.pageNumber, 15)
      .then((result) => {
        this.prevDisabeled = false;
        this.newsTab = result;
        this.waitingData = false;
      })
      .catch((error) => {
        console.error('Erreur: ', error.message);
      });
  }

  prevPage() {
    this.pageNumber -= 1;
    if (this.pageNumber == 1) {
      this.prevDisabeled = true;
    }
    if (this.pageNumber < 1) {
      this.pageNumber = 1;
      this.prevDisabeled = true;
      return 0;
    }
    this.waitingData = true;
    this.newsService.getNews(this.pageNumber, 15)
      .then((result) => {
        this.newsTab = result;
        this.waitingData = false;
      })
      .catch((error) => {
        console.error('Erreur: ', error.message);
      });
  }
}
