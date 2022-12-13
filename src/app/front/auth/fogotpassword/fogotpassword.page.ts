import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputValidatorService } from 'src/app/shared/vaildators/input-validator/input-validator.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.page.html',
  styleUrls: ['./fogotpassword.page.scss'],
})
export class FogotpasswordPage implements OnInit {
  waitingReset = false;
  submitted = false;
  error = false;
  success = false;
  resetForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formLog: FormBuilder,
    private sanitezeService: InputValidatorService,) {
    if (this.authService.isLoggedIn == true) {
      this.router.navigate(['folder']);
    }

  }

  ngOnInit(): void {
    this.resetForm = this.formLog.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.waitingReset = false;
    this.error = false;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.resetForm.controls;
  }

  navigateToSigninPage() {
    this.router.navigate(['front/login']);
  }
  submit() {
    this.waitingReset = false;
    this.submitted = true;
    this.error = false;
    this.success = false;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    this.waitingReset = true;
    this.resetForm.value.email = this.sanitezeService.emailSanitize(this.resetForm.value.email);

    this.error = true;
    this.success = true;
    setTimeout(() => {
      this.waitingReset = false;
      this.navigateToSigninPage();
      this.success = false;
    this.error = false;
    }, 4000);

  }
}
