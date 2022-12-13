import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProgressIndeterminateModule } from '../shared/elements/progress-indeterminate/progress-indeterminate.module';
import { ChatPage } from './chat/chat.page';
import { PagesPage } from './pages/pages.page';
import { NotificationsPage } from './notifications/notifications.page';
import { HomePage } from './home/home.page';
import { AlertsPage } from './alerts/alerts.page';
import { ProfilePage } from './profile/profile.page';
import { PrevisionsPage } from './previsions/previsions.page';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    HttpClientModule,
    ProgressIndeterminateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    FolderPage,
    ChatPage,
    PagesPage,
    NotificationsPage,
    HomePage,
    AlertsPage,
    PrevisionsPage,
    ProfilePage
  ]
})

export class FolderPageModule {}
