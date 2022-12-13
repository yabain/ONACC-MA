import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/user/user-language.service';
import { ModalComponent } from 'src/app/shared/elements/modal/modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  submitted = false;
  settingsForm!: FormGroup;
  waitingSaveSattings = false;
  success = false;
  error = false;

title = 'Profil';
userId = '12012010';
userName = 'Utilisateur 1';
region = 'Cameroun';
city = 'Bangangté';
phone = '+237 xxx xxx xxx';
email = 'user@yabain.com';

dataReturned: any;

  constructor(
    private router: Router,
    private location: Location,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private langService: LanguageService,
    translate: TranslateService,
    ) {
      translate.use(langService.getLanguage());
      console.log('Venant du service: ', langService.getLanguage());
    }


  async openModal(title?: string, value?: any, description?: any) {
    if (value == 'userName'){
      value = this.userName ;
    } else if (value == 'region'){
      value = this.region ;
    } else if (value == 'city'){
      value = this.city ;
    } else if (value == 'phone'){
      value = this.phone ;
    } else if (value == 'email'){
      value = this.email ;
    }
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        'modalValue': value,
        'modalTitle': title,
        'modalDescription': description,
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

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      'language': new FormControl('fr', [Validators.required]),
      'theme': new FormControl('light', [Validators.required]),
    }),
    this.waitingSaveSattings = false;
    this.error = false;
    this.success = false;
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['front/login']);
  }

  navigateToNotificationsPage() {
    this.router.navigate(['folder/notifications']);
  }
  
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.settingsForm.controls;
  }

  saveSettings(){
    this.error = false;
    this.success = false;
    this.waitingSaveSattings = false;
    this.submitted = true;
    // stop here if form is invalid
    if (this.settingsForm.invalid) {
      return;
    }
    this.submitted = true;
    this.waitingSaveSattings = true;
    console.log('changement de langue: ',this.settingsForm.value.language);
    this.langService.setLanguage(this.settingsForm.value.language);
  }

  prviousPage() {
    this.location.back();
  }

}
