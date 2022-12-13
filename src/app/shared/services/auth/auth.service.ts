import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user/user.service';
import { async } from '@angular/core/testing';
import { User } from '../../entities/user/user';
import { ApiService } from '../api/api.service';
import { WebStorage } from '../storage/web.storage';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static currentUser: User = new User();

  userData!: User;
  isLoggedIn = false;
  authStatus!: boolean;
  params: any;
  registResult = false;


  constructor(
    private router: Router,
    private api: ApiService,
    private toastr: ToastrService,
    private user: UserService,
    private webStorage: WebStorage
  ) {

  }


  /*
   *  Get local user profile data.
   */
  getLocalStorageUser() {
    // this.userData = JSON.parse(localStorage.getItem('user-data') ? localStorage.getItem('user-data') : null);
    this.userData = JSON.parse(localStorage.getItem('user-data') || '');
    if (this.userData) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  /*
   * resetPassword is used to reset your password.
   */
  resetPassword(email: string) {
    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/json',
      };

      const params = {
        'email': email,
      };

      this.api.post('user/auth/reset-password-link', params, headers)
        .subscribe((response: any) => {
          // this.router.navigate(['/login']);
          if (response) {
            console.log('Success00: ', response);
            // this.router.navigate(['login']);
            this.toastr.success('A password reset link has been sent to your email.', 'Success');
            resolve(response);
            return 0;
          }
        }, (error: any) => {
          console.error('Erreur00: ', error.message);
          if (error.status == 500) {
            this.toastr.error("Error server, 'Error'");
          } else if (error.status == 400) {
            this.toastr.error("expected field was not submitted or does not have the correct type", 'Error');
          } else if (error.status == 404) {
            this.toastr.error("Unknown email address.", 'Error');
          } else {
            this.toastr.error(error.message, 'Error');

          }
          reject(error);
        });
    });

  }

  /*
   * resetPassword is used to reset your password.
   */
  reNewPassword(password: string, token: string) {
    return new Promise((resolve, reject) => {

      const header = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      };

      const params = {
        'password': password,
      };

      this.api.put('user/auth/reset-password', params, header)
        .subscribe((response: any) => {
          if (response) {
            if (response.statusCode == 200) {
              this.toastr.success('Your password has been updated successfully !', 'Success');
              this.router.navigate(['/login']);
              resolve(response);
              return 0;
            }
            reject(response);
            return 0;
          }
          reject(response);
          return 0;
        }, (error: any) => {
          if (error.status == 401) {
            this.toastr.error("Your reset request email has expired.", 'Error');

          }
          else if (error.status == 400) {
            this.toastr.error("Expected field was not submitted or does not have the correct type.", 'Error');

          }
          else if (error.status == 500) {
            this.toastr.error("Internal Server Error.", 'Error');

          } else {
            this.toastr.error(error, 'Error');
          }
          reject(error);
        });
    });

  }

  /*
   * logOut function is used to sign out .
   */
  logOut() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.toastr.success('Votre session a été déconnecté!', 'Success');
    this.router.navigate(["/login-form"]);
  }

  /**
   *  Create an account
   *
   */
  createAccount(user: User): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

      const body = {
        'nom': user.nom,
        'prenom': user.prenom,
        'password': user.password,
        'email': user.email,
        // 'photo': 'http://cc.tilakat.com/api' + user.photo,
        'photo': user.photo,
        // 'region': user.region,
        // 'location': user.location,
        // 'city': user.city,
        'roles': ['test'],
        'telephone': 'test',
        'username': 'test',
        'est_abonne': 'test',
        'est_membre': 'test',
        'fonction': 'test',
        'presention': 'test',
        'facebook': 'test',
        'twitter': 'test',
        'linkedin': 'test',
        'youtube': 'test',
        'google_plus': 'test',
        'instagram': 'test',
        'flickr': 'test',
        'website': 'test',
        'type_abonne_id': 'test',
      };

      this.api.post('users', body, headers)
        .subscribe((response: any) => {
          console.log('avant le if ', response);
          if (response) {
            console.log('reg : 1 ', response);
            this.toastr.success("Compte créé.", 'Success');
            this.registResult = true;
            this.router.navigate(['folder']);
            resolve(response);
            return 0;
          }
        }), error => {
          console.log('Error message2: ', JSON.stringify(error));
          if (error.status == 400) {
            this.registResult = false;
            this.toastr.error("<b>Erreur 400</b> Invalid input: " + error.detail, 'Error');
            // console.log('Error message: ', error.message);
            reject(error);
          } else if (error.status == 404) {
            this.registResult = false;
            this.toastr.error("<b>Erreur 404</b> Not Found: " + error.detail, 'Error');
            // console.log('Error message: ', error.message);
            reject(error);
          } else if (error.status == 422) {
            this.registResult = false;
            this.toastr.error('<b>Erreur 422</b> Unprocessable entity: ' + error.detail, 'Error');
            // console.log('Error message: ', error.message);
            reject(error);
          } else if (error.status == 500) {
            this.registResult = false;
            this.toastr.error('Cet adresse email est déjà utilisé.', 'Utilisateur existant');
            // console.log('Error message: ', error.message);
            reject(error);
          }
          else {
            console.log('Erreur', error);
            this.registResult = false;
            this.toastr.error(error, 'Unknown error.');
            // console.log('Error message: ', error.message);
            reject(error);
          }
        };
    });
  }


  /**
   *  Get authentification status
   */
  getAuthStatus(authStatus: any) {
    if (authStatus == 'true') {
      this.authStatus = true;
    } else {
      this.authStatus = false;
    }

  }

  // Login into your account
  authLogin(userIdentifiants: User): Promise<any> {
    let email = userIdentifiants.email;
    let password = userIdentifiants.password;

    const param = {
      'email': email,
      'password': password,
    };
    const header = {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    return new Promise((resolve, reject) => {
      this.api.post('user/auth/login', param, header)
        .subscribe(response => {
          const profilePicture = response.data.user.profilePicture;
          const words = profilePicture.split('yabain.com/');
          response.data.user.profilePicture = words[1];

          this.webStorage.Login(userIdentifiants);
          this.api.setAccessToken(response.data.access_token);
          // console.log('User infos: ', response.data.user);
          this.user.setUserInformations(response.data.user)
          this.router.navigate(['folder']);
          resolve(response);
        }, error => {
          if (error.status == 500) {
            this.registResult = false;
            this.toastr.error("Error server", 'Error');
            reject(error);
          } else if (error.error.statusCode == 403) {
            this.registResult = false;
            this.toastr.error("Email address not verified. Check your email.", 'Error');
            reject(error);
          } else if (error.error.statusCode == 401) {
            this.registResult = false;
            this.toastr.error("Incorrect email or password! Please verify your information.", 'Error');
            reject(error);
          } else {
            this.toastr.error(error.message, 'Error');
            reject(error);

          }

        });
    });
  }

  // verify Email
  verifyEmail(token?: string) {
    const param = {
    };
    const header = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
    if (token) {
      return new Promise((resolve, reject) => {
        this.api.post('email/confirm', param, header)
          .subscribe(response => {
            this.toastr.success('Your email has been verified.', 'Success');
            this.router.navigateByUrl('/login');
            resolve(response);
          }, error => {
            console.log('erreur: ', error)

            if (error.status == 401) {
              this.toastr.error("Your verification email has expired.", 'Error');

            }
            else if (error.status == 404) {
              this.toastr.error("User not found.");

            }
            else if (error.status == 403) {
              this.toastr.error("The email has already been confirmed.", 'Error');

            }
            else if (error.status == 500) {
              this.toastr.error("Internal Server Error.", 'Error');

            } else {
              this.toastr.error(error, 'Error');
            }
            reject(error);
          });
      })
    }
  }

  /**
   *  Get the user informations
   */
  authUserInformations(): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Authorization': 'Bearer ' + this.api.getAccessToken(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };


      this.api.get('requester/profil', headers)
        .subscribe((reponse: any) => {
          if (reponse) {
            resolve(reponse);
            this.user.setUserInformations(reponse);
          }

        }, (error: any) => {

          if (error) {
            this.toastr.success(error.message, 'Success');
            reject(error);
          }
        });
    });

  }
}
