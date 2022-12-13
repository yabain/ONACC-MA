import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title: string;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  prviousPage() {
    this.location.back();
  }
  navigateToHomePage() {
    this.router.navigateByUrl('folder/home');
  }
  navigateToNotificationsPage() {
    this.router.navigateByUrl('folder/notifications');
  }
}
