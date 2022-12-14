import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { IEmail } from '../../models/emails-interface';
import { EmailService } from '../../services/email-service.service';

@Component({
  selector: 'app-seo-report-form.',
  templateUrl: './seo-report-form.component.html',
  styleUrls: ['./seo-report-form.component.scss']
})
export class SeoReportFormComponent implements OnInit {

  readonly NUMS_REGEX = '^[0-9-\\s]*$';
  readonly NAMES_REGEX = '^[a-zA-Z-.\'\\s]+$';

  public callbackCredentials!: IEmail;

  public submitted: boolean | undefined; // true if form has attempted to be submitted (for validation)
  public disableSubmit: boolean | undefined; // set to true during login attempt (stops resending form)
  public formError: boolean = false;
  public formSuccess: boolean = false;
  public sending: boolean | undefined;

  public contactName: UntypedFormControl | undefined;
  public contactNumber: UntypedFormControl | undefined;
  public callBackForm!: UntypedFormGroup;
  // public timer$: any;

  constructor(private fb: UntypedFormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.submitted = false;
    this.disableSubmit = false;
    this.initForm();
  }

  initForm() {
    this.contactName = new UntypedFormControl('', [Validators.required, Validators.pattern(this.NAMES_REGEX)]);
    this.contactNumber = new UntypedFormControl('', [Validators.required, Validators.pattern(this.NUMS_REGEX)]);

    this.callBackForm = this.fb.group({
      contactName: this.contactName,
      contactNumber: this.contactNumber,
    });
  }

  onSubmit() {
    if (this.callBackForm.valid && !this.disableSubmit) {
      // console.warn(this.callBackForm?.value);

      this.disableSubmit = true;
      this.sending = true;

      this.callbackCredentials = {
        contactName: this.contactName?.value.trim(),
        contactNumber: this.contactNumber?.value.trim(),
      };

      this.emailService.sendEmail('/forms/callback', this.callbackCredentials).subscribe(
        (data: any) => {
          const res: any = data;
          /* istanbul ignore next */
          // console.log(`This is sending email from ${this.callbackCredentials.contactName}`);
          // console.log(res);

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
          // console.log('complete');
        }
      );
    } else {
      this.submitted = true; // shows validation issues
      this.resetFormStates(10);
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

  // ngAfterViewInit(): void {
  // Ten second timer to display feedback in errors
  // this.timer$ = timer(0, 1000).pipe(
  //   scan((acc) => --acc, 10),
  //   takeWhile((x) => x >= 0)
  // );
}
