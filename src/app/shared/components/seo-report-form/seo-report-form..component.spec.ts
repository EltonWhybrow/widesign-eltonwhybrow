import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SeoReportFormComponent } from './seo-report-form..component';
import { findEl, click, setFieldValue, expectInputText } from 'src/app/testing-functions'

describe('CallBackComponent', () => {
  let component: SeoReportFormComponent;
  let fixture: ComponentFixture<SeoReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeoReportFormComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('heading should be this', () => {
    // Arrange
    const headingMessage = fixture.debugElement.query(
      By.css('[data-testid="heading-message"]')).nativeElement.textContent.trim();
    // Assert
    expect(headingMessage).toEqual('Leave your details and i will get back to you as soon as I\'m free.');
  });

  it("call back from input are set", () => {
    const name = 'Elton';
    const number = '01234';

    // Arrange
    setFieldValue(fixture, 'name-input', name);
    setFieldValue(fixture, 'number-input', number);
    // Act
    fixture.detectChanges();
    // Click on reset button
    click(fixture, 'callback-button');
    // Re-render the Component
    fixture.detectChanges();
    // Assert
    // expectText(fixture, 'successs-message', ''newCount'');
    expectInputText(fixture, 'name-input', 'Elton');
    expectInputText(fixture, 'number-input', '01234');
  })

  it("call back form was filled in correctly and submitted", fakeAsync(() => {
    // const spy = spyOn(component, 'onSubmit').and.callThrough();
    const name = 'Elton';
    const number = '01234';
    // Arrange
    setFieldValue(fixture, 'name-input', name);
    setFieldValue(fixture, 'number-input', number);
    const submitBtn = findEl(fixture, 'callback-button').nativeElement
    // Act
    fixture.detectChanges();
    // Click on submit button
    submitBtn.click();
    // Re-render the Component
    tick(); // this is important REALLY
    fixture.detectChanges();
    // Assert
    // expect(spy).toHaveBeenCalledTimes(1);  // passes
    expect(component.disableSubmit).toBe(true);
    expect(component.sending).toBe(true);

    expectInputText(fixture, 'name-input', 'Elton');
    expectInputText(fixture, 'number-input', '01234');
  }))

  it("call back form fields failed validation", fakeAsync(() => {
    const onSubmitSpy = spyOn(component, 'onSubmit').and.callThrough();
    const name = 'Elton34';
    const number = 'NaN';
    // Arrange
    setFieldValue(fixture, 'name-input', name);
    setFieldValue(fixture, 'number-input', number);
    const submitBtn = findEl(fixture, 'callback-button').nativeElement
    // Act
    fixture.detectChanges();
    submitBtn.click();
    // Re-render the Component
    tick(); // this is important REALLY
    fixture.detectChanges();
    // Assert
    expect(onSubmitSpy).toHaveBeenCalled;
    expect(component.submitted).toBe(true);
    expect(component.contactName?.valid).toBe(false);
    expect(component.contactNumber?.valid).toBe(false);
    expect(component.resetFormStates).toHaveBeenCalled;
    flush();
  }))

});
