import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListPage } from './news/news-list/news-list.page';
import { AlertsPage } from './alerts/alerts.page';

import { FolderPage } from './folder.page';
import { HomePage } from './home/home.page';
import { NotificationsPage } from './notifications/notifications.page';
import { PrevisionsPage } from './previsions/previsions.page';
import { ProfilePage } from './profile/profile.page';
import { ChatPage } from './chat/chat.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: ChatPage,
  },
  {
    path: 'chat',
    pathMatch: 'full',
    component: ChatPage,
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfilePage,
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomePage,
  },
  {
    path: 'previsions',
    pathMatch: 'full',
    component: PrevisionsPage,
  },
  // {
  //   path: 'news-list',
  //   pathMatch: 'full',
  //   component: NewsListPage,
  // },
  {
    path: 'alerts',
    pathMatch: 'full',
    component: AlertsPage,
  },
  {
    path: 'notifications',
    pathMatch: 'full',
    component: NotificationsPage,
  },
  {
    path: 'news',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./news/news.module').then( m => m.NewsModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
