import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public menuCtrl: MenuController,
    ) { 
      this.toggleMenu();
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  navigateToProfilePage() {
    this.router.navigate(['folder/profile']);
  }
  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }
  navigateToLoginPage()
  {
    this.router.navigate(['auth/login']);
  }
  navigateToChatPage()
  {
    this.router.navigate(['folder/chat']);
  }
  navigateToActualitiesPage()
  {
    this.router.navigate(['folder/actualities']);
  }
  navigateToAlertsPage()
  {
    this.router.navigate(['folder/alerts']);
  }
  navigateToNotificationsPage()
  {
    this.router.navigate(['folder/notifications']);
  }
  navigateToHistoryPage()
  {
    this.router.navigate(['folder/history']);
  }
  navigateToAboutPage()
  {
    this.router.navigate(['folder/about']);
  }
  navigateToPrevisionsPage()
  {
    this.router.navigate(['folder/previsions']);
  }
}
