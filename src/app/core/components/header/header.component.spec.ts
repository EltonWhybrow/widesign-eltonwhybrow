import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpService } from 'src/app/shared/services/http-service.service';
import { click, findEl } from 'src/app/testing-functions';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("toggles sidebar navigation open if closed", () => {
    //Arrange
    component.burgerActive = false
    // const burger = findEl(fixture, 'burger-button');
    // Act
    click(fixture, 'burger-button');
    fixture.detectChanges();
    // Assert
    expect(component.burgerActive).toBe(true)
  })


  it("close sidebar navigation already open", () => {
    //Arrange
    component.burgerActive = true
    fixture.detectChanges();
    // const burger = findEl(fixture, 'burger-button');
    // Act
    click(fixture, 'burger-button');
    fixture.detectChanges();
    // Assert
    expect(component.burgerActive).toBe(false)
  })
});
