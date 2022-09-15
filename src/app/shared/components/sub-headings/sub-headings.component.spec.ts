import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadingsComponent } from './sub-headings.component';

describe('SubHeadingsComponent', () => {
  let component: SubHeadingsComponent;
  let fixture: ComponentFixture<SubHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
