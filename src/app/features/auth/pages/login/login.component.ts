import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ILogin, ILoginStatus } from 'src/app/shared/models/login-interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly NUMS_REGEX = '^[0-9-\\s]*$';
  readonly NAMES_REGEX = '^[a-zA-Z-.\'\\s]+$';
  // password between 6-16 character inlcuding 1 number and 1 special characterxxx
  readonly PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$£!%*?&])[A-Za-z\d$@$!%*?&].{8,}$';

  public unauthorisedMessage: string = '';
  public submitted: boolean = false; // true if form has attempted to be submitted (for validation)
  public disableSubmit: boolean = false; // set to true during login on button attempt (stops resending form)
  public formError: boolean = false;
  public formSuccess: boolean = false;

  public loginCredentials!: ILogin;

  public username: UntypedFormControl | undefined;
  public password: UntypedFormControl | undefined;
  public loginForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private authService: AuthService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.username = new UntypedFormControl('', [Validators.required, Validators.pattern(this.NAMES_REGEX)]);
    this.password = new UntypedFormControl('', [Validators.required, Validators.pattern(this.PASSWORD_REGEX)]);

    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  public adminLogin() {

    if (this.loginForm.valid && !this.disableSubmit) {

      this.loginCredentials = {
        username: this.username?.value.trim(),
        password: this.password?.value.trim(),
      }

      this.authService.login('/users/login', this.loginCredentials)
        .subscribe(
          (data: ILoginStatus) => {
            const res = data;
            // console.log('Data from node server', res);
            if (res.success) {
              // TODO: localStorage.setItem('tempToken', res.accessToken);

              // set token to cookie
              // moment js to expire cookie
              const expiresIn = moment().add(24, 'h').toDate()
              // console.log('cookie expires at: ', expiresIn);
              this.cookieService.set('wsat', res.accessToken, { expires: expiresIn, path: '/' });

              // set nickname + localstoreage
              this.authService.nickname = res.username;
              localStorage.setItem('nickname', res.username);

              // set to logged in
              this.authService.setLoggedIn(true);
              // redirect on success
              this.router.navigate(['/playground/dashboard']);
            } else {
              console.log('Error login method >>');
              throw new Error
            }
          },
          (err: HttpErrorResponse) => {
            console.error('error caught in trying to login', err.error.type)
            if (err.error.type === "error") {
              this.unauthorisedMessage = 'Seems the node server is down, the webmaster should really look at this.'
            }
            this.unauthorisedMessage = err.error.message; // TODO:handle no message!!!!!!
          },
          () => {
            // this.loginForm.reset();
            // console.log('complete');
          }
        )
    }

    this.submitted = true;
    this.resetFormStates(10);
  }


  // Reset form states
  resetFormStates(time: number) {
    setTimeout(
      () => {
        this.formSuccess = false;
        this.formError = false;
        this.submitted = false;
      }, time * 1000);
  }

}
