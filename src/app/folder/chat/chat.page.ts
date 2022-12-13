import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  title = 'Support';

  constructor(
    private router: Router,
    private location: Location) { }

  ngOnInit() {
  }

  prviousPage() {
    this.location.back();
  }
  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}
