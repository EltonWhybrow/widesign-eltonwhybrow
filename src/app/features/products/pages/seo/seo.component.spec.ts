import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoComponent } from './seo.component';

describe('SeoComponent', () => {
  let component: SeoComponent;
  let fixture: ComponentFixture<SeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeoComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
