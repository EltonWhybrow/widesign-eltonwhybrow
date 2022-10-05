import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRevisionComponent } from './interview-revision.component';

describe('InterviewRevisionComponent', () => {
  let component: InterviewRevisionComponent;
  let fixture: ComponentFixture<InterviewRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewRevisionComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
