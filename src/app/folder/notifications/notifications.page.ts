import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationService } from 'src/app/shared/services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  title = 'Notifications';

  constructor(
    private router: Router,
    private notification: NotificationService) {
    }

  ngOnInit() {
    // this.notification.showNotification('top', 'center', 'danger', 'fa fa-close-circle', '\<b>Sorry !\</b>\<br>');
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
