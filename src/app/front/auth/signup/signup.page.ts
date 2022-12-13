import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/shared/services/translation/translation.service';
import { WebStorage } from 'src/app/shared/services/storage/web.storage';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LocationService } from 'src/app/shared/services/location/location.service';
import { User } from 'src/app/shared/entities/user/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  submitted = false;
  registerForm!: FormGroup;
  error = false;
  errorMsg = '';
  success = false;
  waitingRegistration = false;
  region: any = [];
  city: any = [];

  lang: string;
  en: boolean = false;
  fr: boolean = false;
  textDir: String = 'ltr';

  public subscription: Subscription;
  public CustomControler: any;

  constructor(
    private storage: WebStorage,
    private formBuilder: FormBuilder,
    private location: LocationService,
    private authService: AuthService,
    private translate: TranslateService,
    public translationService: TranslationService,
    private router: Router
  ) {
    //this is to determine the text direction depending on the selected language
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.textDir = event.lang == 'fr' ? 'rtl' : 'ltr';
    });
    this.lang = this.translationService.initLanguage();

    if (this.lang == 'en') {
      this.en = true;
      this.fr = false;
    } else if (this.lang == 'fr') {
      this.en = false;
      this.fr = true;
    } else {
      this.lang = 'en';
      this.en = true;
      this.fr = false;
    }

    this.subscription = this.storage.Createaccountvalue.subscribe((data) => {
      this.CustomControler = data;
    });
  }

  ngOnInit(): void {
    this.region = this.location.region();
    this.storage.Checkuser();
    this.translate.use(this.translationService.getLanguage());
    this.registerForm = this.formBuilder.group({
      'nom': new FormControl('', [Validators.required]),
      'user_agree': new FormControl(false, [Validators.requiredTrue]),
      'prenom': new FormControl(''),
      'region': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      // 'phone': new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^6[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$'), Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      // 'password2': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
    });

    this.waitingRegistration = false;
    this.error = false;
    this.success = false;
  }

  onSelect(region: any) {
    this.city = this.location.city()
      .filter(e =>
        e.id == region.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.registerForm.controls;
  }

  navigateToSigninPage() {
    // this.router.navigate(['front/login']);
  }

  submit() {
    this.error = false;
    this.success = false;
    this.waitingRegistration = false;
    this.submitted = true;

    if (this.registerForm.value.region === '1') {
      this.registerForm.value.region = 'Adamaoua'
    } else if (this.registerForm.value.region === '2') {
      this.registerForm.value.region = 'Centre'
    } else if (this.registerForm.value.region === '3') {
      this.registerForm.value.region = 'Est'
    } else if (this.registerForm.value.region === '4') {
      this.registerForm.value.region = 'Guinée équatoriale'
    } else if (this.registerForm.value.region === '5') {
      this.registerForm.value.region = 'Extreme-nord'
    } else if (this.registerForm.value.region === '6') {
      this.registerForm.value.region = 'Littoral'
    } else if (this.registerForm.value.region === '7') {
      this.registerForm.value.region = 'Nord-ouest'
    } else if (this.registerForm.value.region === '8') {
      this.registerForm.value.region = 'Ouest'
    } else if (this.registerForm.value.region === '9') {
      this.registerForm.value.region = 'Sud'
    } else if (this.registerForm.value.region === '10') {
      this.registerForm.value.region = 'sud-ouest'
    }

    console.log('Reg form avant setform:: ', this.registerForm.value);
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
    this.waitingRegistration = true;

    let user = new User();
    user.hydrate(this.registerForm.value);
    // this.navigateToSigninPage();

    this.authService.createAccount(this.registerForm.value)
    .then((result) => {
      this.submitted = false;
      this.waitingRegistration = false;
    })
    .catch((error) => {
      console.error('Erreur: ', error.message);
      this.waitingRegistration = false;
      this.errorMsg = error.message;
      this.error = true;
      this.submitted = false;
    });

    this.success = true;
    // setTimeout(() => {
    //   this.waitingRegistration = false;
    //   console.log("redirection vers login")
      // this.router.navigate(['front/login']);
    //   this.success = false;
    // }, 3000);

  }

  navigateTologinPage() {
    this.router.navigate(['front/login']);
  }
  navigateToPrivacyPage() {
    this.router.navigate(['privacy']);
  }
}
