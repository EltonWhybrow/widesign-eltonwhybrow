import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAreaComponent } from './client-area.component';

describe('ClientAreaComponent', () => {
  let component: ClientAreaComponent;
  let fixture: ComponentFixture<ClientAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientAreaComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
