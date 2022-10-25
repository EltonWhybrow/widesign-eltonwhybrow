import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { click, expectInputText, findEl, setFieldValue } from 'src/app/testing-functions';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it("valid form field values and button is enabled", () => {
    // Arrange
    const contactName = 'Someone';
    const contactEmail = 'someone@somewhere.com'
    const contactMessage = 'Some message'
    const contactNumber = '01234'
    // Act
    setFieldValue(fixture, 'contact-name-input', contactName);
    setFieldValue(fixture, 'contact-email-input', contactEmail);
    setFieldValue(fixture, 'contact-message-textarea', contactMessage);
    setFieldValue(fixture, 'contact-number-input', contactNumber);
    fixture.detectChanges();

    click(fixture, 'contact-button')
    fixture.detectChanges();
    //Assert
    const submitButton = findEl(fixture, 'contact-button').nativeElement;
    expectInputText(fixture, 'contact-name-input', 'Someone');
    expectInputText(fixture, 'contact-number-input', '01234');
    expect(submitButton).not.toHaveClass('is-disabled');
    expect(component.disableSubmit).toBe(false);
  })

  it("invalid/incomplete form field values and button is disabled", () => {
    // Arrange
    const contactName = 'Someone111';
    const contactEmail = 'someone@somewhere.com'
    const contactMessage = 'Some message'
    const contactNumber = '01234XXXX'
    const submitBtn = findEl(fixture, 'contact-button').nativeElement;
    // Act
    setFieldValue(fixture, 'contact-name-input', contactName);
    fixture.detectChanges();

    // click(fixture, 'contact-button')
    submitBtn.click();
    fixture.detectChanges();

    //Assert
    const submitButton = findEl(fixture, 'contact-button').nativeElement;
    expect(submitButton).toHaveClass('is-disabled');
    expect(findEl(fixture, 'contact-name-errors')).toBeTruthy();
    expect(findEl(fixture, 'contact-email-errors')).toBeTruthy();
    expect(findEl(fixture, 'contact-message-errors')).toBeTruthy();
    expect(findEl(fixture, 'contact-number-errors')).toBeTruthy();
  })
});
