import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailPage } from './news-detail/news-detail.page';
import { NewsListPage } from './news-list/news-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news-list',
    pathMatch: 'full'
  },
  {
    path: 'news-list',
    pathMatch: 'full',
    component: NewsListPage,
  },
  {
    path: 'news-details',
    pathMatch: 'full',
    component: NewsDetailPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NewsDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule { }
