import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api/api.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  newsResult = false;

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
  ) {
    // this.getNews();
  }

  //static News for initial tests front visibilitie
  news = [
    {
      "@context": "string",
      "@id": "string",
      "@type": "string",
      "id": "string",
      "newsTitle": "News 1",
      "newsContent": "L’Etat du Cameroun, qui en a pris conscience, s’est engagé aux côtés de la communauté internationale, afin de jouer sa partition. Mais, face à cette croisade planétaire, les insuffisances de financements se sont avérées.",
      "newsContentShort": "string",
      "newsDate": "20/10/22",
      "photo": "string",
      "comment": "string",
      "category": "string"
    },
    {
      "@context": "string",
      "@id": "string",
      "@type": "string",
      "id": "string",
      "newsTitle": "Titre News 2",
      "newsContent": "L’Etat du Cameroun, qui en a pris conscience, s’est engagé aux côtés de la communauté internationale, afin de jouer sa partition. Mais, face à cette croisade planétaire, les insuffisances de financements se sont avérées.",
      "newsContentShort": "string",
      "newsDate": "20/10/22",
      "photo": "string",
      "comment": "string",
      "category": "string"
    },
    {
      "@context": "string",
      "@id": "string",
      "@type": "string",
      "id": "string",
      "newsTitle": "Titre News 3",
      "newsContent": "L’Etat du Cameroun, qui en a pris conscience, s’est engagé aux côtés de la communauté internationale, afin de jouer sa partition. Mais, face à cette croisade planétaire, les insuffisances de financements se sont avérées.",
      "newsContentShort": "string",
      "newsDate": "20/10/22",
      "photo": "string",
      "comment": "string",
      "category": "string"
    },
  ];

  // Get News to server
  getNews(pageNumber?: number, itemsPerPage?: number): Promise<any> {
    console.log('page nomber: ', pageNumber);
    if (!pageNumber) {
      pageNumber = 1;
    }
    if (!itemsPerPage) {
      itemsPerPage = 5;
    }
    console.log('page nomber second: ', pageNumber);

    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/ld+json',
        'Accept': 'application/json',
      };

      const body = {
        'page': pageNumber,
        'itemsPerPage': itemsPerPage,
      };

      this.api.get('news', headers, body)
        .subscribe(data => {
          // this.toastr.success("Les données ont été récupérées du serveur.", 'Success');
          // console.log(data);
          resolve(data);
          return 0;

        }), (error: any) =>  {
          this.toastr.error('Can t get news', '500 Error');
          console.log(error);
          reject(error);
        };
    });
  }

  // Get news by ID
  getNewsById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/ld+json',
        'Accept': 'application/json',
      };

      const body = {
        'id': id,
      };

      this.api.get('news', headers, body)
        .subscribe(data => {
          // this.toastr.success("Les données ont été récupérées du serveur.", 'Success');
          // console.log('Status du get: ', data);
          resolve(data);
          return 0;
        }), (error => {
          this.toastr.error('Can t get news by Id', 'Error');
          console.log(error);
          reject(error);
        });
    });

  }

  // Get news by Title
  getNewsByTitle(newsTitle: string): Promise<any> {
    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/ld+json',
        'Accept': 'application/json',
      };

      const body = {
        'newsTitle': newsTitle,
      };

      this.api.get('news', headers, body)
        .subscribe(data => {
          // this.toastr.success("Les données ont été récupérées du serveur.", 'Success');
          // console.log('Status du get: ', data);
          resolve(data);
          return 0;
        }), (error => {
          // this.toastr.error('Can t get news by Title', '500 Error');
          // console.log(error);
          reject(error);
        });
    });

  }

}
