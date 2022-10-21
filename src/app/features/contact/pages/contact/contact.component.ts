import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { IEmail } from 'src/app/shared/models/emails-interface';
import { CanonicalService } from 'src/app/shared/services/canonical.service';
import { EmailService } from 'src/app/shared/services/email-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {


  readonly NUMS_REGEX = '^[0-9-\\s]*$';
  readonly NAMES_REGEX = '^[a-zA-Z-.\'\\s]+$';

  public contactCredentials!: IEmail;

  public submitted: boolean | undefined; // true if form has attempted to be submitted for validation)
  public disableSubmit: boolean | undefined; // set to true during login attempt (stops resending form)
  public formError: boolean = false;
  public formSuccess: boolean = false;
  public sending: boolean | undefined;

  public contactName: UntypedFormControl | undefined;
  public contactNumber: UntypedFormControl | undefined;
  public contactEmail: UntypedFormControl | undefined;
  public contactMessage: UntypedFormControl | undefined;
  public contactForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private emailService: EmailService, private canonicalService: CanonicalService) { }

  // scroll into view
  private getItemInView(event: any) {
    let anchor = event.target.parentNode.id;
    console.log('something hit!!!', event.target.id)
    const scrollToElement = window.document.getElementById(anchor);
    setTimeout(() => {
      scrollToElement?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 400);
  }

  ngOnInit(): void {
    this.submitted = false;
    this.disableSubmit = false;
    this.initForm();
    this.createLinkForCanonicalURL();
  }

  ngOnDestroy(): void {
    this.canonicalService.destroyLinkForCanonicalURL();
  }


  createLinkForCanonicalURL() {
    this.canonicalService.createLinkForCanonicalURL();
  }


  initForm() {
    this.contactName = new UntypedFormControl('', [Validators.required, Validators.pattern(this.NAMES_REGEX)]);
    this.contactNumber = new UntypedFormControl('', [Validators.required, Validators.pattern(this.NUMS_REGEX)]);
    this.contactEmail = new UntypedFormControl('', [Validators.required, Validators.email]);
    this.contactMessage = new UntypedFormControl('', [Validators.required, Validators.pattern(this.NAMES_REGEX)]);

    this.contactForm = this.fb.group({
      contactName: this.contactName,
      contactNumber: this.contactNumber,
      contactEmail: this.contactEmail,
      contactMessage: this.contactMessage
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.disableSubmit) {
      // console.warn(this.contactForm?.value);

      this.disableSubmit = true;
      this.sending = true;

      this.contactCredentials = {
        contactName: this.contactName?.value.trim(),
        contactNumber: this.contactNumber?.value.trim(),
        contactEmail: this.contactEmail?.value.trim(),
        contactMessage: this.contactMessage?.value.trim(),
      };

      this.emailService.sendEmail('/forms/contact-us', this.contactCredentials).subscribe(
        (data: any) => {
          const res: any = data;
          /* istanbul ignore next */
          // console.log(`This is sending email from ${this.contactCredentials.contactName}`);

          this.contactForm.reset();

          this.formSuccess = true;
          this.formError = false;
          this.submitted = false;
          this.disableSubmit = false;
          this.sending = false;
          this.resetFormStates(10);
        },
        (err: any) => {
          console.log('There has been a error sending email >>>>>>>>>>>>>>>>>', err);
          this.contactForm.reset();
          this.formSuccess = false;
          this.formError = true;
          this.submitted = false;
          this.disableSubmit = false;
          this.sending = false;
          this.getItemInView(window.event)
          this.resetFormStates(10);
        }, () => {
          /* istanbul ignore next */
          // console.log('complete');
        }
      );
    } else {
      this.getItemInView(window.event)
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


}
