import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLandingComponent } from './footer-landing.component';

describe('FooterLandingComponent', () => {
  let component: FooterLandingComponent;
  let fixture: ComponentFixture<FooterLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLandingComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
