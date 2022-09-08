import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IEmail } from '../../models/emails-interface';
import { EmailService } from '../../services/email-service.service';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss']
})
export class CallBackComponent implements OnInit {

  readonly NUMS_REGEX = '^[0-9-\\s]*$';
  readonly NAMES_REGEX = '^[a-zA-Z-.\'\\s]+$';

  public callbackCredentials!: IEmail;

  public submitted: boolean | undefined; // true if form has attempted to be submitted (for validation)
  public disableSubmit: boolean | undefined; // set to true during login attempt (stops resending form)
  public formError: boolean = false;
  public formSuccess: boolean = false;
  public sending: boolean | undefined;

  public name: FormControl | undefined;
  public contactNumber: FormControl | undefined;
  public callBackForm!: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.submitted = false;
    this.disableSubmit = false;
    this.initForm();
  }

  initForm() {
    this.name = new FormControl('', [Validators.required, Validators.pattern(this.NAMES_REGEX)]);
    this.contactNumber = new FormControl('', [Validators.required, Validators.pattern(this.NUMS_REGEX)]);

    this.callBackForm = this.fb.group({
      name: this.name,
      contactNumber: this.contactNumber,
    });
  }

  onSubmit() {
    if (this.callBackForm.valid && !this.disableSubmit) {
      console.warn(this.callBackForm?.value);

      this.disableSubmit = true;
      this.sending = true;

      this.callbackCredentials = {
        name: this.name?.value.trim(),
        contactNumber: this.contactNumber?.value.trim(),
      };

      this.emailService.sendEmail('/forms/callback', this.callbackCredentials).subscribe(
        (data: any) => {
          const res: any = data;
          /* istanbul ignore next */
          console.log(`This is sending email from ${this.callbackCredentials.name}`);

          this.callBackForm.reset();

          this.formSuccess = true;
          this.formError = false;
          this.submitted = false;
          this.disableSubmit = false;
          this.sending = false;
          this.resetFormStates(10);
        },
        (err: any) => {
          console.log('There has been a error sending email >>>>>>>>>>>>>>>>>', err);
          this.callBackForm.reset();
          this.formSuccess = false;
          this.formError = true;
          this.submitted = false;
          this.disableSubmit = false;
          this.sending = false;
          this.resetFormStates(10);
        }, () => {
          /* istanbul ignore next */
          console.log('complete');
        }
      );
    } else {
      this.submitted = true; // shows validation issues
    }
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
