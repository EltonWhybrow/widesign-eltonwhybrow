import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin, ILoginStatus } from 'src/app/shared/models/login-interface';
import { AuthService } from 'src/app/shared/services/auth.service';

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

  public username: FormControl | undefined;
  public password: FormControl | undefined;
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.username = new FormControl('', [Validators.required, Validators.pattern(this.NAMES_REGEX)]);
    this.password = new FormControl('', [Validators.required, Validators.pattern(this.PASSWORD_REGEX)]);

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

      this.authService.userLogin('/login', this.loginCredentials)
        .subscribe(
          (data: any) => {
            const res: ILoginStatus = data;
            // console.log('Data from node server', res);
            if (res.success) {
              // redirect on success
              this.authService.setLoggedIn(true);
              this.router.navigate(['/playground']);
            }
          },
          (err: HttpErrorResponse) => {
            this.unauthorisedMessage = err.error.message;

          }, () => {
            this.loginForm.reset();
            console.log('complete');
          }
        )
    }

    this.submitted = true;
  }

}
