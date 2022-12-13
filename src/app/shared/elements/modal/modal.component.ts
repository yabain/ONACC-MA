import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/user/user-language.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  title!: string;


  modalTitle!: string;
  modalValue!: string;
  modalDescription!: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());
    }

  ngOnInit() {
    console.table(this.navParams);
    this.modalValue = this.navParams.data.modalValue;
    this.modalTitle = this.navParams.data.modalTitle;
    this.modalDescription = this.navParams.data.modalDescription;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  save(){
  }

}
