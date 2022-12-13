import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputValidatorService } from 'src/app/shared/vaildators/input-validator/input-validator.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/user/user-language.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/entities/user/user';
import { UserProfilService } from 'src/app/shared/services/user/user-profil.service';
import { UserPreferenceService } from 'src/app/shared/services/user/user-preference.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted = false;
  loginForm!: FormGroup;
  waitingLogin = false;
  error = false;
  errorMsg = '';

  constructor(
    private router: Router,
    private formLog: FormBuilder,
    private preferencesService: UserPreferenceService,
    private userProfile: UserProfilService,
    private sanitezeService: InputValidatorService,
    private authService: AuthService,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());
     console.log('Venant du service: ', langService.getLanguage());

    if (this.authService.isLoggedIn == true) {
      this.router.navigate(['folder']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formLog.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.waitingLogin = false;
    this.error = false;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.loginForm.controls;
  }

  navigateToForgotPage() {
    this.router.navigate(['front/fogotpassword']);
  }

  submit() {
    this.waitingLogin = false;
    this.submitted = true;
    this.error = false;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // this.notification.showNotification('top', 'center', 'success', 'pe-7s-close-circle', '\<b>Welcome !\</b>\<br>Message de welcome');
    this.waitingLogin = true;
    this.submitted = true;
    let user = new User();
    user.hydrate(this.loginForm.value);
    user.email = this.sanitezeService.emailSanitize(this.loginForm.value.email);
    // this.router.navigate(['folder']);

    this.authService.authLogin(user)
      .then((result) => {
        localStorage.setItem('isAuth', '1');
        this.userProfile.currentUser.getValue();
        this.router.navigate(['folder']);
        this.submitted = false;
        this.waitingLogin = false;
      })
      .catch((error) => {
        localStorage.setItem('isAuth', '0');
        console.error('Erreur: ', error.message);
        this.waitingLogin = false;
        this.errorMsg = error.message;
        this.error = true;
        this.submitted = false;


        this.router.navigate(['folder']);
      });
  }

  navigateToSignupPage() {
    this.router.navigate(['front/signup']);
  }

  navigateToHomePage() {
    this.waitingLogin = true;
    this.submitted = true;
    setTimeout(() => {
      this.waitingLogin = false;
      this.submitted = false;
      this.router.navigate(['folder']);
    }, 3000);
  }

}
