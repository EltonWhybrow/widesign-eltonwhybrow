import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { click, expectInputText, expectText, findEl, setFieldValue } from 'src/app/testing-functions';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("login form have valid inputs and submits", () => {
    // Arrange
    const username = 'Jeff';
    const password = 'ReadyNow1&@£';
    const loginBtn = findEl(fixture, 'login-button').nativeElement
    // Act
    setFieldValue(fixture, 'username-input', username);
    setFieldValue(fixture, 'password-input', password);
    fixture.detectChanges();
    loginBtn.click();
    // TODO: Below does not trigger on detect changes ??
    //click(fixture, 'login-button');
    fixture.detectChanges();
    // Assert
    expectInputText(fixture, 'username-input', 'Jeff');
    expectInputText(fixture, 'password-input', 'ReadyNow1&@£');
  })

  it("show username validation error on incorrect input", () => {
    // Arrange
    const username = 'Jeff@£';
    const password = 'ReadyNow1&@£';
    const loginBtn = findEl(fixture, 'login-button').nativeElement
    // Act
    setFieldValue(fixture, 'username-input', username);
    setFieldValue(fixture, 'password-input', password);
    fixture.detectChanges();
    loginBtn.click();
    // TODO: Below does not trigger on detect changes ??
    //click(fixture, 'login-button');
    fixture.detectChanges();
    // Assert
    expect(findEl(fixture, 'username-error')).toBeTruthy();
  })

  it("show password validation error on incorrect input", () => {
    // Arrange
    const username = 'Jeff';
    // No number in password
    const password = 'ReadyNow&@£';
    const loginBtn = findEl(fixture, 'login-button').nativeElement
    // Act
    setFieldValue(fixture, 'username-input', username);
    setFieldValue(fixture, 'password-input', password);
    fixture.detectChanges();
    loginBtn.click();
    // TODO: Below does not trigger on detect changes ??
    //click(fixture, 'login-button');
    fixture.detectChanges();
    // Assert
    expect(findEl(fixture, 'password-error')).toBeTruthy();
  })

});
